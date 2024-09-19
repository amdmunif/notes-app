import "./components/index.js";
import formValidation from "./form-validation.js";
import Swal, * as Sweetalert2 from "sweetalert2";
import AOS from "aos";
import "../styles/style.css";
import "aos/dist/aos.css";
import { addNotes, getAllNotes, deleteNotes } from "./data/api.js";

const RENDER_EVENT = "RENDER_EVENT";

const formInput = document.getElementById("add-form");

formInput.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.body.appendChild(document.createElement("loading-overlay"));

  // Ambil data dari Form
  const title = formInput.elements.title.value;
  const body = formInput.elements.body.value;

  // Tambahkan data ke NOTES
  const newNotes = {
    title,
    body,
  };

  try {
    await addNotes(newNotes);
    Sweetalert2.fire({
      title: "Catatan berhasil ditambahkan",
      icon: "success",
      confirmButtonText: "OK",
    });
  } finally {
    setTimeout(() => {
      document.querySelector("loading-overlay").remove();
      formInput.reset();
    }, 500);
  }

  // Render data
  document.dispatchEvent(new Event(RENDER_EVENT));
});

function deleteNotesHandler(notesId) {
  Sweetalert2.fire({
    title: "Anda yakin ingin menghapus data ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Batal",
    cancelButtonColor: "red",
    confirmButtonColor: "blue",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteNotes(notesId);
      Sweetalert2.fire({
        title: "Catatan berhasil di hapus!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        position: "top-end",
      });
      document.dispatchEvent(new Event(RENDER_EVENT));
    }
  });
}

function createNotesElement(notesItem, index) {
  const notesElement = document.createElement("notes-item");

  notesElement.setAttribute("id", notesItem.id);
  notesElement.setAttribute("index", index);
  notesElement.setAttribute("title", notesItem.title);
  notesElement.setAttribute("body", notesItem.body);
  notesElement.setAttribute("createdAt", notesItem.createdAt);

  notesElement.addEventListener("notes-delete", (event) => {
    deleteNotesHandler(notesItem.id);
  });

  return notesElement;
}

document.addEventListener(RENDER_EVENT, async function () {
  const notesList = document.getElementById("notes-lists");

  // TODO : panggil function getAllNotes
  const loadingIndicator = document.createElement("loading-indicator");
  notesList.innerHTML = "";
  notesList.parentElement.insertBefore(loadingIndicator, notesList);
  try {
    const NOTES = await getAllNotes();
    let index = 1;
    for (const notesItem of NOTES) {
      notesList.append(createNotesElement(notesItem, index));
      index++;
    }
  } finally {
    setTimeout(() => {
      loadingIndicator.setAttribute("display", "none");
    }, 1000);
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  AOS.init();

  document.dispatchEvent(new Event(RENDER_EVENT));
});

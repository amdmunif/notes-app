import "./components/index.js";

import formValidation from "./form-validation.js";

import Swal, * as Sweetalert2 from 'sweetalert2';
import AOS from 'aos';

import '../styles/style.css';
import 'aos/dist/aos.css';

import { addNotes, getAllNotes, deleteNotes } from "./data/api.js";


const RENDER_EVENT = "RENDER_EVENT";

const formInput = document.getElementById("add-form");

formInput.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Ambil data dari Form
    const title = formInput.elements.title.value
    const body = formInput.elements.body.value

    // Tambahkan data ke NOTES
    const newNotes = {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
    };

    await addNotes(newNotes);
    
    Sweetalert2.fire({
        title: "Catatan berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
    });
    
    // Render data
    document.dispatchEvent(new Event(RENDER_EVENT))

    // Reset form
    formInput.reset()
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
};

function createNotesElement(notesItem, index) {
    const notesElement = document.createElement("notes-item");
    
    notesElement.setAttribute('id', notesItem.id)
    notesElement.setAttribute('index', index)
    notesElement.setAttribute('title', notesItem.title)
    notesElement.setAttribute('body', notesItem.body)
    notesElement.setAttribute('createdAt', notesItem.createdAt)

    notesElement.addEventListener("notes-delete", (event) => {
        deleteNotesHandler(notesId.id);
    });

    return notesElement;
};

document.addEventListener(RENDER_EVENT, async function () {
    const notesList = document.getElementById("notes-lists");

    // Panggil fungsi getAllNotes
    const NOTES = await getAllNotes()

    // clearing todo list item
    notesList.innerHTML = "";

    let index = 1
    for (const notesItem of NOTES) {
        notesList.append(createNotesElement(notesItem, index));
        index++;
    }

});

document.addEventListener("DOMContentLoaded", async () => {
    AOS.init();
    
    document.dispatchEvent(new Event(RENDER_EVENT));
});
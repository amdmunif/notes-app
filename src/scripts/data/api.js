const BASE_URL = "https://notes-api.dicoding.dev/v2";

function getAllNotes() {
  return fetch(`${BASE_URL}/notes`)
    .then((response) => response.json())
    .then((data) => data.data);
}

async function addNotes({ title, body }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  };
  const response = await fetch(`${BASE_URL}/notes`, options);
  const responseJSON = await response.json();
  return responseJSON;
}

async function deleteNotes(id) {
  return fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.notes);
}

export { getAllNotes, addNotes, deleteNotes };

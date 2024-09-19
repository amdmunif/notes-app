import formValidation from "../form-validation";

class NotesForm extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await this.render();
    formValidation(document.getElementById(this.getAttribute("form-id")));
  }

  async render() {
    this.innerHTML = `<form 
            id=${this.getAttribute("form-id")} 
            class="card-body c-card" 
            data-aos="fade-down"
        >  
            <form-control
                input-name="title"
                label="Judul Catatan"
                placeholder="Contoh : Deadline Belajar"
                min-length="3"
                description="Isi dengan judul catatan (min 3 karakter)"
            ></form-control>
            <form-control
                input-name="body"
                label="Isi Catatan"
                placeholder="Contoh : Deadline belajar segera!"
                min-length="6"
                description="Isi dengan catatan (min 6 karakter)"
            ></form-control>
            
            <button class="btn btn-primary" id="save-button">Simpan Catatan</button>

        </form>`;
  }
}

customElements.define("notes-form", NotesForm);

class NotesItem extends HTMLElement {
    static observedAttributes = [
        "id",
        "index",
        "title",
        "body",
        "createdAt",
    ];

    constructor() {
        super();

        this._id = this.getAttribute("id");
        this._index = this.getAttribute("index");
        this._title = this.getAttribute("title");
        this._body = this.getAttribute("body");
        this._createdAt = this.getAttribute("createdAt");
    }
    
    handleDelete() {
        this.dispatchEvent(
            new CustomEvent("notes-delete", {
                detail: {
                    id: this._id,
                },
                bubbles: true,
            })
        );
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card" style="background-color: #FDFAD9;" data-aos="fade-down" data-aos-delay="${100 * this._index}">
                <div>
                    <p class="text-title">${this._title}</p>
                    <p class="text-body"><b>Catatan :</b> ${this._body}</p>
                </div>
                <delete-button data-id=${this._id}></delete-button>
            </div>
        `;

        const deleteButton = this.querySelector("delete-button");

        if (deleteButton) {
            deleteButton.addEventListener("click", this.handleDelete);
        }

    }

    attributeChangedCallback(title, oldValue, newValue) {
        this[`_${title}`] = newValue;
        this.render();
    }
}

customElements.define("notes-item", NotesItem);
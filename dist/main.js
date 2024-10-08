(() => {
  var t = {
      619: () => {
        class t extends HTMLElement {
          constructor() {
            super(), (this._shadowRoot = this.attachShadow({ mode: "closed" }));
          }
          connectedCallback() {
            this.render();
          }
          render() {
            this._shadowRoot.innerHTML =
              "\n            <style>\n                footer {\n                    box-sizing: border-box;\n                    text-align: center;\n                    color: rgba(0, 0, 0, 0.5);\n                    font-weight: bold;\n                    margin-bottom: 0.5rem\n                }\n            </style>\n            <footer>\n                <p>Ahmad Munif - 2024 - DBS Foundation Coding Camp</p>\n            </footer>\n        ";
          }
        }
        customElements.define("app-footer", t);
      },
      391: () => {
        class t extends HTMLElement {
          static observedAttributes = [
            "id",
            "index",
            "title",
            "catatan",
            "dateCreated",
          ];
          constructor() {
            super(),
              (this._id = this.getAttribute("id")),
              (this._index = this.getAttribute("index")),
              (this._title = this.getAttribute("title")),
              (this._catatan = this.getAttribute("catatan")),
              (this._dateCreated = this.getAttribute("dateCreated"));
          }
          handleDelete() {
            const t = parseInt(event.target.dataset.id);
            this.dispatchEvent(
              new CustomEvent("notes-delete", {
                detail: { id: t },
                bubbles: !0,
              }),
            );
          }
          connectedCallback() {
            this.render();
            const t = this.querySelector("delete-button");
            t && t.addEventListener("click", this.handleDelete);
          }
          disconnectedCallback() {
            this.querySelector("delete-button").removeEventListener(
              "click",
              this.handleDelete,
            );
          }
          render() {
            this.innerHTML = `\n            <div class="card" style="background-color: #FDFAD9;" data-aos="fade-down" data-aos-delay="${100 * this._index}">\n                <div>\n                    <p class="text-title">${this._title}</p>\n                    <p class="text-catatan"><b>Catatan :</b> ${this._catatan}</p>\n                </div>\n                <delete-button data-id=${this._id}></delete-button>\n            </div>\n        `;
          }
          attributeChangedCallback(t, e, a) {
            (this[`_${t}`] = a), this.render();
          }
        }
        customElements.define("notes-item", t);
      },
      414: () => {
        class t extends HTMLElement {
          constructor() {
            super(), (this._shadowRoot = this.attachShadow({ mode: "open" }));
          }
          connectedCallback() {
            this.render();
          }
          render() {
            this._shadowRoot.innerHTML =
              "\n            <style>\n                button {\n                    color: #fff;\n                    background-color: #d9534f;\n                    border-color: #d43f3a;\n                    width:100%;\n                    padding: 6px;\n                    border-radius: 4px;\n                    border: none;\n                    cursor: pointer;\n                }\n            </style>\n            <button>Hapus Catatan</button>\n        ";
          }
        }
        customElements.define("delete-button", t);
      },
      404: () => {
        class t extends HTMLElement {
          static observedAttributes = [
            "type",
            "input-name",
            "label",
            "placeholder",
            "description",
            "min-length",
          ];
          constructor() {
            super(),
              (this._type = this.getAttribute("type") || "text"),
              (this["_input-name"] = this.getAttribute("input-name")),
              (this._label = this.getAttribute("label")),
              (this._placeholder = this.getAttribute("placeholder")),
              (this._description = this.getAttribute("description")),
              (this["_min-length"] = this.getAttribute("min-length"));
          }
          connectedCallback() {
            this.render();
          }
          render() {
            this.innerHTML = `\n            <div class="form-group">\n                <label for="input-${this["_input-name"]}">${this._label}</label>\n                <input\n                    type="${this._type}"\n                    name="${this["_input-name"]}"\n                    id="input-${this["_input-name"]}"\n                    class="form-control"\n                    placeholder="${this._placeholder}"\n                    aria-describedby="${this["_input-name"]}-description"\n                    minlength="${this["_min-length"]}"\n                    required\n                />\n                <p\n                    id="${this["_input-name"]}-description"\n                    class="${this["_input-name"]}-message form-text"\n                    data-defaultText="${this._description}"\n                >\n                    ${this._description}\n                </p>\n            </div>\n        `;
          }
        }
        customElements.define("form-control", t);
      },
    },
    e = {};
  function a(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var s = (e[n] = { exports: {} });
    return t[n](s, s.exports, a), s.exports;
  }
  (() => {
    "use strict";
    a(619), a(391), a(414), a(404);
    const t = [
      {
        id: "notes-jT-jjsyz61J8XKiI",
        title: "Welcome to Notes, Dimas!",
        catatan:
          "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
        dateCreated: "2022-07-28T10:03:12.594Z",
        archived: !1,
      },
      {
        id: "notes-aB-cdefg12345",
        title: "Meeting Agenda",
        catatan:
          "Discuss project updates and assign tasks for the upcoming week.",
        dateCreated: "2022-08-05T15:30:00.000Z",
        archived: !1,
      },
      {
        id: "notes-XyZ-789012345",
        title: "Shopping List",
        catatan: "Milk, eggs, bread, fruits, and vegetables.",
        dateCreated: "2022-08-10T08:45:23.120Z",
        archived: !1,
      },
      {
        id: "notes-1a-2b3c4d5e6f",
        title: "Personal Goals",
        catatan:
          "Read two books per month, exercise three times a week, learn a new language.",
        dateCreated: "2022-08-15T18:12:55.789Z",
        archived: !1,
      },
      {
        id: "notes-LMN-456789",
        title: "Recipe: Spaghetti Bolognese",
        catatan:
          "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
        dateCreated: "2022-08-20T12:30:40.200Z",
        archived: !1,
      },
      {
        id: "notes-QwErTyUiOp",
        title: "Workout Routine",
        catatan:
          "Monday: Cardio, Tuesday: Upper catatan , Wednesday: Rest, Thursday: Lower catatan , Friday: Cardio.",
        dateCreated: "2022-08-25T09:15:17.890Z",
        archived: !1,
      },
      {
        id: "notes-abcdef-987654",
        title: "Book Recommendations",
        catatan:
          "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
        dateCreated: "2022-09-01T14:20:05.321Z",
        archived: !1,
      },
      {
        id: "notes-zyxwv-54321",
        title: "Daily Reflections",
        catatan:
          "Write down three positive things that happened today and one thing to improve tomorrow.",
        dateCreated: "2022-09-07T20:40:30.150Z",
        archived: !1,
      },
      {
        id: "notes-poiuyt-987654",
        title: "Travel Bucket List",
        catatan:
          "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
        dateCreated: "2022-09-15T11:55:44.678Z",
        archived: !1,
      },
      {
        id: "notes-asdfgh-123456",
        title: "Coding Projects",
        catatan:
          "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
        dateCreated: "2022-09-20T17:10:12.987Z",
        archived: !1,
      },
      {
        id: "notes-5678-abcd-efgh",
        title: "Project Deadline",
        catatan: "Complete project tasks by the deadline on October 1st.",
        dateCreated: "2022-09-28T14:00:00.000Z",
        archived: !1,
      },
      {
        id: "notes-9876-wxyz-1234",
        title: "Health Checkup",
        catatan: "Schedule a routine health checkup with the doctor.",
        dateCreated: "2022-10-05T09:30:45.600Z",
        archived: !1,
      },
      {
        id: "notes-qwerty-8765-4321",
        title: "Financial Goals",
        catatan:
          "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
        dateCreated: "2022-10-12T12:15:30.890Z",
        archived: !1,
      },
      {
        id: "notes-98765-54321-12345",
        title: "Holiday Plans",
        catatan: "Research and plan for the upcoming holiday destination.",
        dateCreated: "2022-10-20T16:45:00.000Z",
        archived: !1,
      },
      {
        id: "notes-1234-abcd-5678",
        title: "Language Learning",
        catatan: "Practice Spanish vocabulary for 30 minutes every day.",
        dateCreated: "2022-10-28T08:00:20.120Z",
        archived: !1,
      },
    ];
    let e = [];
    const n = "RENDER_EVENT",
      i = document.getElementById("form-input");
    function s() {
      localStorage.setItem("notes", JSON.stringify(e));
    }
    function d(t, a) {
      const i = document.createElement("notes-item");
      return (
        i.setAttribute("id", t.id),
        i.setAttribute("index", a),
        i.setAttribute("title", t.title),
        i.setAttribute("catatan", t.catatan),
        i.setAttribute("dateCreated", t.dateCreated),
        i.addEventListener("notes-delete", (t) => {
          var a;
          (a = t.detail.id),
            Sweetalert2.fire({
              title: "Anda yakin ingin menghapus data ini?",
              icon: "warning",
              showCancelButton: !0,
              confirmButtonText: "Ya",
              cancelButtonText: "Batal",
              cancelButtonColor: "red",
              confirmButtonColor: "blue",
            }).then((t) => {
              if (t.isConfirmed) {
                const t = e.findIndex((t) => t.id === a);
                -1 !== t &&
                  (e.splice(t, 1),
                  s(),
                  Sweetalert2.fire({
                    title: "Catatan berhasil di hapus!",
                    icon: "success",
                    showConfirmButton: !1,
                    timer: 1500,
                    position: "top-end",
                  }),
                  document.dispatchEvent(new Event(n)));
              }
            });
        }),
        i
      );
    }
    i.addEventListener("submit", (t) => {
      t.preventDefault();
      const a = i.elements.title.value,
        d = i.elements.catatan.value,
        o = {
          id: +new Date(),
          title: a,
          catatan: d,
          dateCreated: new Date().toISOString(),
        };
      e.push(o),
        s(),
        Sweetalert2.fire({
          title: "Catatan berhasil ditambahkan",
          icon: "success",
          confirmButtonText: "OK",
        }),
        document.dispatchEvent(new Event(n)),
        i.reset();
    }),
      document.addEventListener(n, function () {
        const t = document.getElementById("notes-lists");
        t.innerHTML = "";
        let a = 0;
        for (const n of e) t.append(d(n, a)), a++;
      }),
      document.addEventListener("DOMContentLoaded", () => {
        (() => {
          const t = document.getElementById("form-input"),
            e = t.elements.title,
            a = t.elements.catatan,
            n = (t) => {
              const e = t.target.validity.valid,
                a = t.target.validationMessage,
                n = t.target.getAttribute("aria-describedby"),
                i = n ? document.getElementById(n) : null;
              i && a && !e
                ? ((i.innerText = a),
                  i.classList.remove("text-dark"),
                  i.classList.add("text-danger"))
                : ((i.innerText = i.dataset.defaulttext || ""),
                  console.log(i.dataset),
                  i.classList.remove("text-danger"),
                  i.classList.add("text-dark"));
            },
            i = (t) => {
              t.target.setCustomValidity(""),
                t.target.validity.valueMissing
                  ? t.target.setCustomValidity("Wajib diisi.")
                  : t.target.validity.tooShort &&
                    t.target.setCustomValidity(
                      "Minimal panjang adalah tiga karakter",
                    );
            };
          e.addEventListener("change", i),
            e.addEventListener("invalid", i),
            e.addEventListener("blur", n);
          const s = (t) => {
            t.target.setCustomValidity(""),
              t.target.validity.valueMissing
                ? t.target.setCustomValidity("Wajib diisi.")
                : t.target.validity.tooShort &&
                  t.target.setCustomValidity(
                    "Minimal panjang adalah enam karakter",
                  );
          };
          a.addEventListener("change", s),
            a.addEventListener("invalid", s),
            a.addEventListener("blur", n);
        })(),
          AOS.init(),
          localStorage.getItem("notes")
            ? (e = JSON.parse(localStorage.getItem("notes")) || [])
            : (localStorage.setItem("notes", JSON.stringify(t)),
              (e = JSON.parse(localStorage.getItem("notes")))),
          document.dispatchEvent(new Event(n));
      });
  })();
})();

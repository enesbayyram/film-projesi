const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const deleteButton = document.querySelector("#delete-film");
const filmTodoList = document.querySelector("#films");
const clearButton = document.querySelector("#clear-films");

const ui = new UI();
const storage = new StorageL();

allEventListeners();

function allEventListeners() {
    window.addEventListener("load", loadFilmsFromStorage);
    form.addEventListener("submit", addFilm);
    filmTodoList.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", deleteAllFilms);
}

function addFilm(e) {
    debugger;
    const titleText = titleInput.value;
    const directorText = directorInput.value;
    const urlText = urlInput.value;

    if (titleText === "" || directorText === "" || urlText === "") {
        //hata vereceğiz
        ui.showMessage("Tüm alanları doldurunuz", "warning");
    } else {
        debugger;
        const newFilm = new Film(titleText, directorText, urlText);
       
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.clearInputs(titleInput, directorInput, urlInput);
        ui.showMessage("Film başarıyla eklendi.", "success");
    }

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        //ön yüzden siliniyor.
        const removeTodo = e.target.parentElement.parentElement;
        ui.deleteFilmFromUI(removeTodo);

        //storage'den silmek
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
        storage.deleteFilmFromStorage(title);

        //bilgilendirme mesajı kullanmak
        ui.showMessage("Başarılı bir şekilde silindi.", "success");

    }
}

function deleteAllFilms(e) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
        //ön yüzden silelim
        ui.deleteAllFilmsFromUI();

        //storage'den temizleyelim
        storage.deleteAllFilmsFromStorage();

        //mesaj verelim
        ui.showMessage("Tüm filmler silindi.", "success");
    }
}

function loadFilmsFromStorage() {
    let filmList = storage.getFilmsFromStorage();
    ui.loadFilmsFromStorage(filmList);
}
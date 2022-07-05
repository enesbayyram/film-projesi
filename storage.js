
class StorageL {
     addFilmToStorage(newFilm) {
        debugger;
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }


     deleteFilmFromStorage(title) {
        let films = this.getFilmsFromStorage();
        if (films.length > 0) {
            films.forEach(function (film, index) {
                if (film.title.trim() === title) {
                    films.splice(index, 1);
                    localStorage.setItem("films", JSON.stringify(films));
                }
            });
        }
    }

     deleteAllFilmsFromStorage() {
        let films = this.getFilmsFromStorage();
        if (films.length > 0) {
            films = [];
            localStorage.setItem("films", JSON.stringify(films));
        }
    }

     getFilmsFromStorage() {
        debugger;
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

}


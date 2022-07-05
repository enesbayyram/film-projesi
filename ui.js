
class UI{
//script ile import ederken sıraları çok önemli hangisi hangisinin üstünde olacak cok ama cok önemli referans hatası yersin.

 filmList = document.querySelector("#films");

 addFilmToUI(film) {
    //ön yüze filmi ekleyelim.
    debugger;
   
    this.filmList.innerHTML+= `
    <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
}

 deleteFilmFromUI(removeTodo){
    this.filmList.removeChild(removeTodo);
    
}

 deleteAllFilmsFromUI(){
    // filmList.innerHTML=""; ---> her iki yöntemle ile de yapılabilir. 
   while(this.filmList.firstElementChild!=null){
        this.filmList.firstElementChild.remove();
   }
}



 loadFilmsFromStorage(films){
    if(films.length>0){
        films.forEach(film=>{
            this.addFilmToUI(film);
        });
    }
}
 clearInputs(title,director,url){
    title.value="";
    director.value="";
    url.value="";
}

 showMessage(message,type){
    const div = document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;

    const cardBody = document.querySelectorAll(".card-body")[0];
    cardBody.prepend(div);

    setTimeout(() => {
        div.remove();
    }, 2000);
}
}



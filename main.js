function myFunction(){
    let links = document.querySelector('.menu');
    if(links.style.display === "block"){
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

myFunction();
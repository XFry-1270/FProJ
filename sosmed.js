const btn = document.querySelector(".btn");

btn.addEventListener('click',function(){
    var isi = document.querySelector("textarea").value;
    var show = document.createElement('div');
    var text = document.createTextNode(isi);
    isi.innerHTML="";
    show.appendChild(text);

    var body = document.querySelector('.post');
    body.appendChild(show);

    show.classList.add('isi');
    

})
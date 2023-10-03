const divs = document.querySelectorAll('div');

function logText(e){
    //console.log(this.classList.value);
    //console.log(this);
    e.stopPropagation();// stop bubbling

}
//document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText,{
    capture: true,
    once: true
}));


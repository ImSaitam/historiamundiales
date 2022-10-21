document.addEventListener('contextmenu',(e) =>{
    e.preventDefault()
});

document.addEventListener('keydown', (e) =>{
    e.preventDefault();
    if (e.keyCode == F12) {
        return false;
    }
});
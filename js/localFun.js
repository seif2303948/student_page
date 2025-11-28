function active(link){
    for(let link1 of navLinks){
        link1.parentElement.classList.remove('active');
    }
    link.parentElement.classList.add('active');
}
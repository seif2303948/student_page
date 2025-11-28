function active(link){
    for(let link1 of navLinks){
        link1.parentElement.classList.remove('active');
    }
    link.parentElement.classList.add('active');
}

function enroll(btn){
    btn.classList.remove('not-enrolled-btn');
    btn.classList.add('enrolled-btn');
    btn.textContent = 'Already Enrolled';
    let col = btn.parentElement;
    col.classList.remove('not-enrolled');
    col.classList.add('enrolled');

    let enrollIcon = col.firstElementChild.lastElementChild;
    enrollIcon.classList.remove('not-enrolled');
    enrollIcon.classList.add('enrolled');

}
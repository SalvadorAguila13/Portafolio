// Scroll sections active link
window.addEventListener('load', () => {
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = (e) => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offSet && top < offSet + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');            
            })
        }
    })
}
})



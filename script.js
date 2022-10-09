// Fixed Navbar on Scroll

const header = document.querySelector(".nav")
const headerHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    scrollStop = window.scrollY;

    if (scrollStop >= headerHeight) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }

})
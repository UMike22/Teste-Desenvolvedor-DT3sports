const navSlide = () => {
    const burger = document.querySelector('.burger')
    const overlay = document.querySelector('.overlay')
    const nav = document.querySelector('.HomeList')
    burger.addEventListener('click', () => {
        nav.classList.toggle('HomeList-active')
    })
    burger.addEventListener('click', () => {
        overlay.classList.toggle('overlay-active')
    })
}

navSlide()
export let burgerIcon = document.querySelector('.burger-icon')
    burgerIcon.addEventListener('click', function () {
        let mobileNav = document.querySelector('.mobile-nav nav')
            mobileNav.classList.add('active')
            burgerIcon.style = "display : none"
            closedIconMenu.style = "display : block"
    })
export let closedIconMenu = document.querySelector('.closed-icon')
    closedIconMenu.addEventListener('click', () => {
        burgerIcon.style = "display : block"
        closedIconMenu.style = "display : none"
        document.querySelector('.mobile-nav nav').classList.remove('active')
    })

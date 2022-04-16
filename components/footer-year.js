let arrayBtn = document.querySelectorAll('.shape-btn span')
arrayBtn.forEach(btn => {
    btn.addEventListener('click', sorting)
})
export function sorting(event) {
    if (this.classList.contains('Anisha')) {
        document.querySelector('.testimonial section').style = "transform : translateX(0px)"
        for (const btnShape of arrayBtn) {
            btnShape.classList.remove('active')
        }
        this.classList.add('active')
    }else if(this.classList.contains('Ali')) {
        for (const btnShape of arrayBtn) {
            btnShape.classList.remove('active')
        }
        this.classList.add('active')
        document.querySelector('.testimonial section').style = "transform : translateX(-300px)"
    }else if(this.classList.contains('Richard')) {
        for (const btnShape of arrayBtn) {
            btnShape.classList.remove('active')
        }
        this.classList.add('active')
        document.querySelector('.testimonial section').style = "transform : translateX(-600px)"
    }else if(this.classList.contains('Shanai')) {
        for (const btnShape of arrayBtn) {
            btnShape.classList.remove('active')
        }
        this.classList.add('active')
        document.querySelector('.testimonial section').style = "transform : translateX(-900px)"
    }else {

    }
}


export let currentYear = new Date().getFullYear()
let displayYear = document.querySelector('.current-year').innerText = currentYear
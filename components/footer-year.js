// TESTIMONIAL SECTION

let TestimonialPixelVal = [
    {name : "Anisha", pixel : "0px"},
    {name : "Ali", pixel : "-300px"},
    {name : "Richard", pixel : "-600px"},
    {name : "Shanai", pixel : "-900px"}
]
export let TestimonialArrayBtn = document.querySelectorAll('.shape-btn span')
for (let i = 0; i < TestimonialArrayBtn.length; i++) {
    TestimonialArrayBtn[i].addEventListener('click', function(){
        if (TestimonialPixelVal[i].name === this.classList[0]) {
            document.querySelector('.testimonial section').style = `transform : translateX(${TestimonialPixelVal[i].pixel})`
            for (const btn of TestimonialArrayBtn) {
                btn.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}
// FOOTER SECTION

export let currentYear = new Date().getFullYear()
let displayYear = document.querySelector('.current-year').innerText = currentYear
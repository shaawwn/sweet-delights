
// export default function carousel(images) {
//     // images is an array of images
//     // images must be 1440 x 850 ratio
//     const carouselSection = document.getElementById('carousel')
//     const carousel = _createCarousel(images)

//     const buttons = _createButtons()
//     carousel.appendChild(_addOverlayText())
//     carousel.appendChild(buttons[0])
//     carousel.appendChild(buttons[1])
    
//     carouselSection.appendChild(carousel)
// }

// function _createCarousel(images) {
//     const carousel = document.createElement('div')
//     carousel.dataset.carousel = ''
//     const slideContainer = document.createElement('ul')
//     slideContainer.dataset.slides = ''
//     carousel.classList.add('carousel')

//     images.forEach((image, index) => {
//         const slide = document.createElement('li')
//         slide.classList.add('slide')
//         const img = document.createElement('img')
//         img.classList.add('carousel__item')
//         img.src = image
//         slide.appendChild(img)
//         if(index === 0) {
//             slide.dataset.active = true
//         }
//         slideContainer.appendChild(slide)
//     })

//     carousel.appendChild(slideContainer)
    
//     const overlay = document.createElement('div')
//     overlay.classList.add('overlay')
//     carousel.appendChild(overlay)
//     return carousel
// }

// function _createButtons() {

//     const prevBtn = document.createElement('button')
//     prevBtn.classList.add('carousel__previous')
//     prevBtn.dataset.carouselButton = 'previous'
//     prevBtn.innerText = "<"
//     const nextBtn = document.createElement('button')
//     nextBtn.classList.add('carousel__next')
//     nextBtn.innerText = '>'
//     nextBtn.dataset.carouselButton = 'next'

//     const buttons = [prevBtn, nextBtn]
//     buttons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const offset = button.dataset.carouselButton === "next" ? 1 : -1
//             const slides = button
//               .closest("[data-carousel]")
//               .querySelector("[data-slides]")
        
//             const activeSlide = slides.querySelector("[data-active]")
//             let newIndex = [...slides.children].indexOf(activeSlide) + offset
//             if (newIndex < 0) newIndex = slides.children.length - 1
//             if (newIndex >= slides.children.length) newIndex = 0
        
//             slides.children[newIndex].dataset.active = true
//             delete activeSlide.dataset.active
//           })
//     })

//     return buttons
// }

// function _addOverlayText() {

//     const text = document.createElement('p')
//     text.innerText = 'Baked goods embody the warmth and comfort of home, each creation a tangible expression of love and tradition passed down through generations.'
//     text.classList.add('carousel__text')
//     return text
// }

export default class Carousel {
    constructor(images) {
        this.images = images
    }

    createCarousel() {
        // const section = document.createElement('section')
        const section = document.getElementById('carousel')
        const carousel = document.createElement('div')
        const slideContainer = document.createElement('ul')

        carousel.dataset.carousel = ''
        slideContainer.dataset.slides = ''
        carousel.classList.add('carousel')

        this.images.forEach((image, index) => {
            const slide = document.createElement('li')
            slide.classList.add('slide')

            const img = document.createElement('img')
            img.classList.add('carousel__item')
            img.src = image
            slide.appendChild(img)
            if(index === 0) {
                slide.dataset.active = true
            }

            slideContainer.appendChild(slide)
        })

        const buttons = this.buttons()
        carousel.appendChild(buttons[0])
        carousel.appendChild(buttons[1])
        carousel.appendChild(slideContainer)
        carousel.appendChild(this.overlay())
        // section.appendChild(carousel)
        return carousel
    }

    overlay() {
        const overlay = document.createElement('div')
        overlay.classList.add('overlay')
        return overlay
    }

    buttons() {
        const prevBtn = document.createElement('button')
        const nextBtn = document.createElement('button')

        prevBtn.dataset.carouselButton = 'previous'
        nextBtn.dataset.carouselButton = 'next'

        prevBtn.innerText = '<'
        nextBtn.innerText = '<'

        prevBtn.classList.add('carousel__previous')
        nextBtn.classList.add('carousel__next')

        const buttons = [prevBtn, nextBtn]
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const offset = button.dataset.carouselButton === "next" ? 1 : -1
                const slides = button
                  .closest("[data-carousel]")
                  .querySelector("[data-slides]")
            
                const activeSlide = slides.querySelector("[data-active]")
                let newIndex = [...slides.children].indexOf(activeSlide) + offset
                if (newIndex < 0) newIndex = slides.children.length - 1
                if (newIndex >= slides.children.length) newIndex = 0
            
                slides.children[newIndex].dataset.active = true
                delete activeSlide.dataset.active
            })
        })
        return buttons
    }
}


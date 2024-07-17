
import InstaLogo from '../assets/images/insta.png'
import Insta1 from '../assets/images/pic1.jpg'
import Insta2 from '../assets/images/pic2.jpg'
import Insta3 from '../assets/images/pic3.jpg'
import Insta4 from '../assets/images/pic9.jpg'
import Insta5 from '../assets/images/pic5.jpg'
import Insta6 from '../assets/images/pic6.jpg'
import Insta7 from '../assets/images/pic7.jpg'
import Insta8 from '../assets/images/pic8.jpg'
// For mocking purposes, any instagram embed is probably gonna use some embed code or API

const instaImages = [Insta1, Insta2, Insta3, Insta4, Insta5, Insta6, Insta7, Insta8]

class InstagramEmbed {
    super() {
        this.images = []
    }


    render() {
        // Mock 
        this._fetchImages()
        const section = document.createElement('section')
        const sectionHeader = document.createElement('div')
        const imageContainer = document.createElement('div')
        
        const title = document.createElement('h2')
        title.innerText = 'Follow us on Instagram'
        sectionHeader.appendChild(this._logo())
        sectionHeader.appendChild(title)

        sectionHeader.classList.add('flex', 'text-[22px]', 'xl:text-5xl')
        imageContainer.classList.add('insta-grid')
        title.style.marginTop = 'auto'
        title.style.marginBottom = 'auto'

        this.images.forEach((image, index) => {
            const imgSquareWrapper = document.createElement('div')
            imgSquareWrapper.classList.add('insta-grid__item')
            const img = document.createElement('img')
            img.src = image
            img.alt = `instagram picture ${index}`
            imgSquareWrapper.appendChild(img)
            imageContainer.appendChild(imgSquareWrapper)
        })

        section.appendChild(sectionHeader)
        section.appendChild(imageContainer)
        return section
    }

    _logo() {
        const logo = document.createElement('img');
        logo.classList.add('insta-logo')
        logo.src = InstaLogo
        return logo
    }

    _fetchImages() {
        this.images = instaImages
    }
}

export {
    InstagramEmbed
}
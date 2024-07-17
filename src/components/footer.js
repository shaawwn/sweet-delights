import InstaLogo from '../assets/images/insta.png'
import FacebookLogo from '../assets/images/facebook.png'
import TikTokLogo from '../assets/images/tiktok.png'
import TwitterLogo from '../assets/images/twitter.png'
import Logo from '../assets/images/simplelogo.png'

class Footer {
    super() {

    }

    render() {
        const footer = document.getElementById('footer')

        const footerContainer = document.createElement('div')
        footerContainer.classList.add('footer')

        const copyright = document.createElement('p')
        copyright.innerText = '© Sweet Delights Bakery 2024'
        const topLink = this.scrollToTopButton()
        copyright.style.textAlign = 'center'
        copyright.style.paddingBottom = '8px'
        copyright.style.paddingTop = '8px'
        
        if(_checkMobile()) {
            footer.appendChild(topLink)
            footerContainer.appendChild(this.callToAction())
        } else {
            footerContainer.appendChild(this.logo())
            footerContainer.appendChild(this.links())
            footerContainer.appendChild(this.hours())
            footerContainer.appendChild(this.callToAction())
        }

        footer.appendChild(footerContainer)
        footer.appendChild(copyright)
    }



    logo() {
        const logo = document.createElement('img')
        logo.classList.add('footer__logo')
        logo.src = Logo

        return logo
    }

    links() {
        const links = ['Blog', 'About', 'Contact', 'Order Online']
        const linksContainer = document.createElement('div')
        linksContainer.classList.add('flex', 'flex-col')

        const scrollToTop = this.scrollToTopButton()
        linksContainer.appendChild(scrollToTop)
        links.forEach((link) => {
            const a = document.createElement('a')
            a.classList.add('footer__title')
            a.href="#"
            a.innerText = link
            linksContainer.appendChild(a)
        })

        return linksContainer
    }

    hours() {
        const hours = [
            {'Monday': '7:00am - 3:00pm'},
            {'Tuesday': 'CLOSED'},
            {'Wednesday': '7:00am - 3:00pm'},
            {'Thursday': '7:00am - 3:00pm'},
            {'Friday': '7:00am - 3:00pm'},
            {'Saturday': '7:00am - 3:00pm'},
            {'Sunday': '7:00am - 3:00pm'},
        ]
        const hoursContainer = document.createElement('div')
        const hoursTitle = document.createElement('h3')
        hoursTitle.classList.add('footer__title')
        hoursTitle.innerText = 'Business hours'

        hoursContainer.appendChild(hoursTitle)
        hours.forEach((item) => {
            const hoursRow = document.createElement('div')
            const day = document.createElement('p')
            const time = document.createElement('p')
    
            day.innerText = Object.keys(item)[0]
            time.innerText = item[Object.keys(item)]
            
            hoursRow.appendChild(day)
            hoursRow.appendChild(time)
            hoursRow.classList.add('flex', 'justify-between')
            hoursContainer.appendChild(hoursRow)
        })

        return hoursContainer
    }

    callToAction() {
        const columnContainer = document.createElement('div')
        columnContainer.classList.add('xl:gap-[20px]', 'footer__cta')
        const ctaContainer = document.createElement('div')
        const ctaTitle = document.createElement('h3')
        const ctaForm = document.createElement('div')
        const ctaInput = document.createElement('input')
        const ctaButton = document.createElement('button')
        
        ctaTitle.classList.add('footer__title')
        ctaForm.classList.add('cta-form')
        ctaInput.classList.add('cta-form__input')
        ctaButton.classList.add('cta-form__button')

        
        ctaInput.placeholder = 'Subscribe to newsletter'
        ctaForm.appendChild(ctaInput)
        ctaForm.appendChild(ctaButton)

        ctaContainer.appendChild(ctaTitle)
        ctaContainer.appendChild(ctaForm)

        if(_checkMobile()) {
            ctaButton.innerText = '>'
            columnContainer.appendChild(this.socials())
            columnContainer.appendChild(ctaContainer)
        } else {
            ctaTitle.innerText = 'Stay up to date'
            ctaButton.innerText = 'Subscribe'
            columnContainer.appendChild(ctaContainer)
            columnContainer.appendChild(this.socials())
        }
        return columnContainer
    }

    socials() {
        const socialsContainer = document.createElement('div')
        const logoContainer = document.createElement('div')
        const socialsTitle = document.createElement('h3')
        socialsTitle.classList.add('footer__title')
        logoContainer.classList.add('flex', 'footer__social-links')
        socialsContainer.classList.add('flex', 'flex-col', 'xl:gap-[15px]')

        socialsTitle.innerText = 'Social Media Links'
        const logos = [InstaLogo, FacebookLogo, TikTokLogo, TwitterLogo]

        if(!_checkMobile()) {
            socialsContainer.appendChild(socialsTitle)
        }

        logos.forEach((logo) => {
            const container = document.createElement('div')
            const img = document.createElement('img')
            img.src = logo
            img.classList.add('footer__socials-logo')
    
            container.appendChild(img)
            logoContainer.appendChild(container)
        })
        socialsContainer.appendChild(logoContainer)
        return socialsContainer
    }

    scrollToTopButton() {
        // on "Back to top", snap back to the top fo the page
        const button  = document.createElement('button')
        button.innerText = 'Back to top'
        button.classList.add('footer__title')
        button.style.textAlign = 'left'
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    
        return button
    }
}


function _checkMobile() {
    return window.innerWidth < 764
}

function scrollToTopButton() {
    // on "Back to top", snap back to the top fo the page
    const button  = document.createElement('button')
    button.innerText = 'Back to top'

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    return button
}
export {
    Footer
}
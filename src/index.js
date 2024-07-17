import './style.css'

import Carousel from './components/carousel';
import {InstagramEmbed} from './components/socialEmbed'
import {YelpEmbed} from './components/reviewEmbed'
import {Footer} from './components/footer'
import {Button} from './components'
import Logo from './assets/images/simplelogo.png';
import InstaLogo from './assets/images/insta.png'
import FacebookLogo from './assets/images/facebook.png'
import TikTokLogo from './assets/images/tiktok.png'
import TwitterLogo from './assets/images/twitter.png'

import Hero from './assets/images/hero.png';
import HeroHeader from './assets/images/textlogo.png'
import TexturedBackground from './assets/images/texturedbackground.png'
import CarouselDefault from './assets/images/carousel1.png'
import Carousel2 from './assets/images/carousel2.png'
import Carousel3 from './assets/images/carousel3.png'
import BlogPost from './assets/images/pic4.jpg'
import Insta1 from './assets/images/pic1.jpg'
import Insta2 from './assets/images/pic2.jpg'
import Insta3 from './assets/images/pic3.jpg'
import Insta4 from './assets/images/pic9.jpg'
import Insta5 from './assets/images/pic5.jpg'
import Insta6 from './assets/images/pic6.jpg'
import Insta7 from './assets/images/pic7.jpg'
import Insta8 from './assets/images/pic8.jpg'
import Spotlight from './assets/images/spotlight.png'
import Map from './assets/images/map.png'


const carousel_images = [CarouselDefault, Carousel2, Carousel3]
const insta_images = [Insta1, Insta2, Insta3, Insta4, Insta5, Insta6,Insta7, Insta8]

const BLOG_POST = {
    title: 'Life is what you Macaron it',
    author: 'Sarah Johnson, owner Sweet Delights Bakery',
    text: 'Macarons have a storied history that dates back to the 8th century, with roots in Italian and French culinary traditions. The modern macaron, as we know it, was perfected in the early 20th century by the famed French pâtisserie Ladurée. These delicate cookies, made from almond flour, egg whites, and sugar, were paired with ganache, buttercream, or jam to create a delicious sandwich-style treat. Over the years, macarons have evolved into a symbol of elegance and sophistication, often associated with luxury and high-end pâtisseries.'
}


document.addEventListener("DOMContentLoaded", () => {
    loadElements()
})

function loadElements() {
    addLogo(Logo)
    checkMobile()
    navbarDropdown()
    handleScreenResize()
    addHeroContent(HeroHeader, Hero)
    addAnnouncementSection('New cupcakes coming next week!')
    addCarousel()
    addBlogPost(BLOG_POST)
    addSocialImagesSection(insta_images)
    imageAndText()
    addReviewSection()
    addMapAndDirections()
    addFooter()
}

function addLogo(image) {
    const logo = document.getElementById('nav-logo')
    logo.src = image
}

function checkMobile() {
    const screenWidth = window.innerWidth
    if(screenWidth < 764) {
        hideNavLinks()
    }
}

function handleScreenResize() {
    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth
        if(screenWidth < 764) {
            hideNavLinks()
        } else if(screenWidth > 764) {
            showNavLinks()
        }
    })
}

function hideNavLinks() {
    const navLinks = document.getElementsByClassName('navbar__links')[0]
    const hamburger = document.getElementById('navbar-menu')
    navLinks.style.display = "none"
    hamburger.style.display = 'block'
    hamburger.addEventListener('click', () => {
        console.log("Clicking hamburger")
        toggleNavbarDropdown()
    })
}

function showNavLinks() {
    const navLinks = document.getElementsByClassName('navbar__links')[0]
    const hamburger = document.getElementById('navbar-menu')
    navLinks.style.display = "flex"
    hamburger.style.display = 'none'

}

function toggleNavbarDropdown() {
    console.log("clicking")
    const dropdown = document.getElementsByClassName('navbar__dropdown')[0]

    const hamburger = document.getElementById('menu-hamburger')
    const close = document.getElementById('menu-cross')

    if(dropdown.style.display === 'none') {
        dropdown.style.display = 'flex'
        hamburger.style.display = 'none'
        close.style.display = 'flex'

    } else {
        dropdown.style.display = 'none'
        close.style.display = 'none'
        hamburger.style.display = 'flex'
    }
}

function navbarDropdown() {
    const navbar = document.getElementById('navbar')
    const container = document.createElement('div')
    container.classList.add('navbar__dropdown')

    const links = ["Home", "Menu", "About", "Contact", "Order"]

    links.forEach((link) => {
        const l = document.createElement('a')
        l.href="#"
        l.classList.add('navbar__dropdown__link')
        l.innerText = link
        container.appendChild(l)
    })

    navbar.appendChild(container)
    // return container
}

function addHeroContent(header, image) {
    const hero = document.getElementById('hero')
    hero.style.paddingTop = '100px'
    const titleContainer = document.createElement('div')
    titleContainer.classList.add('pl-6', 'pr-6')
    const titleLogo = document.createElement('img')
    titleLogo.src = header
    titleLogo.classList.add('mx-auto', 'pt-10')
    titleContainer.appendChild(titleLogo)

    const imageContainer = document.createElement('div')

    const heroBackground = document.createElement('img')
    heroBackground.src = image
    heroBackground.classList.add('mx-auto')
    imageContainer.appendChild(heroBackground)

    hero.appendChild(titleContainer)
    hero.appendChild(imageContainer)
}

function addAnnouncementSection(content) {
    const announcement = document.getElementById('announcement')
    announcement.classList.add('textured-background', 'announcement')
    const text = document.createElement('p')
  
    text.innerText = content
    announcement.appendChild(text)
}

function addCarousel() {
    const carouselSection = document.getElementById('carousel')
    const carousel = new Carousel(carousel_images).createCarousel()
    carouselSection.appendChild(carousel)
}

function addBlogPost(post) {
    // take the most recent, or stickied blogpost and put the first paragraph and blog title
    // post.title, post.author, post.text (pretend its an API call or something)
    const section = document.getElementById('blog-post')
    const imageContainer = document.createElement('div')
    const textContainer = document.createElement('div')
    const titleContainer = document.createElement('div')

    section.classList.add('blog-post')
    imageContainer.classList.add('blog-post__image-container')
    titleContainer.classList.add('blog-post__title-container')
    textContainer.classList.add('blog-post__text-container')
    
    const image = document.createElement('img')
    image.src = BlogPost
    imageContainer.appendChild(image)

    const blogTitle = document.createElement('h3')
    blogTitle.classList.add('blog-post__title')
    blogTitle.innerText = post.title
    
    const author = document.createElement('p')
    author.innerText = post.author

    const paragraph = document.createElement('p')
    paragraph.classList.add('blog-post__text')
    paragraph.innerText = post.text

    const blogLink = document.createElement('a')
    blogLink.classList.add('blog-link')
    blogLink.href = "#"
    blogLink.innerText = 'Read more ->'


    titleContainer.appendChild(blogTitle)
    titleContainer.appendChild(author)

    if(_checkMobile()) {
        console.log("Mobile screen")
        textContainer.appendChild(paragraph)
        textContainer.appendChild(blogLink)
        section.appendChild(titleContainer)
        section.appendChild(imageContainer)
        section.appendChild(textContainer)
    } else {
        console.log("Not mobile")
        textContainer.appendChild(titleContainer)
        textContainer.appendChild(paragraph)
        textContainer.appendChild(blogLink)
        section.appendChild(imageContainer)
        section.appendChild(textContainer)
    }
}

function addSocialImagesSection(images) {
    const instaSection = document.getElementById('instagram')
    const insta = new InstagramEmbed()
    instaSection.appendChild(insta.render())
}

function imageAndText() {
    const section = document.getElementById('spotlight')
    const textContainer = document.createElement('div')
    const imageContainer = document.createElement('div')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')


    textContainer.classList.add('text-section')
    imageContainer.classList.add('relative')
    paragraph.innerText = 'Discover the charm of Sweet Delights Bakery, where every bite brings a taste of home and tradition, crafted with love and the finest ingredients.'
    image.src = Spotlight
    imageContainer.appendChild(image)

    textContainer.appendChild(paragraph)
    if(_checkMobile()) {
        const overlay = document.createElement('div')
        overlay.classList.add('image-overlay')
        // imageContainer.appendChild(overlay)
        section.appendChild(textContainer)
        section.appendChild(imageContainer)
    } else {
        textContainer.appendChild(paragraph)
        section.appendChild(textContainer)
        section.appendChild(image)
    }
}

function addReviewSection() {
    const yelp = new YelpEmbed()
    yelp.render()
}

function addMapAndDirections() {
    const section = document.getElementById('map')
    section.classList.add('body-padding', 'map')
    const map = document.createElement('img') // this'll be the google embed
    map.src = Map
    section.appendChild(map)
}

function addFooter() {
    const footer = new Footer()
    footer.render()
}


function _checkMobile() {
    return window.innerWidth < 764
}

import Star from '../assets/images/star.png'

import Yelp1 from '../assets/images/yelp1.png'
import Yelp2 from '../assets/images/yelp2.png'
import Yelp3 from '../assets/images/yelp3.png'
import Yelp4 from '../assets/images/yelp4.png'
// Mock reviews

const reviews = {
    0: {
        stars: 4,
        text: 'Honey bun was amazing!',
        image: Yelp1
    },
    1: {
        stars: 5,
        text: 'This thing was so good',
        image: Yelp2
    },
    2: {
        stars: 5,
        text: 'Their specialty cakes are made fresh daily!',
        image: Yelp3
    },
    3: {
        stars: 5,
        text: 'Croussaints are so buttery and flaky!',
        image: Yelp4
    }
}


class YelpEmbed {
    
    render() {

        // const section = document.createElement('section')
        const section = document.getElementById('reviews')
        section.classList.add('text-center')
        const title = document.createElement('h3')
        title.classList.add('text-[22px]', 'xl:text-5xl')
        const reviewContainer = document.createElement('div')
        title.innerText = 'What people are saying about us'
        reviewContainer.classList.add('review-section')
        for(let  i = 0; i < 4; i++) {
            const newCard = this.card(reviews[i])
            reviewContainer.appendChild(newCard)
        }

        section.appendChild(title)
        section.appendChild(reviewContainer)
        // return section

        section.appendChild(title)
        section.appendChild(reviewContainer)
    }

    card(review) {
        const card = document.createElement('div')
        card.classList.add('review-card')
        const imageContainer = document.createElement('div')
        const textContainer = document.createElement('div')
        const starContainer = document.createElement('div')

        starContainer.classList.add('flex')
        const img = document.createElement('img')
        img.classList.add('rounded-[5px]')
        const text = document.createElement('p')
        
        for(let i = 0; i < review.stars; i++) {
            const star = document.createElement('img')
            star.classList.add('star')
            star.src = Star

            starContainer.appendChild(star)
        }

        text.innerText = review.text
        img.src = review.image

        imageContainer.appendChild(img)
        textContainer.appendChild(text)

        card.appendChild(imageContainer)
        card.appendChild(starContainer)
        card.appendChild(textContainer)
        return card
    }
}

export {
    YelpEmbed
}
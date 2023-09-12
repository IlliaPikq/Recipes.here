import React from "react"
import Card from "./Card.jsx"

export const cardsContent = () => {
    const initialContent = [
    {
        id: 1,
        title: 'Chicken Rice Bowl',
        subtitle: 'Ease-made one maybe',
        body: 'This chicken rice bowl recipe is so simple to toss together on a busy weeknight, and I usually have the ingredients already on hand. I start sauteing the onion and pepper first, then I prepare the instant rice. If you like, top it with some shredded sharp cheddar cheese. —Tammy Daniels, Batavia, Ohio'
    },
    {
        id: 0,
        title: 'Homemade Chicken Potpie',
        subtitle: "Who doesn't like to set on fire a chicken?",
        body: 'Why look for potpie in the frozen food aisle when this simple version tastes much better? The chicken pot pie’s crust is so tender and flaky, and underneath you’ll find the ultimate comfort food for kids and adults. —Amy Briggs, Gove, Kansas. Here are a few award-winning comfort food recipes you need to try.'
    },
]

function returnItems(str) {
    let values = Object.entries(sessionStorage)
                       .filter(item => {
                           return item[0].startsWith(str)
                        })
                        
    return values
}

const $title = returnItems('title')
const $subtitle = returnItems('subtitle')
const $body = returnItems('body')
    if ($title && $subtitle && $body ) {
        for (let i = 0; i < $title.length; i++) {
            const recipeId = $title[i][0].split('-').at(-1) 
            const title = $title[i][1];
            const subtitle = $subtitle[i][1];
            const body = $body[i][1];
            initialContent.unshift({
                id: recipeId,
                title: title,
                subtitle: subtitle,
                body: body
            })
        }
    }

    return initialContent
}
const fullCardsContent = cardsContent()
export default function RecipesList() {
    return (
        <div className='wrapper'>
                {fullCardsContent.map(({id, title, subtitle}) => 
                    <Card title={title} key={id} subtitle={subtitle} id={id} />
                )}
        </div>
    ) 
}

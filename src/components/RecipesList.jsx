import Card from "./Card.jsx";

export const cardsContent = () => {
    const initialContent = [
    {
        id: 1,
        title: 'Brown Stew Chicken',
        subtitle: 'Why the cult-like devotion',
        body: 'Brown stew chicken might seem like a snooze of a name for a recipe, but don’t be fooled—Jamaica’s signature marvel of a dish offers a galaxy of flavors that explains its massive fan base on the island and among the country’s expats. In other words, the name of this chicken thigh dinner may underdeliver in terms of the “wow” factor, but overdelivers at first bite.'
    },
    {
        id: 0,
        title: 'Shrimp Scampi',
        subtitle: 'Shrimp Scampi',
        body: 'Sometimes simple is the most satisfying. One of our favorite examples? The combo of lemon, garlic, and butter. The almost sweet acidity of the lemon pairs perfectly with the toasty and pungent flavor of the garlic, and both are enhanced by the rich fattiness of the butter. These flavors show up in countless of our favorite weeknight dinners and steak recipes, but they really get to shine in homemade shrimp scampi. Requiring ingredients you most likely already have on hand, shrimp scampi is a weeknight savior (or dinner party main!) that is truly always satisfying, no matter how you serve it.'
    },
]

function returnItems(str) {
    let [values] = Object.entries(sessionStorage)
                       .filter(item => {
                        return item[0].startsWith(str)
                       })
    return values
}
    
    const $title = returnItems('title')
    const $subtitle = returnItems('subtitle')
    const $body = returnItems('body')
    if ($title && $subtitle && $body ) {
        for (let i = 1; i < $title.length; i++) {
            const recipeId = $title[0].split('-').at(-1) 
            const title = $title[i];
            const subtitle = $subtitle[i];
            const body = $body[i];
            initialContent.push({
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

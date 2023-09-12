import Card from '@components/Card';
import { cardsContent } from "@components/RecipesList.jsx";
const fullCardsContent = cardsContent()
const currentRecipeID = window.location.href.split('/').at(-1)
const RecipeContent  = fullCardsContent.find(item => item.id == currentRecipeID)

export default function SingleRecipe() {
  const handleDelete = (e) => {
		sessionStorage.removeItem(`title-${RecipeContent.id}`)
		sessionStorage.removeItem(`subtitle-${RecipeContent.id}`)
		sessionStorage.removeItem(`body-${RecipeContent.id}`)
    
    window.location.href = "http://localhost:3000/recipes";
	}

  return (
    <>
        <Card title={RecipeContent.title} subtitle={RecipeContent.subtitle} body={RecipeContent.body} />
		   <button id="deleteBtn" onClick={handleDelete}>Delete</button>
    </>
  )
}

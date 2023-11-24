import './RecipeCard.css'

interface Recipe {
	title: string
	image: string
}

function RecipeCard(props: { recipe: Recipe }) {
  return (
    <>
		<div className='card' >
			<h3 className='recipe-title'>{props.recipe.title}</h3>
			<img className='recipe-img' src='/sous-chef.jpeg' width='200' height='200' alt='recipe image' />
		</div>

    </>
  )
}

export default RecipeCard

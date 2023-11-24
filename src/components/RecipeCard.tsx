import './RecipeCard.css'

interface Recipe {
	title: string
	image: string
	category: string
	time: string
}

function RecipeCard(props: { recipe: Recipe }) {
  return (
    <div className='card-container'>
		<div className='card' >
			<h3 className='recipe-title'>{props.recipe.title}</h3>
			<p className='recipe-time'>{props.recipe.time}</p>
			<img className='recipe-img' src='/sous-chef.jpeg' width='300' height='400' alt='recipe image' />
		</div>

    </div>
  )
}

export default RecipeCard

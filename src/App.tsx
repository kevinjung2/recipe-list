import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react';
// import RecipeCard from './components/RecipeCard'

// const recipes = [
// 	{
// 		title: "Chicken Tetrazinni",
// 		image: "sous-chef.jpeg",
// 	},
// 	{
// 		title: "Apple Pie",
// 		image: "sous-chef.jpeg",
// 	},
// 	{
// 		title: "Mashed Potatoes",
// 		image: "sous-chef.jpeg",
// 	},
// 	{
// 		title: "Ceasar Salad",
// 		image: "sous-chef.jpeg",
// 	},
// 	{
// 		title: "Chicken Parmesean",
// 		image: "sous-chef.jpeg",
// 	},
// 	{
// 		title: "Scalloped Potatoes",
// 		image: "sous-chef.jpeg",
// 	},
// 	{
// 		title: "Grilled Asparagus",
// 		image: "sous-chef.jpeg",
// 	},
// ]

const categories = [
	"Breakfast",
	"Soups",
	"Dessert",
	"Breads",
	"Sides"
]

function App() {
	const [category, setCategory] = useState("Breakfast");
	return (
		<>
			<Navbar categories={categories} selectedCategory={category} setSelectedCategory={setCategory}/>
			{/* <div className='card-container'>
				{recipes.map(rec => {return <RecipeCard recipe={rec}/>})}
			</div> */}
		</>
	)
}

export default App

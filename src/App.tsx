import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react';
import RecipeCard from './components/RecipeCard'


const recipes = [
	{
		title: "Chicken Tetrazinni",
		image: "sous-chef.jpeg",
		category: "Breakfast",
		time: "35 minutes"
	},
	{
		title: "Apple Pie",
		image: "sous-chef.jpeg",
		category: "Breakfast",
		time: "35 minutes"
	},
	{
		title: "Mashed Potatoes",
		image: "sous-chef.jpeg",
		category: "Breakfast",
		time: "35 minutes"
	},
	{
		title: "Ceasar Salad",
		image: "sous-chef.jpeg",
		category: "Soups",
		time: "35 minutes"
	},
	{
		title: "Chicken Parmesean",
		image: "sous-chef.jpeg",
		category: "Soups",
		time: "35 minutes"
	},
	{
		title: "Scalloped Potatoes",
		image: "sous-chef.jpeg",
		category: "Breads",
		time: "35 minutes"
	},
	{
		title: "Grilled Asparagus",
		image: "sous-chef.jpeg",
		category: "Breads",
		time: "35 minutes"
	},
]

const categories = [
	"Breakfast",
	"Soups",
	"Dessert",
	"Breads",
	"Sides"
]

function App() {
	const [category, setCategory] = useState("");
	return (
		<>
			<Navbar categories={categories} selectedCategory={category} setSelectedCategory={setCategory}/>
			<div className='grid-container'>
				{recipes.map(rec => {
					if (category == "" || rec.category === category) {
						return <RecipeCard recipe={rec}/>
					}
				})}
			</div>
		</>
	)
}

export default App

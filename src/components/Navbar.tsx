import './Navbar.css'

function Navbar(props: { categories: string[], selectedCategory: string, setSelectedCategory: (category: string) => void}) {
	const { categories, selectedCategory, setSelectedCategory } = props
	return (
		<>
			<div className='navbar-background'>
				<div className='nav-logo'>
					<img height='70px' className='logo' src='/chef-kev.webp'></img>
				</div>
				<div className='nav-start'>
					<h2 onClick={(e) => {e.preventDefault(); setSelectedCategory('')}}>ChefKev's Recipes</h2>
				</div>
				<div className='nav-end'>
					{categories.map(category => {
						if (selectedCategory === category) {
							return (<button className='nav-categories' id='selected'>{category}</button>)
						}
						else {
							return (<button className='nav-categories' onClick={(e) => {e.preventDefault(); setSelectedCategory(category)}}>{category}</button>)
						}
					})}
				</div>
			</div>

		</>
	)
}

export default Navbar

import './Navbar.css'
import useWindowSize from '../hooks/getWindowSize'

function Navbar(props: { categories: string[], selectedCategory: string, setSelectedCategory: (category: string) => void}) {
	const { categories, selectedCategory, setSelectedCategory } = props
	const window = useWindowSize()
	return (
		<>
			<div className='navbar-background'>
				<div className='nav-logo'>
					<img height='70px' className='logo' src='/chef-kev.webp'></img>
				</div>
				<div className='nav-start'>
					<h2 onClick={(e) => {e.preventDefault(); setSelectedCategory('')}}>ChefKev's Recipes</h2>
				</div>
				{window.width > 1100 ?
				<div className='nav-end'>
					{categories.map(category => {
						if (selectedCategory === category) {
							return (<button className='nav-categories' id='selected'>{category}</button>)
						}
						else {
							return (<button className='nav-categories' onClick={(e) => {e.preventDefault(); setSelectedCategory(category)}}>{category}</button>)
						}
					})}
				</div> :
				<div className='hamburger'></div>
				}
			</div>

		</>
	)
}

export default Navbar

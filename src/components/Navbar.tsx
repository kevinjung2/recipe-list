import './Navbar.css'
import useWindowSize from '../hooks/getWindowSize'
import { ChangeEvent } from 'react'

function Navbar(props: { categories: string[], selectedCategory: string, setSelectedCategory: (category: string) => void, search: string, setSearch: (searchString: string) => void}) {
	const { categories, selectedCategory, setSelectedCategory, search, setSearch } = props
	const window = useWindowSize()

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)

	}
	
	return (
		<>
			<div className='navbar-background'>
				<div className='nav-logo'>
					<img height='70px' className='logo' src='/chef-kev.webp'></img>
				</div>
				<div className='nav-start'>
					<h2 onClick={(e) => {e.preventDefault(); setSelectedCategory('')}}>ChefKev's Recipes</h2>
				</div>
				{window.width > 850 ?
				<div className='nav-search'>
					<svg className='search-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
						<g fill="#fae36b" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path></g></g>
					</svg>
					<input className='search' type='text' onChange={handleSearch} value={search}></input>				
				</div> :
				<div className='nav-search'>
					<svg className='search-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
						<g fill="#fae36b" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path></g></g>
					</svg>
				</div>
				}
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

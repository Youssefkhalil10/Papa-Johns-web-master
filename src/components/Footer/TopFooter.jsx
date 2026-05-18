import { NavLink } from 'react-router-dom'
import home from '../../assets/imgs/storefront.webp'

const media = [
    {
        home: home,
        title: 'papa Johns'
    }
]
export default function TopFooter() {
  return (
    <>
    <div className='w-full h-px bg-gray-300 mb-2'></div>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(3,_1fr)_1.5fr] gap-4 p-8 w-full">
  <div className='text-center'>
    <h2 className="font-bold p-2 text-lg">Our Company</h2>
    <ul className="text-gray-500 p-2">
      <NavLink to={'/about'}><li className="mb-2 hover:underline">About Papa Johns</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Investor Relations</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">The Sauce - News & Stories</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Careers</li></NavLink>
      <NavLink><li className="hover:underline">No Contact Delivery</li></NavLink>
    </ul>
  </div>

  <div className='text-center'>
    <h2 className="font-bold p-2 text-lg">Our Pizza</h2>
    <ul className="text-gray-500 p-2">
      <NavLink><li className="mb-2 hover:underline">Pizza Pages</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Nutritional Info</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Allergen Guide</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Ingredients</li></NavLink>
      <NavLink><li className="hover:underline">Quality Guarantee</li></NavLink>
    </ul>
  </div>

  <div className='text-center'>
    <h2 className="font-bold p-2 text-lg">Help</h2>
    <ul className="text-gray-500 p-2 hover:cursor-pointer">
      <NavLink><li className="mb-2 hover:underline">Customer Service</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Ordering</li></NavLink>
      <NavLink><li className="mb-2 hover:underline">Gift Cards</li></NavLink>
      <NavLink><li className="hover:underline">Store List</li></NavLink>
    </ul>
  </div>

  {media.map((item, i) => (
    <div
      key={i}
      className="flex items-center gap-4 border border-gray-300 p-4 rounded-md shadow-sm hover:cursor-pointer hover:shadow-md h-fit"
    >
      <img className="w-15 sm:w-30 md:w-20 h-20 object-contain" src={item.home} alt={item.title} />
      <p className="font-bold text-sm sm:text-xl break-words">OPEN A FRANCHISE</p>
    </div>
  ))}
</div>


      <div className='w-[98%] mx-auto h-px bg-gray-300'></div>
    </>
  )
}

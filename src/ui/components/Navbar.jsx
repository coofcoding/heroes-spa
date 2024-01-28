import { useNavigate, Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

    }

    return (
        <nav className="bg-white border border-gray-200 gap-4 flex justify-between items-center text-sm py-2 px-10 font-bold">

            <Link
                className='font-["Consolas"] text-lg flex items-center gap-3 text-blue-600 hover:text-blue-500 py-2'
                to="/"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>

                hero.library
            </Link>

            <form className='relative hidden md:block w-96'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-600 border border-gray-300 outline-none rounded-lg ring-1 ring-white bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            </form>

            <div className='flex gap-3'>
                <NavLink
                    className={({ isActive }) => `border py-2 px-6 w-24 text-center rounded-full hover:border-blue-500 hover:text-blue-600 ${(isActive) ? 'text-blue-600 border-blue-500 bg-blue-100 shadow-md shadow-blue-200' : 'text-slate-400 border-slate-300'}`}
                    to="/marvel"
                >
                    marvel
                </NavLink>

                <NavLink
                    className={({ isActive }) => `border py-2 px-6 w-24 text-center rounded-full hover:border-blue-500 hover:text-blue-600 ${(isActive) ? 'text-blue-600 border-blue-500 bg-blue-100 shadow-md shadow-blue-200' : 'text-slate-400 border-slate-300'}`}
                    to="/dc"
                >
                    dc
                </NavLink>

                {/* Dropdown menu */}
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="./src/assets/mylogo.png" alt="user photo" />
                    </button>
                    {/* Dropdown menu */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900">Kevin Lopez</span>
                            <span className="block text-sm  text-gray-500 truncate">coofcoding@gmail.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="bg-white border border-gray-200 gap-4 flex justify-between items-center text-base py-2 px-10 font-semibold">

            <Link
                className='font-["Consolas"] text-lg flex items-center gap-3 text-blue-600 hover:text-blue-500 py-2'
                to="/"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>

                hero.library
            </Link>

            <div className='flex gap-3'>
                <NavLink
                    className={ ({isActive}) => `border border-slate-300 py-2 px-6 w-32 text-center rounded-full hover:border-blue-500 hover:text-blue-600 ${(isActive) ? 'text-blue-600 border-blue-500 bg-blue-100 shadow-md shadow-blue-200' : 'text-slate-400'}` }
                    to="/marvel"
                >
                    marvel
                </NavLink>

                <NavLink
                    className={ ({isActive}) => `border border-slate-300 py-2 px-6 w-32 text-center rounded-full hover:border-blue-500 hover:text-blue-600 ${(isActive) ? 'text-blue-600 border-blue-500 bg-blue-100 shadow-md shadow-blue-200' : 'text-slate-400'}` }
                    to="/dc"
                >
                    dc
                </NavLink>
                <Link
                    className="border border-red-500 py-2 px-6 w-32 text-center rounded-full text-red-500 hover:bg-red-100"
                    to="/login"
                >
                    logout
                </Link>
            </div>
        </nav>
    )
}
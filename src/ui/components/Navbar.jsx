import { useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const Navbar = () => {

    const [search, setSearch] = useState('');

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (search.length <= 2) {
            MySwal.fire({
                icon: "error",
                title: "Oh, oh!",
                text: "Por favor escriba por lo menos una palabra",
                showConfirmButton: false,
                timer: 3000
            })

            return;
        };
    }

    const onFormChange = ({ target }) => {
        setSearch(target.value);
    }

    return (
        <nav className="bg-white border border-gray-200 gap-4 flex justify-between items-center text-sm py-2 px-10 font-bold">

            <Link
                className='font-["Consolas"] text-lg flex items-center gap-3 text-indigo-600 hover:text-indigo-500 py-2'
                to="/"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>

                hero.library
            </Link>

            <form
                className='relative hidden md:block w-96'
                onSubmit={handleSubmit}
            >
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-600 border border-gray-300 outline-none rounded-lg ring-1 ring-white bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search..."
                    value={search}
                    onChange={onFormChange}
                />
            </form>

            <div className='flex gap-3'>
                <NavLink
                    className={({ isActive }) => `border py-2 px-6 w-24 text-center rounded-md hover:border-indigo-500 hover:text-indigo-600 ${(isActive) ? 'text-indigo-600 border-indigo-500 bg-indigo-200 shadow-md shadow-indigo-200' : 'text-slate-400 border-slate-300'}`}
                    to="/marvel"
                >
                    marvel
                </NavLink>

                <NavLink
                    className={({ isActive }) => `border py-2 px-6 w-24 text-center rounded-md hover:border-indigo-500 hover:text-indigo-600 ${(isActive) ? 'text-indigo-600 border-indigo-500 bg-indigo-200 shadow-md shadow-indigo-200' : 'text-slate-400 border-slate-300'}`}
                    to="/dc"
                >
                    dc
                </NavLink>

                {/* Dropdown menu */}
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="/assets/mylogo.png" alt="user photo" />
                    </button>
                    {/* Dropdown menu */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900">Kevin Lopez</span>
                            <span className="block text-sm  text-gray-500 truncate">coofcoding@gmail.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={ handleLogout }>Sign out</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
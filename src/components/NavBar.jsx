import React, { useEffect, useState} from 'react'
import Nav from './ui/Nav';
import { Link } from 'react-router-dom';

function NavBar({setSearch}) {

    const [menuCategoriess, setmenuCategoriess] = useState(false);
    const [categoriess, setCategoriess] = useState([]);
    const [Menu, setMenu] = useState(false)

    useEffect(() => {
        const categories = document.getElementById('categories');
        categories.addEventListener('mouseover', function() {
            const menu = document.getElementById('menuCategorias');
            menu.classList.remove('hidden');
            setmenuCategoriess(true)
        });
    
        categories.addEventListener('mouseout', function() {
            const menu = document.getElementById('menuCategorias');
            menu.classList.add('hidden');
            setmenuCategoriess(false)
        }); 

        categoriesMovies()
    }, []);

    const keyApi = import.meta.env.VITE_API_KEY;

    const handleCategoryClick = async(category) => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${keyApi}&language=es-MX&with_genres=${category.id}`);
            const result = await response.json();
            setSearch(prev => ({ ...prev, categories: [category] }));
            console.log(category.id)
        }

        catch(ex) {
            console.log("Ha ocurrido un error: ", ex)
        }
    };

    const categoriesMovies = async() => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${keyApi}&language=es-MX`)
            const result = await response.json()
            setCategoriess(result.genres)
        }

        catch(ex) {
            console.log(ex)
        }

    }

    const handleResetSearch = () => {
        setSearch({ text: '', categories: [] });
        navigate('/');
    };


  return (
    <section className='w-full h-16 flex flex-row justify-center font-Poppins text-lg fixed z-50 bg-Fondo'>
            {/* Contenedor NavBar */}
        <div className='w-full lg:w-11/12 xl:w-8/12 h-full flex flex-row text-slate-200 justify-between px-5 lg:px-0 lg:justify-around items-center'>
            <span className='text-3xl font-semibold absolute z-50 lg:static'>PelisDev</span>
            
                {/* Contenedor Nav */}
            <div>
                <ul className='lg:flex lg:flex-row justify-around items-center gap-10 lg:gap-20 hidden'>
                    <Nav link="/" text="Inicio" onClick={handleResetSearch}/>
                    <li className='relative' id='categories'>
                        <Link to="/" className='hover:text-blue-500 py-3 flex items-center gap-1' onClick={handleResetSearch}>Categorías {iconDown}</Link>
                        <div className={`${menuCategoriess ? 'h-fit' : 'h-0'} absolute z-50 mt-0 w-96 bg-slate-800 shadow-md rounded-md transition-all duration-200 overflow-hidden flex flex-col justify-center`} id='menuCategorias'>
                            <ul className={`${!menuCategoriess && 'hidden'}  gap-5 p-3 grid grid-cols-2 cursor-pointer`}>
                            {categoriess.map((category)=> (
                                    <Nav key={category.id} link={() => setSearch(category.name)} text={category.name} onClick={() => handleCategoryClick(category)}/>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Contenedor Nav Movil*/}
            <div className={`${Menu ? 'w-full sm:w-96 ' : 'w-0'} absolute top-0 right-0 h-fit flex flex-col items-center bg-gray-950 rounded-md shadow-md overflow-hidden shadow-slate-900 transition-all duration-300`}>
                <div className={`${!Menu && 'hidden'} flex flex-col w-full`}>
                    <div className='w-full flex justify-end items-center pr-5 pt-2'>
                        <button className='hover:text-blue-500 hover:transition-all duration-300' onClick={() => setMenu(false)}>
                            {iconCloseMenu}
                        </button>
                    </div>
                    <ul className='flex flex-col items-center pb-5 lg:hidden divide-y divide-slate-900 w-full '>
                        <div className='relative mt-8 mb-3'>
                            <input type="search" name="search" id="search" className='w-80 rounded-full px-4 py-2 bg-blue-950 border border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:transition-all duration-300' placeholder='Buscar...'
                                onChange={(e) => setSearch({ text: e.target.value, categories: [] })} />
                            <button className='p-1'>
                                {iconSearch}
                            </button>
                        </div>
                        <Nav link="/" text="Inicio" style="w-full flex justify-center py-2" onClick={handleResetSearch} />
                        <Nav link="/" text="Peliculas" style="w-full flex justify-center items-center py-2" onClick={handleResetSearch} />
                        <li className='relative w-full flex flex-col items-center py-4 divide-y divide-slate-900' id='categories'>
                            <Link to="/" className='hover:text-blue-500 flex items-center -mt-2' onClick={handleResetSearch}>Categorías</Link>
                            <div className='w-full mt-2'>
                                <ul className='grid grid-cols-2 gap-4 pt-2 px-3 justify-items-center'>
                                    {categoriess.map((category) => (
                                        <Nav key={category.id} link="/" text={category.name} onClick={() => handleCategoryClick(category)} />
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

                {/* Contenedor Search */}
            <div className='relative hidden lg:flex'>
                <input type="search" name="search" id="search" className='w-60 rounded-full px-4 py-1 bg-blue-950 border border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:transition-all duration-300' placeholder='Buscar...' 
                onChange={(e) => setSearch(prev => ({ ...prev, text: e.target.value }))}/>
                <button className='p-1'>
                    {iconSearch}
                </button>
            </div>

                {/* Contenedor abrir menu */}
            <button className='visible lg:hidden hover:text-blue-500 hover:transition-all duration-300' onClick={() => setMenu(true)}>
                {iconMenu}
            </button>


        </div>
    </section>
  )
}

const iconSearch = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-3 lg:top-2 right-5 hover:text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

const iconDown = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

const iconMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const iconCloseMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>





export default NavBar

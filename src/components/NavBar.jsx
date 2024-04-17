import React, { useEffect, useState } from 'react'

function NavBar() {

    const [menuCategoriess, setmenuCategoriess] = useState(false)

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
    }, [])
    

    

  return (
    <section className='w-full h-14 flex flex-row justify-center font-Poppins text-lg'>
            {/* Contenedor NavBar */}
        <div className='w-8/12 h-full flex flex-row text-slate-200 justify-around items-center'>
            <span className='text-3xl font-semibold'>PelisDev</span>

                {/* Contenedor Nav */}
            <div>
                <ul className='flex flex-row justify-around items-center gap-20'>
                    <li><a href="" className='hover:text-blue-500'>Inicio</a></li>
                    <li><a href="" className='hover:text-blue-500'>Peliculas</a></li>
                    <li className='relative' id='categories'>
                        <a href="" className='hover:text-blue-500 py-3 flex items-center gap-1'>Categorías {iconDown}</a>
                        <div className={`${menuCategoriess ? 'h-40' : 'h-0'} absolute mt-0 w-40 bg-slate-800 shadow-md rounded-md transition-all duration-200 overflow-hidden flex flex-col justify-center`} id='menuCategorias'>
                            <ul className={`${!menuCategoriess && 'hidden'} flex flex-col gap-3 px-3`}>
                                <li><a href="" className='hover:text-blue-500'>dasd</a></li>
                                <li><a href="" className='hover:text-blue-500'>asda</a></li>
                                <li><a href="" className='hover:text-blue-500'>asdsa</a></li>
                                <li><a href="" className='hover:text-blue-500'>asda</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='relative'>
                <input type="search" name="search" id="search" className='w-60 rounded-full px-4 py-1 bg-blue-950 border border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:transition-all duration-300' placeholder='Buscar...' />
                <button className='p-1'>
                    {iconSearch}
                </button>
            </div>
        </div>
    </section>
  )
}

const iconSearch = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-2 right-5 hover:text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

const iconDown = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>



export default NavBar

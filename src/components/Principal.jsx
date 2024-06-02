import React, {useEffect, useState} from 'react'
import CardMovie from './ui/CardMovie'
import { Link, useParams } from 'react-router-dom'

function Principal({search}) {
    const [Data, setData] = useState([])
    const { pageNumber } = useParams();
    const page = parseInt(pageNumber) || 1;
    const nextPage = page + 1;
    const previousPage = page> 1 ? page - 1 : 1;

    const CallApi = async() => {
        try{
            const response = await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=959df7316541f78819dc72ef1dd3afc2&language=es-MX&page=${page}`);
            const result = await response.json()
            setData(result.results)
        }
        catch(ex){
            console.log(ex)
        }
    };

    useEffect(() => {
        CallApi();
    }, [page]);

    
    const filteredData = Data.filter(movie => {
        const matchesSearch = search.text ? movie.title.toLowerCase().includes(search.text.toLowerCase()) : true;
        const matchesCategory = search.categories && search.categories.length > 0 ? search.categories.some(category => movie.genre_ids.includes(category.id)) : true;
        return matchesSearch && matchesCategory;
    });
  

  return (
    
    <section className='w-full min-h-screen flex flex-col justify-around items-center font-Poppins text-base pt-16'>
        <div className='w-full lg:w-11/12 xl:w-8/12 h-full flex flex-wrap gap-4 md:gap-12 justify-evenly sm:justify-center py-10 px-4 md:p-10'>
            {filteredData.length === 0 ? (
                <p className='text-3xl text-slate-200'>No se encontraron películas.</p>
            ) : (
                filteredData.map((pelicula, index) => (
                    <CardMovie key={index} poster={pelicula.poster_path} title={pelicula.title} year={pelicula.release_date} idcard={pelicula.id} description={pelicula.overview} />
                ))
            )}
        </div>
        <div className='flex flex-row w-full lg:w-11/12 xl:w-6/12 gap-1 justify-center items-end pb-10'>
            <Link to={`/page/${previousPage}`} className='w-10 h-10 bg-slate-300 rounded-md flex justify-center items-center hover:bg-blue-500 hover:transition-all duration-300'>
                {iconBack}
            </Link>
            <Link to={`/page/${page}`} className='w-10 h-10 bg-slate-300 rounded-md flex justify-center items-center hover:bg-blue-500 hover:transition-all duration-300'>
                <span>{page}</span>
            </Link>
            <Link to={`/page/${nextPage}`} className='w-10 h-10 bg-slate-300 rounded-md flex justify-center items-center hover:bg-blue-500 hover:transition-all duration-300'>
                {iconNext}
            </Link>
        </div>
    </section>
  )
}

const iconBack = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

const iconNext = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

export default Principal
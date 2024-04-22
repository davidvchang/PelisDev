import React, {useEffect, useState} from 'react'
import CardMovie from './ui/CardMovie'

function Principal({search}) {
    const [Data, setData] = useState([])

    const CallApi = async() => {
        try{
            const response = await fetch('http://api.themoviedb.org/3/movie/popular?api_key=959df7316541f78819dc72ef1dd3afc2&language=es-MX');
            const result = await response.json()
            setData(result.results)
        }
        catch(ex){
            console.log(ex)
        }
    };

    useEffect(() => {
        CallApi();
    }, []);
    

    // const filteredData = typeof search === 'string' ? Data.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())) : Data; //Con este funciona el buscar
    const filteredData = search ? search : Data //Con este funciona el categorias

  return (
    
    <section className='w-full min-h-screen flex flex-row justify-center items-center font-Poppins text-base pt-16'>
        <div className='w-full lg:w-11/12 xl:w-8/12 h-full flex flex-wrap gap-4 md:gap-12 justify-evenly sm:justify-center py-10 px-4 md:p-10'>
            {filteredData.length === 0 ? (
                <p className='text-3xl text-slate-200'>No se encontraron películas.</p>

                ) : (
                    filteredData.map((pelicula, index) => (
                        <CardMovie key={index} poster={pelicula.poster_path} title={pelicula.title} year={pelicula.release_date} idcard={pelicula.id} />
                ))
            )}
        </div>
    </section>
  )
}

export default Principal
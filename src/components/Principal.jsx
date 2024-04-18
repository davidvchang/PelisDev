import React, {useEffect, useState} from 'react'
import CardMovie from './ui/CardMovie'

function Principal() {
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
    }

    useEffect(() => {
        CallApi();
    }, []);
    

   

  return (
    <section className='w-full h-fit flex flex-row justify-center items-center font-Poppins text-base pt-16'>
        <div className='w-full lg:w-11/12 xl:w-8/12 h-full flex flex-wrap gap-4 md:gap-12 justify-evenly sm:justify-center py-10 px-4 md:p-10'>
            {Data.map((pelicula, index) => (
                <CardMovie key={index}poster={pelicula.poster_path} title={pelicula.title} year={pelicula.release_date} idcard={pelicula.id}/>   
            ))}
            
        </div>
    </section>
  )
}

export default Principal
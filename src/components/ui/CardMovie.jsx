import React, {useState} from 'react'

function CardMovie({title, poster, year, idcard, description}) {

    const [info, setInfo] = useState(false)

    const hoverInCard = () => {
        setInfo(true)
    }

    const hoverOutCard = () => {
        setInfo(false)
    }



  return (
    <div className='text-slate-200 max-w-40 md:max-w-52 flex flex-col gap-1 text-base relative'>
        <div className=' w-40 md:w-52 h-56 md:h-72 bg-slate-300 rounded-md overflow-hidden shadow-md shadow-slate-600'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster}/`} alt={`Portada ${title}`} className={`object-cover w-full h-full hover:brightness-50 hover:transition-all duration-300`} onMouseLeave={hoverOutCard} onMouseEnter={hoverInCard} id={idcard}/>
            <span className='absolute top-2 bg-blue-600 left-2 px-2 rounded-full text-sm pointer-events-none'>{year.substring(0, 4)}</span>

        </div>


        {info && (
            <div className={`${info ? 'visible' : 'hidden'} absolute z-50 top-28 left-20 w-auto max-h-fit p-4 flex flex-col gap-1 bg-slate-900 rounded opacity-85 pointer-events-none`}>
                <span className='text-start font-semibold'>{title}</span>
                <p className='text-wrap max-h-96 min-w-96 text-slate-100'>{description}</p>
            </div>
        )}

        

        <span className='text-center'>{title}</span>

    </div>
  )
}

export default CardMovie
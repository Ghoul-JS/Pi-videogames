import React from 'react'
import style from './Paginated.module.css'

export default function Paginated({changedPage, videogames, gamesPerPage, prevPage, nextPage, currentPage}) {
const numberPages = []

for(let i = 1; i<=Math.ceil(videogames / gamesPerPage); i++) {
    numberPages.push(i)
}

  return (
    <div className={style.pagination}>
      <span><button className={style.prevNext} onClick={prevPage}> &larr; </button></span>
        {
          numberPages && numberPages.map(num => (
              <button key={num} className={`${style.paginationButton} ${currentPage === num  && style.active}`} onClick={() => changedPage(num)}>{num}</button>
            ))
        }
      <span><button className={style.prevNext} onClick={nextPage}> &rarr; </button></span>
    </div>
  )
}
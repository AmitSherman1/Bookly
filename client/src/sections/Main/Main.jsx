import React, {useContext} from 'react'
import './main.css'
import BookGenreButton from '../../components/BookGenreButton/BookGenreButton.tsx'
import { AppContext } from '../../context/contextApp'

function Main() {

  const {allBooks} = useContext(AppContext)

  if(!allBooks){
    return <h1>Loading...</h1>
  }

  const sortedBooks = allBooks?.reduce((r, a) => {
    r[a.type] = r[a.type] || []
    r[a.type].push(a)
    return r
  }, Object.create(null))

  const sortedBooksArr = Object.entries(sortedBooks)

  return (
    <div className='mainSection'>
      {
        sortedBooksArr.map((bookGenre, index) => {
          return <BookGenreButton key={index} data={bookGenre} />
        })
      }
    </div>
  )
}

export default Main
import React, {useContext} from 'react'
import './booksBar.css'
import { AppContext } from '../../context/contextApp'
import BookItem from '../../components/BookItem/BookItem.tsx'

function BooksBar() {

  const {isBookBarOpen, setIsBookBarOpen, genreBooksBar} = useContext(AppContext)

  if(!isBookBarOpen){
    return null
  }

  return (
    <div className='booksBarSection'>
      <div className='booksBarMain'>
            <div className='booksBarExitButton' onClick={() => setIsBookBarOpen((prev) => !prev)} />
            <div className='booksBarBookContainer'>
              {
                genreBooksBar.map((book, index) => {
                  return <BookItem key={index} data={book} />
                })
              }
            </div>
        </div>
    </div>
  )
}

export default BooksBar
import React, {useContext} from 'react'
import './bookGenreButton.css'
import { AppContext } from '../../context/contextApp'

function BookGenreButton(props) {

  const {data} = props

  const [genreName, genreBooks] = data

  const {setIsBookBarOpen, setGenreBooksBar} = useContext(AppContext)

  const openGenreBooksBar = () => {
    setGenreBooksBar(genreBooks)
    setIsBookBarOpen((prev) => !prev)
  }

  return (
    <div className='bookGenreButtonMain' onClick={() => openGenreBooksBar()}>
        <h2 className='bookGenreButtonText'>{genreName}</h2>
    </div>
  )
}

export default BookGenreButton

import React, {createContext, useState, useEffect} from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {

    const {children} = props

    const [isCartBarOpen, setIsCartBarOpen] = useState(false)
    const [isBookBarOpen, setIsBookBarOpen] = useState(false)
    const [allBooks, setAllBooks] = useState()
    const [genreBooksBar, setGenreBooksBar] = useState()
    const [cart, setCart] = useState([])
    const [popupMessage, setPopupMessage] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/items")
        .then((res) => res.json())
        .then((data) => setAllBooks(data))
        .catch((error) => console.log(error))
    }, []);

    return(
        <AppContext.Provider
            value={{
                isCartBarOpen, 
                setIsCartBarOpen,
                isBookBarOpen, 
                setIsBookBarOpen,
                allBooks,
                genreBooksBar, 
                setGenreBooksBar,
                setCart,
                cart,
                popupMessage, 
                setPopupMessage
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
import React from 'react';
import './App.css';
import { AppProvider } from './context/contextApp';
import BooksBar from './sections/BooksBar/BooksBar.tsx';
import CartBar from './sections/CartBar/CartBar.tsx';
import Footer from './sections/Footer/Footer';
import Main from './sections/Main/Main';
import TopBar from './sections/TopBar/TopBar';
import PopUpMessage from './sections/PopUpMessage/PopUpMessage.tsx';


function App() {
  
  return (
    <AppProvider>   
      <TopBar />
      <Main />
      <Footer />
      <CartBar />
      <BooksBar />
      <PopUpMessage />
    </AppProvider>
  );
}

export default App;

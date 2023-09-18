import React from 'react'
import "./App.css"
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import Action from './pages/Action';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    {/* components start */}
    <Header/>
    {/* components end */}

    {/* pages start */}
    <Home/>
    <Books/>
    <Action/>
    {/* pages end */}

    {/* components start */}
    <Footer/>
    {/* components end */}
    </>
  );
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import BooksView from '../features/books/BooksView'
import AddBook from '../features/books/AddBook'
import Footer from '../layouts/Footer'
import EditBook from '../features/books/EditBook'

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/show-books' element={<BooksView />} />
                    <Route path='/add-books' element={<AddBook />} />
                    <Route path='/edit-book' element={<EditBook />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default Index
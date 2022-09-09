import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editBook } from '../../redux/bookSlice';

export default function EditBook() {
    const params = useParams();
    const books = useSelector(store => store.book);
    const dispatch = useDispatch()
    const editingBook = books.filter(book => book.id === params.id);
    const {book_name , author , release_date} = editingBook[0]
    const navigate = useNavigate();
    const [book, setbook] = useState({
        book_name: book_name,
        author: author,
        release_date: release_date
    })

    function getValue(e) {
        let myBook = { ...book };
        myBook[e.target.name] = e.target.value;
        setbook(myBook);
    }

    function editValues(e) {
        e.preventDefault();
        dispatch(editBook({
            id:params.id,
            book_name:book.book_name,
            author:book.author,
            release_date:book.release_date
        }))
        navigate('/');
        setbook({ book_name: '', author: '', release_date: '' });

    }
    return (
        <>
            <div className="col-md-6 mx-auto">
                <div className="addbook py-5">
                    <h1 className='text-danger text-center'>Editing Books</h1>
                    <div className="addForm">
                        <form onSubmit={editValues}>
                            <div className="inp-gp my-4">
                                <label htmlFor="book_name">book_name:</label>
                                <input onChange={getValue} value={book.book_name} className='form-control my-2' type="text" name='book_name' id='book_name' />
                            </div>
                            <div className="inp-gp my-4">
                                <label htmlFor="author">author:</label>
                                <input onChange={getValue} value={book.author} className='form-control my-2' type="text" name='author' id='author' />
                            </div>
                            <div className="inp-gp my-4">
                                <label htmlFor="release_date">release_date:</label>
                                <input onChange={getValue} value={book.release_date} className='form-control my-2' type="number" name='release_date' id='release_date' />
                            </div>
                            <button className='btn btn-info'>Update Book</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

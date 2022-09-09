import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../redux/bookSlice';
export default function AddBook() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [book, setbook] = useState({
        book_name: '',
        author: '',
        release_date: ''
    })

    function getValue(e) {
        let myBook = { ...book };
        myBook[e.target.name] = e.target.value;
        setbook(myBook);
    }

    function addValues(e) {
        e.preventDefault();
        if (book.book_name.length !== 0 && book.author.length !== 0 && book.release_date.length !== 0) {
            // console.log(book);
            dispatch(addBook({
                id: uuidv4(),
                book_name:book.book_name,
                author:book.author,
                release_date:book.release_date
            }))
            navigate('/');
            setbook({ book_name: '', author: '', release_date: '' });
        }
        else {
            alert('please fill all inputs')
        }
    }

    return (
        <>
            <div className="col-md-6 mx-auto">
                <div className="addbook py-5">
                    <h1 className='text-danger text-center'>Crud System for Books</h1>
                    <div className="addForm">
                        <form onSubmit={addValues}>
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
                            <button className='btn btn-info'>Add Book</button>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from '../../redux/bookSlice';
import { store } from '../../redux/store'
export default function Home() {

    const book = useSelector(store => store.book);
    const dispatch = useDispatch();
    function removeBook(id) {
        dispatch(deleteBook({ id }))
    }
    return (
        <>
            <div className="col-md-10 mx-auto">
                <div className="viewMode">
                    <div className="addBtn my-5 text-center">
                        <Link to='addbook' className='btn btn-info'>
                            Add Book
                        </Link>
                    </div>
                    {
                        book.length ?
                            <div className="addTable overflow-auto">
                                <table className='table table-light table-bordered text-center text-capitalize'>
                                    <thead className='text-dark'>
                                        <tr>
                                            <th>Book Name</th>
                                            <th>Author</th>
                                            <th>Release Date</th>
                                            <th>Deleting</th>
                                            <th>Updating</th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-success'>
                                        {
                                            book.map((item) =>
                                                <tr key={item.id}>
                                                    <td>{item.book_name}</td>
                                                    <td>{item.author}</td>
                                                    <td>{item.release_date}</td>
                                                    <td>
                                                        <button onClick={() => removeBook(item.id)} className='btn text-warning'>
                                                            <i className='fas fa-trash-can'></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <Link to={`editbook/${item.id}`} className='btn text-danger'>
                                                            <i className='fas fa-pen'></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>

                                </table>
                            </div>
                            : 
                            <p className='text-center text-danger'>No books Added</p>
                    }

                </div>

            </div>


        </>
    )
}

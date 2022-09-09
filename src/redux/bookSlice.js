import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: "1", book_name: 'book1', author: 'alfred', release_date: 1884 },
    { id: "2", book_name: 'book2', author: 'alfred1', release_date: 1885 }
]

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        editBook: (state, action) => {
            const { id, book_name, author, release_date } = action.payload;
            const editingBook = state.find(book => book.id === id);
            if (editingBook) {
                editingBook.book_name = book_name;
                editingBook.author = author;
                editingBook.release_date = release_date;
            }
        },
        deleteBook: (state, action) => {
            const { id } = action.payload;
            const deletingBook = state.find(book => book.id === id);
            if (deletingBook) {
                return state.filter(book => book.id !== id)
            }
        }
    }
})

export const { addBook, editBook , deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
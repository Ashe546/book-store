/* eslint-disable */
const ADD_BOOK = 'ADDBOOK';
const REMOVE_BOOK = 'REMOVEBOOK';

let initialBooks = [
    {
        id: '1',
        title: 'In Search of Lost Time ',
        author: 'Marcel Proust',
      },
      {
        id: '2',
        title: 'Harry Potter',
        author: 'J.K. Rowling',
      },
      {
        id: '3',
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
      },
]

const bookReduser = (state = initialBooks, action) => {
  switch(action.type) {
    case ADD_BOOK:
        return [
            ...state, action.payload,
        ];
    case REMOVE_BOOK:
        return state.filter((book) => book.id !== action.payload);
    default:
        return state;  
  } 
}

const addAction = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook
});

const revAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id
});

export default bookReduser;
export { addAction, revAction};

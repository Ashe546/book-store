const ADD_BOOK = 'ADDBOOK';
const REMOVE_BOOK = 'REMOVEBOOK';

let initialBooks = []

const bookReduser = (state = initialBooks, action) => {
    switch(action.type) {
      case ADD_BOOK:
          return [
              ...state,
              {
                  id: action.book.id,
                  title: action.book.title,
                  author: action.book.author,
              },
          ];
      case REMOVE_BOOK:
          return state.filter((book) => book.id !== action.id);
      default:
          return state;  
    } 
  }
  
  const addAction = (id, title, author) => ({
    type: ADD_BOOK,
    book: {
      id,
      title,
      author, 
      }
  });
  
  const revAction = (id) => ({
    type: REMOVE_BOOK,
    id
  });

  export default bookReduser;
export { addAction, revAction};

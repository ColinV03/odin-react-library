import React from "react"
//added functionality with props passed through, destructured object into 
// multiple variables to keep consistency throughout the app. Imported 
// inside of the Form.js file. 

function BookCard(props) {
    const { title, author, pages, read, index, library, changeReadStatus, deleteBook} = props
    
    let changeRead = () => {
        changeReadStatus(index, library)
    }

    
    let deleteSelectedBook = () => {
      deleteBook(index, library);
    };
  
    return (
      <div className="bookCard">
        <h3>Book: {title}</h3>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p>{read ? " You've Read This" : " Haven't Completed Yet!"}</p>
        <button onClick={changeRead}>Change Read</button>
        <p> Id is: {index}</p>
        <button onClick={deleteSelectedBook}>X</button>
        <br />
      </div>
    );

}

export default BookCard
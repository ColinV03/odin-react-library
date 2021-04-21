import React, { Component } from 'react';
import BookCard from "./BookCard"


class Form extends Component {
      state = {
        book:{ 
          title: "",
          author: "",
          pages: '',
          read: false,
          key: 0
          },
        library: [],
        completed: [],
        }
    
//general handler for changes, using Event target and defining based off of name, to update whichever key:value pair is currently being modified.
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

//checkbox specific check for read input to be able to be addressed. 
    handleCheck = (e) => {
        this.setState({
          read: !this.state.read,
        });
    }

//pushing the object to a list in the array held within state. 
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
          title: "",
          author: "",
          pages: '',
          read: false,
          key: 0,
          library: [...this.state.library, this.state]
        })
    }

  changeReadStatus = (index, library) => {
    let target = library[index]
    target.read = !target.read
    this.setState({
      [library[index].read]: target
    })
    console.log(` The book to be accessed is: ${library[index].title} at location: ${library[index]} and the read status is: ${library[index].read}`)
    
  }

  deleteBook = (index, library) => {
    let copiedLibrary = [...library];
    let completedItem = copiedLibrary.splice(index, 1);
    this.setState({
      library: [...copiedLibrary],
      completed: [...this.state.completed, completedItem],
    });

    console.log(`The Book to be deleted is: ${library[index].title}`)
    
  }



  render() {
    // visualized uses the JSX features to be able to store the return values of the map method results on the array within the localized state. 
    
    const { library } = this.state;
    const visualized = library.map((book, index) => {
     
      return (
        <BookCard
          
          title={book.title} 
          author={book.author}
          pages={book.pages} 
          read={book.read}
          index={index}
          key={index}
          library={library}
          changeReadStatus={this.changeReadStatus}
          deleteBook={this.deleteBook}
      
          />
      );
    });


    //testing purposes
    console.log(this.state);

        return (
          <div>
            <form onSubmit={() => { this.handleSubmit() }}>
              {/* individual input field contains placeholders, name for state management, and an onchange listener for input fields.  */}
              <input
                placeholder={"Title"}
                name="title"
                onChange={(e) => this.handleChange(e)}
                value={this.state.title}
              /><br />
              <input
                placeholder={"Author"}
                name="author"
                onChange={(e) => this.handleChange(e)}
                value={this.state.author}
              /><br />
              <input
                placeholder={"Pages"}
                name="pages"
                onChange={(e) => this.handleChange(e)}
                value={this.state.pages}
              /><br />
              Read?
              <input
                type="checkbox"
                name="read"
                onChange={(e) => this.handleCheck(e)}
                value={this.state.read}
              /><br />
              <button
                onClick={(e) => {
                  this.handleSubmit(e);
                }}
              >
                Submit
              </button>
            </form>
         
         {/*JSX for mapped array values.   */}
          {visualized}
          </div>
        );
    }
}
 
export default Form;
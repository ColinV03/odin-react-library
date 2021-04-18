import React, { Component } from 'react';
import BookCard from "./BookCard"


class Form extends Component {
      state = {
        book:{ 
          title: "",
          author: "",
          pages: '',
          read: false,
          },
          library: [],
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
            library: [...this.state.library, this.state]
        })
    }





  render() {
    // visualized uses the JSX features to be able to store the return values of the map method results on the array within the localized state. 
    const visualized = this.state.library.map(e => {
      const { title, author, pages, read } = e;
      return (
        <BookCard 
          title={title} 
          author={author}
          pages={pages} 
          read={read}/>
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
              />
              <input
                placeholder={"Author"}
                name="author"
                onChange={(e) => this.handleChange(e)}
              />
              <input
                placeholder={"Pages"}
                name="pages"
                onChange={(e) => this.handleChange(e)}
              />
              Read?
              <input
                type="checkbox"
                name="read"
                onChange={(e) => this.handleCheck(e)}
              />
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
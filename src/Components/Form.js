import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            pages: '',
            read: false
            
        }
    }

    HandleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    HandleCheck(e) {
        this.setState({
          read: !this.state.read,
        });
    }







    render() {
        console.log(this.state)

        return (
          <div>
            <input
              placeholder={"Title"}
              name="title"
              onChange={(e) => this.HandleChange(e)}
            />
            <input
              placeholder={"Author"}
              name="author"
              onChange={(e) => this.HandleChange(e)}
            />
            <input
              placeholder={"Pages"}
              name="pages"
              onChange={(e) => this.HandleChange(e)}
            />
            Read?
            <input type="checkbox" name="read" onChange={(e) => this.HandleCheck(e)} />
            <button>Submit</button>
          </div>
        );
    }
}
 
export default Form;
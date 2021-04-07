import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            pages: '',
            read: false,
            library: [],
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


    handleSubmit() {
        this.setState({
            library: this.state 
        })
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
            <button onClick ={(e) => {this.handleSubmit(e)}}>Submit</button>
          </div>
        );
    }
}
 
export default Form;
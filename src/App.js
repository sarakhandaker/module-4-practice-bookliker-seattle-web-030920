import React, { Component } from 'react'
import {
  Menu
} from "semantic-ui-react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import BookDetail from './BookDetail'


export class App extends Component {
  state={
    books: [],
    clicked:""
  }
  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(res=>res.json())
    .then(res=> this.setState({books:res}))
  }
  renderBooks=()=>{
    return this.state.books.map(book=> <Menu.Item as={"a"} onClick={e => this.handleClick(book)}>
      <Link to={`/books/${book.id}`}>{book.title}</Link>
      </Menu.Item>)
  }

  handleClick=(book)=>{
    this.setState({clicked: book})
  }

  render() {
    return (
      <div>
      <Router>
      <Menu inverted>
        <Menu.Item header><Link to="/">Bookliker</Link></Menu.Item>
        <Menu.Item header>
          <Link to="/books">All Books</Link>
        </Menu.Item>
      </Menu>
      <main>
        <Route path= "/books" render={ ()=> (<Menu vertical inverted>
          {this.renderBooks()}
        </Menu>)
        }/>
        <Route path= {`/books/:id`} render={ routerProps=> (this.state.books.length?<BookDetail {...routerProps} books={this.state.books}/>:null)
        }/>
    </main>
      </Router>
      </div>
    )
  }
}

export default App
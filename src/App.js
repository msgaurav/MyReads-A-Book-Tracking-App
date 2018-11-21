import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []   // To track books
  }

  componentDidMount() {
    this.refresh();
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
        this.refresh();
    });
  }

  refresh() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage books={this.state.books} moveShelf={this.moveShelf} />
        )} />

        <Route path="/search" render={() => (
          <SearchPage books={this.state.books} moveShelf={this.moveShelf} />
        )} />

      </div>
    );
  }
}

export default BooksApp;

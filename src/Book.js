import React, { Component } from 'react';

class Book extends Component {

    render() {

        let bookTitle = this.props.book.title;
        let bookAuthor = this.props.book.authors;
        let bookImage = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

        return(

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}")` }}></div>
                    
                    <div className="book-shelf-changer">
                        <select
                            onChange={(event) => this.props.moveShelf(
                                this.props.book, event.target.value
                            )}
                            value={this.props.currentShelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>

                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthor}</div>
            </div>
        );
    }
}

export default Book;

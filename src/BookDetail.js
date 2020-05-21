import React, { Component } from 'react'
import {
    Container,
    Header,
    Button,
    List,
    Image
  } from "semantic-ui-react";

  const emptyBook={title:"", img_url:"", description:""}

export class BookDetail extends Component {
    render() {
        const {books, match}=this.props
        const {id}=match.params
        let book
        if (books.length){
            book=books.find(book=> book.id==id)
        }
        else {
            book=emptyBook
        }
        console.log(books)
        return (
            <div>
               <Container text>
                    <Header>{book.title}</Header>
                    <Image
                        src={book.img_url}
                        size="small"
                    />
                    <p>{book.description}</p>
                    <Button
                        color="red"
                        content="Like"
                        icon="heart"
                        label={{
                            basic: true,
                            color: "red",
                            pointing: "left",
                            content: "2,048"
                        }}
                    />
                    <Header>Liked by</Header>
                    <List>
                        <List.Item icon="user" content="User name" />
                    </List>
                </Container>
            </div>
        )
    }
}

BookDetail.defaultProps={
    books: []
}

export default BookDetail

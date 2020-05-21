import React, { Component } from 'react'
import {
    Container,
    Header,
    Button,
    List,
    Image
  } from "semantic-ui-react";

export class BookDetail extends Component {
    render() {
        const {books, match}=this.props
        const {id}=match.params
        let book=books.find(book=> book.id==id)
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

export default BookDetail

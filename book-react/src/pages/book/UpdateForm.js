import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";

const UpdateForm = (props) => {

    const id = props.match.params.id;

    const [book,setBook] = useState({
        title:"",
        author:"",

    });

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]:e.target.value

        });

    };

    useEffect(()=> {
        fetch("http://localhost:8080/book/" + id
        )
            .then(res => res.json())
            .then(res => {
                setBook(res);
            });
    }, []);

    const submitBook = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/book/"+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }, body: JSON.stringify(book)
        }).then(res => {
            return res.json()
        })
            .then(res => {
                if (res != null) {
                    props.history.push("/book/"+id);
                } else {
                    alert("책 등록에 실패하였습니다.");
                }
            });
    }

    return (
        <div>
            <h1>
                책 수정하기
            </h1>
            <hr/>

            <Form onSubmit={submitBook}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title"
                    value={book.title}
                    />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author"
                    value={book.author}/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UpdateForm;
import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";

const SaveForm = (props) => {


    const [book,setBook] = useState({
        title:"",
        author:"",

    });

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]:e.target.value

        });

    }

    const submitBook = (e) =>  {
        e.preventDefault()
        fetch("http://localhost:8080/book",{
            method:"POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },body:JSON.stringify(book)
        }).then(res=> {
            console.log(1,res);
            return res.json()
        })
            .then(res=>{
            if(res != null){
                props.history.push("/");
            }else {
                alert("책 등록에 실패하였습니다.");
            }
            });
    }

    return (
            <Form onSubmit={submitBook}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title"/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author"/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    );
};

export default SaveForm;
import React, { useState } from 'react'
import Layout from '../../components/Layout'
// import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Form = styled.form`
display: flex;
flex-direction: column;
flex-wrap:wrap;
min-height:50vh;
padding-right:25%;
padding-left:25%;
justify-content:start;
align-items:center;
`

const Label = styled.label`
display: flex;
flex-direction: column;
flex-wrap:wrap;
width:100%;
justify-content:space-around;
align-items:center;
margin-bottom:20px;
font-size:20px;
`

const Input = styled.input`
margin-top:5px;
padding:10px;
width:100%;
border-radius: 5px;
border: none;
box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 0px rgba(154, 147, 140, 0.5);
&:focus{
    outline:none;
    box-shadow: inset 2px 2px 5px rgba(140, 153, 154, 1), 1px 1px 0px rgba(140, 153, 154, 1);
}
`

const Textarea = styled.textarea`
padding:10px;
margin-top:5px;
width:100%;
border-radius: 5px;
border: none;
resize:none;
min-height:250px;
box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 0px rgba(154, 147, 140, 0.5);
&:focus{
    outline:none;
    box-shadow: inset 2px 2px 5px rgba(140, 153, 154, 1), 1px 1px 0px rgba(140, 153, 154, 1);
}
`


const Button = styled.button`
padding: 5px 20px; 
font-size:20px;
background-color:#fff;
color:#877ae6;
border-radius: 20px;
border: 2px solid #877ae6;
cursor: pointer;
&:hover {
    color: blue;
    border: 2px solid blue;
}
`


const NewPost:React.FC = () => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const {addPost} = useActions()
    const router = useRouter()


    const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        }

    const handleChangeText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addPost(title,text)
        setText('')
        setTitle('')
        router.push('/')
    }

    return (
        <Layout>

        <Form onSubmit={handleFormSubmit}>
            <Label >Title <Input type="text" value={title} name='title' onChange={handleChangeTitle} placeholder='Your title'/></Label>
            <Label >Text post <Textarea value={text} name='text' onChange={handleChangeText} placeholder='Your message' ></Textarea></Label>
            <Button type="submit">Add post</Button>
        </Form>
        
      </Layout>
    )
}
export default NewPost
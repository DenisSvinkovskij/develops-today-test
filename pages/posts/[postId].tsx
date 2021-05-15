import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import React ,{ useEffect, useState } from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import styled from 'styled-components';
import {PostsActionTypes} from '../../types/postsTypes'
import { NextPage } from 'next'
import {wrapper} from '../../redux'
import axios from "axios";

const Container = styled.div`
position: relative;
padding-left:50px;
padding-right:50px;
text-align:center;
`

const List = styled.ul`
display: grid;
padding:0;
margin:0;
list-style:none;
grid-template-columns:1fr;
grid-gap:20px;
`
const Button = styled.button`
position: absolute;
left: 0;
top:0;
padding: 5px 20px; 
font-size:20px;
background-color:#fff;
color:#ff3d3d;
border-radius: 20px;
border: 2px solid #ff3d3d;
cursor: pointer;
&:hover {
    color: red;
    border: 2px solid red;
}
`
const Textarea = styled.textarea`
padding:10px;
margin-top:5px;
width:100%;
border-radius: 5px;
border: none;
resize:none;
min-height:100px;
box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 0px rgba(154, 147, 140, 0.5);
&:focus{
    outline:none;
    box-shadow: inset 2px 2px 5px rgba(140, 153, 154, 1), 1px 1px 0px rgba(140, 153, 154, 1);
}
`
const Label = styled.label`
margin-top:20px;
display: flex;
flex-direction: column;
flex-wrap:wrap;
width:100%;
justify-content:space-around;
align-items:center;
margin-bottom:20px;
font-size:20px;
`

const CommentButton = styled.button`
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

const PagePostId:NextPage = ()=> {
    const router = useRouter()
    const { postId } = router.query
    const { postById } = useTypedSelector(state => state.posts)
    const {clearPostByIdPage,deletePost,addComment} = useActions()
    const [comment, setComment] = useState('')

    useEffect(() => {

        return ()=>{
            clearPostByIdPage()
        }
    }, [])
    
    const handleDeletePost = (e:React.MouseEvent<HTMLButtonElement>) =>{
        deletePost(String(postId))
        router.push('/')
    }

    const handleChangeComment = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const handleAddComment = (e:React.MouseEvent<HTMLButtonElement>)=>{
        addComment(String(postId),comment)
        setComment('')
    }

    return (
    <Layout>
        <Container>
            <Button type='button' onClick={handleDeletePost}>Delete this post</Button>
            <h2>{postById.title}</h2>
            <p>{postById.body}</p>
            <h3>Comments</h3>
            {postById.comments.length === 0 
            ? <p>No one comment for now</p>
            : <List> {postById.comments.map((com,idx) =><li key={com.id}>{idx+1}. {com.body}</li>)}</List>}

            <Label >Enter your comment<Textarea value={comment} name='comment' onChange={handleChangeComment} placeholder='Your comment' ></Textarea></Label>
            <CommentButton type="button" onClick={handleAddComment}>Add comment</CommentButton>
        </Container>
    </Layout>
    )
}



PagePostId.getInitialProps = async({store, query}) => {
  
    try {
        store.dispatch({type: PostsActionTypes.FETCH_POST_BY_ID})
        const response = await axios.get(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`)
        console.log(response);
        
        store.dispatch({type: PostsActionTypes.FETCH_POST_BY_ID_SUCCESS, payload: response.data})

    } catch (e) {
        store.dispatch({
            type: PostsActionTypes.FETCH_POST_BY_ID_ERROR,
            payload: e.message
        })
    }
    return {custom: 'custom'}; 
  };
  
  
  export default wrapper.withRedux(PagePostId)
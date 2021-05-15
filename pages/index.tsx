import Layout from '../components/Layout'
import React from 'react'
import {useTypedSelector} from '../hooks/useTypedSelector'
import styled from 'styled-components';
import Link from "next/link";
import {PostsActionTypes} from '../types/postsTypes'
import { NextPage } from 'next'
import {wrapper} from '../redux'
import axios from "axios";


const List = styled.ul`
display: grid;
padding:0;
margin:0;
list-style:none;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:20px;
`

const ListItem = styled.li`
padding:10px;
max-height:250px;
list-style:none;
border-radius:7px;
text-overflow: ellipsis; /* Добавляем многоточие */
overflow: hidden; 
box-shadow:  2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
`
const Text =  styled.p`
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
`

const Home:NextPage = (props) => {
  const {posts} = useTypedSelector(state => state.posts)


  return (
    <Layout>

      <List>{posts.map(({id,title,body})=>
      <Link key={id} href={`/posts/${id}`}>
        <ListItem>
          <h3>{title}</h3>
          <Text>{body}</Text>
        </ListItem>
      </Link>)}</List>
      
    </Layout>
  )
}

Home.getInitialProps = async({store}) => {
  
  try {
    store.dispatch({type: PostsActionTypes.FETCH_POSTS})
    const response = await axios.get('https://simple-blog-api.crew.red/posts')

    store.dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})

} catch (e) {
  store.dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: e.message
    })
}
  return {custom: 'custom'}; 
};


export default wrapper.withRedux(Home)
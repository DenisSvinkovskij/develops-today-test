import Layout from '../components/Layout'
import React,{useEffect} from 'react'
// import {fetchPosts} from '../redux/action-creators'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useActions'
import styled from 'styled-components';
import Link from "next/link";

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

const Home:React.FC = () => {
  const {posts} = useTypedSelector(state => state.posts)
    const {fetchPosts} = useActions()

    useEffect(() => {
      fetchPosts()      
    }, [])
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


export default Home;
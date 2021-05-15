import {Dispatch} from "redux";
import axios from "axios";
import {PostsAction, PostsActionTypes} from "../../types/postsTypes";



export const clearPostByIdPage = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
            dispatch({type: PostsActionTypes.CLEAR_POST_BY_ID})

    }
}

export const addPost = (title:string,text:string) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.CREATE_POST})
            const post = {
                title,
                body:text
            }

            const response = await axios.post(`https://simple-blog-api.crew.red/posts`, post)

            dispatch({type: PostsActionTypes.CREATE_POST_SUCCESS, payload: response.data})

        } catch (e) {
            dispatch({
                type: PostsActionTypes.CREATE_POST_ERROR,
                payload: e.message
            })
        }
    }
}

export const deletePost = (postId:string|string[]) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.DELETE_POST})

            await axios.delete(`https://simple-blog-api.crew.red/posts/${postId}`)

            dispatch({type: PostsActionTypes.DELETE_POST_SUCCESS, payload: postId})

        } catch (e) {
            dispatch({
                type: PostsActionTypes.DELETE_POST_ERROR,
                payload: e.message
            })
        }
    }
}

export const addComment = (postId:string|string[],text:string) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.ADD_COMMENT})
            const comment = {
                postId: Number(postId),
                body:text
            }

            const response = await axios.post(`https://simple-blog-api.crew.red/comments`, comment)

            dispatch({type: PostsActionTypes.ADD_COMMENT_SUCCESS, payload: response.data})

        } catch (e) {
            dispatch({
                type: PostsActionTypes.ADD_COMMENT_ERROR,
                payload: e.message
            })
        }
    }
}

import {PostsAction, PostsActionTypes, PostsState} from "../../types/postsTypes";

const initialState: PostsState = {
    posts: [],
    error: null,
    loading: false,
    postById: {
        id:0,
        title:'',
        body:'',
        comments:[]
    }
}

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: action.payload}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.FETCH_POST_BY_ID:
            return {...state, loading: true}
        case PostsActionTypes.CLEAR_POST_BY_ID:
            return {...state, postById: initialState.postById}
        case PostsActionTypes.FETCH_POST_BY_ID_SUCCESS:
            return {...state, loading: false, postById: {...action.payload,}}
        case PostsActionTypes.FETCH_POST_BY_ID_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.CREATE_POST:
            return {...state, loading: true}
        case PostsActionTypes.CREATE_POST_SUCCESS:
            return {...state, loading: false, posts: [...state.posts, action.payload]}
        case PostsActionTypes.CREATE_POST_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.DELETE_POST:
            return {...state, loading: true}
        case PostsActionTypes.DELETE_POST_SUCCESS:
            return {...state, loading: false, posts: [...state.posts.filter(item => item.id !== +action.payload)] }
        case PostsActionTypes.DELETE_POST_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.ADD_COMMENT:
            return {...state, loading: true}
        case PostsActionTypes.ADD_COMMENT_SUCCESS:
            return {...state, loading: false, postById:{
                ...state.postById,
                comments:[...state.postById.comments, action.payload] 
            }}
        case PostsActionTypes.ADD_COMMENT_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

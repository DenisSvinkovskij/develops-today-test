export interface PostsState {
    posts: any[];
    loading: boolean;
    error: null | string;
    postById: {
        id:number;
        title:string;
        body:string;
        comments:any[];
    }
}


export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    FETCH_POST_BY_ID = 'FETCH_POST_BY_ID',
    CLEAR_POST_BY_ID = 'CLEAR_POST_BY_ID',
    FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS',
    FETCH_POST_BY_ID_ERROR = 'FETCH_POST_BY_ID_ERROR',
    CREATE_POST = 'CREATE_POST',
    CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS',
    CREATE_POST_ERROR = 'CREATE_POST_ERROR',
    DELETE_POST = 'DELETE_POST',
    DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
    DELETE_POST_ERROR = 'DELETE_POST_ERROR',
    ADD_COMMENT = 'ADD_COMMENT',
    ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS',
    ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR'
}
interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
}
interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[];
}
interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface FetchPostByIdAction {
    type: PostsActionTypes.FETCH_POST_BY_ID
}
interface clearPostByIdPage {
    type: PostsActionTypes.CLEAR_POST_BY_ID
}
interface FetchPostByIdSuccessAction {
    type: PostsActionTypes.FETCH_POST_BY_ID_SUCCESS;
    payload:  {
        id:number;
        title:string;
        body:string;
        comments:any[];
    };
}
interface FetchPostByIdErrorAction {
    type: PostsActionTypes.FETCH_POST_BY_ID_ERROR;
    payload: string;
}

interface CreatePostAction {
    type: PostsActionTypes.CREATE_POST
}
interface CreatePostSuccessAction {
    type: PostsActionTypes.CREATE_POST_SUCCESS;
    payload: {};
}
interface CreatePostErrorAction {
    type: PostsActionTypes.CREATE_POST_ERROR;
    payload: string;
}

interface DeletePostAction {
    type: PostsActionTypes.DELETE_POST
}
interface DeletePostSuccessAction {
    type: PostsActionTypes.DELETE_POST_SUCCESS;
    payload: {};
}
interface DeletePostErrorAction {
    type: PostsActionTypes.DELETE_POST_ERROR;
    payload: string;
}


interface AddCommentAction {
    type: PostsActionTypes.ADD_COMMENT
}
interface AddCommentSuccessAction {
    type: PostsActionTypes.ADD_COMMENT_SUCCESS;
    payload: {};
}
interface AddCommentErrorAction {
    type: PostsActionTypes.ADD_COMMENT_ERROR;
    payload: string;
}

export type PostsAction =
    FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
    | FetchPostByIdAction
    | clearPostByIdPage
    | FetchPostByIdSuccessAction
    | FetchPostByIdErrorAction
    | CreatePostAction
    | CreatePostSuccessAction
    | CreatePostErrorAction
    | DeletePostAction
    | DeletePostSuccessAction
    | DeletePostErrorAction
    | AddCommentAction
    | AddCommentSuccessAction
    | AddCommentErrorAction
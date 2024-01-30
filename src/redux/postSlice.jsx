import {createSlice} from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UsePost from "../hooks/usePost";
import UsePut from "../hooks/usePut";
import UseDelete from "../hooks/useDelete";
import UseIdPut from "../hooks/useIdPut";

const postArr = {
    arr: []
}

const PostSlice = createSlice({
    name: "arr",
    initialState: postArr,
    reducers: {
        postGet: (state, actions) => {
            const [httpGet, res] = UseGet()
            httpGet('https://localhost:7007/api/Post')
            state.arr = res
        },
        postPost: (state, actions) => {
            const httpPost = UsePost()
            httpPost('https://localhost:7007/api/Post', actions.payload)
        },
        postPut: (state, actions) => {
            const httpPut = UsePut()
            httpPut('https://localhost:7007/api/Post/'+actions.payload.id, actions.payload.content)
        },
        postLikePut: (state, actions) => {
            const httpPut = UseIdPut()
            httpPut('https://localhost:7007/api/Post/like/'+actions.payload)
        },
        postDelete: (state, actions) => {
            const httpDelete = UseDelete()
            httpDelete('https://localhost:7007/api/Post/'+actions.payload)
        }
    }
})

export const { postGet, postPost, postPut, postLikePut, postDelete} = PostSlice.actions
export default PostSlice.reducer
import {createSlice} from "@reduxjs/toolkit";

const postArr = {
    arr: [
        {id: 1, content: "אאאאאא אאאאא אאאאאא אאאאאאא אאאאאאאא אאאאאאאא אאאאאאאאאא אאאא אאאאאאאא אאאאאאא אאאאאא אאאאאאאא אאאא אאאאא", like: false},
        {id: 2, content: "בבבבבבבב בבבב בבבבב בבבבב בבבבבבבבבב בבבבב בבבבבבבבב בבבבב בבבבבב בבבבבב", like: true},
        {id: 3, content: "גגגגגג גגגגגגג גגגגגג", like: false},
        {id: 4, content: "דדדדדדדד דדדד דדדדדד דדדדד דדדדדדדד דדדדדדדד דדדדד", like: false}
    ],
    id: 4
}

const PostSlice = createSlice({
    name: "arr",
    initialState: postArr,
    reducers: {
        // postGet: (state, actions) => {
        //     const [httpGet, posts] = UseGet()
        //     httpGet('post')
        //     return posts
        // },
        postPost: (state, actions) => {
            const post = {id: ++state.id, content: actions.payload, like: false}
            state.arr = [...state.arr, post]
        },
        postPut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.id === actions.payload.id){
                    item.content = actions.payload.content
                }
            })
        },
        postLikePut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.id === actions.payload){
                    item.like = !item.like
                }
            })
        },
        postDelete: (state, actions) => {
            state.arr = state.arr.filter((item)=>{
                return item.id !== actions.payload
            })
        }
    }
})

export const {postPost, postPut, postLikePut, postDelete} = PostSlice.actions
export default PostSlice.reducer
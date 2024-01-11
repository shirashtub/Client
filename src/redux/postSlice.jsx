import {createSlice} from "@reduxjs/toolkit";

const postArr = {
    arr: [
        {Id: 1, Content: "אאאאאא אאאאא אאאאאא אאאאאאא אאאאאאאא אאאאאאאא אאאאאאאאאא אאאא אאאאאאאא אאאאאאא אאאאאא אאאאאאאא אאאא אאאאא", Like: false},
        {Id: 2, Content: "בבבבבבבב בבבב בבבבב בבבבב בבבבבבבבבב בבבבב בבבבבבבבב בבבבב בבבבבב בבבבבב", Like: true},
        {Id: 3, Content: "גגגגגג גגגגגגג גגגגגג", Like: false},
        {Id: 4, Content: "דדדדדדדד דדדד דדדדדד דדדדד דדדדדדדד דדדדדדדד דדדדד", Like: false}
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
            const post = {Id: ++state.id, Content: actions.payload, Like: false}
            state.arr = [...state.arr, post]
        },
        postPut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.Id === actions.payload.Id){
                    item.Content = actions.payload.Content
                }
            })
        },
        postLikePut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.Id === actions.payload){
                    item.Like = !item.Like
                }
            })
        },
        postDelete: (state, actions) => {
            state.arr = state.arr.filter((item)=>{
                return item.Id !== actions.payload
            })
        }
    }
})

export const {postPost, postPut, postLikePut, postDelete} = PostSlice.actions
export default PostSlice.reducer
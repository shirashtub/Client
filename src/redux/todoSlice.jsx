import {createSlice} from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UsePost from "../hooks/usePost";
import UsePut from "../hooks/usePut";
import UseDelete from "../hooks/useDelete";
import UseIdPut from "../hooks/useIdPut";
const todoArr = {
    arr: []
}

const TodoSlice = createSlice({
    name: "arr",
    initialState: todoArr,
    reducers: {
        todoGet: (state, actions) => {
            const [httpGet, res] = UseGet()
            httpGet('https://localhost:7007/api/Todo')
            state.arr = res
        },
        todoPost: (state, actions) => {
            // alert(actions.payload + " enter hello " + typeof(actions.payload))
            const httpPost = UsePost()
            httpPost('https://localhost:7007/api/Todo', actions.payload)
        },
        todoPut: (state, actions) => {
            const httpPut = UsePut()
            httpPut('https://localhost:7007/api/Todo/'+actions.payload.id, actions.payload)
        },
        todoCompletePut: (state, actions) => {
            const httpPut = UseIdPut()
            httpPut('https://localhost:7007/api/Todo/complete/'+actions.payload)
        },
        todoDelete: (state, actions) => {
            const httpDelete = UseDelete()
            httpDelete('https://localhost:7007/api/Todo/'+actions.payload)
        }
    }
})

export const {todoGet, todoPost, todoPut, todoCompletePut, todoDelete} = TodoSlice.actions
export default TodoSlice.reducer
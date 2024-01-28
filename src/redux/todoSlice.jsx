import {createSlice} from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UsePost from "../hooks/usePost";
import UsePut from "../hooks/usePut";
import UseDelete from "../hooks/useDelete";
const todoArr = {
    arr: [],
    id: 15
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
            const httpPost = UsePost()
            const d = new Date()
            const nowDate = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()
            const todo = {id: ++state.id, description: actions.payload, date: nowDate, isComplete: false}
            // state.arr = [...state.arr, todo]
            httpPost('https://localhost:7007/api/Todo', todo)
        },
        todoPut: (state, actions) => {
            // state.arr.map((item)=>{
            //     if(item.id === actions.payload.id){
            //         item.date = actions.payload.date
            //         item.description = actions.payload.description
            //     }
            // })
            const httpPut = UsePut()
            httpPut('https://localhost:7007/api/Todo/'+actions.payload.id, actions.payload)
        },
        todoCompletePut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.id === actions.payload){
                    item.isComplete = !item.isComplete
                }
            })
        },
        todoDelete: (state, actions) => {
            // state.arr = state.arr.filter((item)=>{
            //     return item.id !== actions.payload
            // })
            const httpDelete = UseDelete()
            httpDelete('https://localhost:7007/api/Todo'+actions.payload)
        }
    }
})

export const {todoGet, todoPost, todoPut, todoCompletePut, todoDelete} = TodoSlice.actions
export default TodoSlice.reducer
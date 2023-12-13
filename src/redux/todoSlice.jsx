import {createSlice} from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UsePost from "../hooks/usePost";

const todoArr = {
    arr: [
        {id: 1, description: "אאאאאאא", dateTime: '2022-12-23', isComplete: false},
        {id: 2, description: "בבבבבבבב", dateTime: '2023-11-12', isComplete: true},
        {id: 3, description: "גגגגג", dateTime: '2022-8-19', isComplete: false},
        {id: 4, description: "דדדדדדד", dateTime: '2023-1-25', isComplete: false}
    ],
    id: 4
}

const TodoSlice = createSlice({
    name: "arr",
    initialState: todoArr,
    reducers: {
        todoGet: (state, actions) => {
            const [httpGet, res] = UseGet()
            httpGet('https://localhost:7007/api/Todo')
            console.log(res);
        },
        todoPost: (state, actions) => {
            const httpPost = UsePost()
            httpPost('https://localhost:7007/api/Todo')
            const d = new Date()
            const nowDate = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()
            const todo = {id: ++state.id, description: actions.payload, dateTime: nowDate, isComplete: false}
            state.arr = [...state.arr, todo]
        },
        todoPut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.id === actions.payload.id){
                    item.dateTime = actions.payload.dateTime
                    item.description = actions.payload.description
                }
            })
        },
        todoCompletePut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.id === actions.payload){
                    item.isComplete = !item.isComplete
                }
            })
        },
        todoDelete: (state, actions) => {
            state.arr = state.arr.filter((item)=>{
                return item.id !== actions.payload
            })
        }
    }
})

export const {todoGet, todoPost, todoPut, todoCompletePut, todoDelete} = TodoSlice.actions
export default TodoSlice.reducer
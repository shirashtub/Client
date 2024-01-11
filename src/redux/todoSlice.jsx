import {createSlice} from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UsePost from "../hooks/usePost";

const todoArr = {
    arr: [
        // {Id: 1, Description: "אאאאאאא", Date: '2022-12-23', IsComplete: false},
        // {Id: 2, Description: "בבבבבבבב", Date: '2023-11-12', IsComplete: true},
        // {Id: 3, Description: "גגגגג", Date: '2022-8-19', IsComplete: false},
        // {Id: 4, Description: "דדדדדדד", Date: '2023-1-25', IsComplete: false}
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
            // console.log(res);
            state.arr = res
            // actions.payload = res
        },
        todoPost: (state, actions) => {
            const httpPost = UsePost()
            const d = new Date()
            const nowDate = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()
            const todo = {id: ++state.id, description: actions.payload, date: nowDate, isComplete: false}
            state.arr = [...state.arr, todo]
            httpPost('https://localhost:7007/api/Todo', todo)
        },
        todoPut: (state, actions) => {
            state.arr.map((item)=>{
                if(item.id === actions.payload.id){
                    item.date = actions.payload.date
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
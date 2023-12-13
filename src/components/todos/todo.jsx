import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { todoDelete, todoPut, todoCompletePut } from "../../redux/todoSlice";

const Todo = (props) => {
    const [edit, setEdit] = useState(false)
    const [date, setDate] = useState(props.todo.dateTime)
    const [description, setDescription] = useState(props.todo.description)
    const dispatch = useDispatch()

    const editTodo = () => {
        setEdit(false)
        dispatch(todoPut({id: props.todo.id, description: description, dateTime: date}))
    }

    return(
        <>
        {!edit?
        <Grid container justifyContent="space-between">
            <Checkbox xs={1} color="success" defaultChecked={props.todo.isComplete} onClick={()=>dispatch(todoCompletePut(props.todo.id))}/>
            <Typography xs={2} sx={{ color: '#b60a60' }}>תאריך: {props.todo.dateTime}</Typography>
            <Typography xs={4} sx={{ color: '#4acfa8' }}>תאור: {props.todo.description}</Typography>
            <Grid justifyContent="space-between">
                <IconButton onClick={()=>dispatch(todoDelete(props.todo.id))} xs={1} sx={{ color: '#b60a60' }}><DeleteIcon /></IconButton>
                <IconButton onClick={()=>setEdit(true)} xs={1} sx={{ color: '#b60a60' }}><BorderColorIcon /></IconButton>
            </Grid>
        </Grid>:
        <Grid container justifyContent="space-between">
            <Checkbox xs={1} color="success" defaultChecked={props.todo.isComplete}  onClick={()=>dispatch(todoCompletePut(props.todo.id))}/>
            {/* //onClick={()=>setIsComplete(!isComplete)}/> */}
            <TextField label="תאריך" variant="outlined" defaultValue={props.todo.dateTime} size="small" color="secondary" onChange={(e)=>setDate(e.target.value)}/>
            <TextField label="תאור" variant="outlined" defaultValue={props.todo.description} size="small" color="success" onChange={(e)=>setDescription(e.target.value)}/>
            <IconButton onClick={()=>editTodo()} xs={2} sx={{ color: '#b60a60' }}><ArrowBackIcon /></IconButton>
        </Grid> }
        </>
    )
}

export default Todo
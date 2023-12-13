import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./todo";
// import { todoGet } from "../../redux/todoSlice";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import FormDialog from "../dialog";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { todoGet, todoPost } from "../../redux/todoSlice";

const Todos = () => {
    const todos = useSelector((myStore)=>myStore.TodoSlice.arr)
    const [open, setOpen] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch()

    dispatch(todoGet())

    const addTodo = () => {
        setOpen(false)
        dispatch(todoPost(newTodo))
    }

    return(
        <Box>
            <Grid container justifyContent="space-between">
                <Typography variant="h4" xs={2} sx={{ color: '#b60a60' }}>המשימות שלי</Typography>
                <Button xs={2} sx={{ borderColor: '#b60a60', color: '#b60a60'}} color="secondary" variant="outlined" endIcon={<AddIcon fontSize="small"/>}
                 onClick={()=>setOpen(true)}>הוסף משימה</Button>
                 {/* {return(<FormDialog label='משימה חדשה' type="todo"/>)} */}
            </Grid>
            <Grid container direction="column" justifyContent="center" alignItems="stretch" padding={5}>
                {
                    todos.map((t)=>{
                        return(<Todo todo={t}/>)
                    })
                }
            </Grid>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle sx={{ color: '#b60a60' }}>משימה חדשה</DialogTitle>
                <DialogContent>
                <TextField
                    label= 'הוסף משימה'
                    variant="standard"
                    size="small"
                    color="success"
                    sx={{ backgroundColor: '#4acfa8' }}
                    onChange={(e)=>setNewTodo(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>setOpen(false)} color="secondary">ביטול</Button>
                <Button onClick={()=>addTodo()} color="success">אישור</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Todos
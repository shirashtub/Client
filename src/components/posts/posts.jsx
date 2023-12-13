import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";
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
import { postPost } from "../../redux/postSlice";
import { TextareaAutosize } from "@mui/material";

const Posts = () => {
    const posts = useSelector((myStore)=>myStore.PostSlice.arr)
    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState('');
    const dispatch = useDispatch()

    const addPost = () => {
        setOpen(false)
        dispatch(postPost(newPost))
    }

    return(
        <Box>
            <Grid container justifyContent="space-between">
                <Typography variant="h4" xs={2} sx={{ color: '#b60a60' }}>המאמרים שלי</Typography>
                <Button xs={2} sx={{ borderColor: '#b60a60', color: '#b60a60'}} color="secondary" variant="outlined" endIcon={<AddIcon fontSize="small"/>}
                 onClick={()=>setOpen(true)}>הוסף מאמר</Button>
                 {/* {return(<FormDialog label='משימה חדשה' type="todo"/>)} */}
            </Grid>
            <Grid container direction="row" justifyContent="flex-start"  alignItems="stretch" padding={5}>
                {
                    posts.map((p)=>{
                        return(<Post post={p}/>)
                    })
                }
            </Grid>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle sx={{ color: '#b60a60' }}>מאמר חדש</DialogTitle>
                <DialogContent>
                <TextareaAutosize
                    label= 'הוסף מאמר'
                    variant="standard"
                    color="success"
                    height = '100'
                    sx={{ backgroundColor: '#4acfa8' }}
                    onChange={(e)=>setNewPost(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>setOpen(false)} color="secondary">ביטול</Button>
                <Button onClick={()=>addPost()} color="success">אישור</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Posts
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { postDelete, postPut, postLikePut } from "../../redux/postSlice";
import { Button, TextareaAutosize } from "@mui/material";

const Post = (props) => {
    const [edit, setEdit] = useState(false)
    const [moreOrLess, setMoreOrLess] = useState(false)
    const [words, setWords] = useState((props.post.content).slice(0, 30))
    const [content, setContent] = useState(props.post.content)
    const dispatch = useDispatch()

    const editPost = () => {
        setEdit(false)
        dispatch(postPut({id: props.post.id, content: content}))
    }

    const more = () => {
        setWords(props.post.content)
        setMoreOrLess(true)
    }
    
    const less = () => {
        setWords((props.post.content).slice(0, 30))
        setMoreOrLess(false)
    }

    return(
        <>
        {!edit?
        <Grid container direction="column" justifyContent="space-between" padding={5} width={'30%'}>
            <Grid justifyContent="space-between">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} xs={1} color="secondary" defaultChecked={props.post.like} onClick={()=>dispatch(postLikePut(props.post.id))}/>
                <Typography variant="h5" xs={2} sx={{ color: '#4acfa8' }} >מאמר:</Typography>
                <Typography xs={4} sx={{ color: '#4acfa8' }}>{words}</Typography>
            </Grid>
            <Grid>
                {
                    moreOrLess?<Button onClick={()=>less()} color="success" size="small">פחת</Button>
                    :<Button onClick={()=>more()} color="success" size="small">קרא עוד</Button>
                }
                <Grid justifyContent="space-between">
                    <IconButton onClick={()=>dispatch(postDelete(props.post.id))} xs={1} sx={{ color: '#b60a60' }}><DeleteIcon /></IconButton>
                    <IconButton onClick={()=>setEdit(true)} xs={1} sx={{ color: '#b60a60' }}><BorderColorIcon /></IconButton>
                </Grid>
            </Grid>
        </Grid>:
        <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" padding={5} width={'30%'}>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} xs={1} color="secondary" defaultChecked={props.post.like} onClick={()=>dispatch(postLikePut(props.post.id))}/>
            <TextareaAutosize label="מאמר" variant="outlined" defaultValue={props.post.content} color="success" size="normal" onChange={(e)=>setContent(e.target.value)}/>
            <IconButton onClick={()=>editPost()} xs={2} sx={{ color: '#b60a60' }}><ArrowBackIcon /></IconButton>
        </Grid> }
        </>
    )
}

export default Post
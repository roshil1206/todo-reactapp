import React, { useState } from 'react'
import { List, ListItemText , ListItem, Button, Modal, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Todo.css'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
      const classes = useStyles();
     const [input, setinput] = useState('');
    const [open, setopen] = useState(false);

    const handleOpen = () =>{
        setopen(true);
    }
    const handleClose = () =>{
        setopen(false);
    }
   console.log(input);


   const updateTodo = () =>{
       db.collection('todos').doc(props.text.id).set({todo:input},{merge:true})
       setopen(false)
   }
    return (

      <div> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <div   className={classes.paper}>
        <h2 id="server-modal-title">Edit Your TODOs </h2>
        <Input placeholder={props.text.todo} value={input} onChange={event=> setinput(event.target.value)}/>
        <Button color="secondary" variant="contained" onClick={updateTodo}>Update</Button>
        </div>
      </Modal>

        <List className="todo_list">
            <ListItem>
                <ListItemText primary={props.text.todo} secondary="Dummy Deadline ⏰ " ></ListItemText>
            </ListItem>
            <DeleteForeverIcon className="upscale" onClick={event=>db.collection('todos').doc(props.text.id).delete()} />
            &nbsp;
            <EditIcon type="button" className="upscale" onClick={handleOpen} />
            </List>
            </div>
       
    )

}

export default Todo;
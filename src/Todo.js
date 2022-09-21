import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Modal, } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary='Dummy Deeadline' />
      </ListItem>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
  )
}

export default Todo

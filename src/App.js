import React, {useState , useEffect} from 'react';
import './App.css';
import{Button,FormControl, InputLabel, Input}  from '@material-ui/core';
import Todo from './Todo'
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input , setInput] = useState('');

  //When the app loads we need to litsen to the database and fetch all the todos and add and remove them

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
     
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
      
    })

    return () => {
      
    }
  }, [])

  const addtodo = (event)=>{
    event.preventDefault();       //Will stop refresh
    db.collection('todos').add({
    todo:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()  });
    setInput('');                 //Make the input blank
   
  }

  return (
    <div className="App">
     <h1>Hello World</h1>
     <form >
       <FormControl>
         <InputLabel>
         Write a Todo 🚀</InputLabel>
         <Input value={input} onChange={event=> setInput(event.target.value)}/>
       </FormControl>
     
     <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary">
 Add Todo
</Button>
     {/* <button type="submit" onClick={addtodo}>Add todo</button> */}
     </form>
     <ul>
        {todos.map(todo=>{
          return(
            <Todo text={todo} />)
        })}
     </ul>
    </div>
  );
}

export default App;

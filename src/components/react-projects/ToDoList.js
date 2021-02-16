import React, {useState} from 'react'
import '../styles/App.css'

const ToDoList = () => {

    const [toDoList, updateToDoList] = useState([ // set state for list
        {
            text: "learn about react",
            isCompleted: false
        },
        {
            text: "build react project",
            isCompleted: false
        }, 
    ])
    const [value, setValue] = useState("") // set state for list item

    const completeTodo = index => {
        const newTodos = [...toDoList]
        newTodos[index].isCompleted = true
        updateToDoList(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...toDoList]
        newTodos.splice(index, 1)
        updateToDoList(newTodos)

    }

    function Todo({todo, index, completeTodo, removeTodo, number}){ // get text from list item
        return(
            <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                {number}. {todo.text}
                <div className="buttons">
                    <button onClick={() => removeTodo(index)}>x</button><button onClick={() => completeTodo(index)}>done</button><button>edit</button>
                </div>
                
            </div>
        )
    }

    

    const listSubmitHandler = (newItem) => { // handle submit
        
        newItem.preventDefault()
        if (!value) return
        addTodo(value) // add to todos
        setValue("") //clear value
    }

    const addTodo = text => {
        const newTodos = [...toDoList, { text }]
        updateToDoList(newTodos)
    }








    return(
        <div>
            <div className="heading" >
                <h1>To Do List</h1>
            </div>
            <div id="formDiv">

                <form onSubmit={listSubmitHandler}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="New to-do..."
                    onChange={e => setValue(e.target.value)}
                />
                <input type="submit" value="add" className="add-btn"/>
                </form>
            </div>

            <div className="todoItems">
                {toDoList.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        number={index + 1}
                        todo={todo}
                        completeTodo = {completeTodo}
                        removeTodo = {removeTodo}
                    />
                ))}
            </div>
        </div>
    )
}


export default ToDoList
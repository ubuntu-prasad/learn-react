import React from 'react'

// components
import TodoItems from '../components/TodoItems'
import TimeOfTheDay from '../components/TimeOfTheDay'

function Todo(){
    return (
        <div>
            <h3>
                Todo Items 
                <TimeOfTheDay />
            </h3>
            <TodoItems />
        </div>
    )
}

export default Todo
import React from 'react'

function TodoItems(){

    return (
        <div className="todo-item-container">
            <p>
                <button>x</button> <input type="checkbox" /> Learn React 
            </p>
            <p>
                <button>x</button> <input type="checkbox" /> Learn React Redux 
            </p>
            <p>
                <button>x</button> <input type="checkbox" /> Learn Spring MVC 
            </p>
            <p>
                <button>x</button> <input type="checkbox" /> Learn Spring Boot 
            </p>
            <p>
                <button>x</button> <input type="checkbox" /> Learn Express 
            </p>
            <p>
                <button>x</button> <input type="checkbox" /> Learn Django 
            </p>
            <p>
                <button>x</button> <input type="checkbox" /> Learn Food plugin of WordPress 
            </p>
        </div>
    )
}
export default TodoItems
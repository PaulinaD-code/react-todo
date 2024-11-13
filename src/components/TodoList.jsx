import {useState} from "react"


function TodoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(prevState => [...prevState, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
             [updatedTasks[index-1], updatedTasks[index]]
             setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
             [updatedTasks[index+1], updatedTasks[index]]
             setTasks(updatedTasks)
        }
    }

    return (
        <>
        <div className="to-do-list">
            <div className="title">
                <img src="./img/add-task.png" className="check-list" />
                <h1>To-Do-List</h1>
            </div>
            
            <div>
                <input
                    type="text"
                    placeholder="enter a task..."
                    value={newTask}
                    onChange={handleInputChange}            
                />
                <button 
                    className="add-button"
                    onClick = {addTask}
                >
                    Add
                </button>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text" id={index}>{task}</span>
                            <button
                                className = "delete-button"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>

                            <button
                                className = "move-button"
                                onClick={() => moveTaskUp(index)}
                            >
                                <img src="./img/up-chevron.png" className="arrow-up" alt="arrow-up" />
                            </button>
                            <button
                                className = "move-button"
                                onClick={() => moveTaskDown(index)}
                            >
                                <img src="./img/up-chevron.png" className="arrow-down" alt="arrow-down" />
                            </button>

                        </li>
                    
                    )}
                </ol>
            </div>
        </div>
        </>
    )

}

export default TodoList
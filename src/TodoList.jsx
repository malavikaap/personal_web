import react, { useState } from "react"
function TodoList () {
    const [task, SetTask] = useState(["Eat BreakFast", "Take a shower","Walk the dog"]);
    const [newTask,SetNewTask] = useState("")
    function AddTask() {
        if(newTask.trim()!== "")
            {
        SetTask(t => [...t,newTask])
        SetNewTask("")
            }
    }
    function HandleInputChange (event) {
        SetNewTask(event.target.value)
    }
    function DeleteTask (index) {
        const updatedTask = task.filter((_,i) =>i !== index)
        SetTask(updatedTask)
    }
    function MoveTaskUp(index) {
        if (index > 0) {
          const updatedTask = [...task];
          [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
          SetTask(updatedTask);
        }
    }
    return (
        <div className="todoclass">
            <h1 className="todos">To-Do-List</h1>
            <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={HandleInputChange}></input>
            <button className="bt-add" onClick={AddTask}>Add</button>
            </div>
            <ol>
                {task.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-btn" onClick={() =>
                        DeleteTask(index)}>Delete</button>
                   <button className="move-btn" onClick={() =>
                       MoveTaskUp(index)}>Up</button>
                </li>)}
            </ol>
        </div>
    )
}
export default TodoList
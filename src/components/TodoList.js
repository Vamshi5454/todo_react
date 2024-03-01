import React, { useState } from "react";

function TodoList() {
  const [inputval, setInputval] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setInputval(e.target.value);
  };

  const handleSubmit = () => {
    if (inputval != "") {
      setTask([
        ...task,
        {
          id: Math.floor(Math.random() * 10) + 1,
          value: inputval,
        },
      ]);
      // console.log(task[task.length - 1].id);
      setInputval("");
    }
  };

  const handleEdit = (item) => {
    const userInput = window.prompt("Please enter something:");

    // setTask(userInput);
    console.log(item);
    const index = task.findIndex((tas) => tas.id === item.id);
    // task[index] = setTask();

    const tempTask = [...task];
    tempTask[index] = { id: tempTask[index].id, value: userInput };
    setTask(tempTask);
  };
  const handleDelete = (item) => {
    const index = task.findIndex((tas) => tas.id === item.id);
    const tempTask = [...task];
    tempTask.splice(index, 1);
    setTask(tempTask);
  };
  return (
    <div>
      <input type="text" value={inputval} onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>

      <ul>
        {task.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
          //
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

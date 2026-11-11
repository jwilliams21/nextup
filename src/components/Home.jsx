import { useState, useEffect } from 'react';
import Button from './Button';

export default function Home() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("nextup_task");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem("nextup_task", JSON.stringify(tasks))
    }, [tasks])

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false }
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const deleteAllTasks = () => {
        setTasks([]);
    }

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }



    return (
        <div>
            <textarea
                id="task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task here..." //future enhancement idea: create fun placeholder text that rotates randomly
                rows={2}
                className="border-2 border-slate-400 p-2 w-1/2 rounded-lg"
            ></textarea>
            <div>
                <Button 
                    label="Add Task"
                    onClick={addTask}
                />
                <Button 
                    label="Delete All Tasks"
                />
            </div>
        </div>
    )
}
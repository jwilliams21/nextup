import { useState, useEffect } from 'react';
import Button from './Button';

export default function Home() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("nextup_task");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem("nextup_task", JSON.stringify(tasks));
    }, [tasks])

    const addTask = (text) => {
        if(text === '') {
            return
        }
        const newTask = { id: Date.now(), text };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        document.getElementById('task').value = '';
        setText('');
    }

    const deleteAllTasks = () => {
        setTasks([]);
    }

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addTask(text)
        }
    }

    const isTaskLast = (index) => index === tasks.length - 1; 





    return (
        <div>
            <textarea
                id="task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Enter task here..." //future enhancement idea: create fun placeholder text that rotates randomly
                rows={2}
                className="border-2 border-cyan-400 p-2 w-full rounded-lg placeholder-white"
            ></textarea>
            <div className="flex gap-4 mt-2 mb-4">
                <Button 
                    label="Add Task"
                    onClick={() => addTask(text)}
                    type="submit"
                />
                <Button 
                    label="Delete All Tasks"
                    onClick={() => deleteAllTasks()}
                />
            </div>
            <div>
                {tasks.map((task, index) => (
                    <div key={task.id} className={`flex gap-4 items-center py-4 ${isTaskLast(index) ? '' : 'border-b border-zinc-100'}`}>
                        <Button 
                            label="Delete"
                            onClick={() => deleteTask(task.id)}
                        />
                        <span>{task.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
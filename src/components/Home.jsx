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

    useEffect(() => {
        document.body.style.height = 'auto';
        document.documentElement.style.height = 'auto';

        requestAnimationFrame(() => {
            const newHeight = document.body.scrollHeight;
            document.body.style.height = `${newHeight}px`;
            document.documentElement.style.height = `${newHeight}px`;
        });
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
    <div className="w-full h-120 bg-zinc-900 text-zinc-100 flex flex-col justify-between overflow-hidden">
        {/* Textarea & Action Buttons */}
        <div className="shrink-0">
            <textarea
                id="task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Enter task here..." //future enhancement idea: create fun placeholder text that rotates randomly
                rows={2}
                className="border border-zinc-700 bg-zinc-800 p-2 w-full box-border rounded-lg text-zinc-100 placeholder-zinc-200 focus:outline-none focus:border-cyan-400 resize-none transition-colors"
            ></textarea>
            <div className="flex gap-3 mt-4 mb-3">
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
        </div>

        {/* Task List */}
        <div className="flex-1 overflow-y-auto my-2 pr-1 custom-scrollbar">
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div 
                        key={task.id} 
                        className={`flex gap-3 items-center py-4 ${isTaskLast(index) ? '' : 'border-b border-zinc-700'}`}
                    >
                        <Button 
                            label="Delete"
                            onClick={() => deleteTask(task.id)}
                        />
                        <span className="text-sm text-zinc-200 wrap-break-word w-1/2 flex-1">{task.text}</span>
                    </div>
                ))
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-6">
                    <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-2">
                        <span className="text-cyan-400 font-bold text-sm">✓</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-300">All caught up!</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Add a task above to get started.</p>
                </div>
            )}
        </div>

        {/* Task Counter */}
        <div className="shrink-0 pt-2 border-t border-zinc-700 text-xs text-zinc-400 flex justify-between items-center">
            <span>{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
        </div>
    </div>
)
}
// frontend/src/TaskList.jsx

import React from 'react'; // 🎯 Solo necesitamos React (ya no useState, useEffect)
import { useTasks } from './useTasks'; 
import TaskForm from './TaskForm'; 
import TaskItem from './TaskItem';


function TaskList() {
   
    const {
        tasks,
        isLoading,
        isError,
        isActionPending,
        handleCreateTask,
        handleDeleteTask,
        handleToggleCompleted,
    } = useTasks();

    if (isLoading) {
        return (
            <div className="task-manager container mx-auto max-w-2xl p-4">
                <p className="text-center p-4 bg-blue-100 text-blue-700 rounded-lg">
                    Loading tasks from Django API... 🔄
                </p>
            </div>
        );
    }
    

    if (isError) {
        return (
            <div className="task-manager container mx-auto max-w-2xl p-4">
                <p className="text-center p-4 bg-red-100 text-red-700 rounded-lg font-bold">
                    ERROR: Could not fetch data. Is the Django server running on port 8000? 🛑
                </p>
            </div>
        );
    }

    
    if (tasks.length === 0) {
        return (
            <div className="task-manager container mx-auto max-w-2xl p-4">
                 <TaskForm 
                    onTaskCreated={handleCreateTask} 
                    isActionPending={isActionPending}
                />
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4 mt-6 text-gray-700">
                    Task List (0)
                </h2>
                <p className="text-center p-4 bg-yellow-100 text-yellow-700 rounded-lg">
                    No tasks found. Create a new one!
                </p>
            </div>
        );
    }

 
    return (
        <div className="task-manager container mx-auto max-w-2xl p-4">
            
            <TaskForm 
                onTaskCreated={handleCreateTask} 
                isActionPending={isActionPending}
            />
            
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4 mt-6 text-gray-700">
                Task List ({tasks.length})
            </h2>
            
            <div className="mt-8">
                {tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task}  
                        onDelete={handleDeleteTask}
                        onToggle={handleToggleCompleted}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
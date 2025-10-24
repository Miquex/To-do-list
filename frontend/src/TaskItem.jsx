// frontend/src/TaskItem.jsx

import React, { useState } from 'react';


function TaskItem({ task, onDelete, onToggle }) {
    

    const [isTaskLoading, setIsTaskLoading] = useState(false); 

    return (
        <div 
           
            className={`task-item p-4 mb-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg ${task.completed ? 'bg-green-100 line-through' : 'bg-white'}`}
        >
            <div>
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.title} 
                </h3>
                {task.description && <p className="text-gray-600 text-sm mt-1">{task.description}</p>}
                
                <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    Status: {task.completed ? 'COMPLETED' : 'PENDING'}
                </span>
            </div>
            
            <div className='flex space-x-3'>
                
                <button 
                    onClick={() => {
                        setIsTaskLoading(true);
                        onToggle(task, ( )=> setIsTaskLoading(false));
                    }} 
         
                    disabled={isTaskLoading} 
                    className={`px-3 py-1 rounded text-sm text-white transition duration-150 
                        ${isTaskLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
                >
                    {task.completed ? 'Mark Pending' : 'Mark Completed'}
                </button>
                
              
                <button 
                    onClick={() => {
                        setIsTaskLoading(true);
                        onDelete(task.id, ()=> setIsTaskLoading(false));
                        }}
                 
                    disabled={isTaskLoading} 
                    className={`px-3 py-1 rounded text-sm text-white transition duration-150 
                        ${isTaskLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
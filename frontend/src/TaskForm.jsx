// frontend/src/TaskForm.jsx (Código Corregido)

import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskCreated,isActionPending  }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        //delete white spaces 
        if(!title.trim()){
            alert("Task title cannot be empty. ");
            return;
        }
       //call the handlecreate and get the necessary data
        onTaskCreated({
            title: title,
            description: description,
        });

        setTitle(''); //clear title
        setDescription('');
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Create New Task (POST)</h3>
            
            <input
                type="text"
                placeholder="Title (Required)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
           
                name="title"
                className="w-full border border-gray-300 p-2 rounded-md mb-3 focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
                placeholder="Description (Optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              
                name="description"
                className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
            />
            <button 
                type="submit"
                disabled={isActionPending}
                className={`w-full text-white p-2 rounded-md font-semibold transition duration-150 
                             ${isActionPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
            >
                Create Task
            </button>
        </form>
    );
}

export default TaskForm;
// frontend/src/useTasks.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://68fc28c0673ad32d9c292b41--react-django-to-do-list.netlify.app/';

export function useTasks() {
  
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isActionPending, setIsActionPending] = useState(false);


    const fetchTasks = () => {
        setIsLoading(true);
        setIsError(false);

        axios.get(API_URL)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleCreateTask = (newTaskData) => {
        setIsActionPending(true)
        axios.post(API_URL, newTaskData)
            .then(response => {
                setTasks([response.data, ...tasks]); 
            })
            .catch(error => console.error("Error creating task:", error))
            .finally(()=> {setIsActionPending(false)});
    };

   
    const handleDeleteTask = (id, onLoadComplete) => {
        axios.delete(`${API_URL}${id}/`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(error => console.error("Error deleting task:", error))
            .finally(() => { 
                if (onLoadComplete) onLoadComplete(); 
            });
    };

 
    const handleToggleCompleted = (task, onLoadComplete) => {
        const newStatus = !task.completed;
        
        axios.patch(`${API_URL}${task.id}/`, { completed: newStatus })
            .then(response => {
                setTasks(tasks.map(t => 
                    t.id === task.id ? { ...t, completed: newStatus } : t
                ));
            })
            .catch(error => console.error("Error toggling task:", error))
            .finally(() => { 
                if (onLoadComplete) onLoadComplete();
            });
    };

    useEffect(() => {
        fetchTasks();
    }, []); 

    return {
        tasks,
        isLoading,
        isError,
        isActionPending,
        handleCreateTask,
        handleDeleteTask,
        handleToggleCompleted,
    };
}
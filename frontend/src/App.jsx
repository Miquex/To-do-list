// frontend/src/App.jsx
// frontend/src/App.jsx

import React from 'react';
import TaskList from './TaskList';

function App() {
  return (
   
    <div className="bg-gray-100 min-h-screen"> 
      <div className="container mx-auto max-w-4xl p-8">
        
      
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Tareas Django-React
        </h1>
        
        <TaskList />
      </div>
    </div>
  );
}

export default App;
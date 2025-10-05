import React from 'react';
import Banner from './Banner';


const History = ({ history, handleCompleted }) => {
  return (
    <div className="container mx-auto mt-6 mb-5">
      <h1 className="text-2xl font-bold mb-3">Task Status</h1>

      {history.length === 0 ? (
        <p className="text-gray-500">No history yet.</p>
      ) : (
        <div className="space-y-3">
          {history.map((item,ind ) => (
            
            
            
            
            <div
              key={ind}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow"
            >
              <span className="text-lg">{item.title}</span>
              <button
                onClick={() => handleCompleted(item.title)}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
              >
                Completed
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default History;
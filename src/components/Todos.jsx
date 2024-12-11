import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo ,updateTodo} from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.Todos.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null); // Store the ID of the Todo being edited
    const [editText, setEditText] = useState('');

    const handleEdit = (id, text) => {
        setEditId(id); // Set the current Todo ID to edit
        setEditText(text); // Set the current text to the input field
      };
    
      const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id: editId, text: editText }));
        setEditId(null); // Clear the edit ID after update
        setEditText(""); // Clear the input field after update
      };

      return (
        <>
          <div>Todos</div>
          <ul className="list-none space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
              >
                {editId === todo.id ? (
                  <form onSubmit={handleUpdate} className="flex space-x-2">
                    <input
                      type="text"
                      className="bg-gray-100 text-gray-800 rounded py-1 px-3"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditId(null); // Cancel editing
                        setEditText("");
                      }}
                      className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <span className="text-gray-800">{todo.text}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                      >
                        Del
                      </button>
                      <button
                        onClick={() => handleEdit(todo.id, todo.text)}
                        className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      );
    }
    
    export default Todos;
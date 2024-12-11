import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Redux Todos</h1>

        {/* Add Todo Form */}
        <AddTodo />

        {/* Todos List */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Todos</h2>
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;

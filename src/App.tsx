import { useEffect, useState } from "react";
import { Todo } from "./schemas/Todo";

import TableTodo from "./components/TableTodos";
import CountingTodos from "./components/CountingTodos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      // TODO: Should use try catch here for checking response.ok
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const responseJson = await response.json();

      setTodos(responseJson);
    })();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl">Testing aja</h1>
      <CountingTodos todoLength={todos.length} />
      <TableTodo data={todos} />
    </div>
  );
}

export default App;

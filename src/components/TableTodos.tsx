import { Todo } from "../schemas/Todo";

interface Props {
  data: Todo[];
}

const TableTodo = ({ data }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((todo, index) => (
          <tr key={index}>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? "completed" : "not completed"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableTodo;

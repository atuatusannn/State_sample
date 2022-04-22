import type { NextPage } from "next";
import { Header } from "./components/Header";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h2>Todo一覧</h2>

      {TODOS.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </label>
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default Home;

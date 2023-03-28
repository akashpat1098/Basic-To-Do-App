import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/getTodo")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const addUpdate = () => {
    if (isUpdating === "") {
      axios
        .post("http://localhost:8080/saveTodo", { text })
        .then((res) => {
          console.log(res.data);
          setText("");
        })
        .catch((err) => {
          console.error(err);
        });
    }else{
      axios
        .patch("http://localhost:8080/updateTodo", { _id: isUpdating, text })
        .then((res) => {
          console.log(res.data);
          setText("");
          setUpdating("");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const deleteToDo = (_id) => {
    axios.post("http://localhost:8080/deleteTodo", {_id})
    .then((res) => {
      console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const updateToDo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Write Something.."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div className="add" onClick={addUpdate}>{isUpdating?"Update":"Add"}</div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={() => {
                deleteToDo(item._id);
              }}
              update={() => {
                updateToDo(item._id, item.text);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

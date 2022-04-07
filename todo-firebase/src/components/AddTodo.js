import React from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { async } from "@firebase/util";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [users, setUsers] = useState([]);
  const getUserCollect = collection(db, "users")

  useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(getUserCollect);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      };
      getUsers();
  },[] );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <div>
        {users.map((user) => {
      return (
        <div>
          <h1>{user.title}</h1>
        </div>
      )
    })}
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>

    </div>
  );
}

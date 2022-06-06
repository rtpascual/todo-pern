import React, { useState } from "react";
import config from "../config.json";

const TodoFormAdd = () => {
  const [description, setDescription] = useState("");

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      await fetch(config.apiURL + "/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex mt-5">
      <input
        type="text"
        name="description"
        id="new_description"
        value={description}
        onChange={onChange}
        className="flex-1 border-2 rounded-l border-slate-500 border-solid text-3xl outline-none"
      />
      <button className="flex-initial p-4 rounded-r bg-sky-600 hover:bg-sky-700 text-white text-2xl">
        Add
      </button>
    </form>
  );
};

export default TodoFormAdd;

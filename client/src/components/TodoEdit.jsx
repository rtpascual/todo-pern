import React, { useState } from "react";

import config from "../config.json";

const TodoEdit = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const editTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`${config.apiURL}/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 uppercase"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="h-screen w-screen bg-black opacity-25 z-10 inset-0 absolute"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Edit Todo</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black outline-none h-fit"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent uppercase px-6 py-2 text-sm outline-none"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setDescription(todo.description);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-sky-600 uppercase text-sm px-6 py-3 rounded hover:bg-sky-700 outline-none"
                    type="button"
                    onClick={(e) => editTodo(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TodoEdit;

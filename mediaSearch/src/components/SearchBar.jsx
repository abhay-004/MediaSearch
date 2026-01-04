import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="flex bg-gray-900 gap-5 p-10">
        <input
          required
          type="text"
          className=" w-full border-2 px-4 py-2 text-xl rounded outline-none"
          placeholder="Search anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

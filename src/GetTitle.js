import React, { useState, useRef, useEffect } from "react";
function GetTitle() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  },[title]);
  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render");
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
      <h1>The title is {title}</h1>
    </div>
  );
}
export default GetTitle;
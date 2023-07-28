import React, { useState } from "react";

// WebBody component takes in `props` with `heading` and `btnTitle` properties
export default function WebBody(props) {
  // State to store the text entered in the textarea
  const [text, setText] = useState("Enter text here.");

  // Event handler for the button click to convert text to uppercase
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertmsg("Converted to Upper Case")
  };

  // Event handler for the button click to convert text to uppercase
  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertmsg("Converted to Lower Case")
  };

  // Event handler for the button click to clear
  const handleClaer = () => {
    let newText = "";
    setText(newText);
    props.alertmsg("Clear")
  };

  // Event handler for the textarea change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        
        <div className="container">
          <div className="mb-3">
            <h1>{props.heading}</h1>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text} // The current value of the textarea is set from the `text` state
              onChange={handleOnChange} // Call the `handleOnChange` function when the textarea value changes
              // change the bgclr and clr of txtarea
              style={{backgroundColor: props.mode === "dark" ? "rgb(1 12 20)" : "white", color: props.mode === "dark" ? "white" : "black"}}
            ></textarea>
          </div>

          {/* Button to convert text to uppercase */}
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpCase}
            disabled = {text.length===0}
          >
            {props.btnTitle1}
          </button>

          {/* Button to convert text to lowercase */}
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowCase}
            disabled = {text.length===0}
          >
            {props.btnTitle2}
          </button>

          {/* Button to clear text*/}
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleClaer}
            disabled = {text.length===0}
          >
            {props.btnTitle3}
          </button>
        </div>

        <div className="container">
          <h2>Number of Character(including white space) : </h2>
          <p>{text.length}</p>
          <h2>Number of Words : </h2>
          <p>{text.split(" ").filter((element)=> {return element.length!==0}).length}</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>

      </div>
    </>
  );
}

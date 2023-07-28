import React from "react";

export default function About(props) {
  return (
    <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
        <h2>About Text Operation Application</h2>
      <p>
        Text Operation is a React application designed to perform various operations on text. It allows you to manipulate the text in different ways, such as changing the text to uppercase, converting it to lowercase, and clearing the text field.
      </p>

      <h3>Features:</h3>
      <ul>
        <li>Change to Upper Case: This feature allows you to convert all the text in the input field to uppercase letters.</li>
        <li>Change to Lower Case: With this feature, you can convert all the text in the input field to lowercase letters.</li>
        <li>Clear Text: This feature clears the entire content of the input field, giving you a fresh start.</li>
      </ul>

      <h3>How to Use:</h3>
      <p>
        To get started, simply enter your desired text in the input field on the home page. Once you've entered the text, you can click on the respective buttons to apply the desired operation on the text.
      </p>

      <h3>Dark Mode:</h3>
      <p>
        The application also supports a Dark Mode, providing a visually appealing interface in low-light environments. To toggle between Light Mode and Dark Mode, you can use the toggle button available on the top right corner of the navigation bar.
      </p>

      <p>
        We hope you find Text Operation useful for your text manipulation needs! If you have any feedback or suggestions, feel free to contact us.
      </p>
    </div>
  )
}
import React, { useState } from "react";
import About from "./componants/About";
import Navbar from "./componants/Navbar";
import WebBody from "./componants/WebBody";
import Alert from "./componants/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2C3E50";
      alertmsg("Dark Mode Enabled");
      document.title = "Text Operation - Dark Mode";
      setTimeout(() => {
        document.title = "Text Operation";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertmsg("Light Mode Enabled");
      document.title = "Text Operation - Light Mode";
      setTimeout(() => {
        document.title = "Text Operation";
      }, 1500);
    }
  };

  const [alert, setAlert] = useState(null);
  const alertmsg = (messege) => {
    setAlert({
      msg: messege,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          navTitle="Text Opr"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>

        <Alert alert={alert} />

        <Routes>
          <Route
            exact path="/"
            element={
              <WebBody
                heading="Enter Your Text Below"
                btnTitle1="Change to Upper Case"
                btnTitle2="Change to Lower Case"
                btnTitle3="Clear"
                mode={mode}
                alertmsg={alertmsg}
              ></WebBody>
            }
          />

          <Route exact path="/about" element={<About mode={mode}></About>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

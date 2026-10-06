import { useState } from "react";
import React from "react";
import ChatLog from './component/ChatLog.jsx';


export default function App(){

  return(
    <>
    <ChatLog/>
    </>
  )
};










































// import { useState } from "react";

// function App() {
//   const [sentence, setSentence] = useState("");
//   const [result, setResult] = useState([]);
//   const [message, setMessage] = useState("");

//   const counter_x = () => {
//     if (sentence.trim() === "") {
//       setMessage("Input is empty");
//       setResult([]);
//       return;
//     }

//     setMessage("");

//     fetch("http://localhost:8080/api/count", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         sentence: sentence,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setResult(data.result);
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"//         placeholder="Enter text"
//         value={sentence}
//         onChange={(e) => setSentence(e.target.value)}
//       />

//       <button type="button" onClick={counter_x}>
//         Analyze
//       </button>

//       {/* Show error OR result */}
//       {message ? (
//         <p>{message}</p>
//       ) : (
//         <ul>
//           <li>Characters: {result[0]}</li>
//           <li>Words: {result[1]}</li>
//           <li>Vowels: {result[2]}</li>
//           <li>Consonants: {result[3]}</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
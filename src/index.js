// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Lauren from './Lauren';
// import reportWebVitals from './reportWebVitals';
// import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <HashRouter basename="/app"> */}
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={App} />
//         <Route path="/lauren" element={Lauren} />
//       </Routes>
//       </BrowserRouter>
//     {/* </HashRouter> */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Masher from "./components/Masher";
import Puzzle from "./components/Puzzle";
import Math from "./components/Math";
import Trivia from "./components/Trivia";
import Balloons from "./components/Balloons";
// import Wordle from "./components/Wordle/Wordle";
// import Wordle from "./components/WordleLib/Wordle";
// import WordleLibWrapper from "./components/WordleLib/WordleLibWrapper";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/masher",
        element: <Masher />,
    },
    {
        path: "/puzzle",
        element: <Puzzle />,
    },
    {
        path: "/trivia",
        element: <Trivia />,
    },
    {
        path: "/math",
        element: <Math />,
    },
    {
        path: "/balloons",
        element: <Balloons />,
    },
    {
        path: "/wordle",
        // element: <WordleLibWrapper />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

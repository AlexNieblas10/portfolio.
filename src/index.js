import { App } from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom/client"
import './style.css'


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <App/>
)
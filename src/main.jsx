import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import Unknown from "./pages/Unknown";
import GameContext from "./pages/GameContext";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./css/Global.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameContext>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Layout />}
          >
            <Route
              index
              element={<Welcome />}
            />
            <Route
              path='rules'
              element={<Rules />}
            />
            <Route
              path='game/normal'
              element={<Game difficulty='normal' />}
            />
            <Route
              path='game/hard'
              element={<Game difficulty='hard' />}
            />
            <Route
              path='*'
              element={<Unknown />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </GameContext>
)

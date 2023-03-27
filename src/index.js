import state, { subscribe } from './rudux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";
import { addPost,updateNewPostText } from './rudux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from './components/Dialogs/Dialogs'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">

        <Header />

        <Navbar />

        <div className='content'>
          <Routes>
            <Route path="/content" element={<Content/>} />
            <Route path="/dialogs" element={<Dialogs/>} />
          </Routes>
          {/* <Content /> */}
          {/* <Dialogs /> */}
        </div>
        
      </div>
    </>
  );
}

export default App;

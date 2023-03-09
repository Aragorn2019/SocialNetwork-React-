import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Routes, Route, Link } from "react-router-dom";
import { addPost } from './rudux/state';


function App(props) {

  return (
    <>
      <div className="App">

        <Header />

        <Navbar />

        <div className='content'>
          <Routes>
            <Route path="/content" element={<Content 
              profilePage={props.state.profilePage} 
              addPost={addPost}
              updateNewPostText={props.updateNewPostText}/>} 
            />
            <Route path="/dialogs" element={<Dialogs 
              state={props.state.messagesPage}/>} 
            />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
        
      </div>
    </>
  );
}

export default App;

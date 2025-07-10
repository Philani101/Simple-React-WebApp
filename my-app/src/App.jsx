import './App.css';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';

function App() {
 const title = 'welcome to the new blog'
 const likes = 50;
 const link = 'https://music.youtube.com'

  return (
      <div className="App">
       <Navbar />
       <div className="content">
          <Home />
       </div>
    </div>
  )
}

export default App

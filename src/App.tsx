import './App.css';
import ButtonApp from './component/Button';
import Counter from './component/CounterProps';
import MyComponent from './MyComponent';
import AuthComponent from './component/AuthComponent'; 
import FirestoreComponent from './component/FirestoreComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import necessary routing components
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {

  const teamName1 = 'Team A';
  const teamName2 = 'Team B';

  const resetAction = () => {
    const key1 = 'counter-' + teamName1;
    const key2 = 'counter-' + teamName2;
    console.log('++++ KEY NAME', key1);
    localStorage.setItem(key1, '0');
    localStorage.setItem(key2, '0');
    window.location.reload();
  };

  return (
    <Router>
      <div className='app-main'>
        <header className="App-header">
          <h5>Administrative Login</h5>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="App-main">
          <AuthComponent />
          <FirestoreComponent />
        </main>

        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <h1 className='title'>Online Score Board</h1>
        <div className="app">
          <div className="team">
            <Counter team={teamName1} />
          </div>
          <div className="team">
            <Counter team={teamName2} />
          </div>
        </div>
        <div className='reset-btn'>
          <ButtonApp name='RESET' action={resetAction}></ButtonApp>
        </div>
        
        <MyComponent name='Sujith Gamage'>{}</MyComponent>
      </div>
    </Router>
  );
}

export default App;

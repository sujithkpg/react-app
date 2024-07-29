
import './App.css'
import Counter from './component/CounterProps';

function App() {

  return (
    <>
      <div>
      </div>
      <h1>Online Score Board 2024</h1>
      <div className="app">
      <div className="team">
        <Counter team="Team A" />
      </div>
      <div className="team">
        <Counter team="Team B" />
      </div>
    </div>
     </>
  )
}

export default App

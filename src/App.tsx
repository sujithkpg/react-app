
import './App.css'
import ButtonApp from './component/Button';
import Counter from './component/CounterProps';
import MyComponent from './MyComponent';

function App() {

  const teamName1='Team A';
  const teamName2='Team B';
  const resetAction = () => {
    const key1 = 'counter-'+teamName1;
    const key2 = 'counter-'+teamName2;
    console.log('++++ KEY NME',key1);
    localStorage.setItem(key1, '0');
    localStorage.setItem(key2, '0');
};
  return (
    
    <div className='app-main'>
      <h1 className='title'>Online Score Board 2024</h1>
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
  )
}

export default App

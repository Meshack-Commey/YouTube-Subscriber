import React from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Subscriber from './components/Subscriber';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind /> 
{/*
      <header className="App-header">
        <Greet name='Greetings' description='thanks' > 
          <p>Good day,</p>
          <p>Hope you are doing good!</p>
        </Greet>
        <Greet name='Apology' description='forgive me please!' >
          <p>I have realized that I have offended you</p>
          <p>please forgive me</p>
        </Greet>
        <Greet name='Gratitute' description='I appreciate' >
          <p>this calls for celebrations!!!!!</p>
        </Greet>
      </header>
      <main>
        <Welcome name='Meshack' heroName='MeshCom' />
        <Welcome name='Getrude' heroName='Lagawoman' />
        <Welcome name='Saviour' heroName='Iconic' />
        <Welcome name='Charles' heroName='Low-Key' />
      </main>
  
      <footer>
        <Message />
      </footer>
  */}
    </div>
  ); 
}

export default App
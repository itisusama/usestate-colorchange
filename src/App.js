import { useState } from 'react';
import './App.css';

function App() {

  const[backGroundColor, setBackGroundColor] = useState('transparent')
  
  function handleColorChange(colorVariable) {
    setBackGroundColor(colorVariable);
  }

  return (
    <div className="App">

    <section className='colorChange__box'>
      <h3>useState Color Change</h3>
      <div className='color__box' style={{backgroundColor: backGroundColor}}></div>

      <button type='button' onClick={() => handleColorChange('red')}>red</button>
      <button type='button' onClick={() => handleColorChange('green')}>green</button>
      <button type='button' onClick={() => handleColorChange('blue')}>blue</button>
    </section>
      
    </div>
  );
}

export default App;

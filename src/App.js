import logo from './logo.svg';
import './App.css';
import { startTransition, Suspense, useId, useState } from 'react';
import { flushSync } from 'react-dom';
import ApiCallComponent from './ApiCallComponent';

const array = ['a', 'v', 'h'];

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [text, setText] = useState('');
  const id = useId();
  const [filterArray, setFilterArray] = useState(array);

  const clickFun = () => {
    setCount(count + 1);
    flushSync(() => setCount(count + 1));
    flushSync(() => setCount1(count1 + 1))

  }

  const onChangeText = (e) => {
    console.log(e.target.value);
    if (e.target.value === '') {
      startTransition(() => setFilterArray(array))
      setText(e.target.value);
    } else {
      const data = array.filter(data => data === e.target.value);
      setFilterArray(data);
      setText(e.target.value);
      startTransition(() => setFilterArray(data))

    }
  }

  console.log(count, count1);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ clickFun } >+</button>
        { count }<br />
        { count1 }
        <form>
          <label htmlFor={`search-${id}`} >Type to search: </label>
          <input id={`search-${id}`} value={ text } onChange={ onChangeText } />
        </form>
        { filterArray.map(arr => <div>{ arr }</div>) }
        <Suspense fallback={<h1>Loading...</h1>} >
        <ApiCallComponent/>
        </Suspense>
      </header>
    </div>
  );
}

export default App;

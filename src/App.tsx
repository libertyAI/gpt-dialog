import './App.css';
import {useState} from 'react';

type Dialog = {
  type: 'user' | 'server'
  content: string
}

function App() {
  const [inputVal, setInputVal] = useState('');
  const [dialogList, setDialogList] = useState<Array<Dialog>>([]);
  const handleClick = () => {
    console.info('🚀🚀', 'inputVal -->', inputVal, `<-- App.tsx/handleClick`);
    setDialogList((prevState) => {
      console.info('🚀🚀', 'prevState -->', prevState, `<-- App.tsx/`);
      return [...prevState, {type: 'user', content: inputVal}];
    });
    setInputVal('')
  };
  return (
    <div className="App">
      <div className="dialog">
        {dialogList.map(({type, content}) => {
          return (
            <div key={type+Math.random().toString()} style={{display: 'flex', flexDirection: type === 'user' ? 'row-reverse' : 'row'}}>
              <div className={'content'}>{content}</div>
            </div>
          );
        })}
      </div>
      <div className={'input-container'}>
        <textarea value={inputVal} onChange={e => setInputVal(e.target.value)} rows={5} placeholder={'输入文字'}/>
        <button onClick={handleClick}>发送</button>
      </div>
    </div>
  );
}

export default App;

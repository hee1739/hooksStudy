import { useEffect, useMemo, useRef } from 'react';
import { useState } from 'react';
import Timer from './Timer';


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showTime,setShowtime] = useState(false);
  const increse =() =>{ setCount(count+1)}
  const countRef = useRef(0); //접근하려면 countRef.current 이렇게 하면 됨 
  const inputRef = useRef();
  const [contury,setContury] = useState(true);
  const location = useMemo(()=>{
    return {
       where: contury ? '한국' : '일본',
   }
  },[contury])
  const upCountRef = () =>{
    countRef.current = countRef.current + 1;
    console.log("Ref는 렌더링 되지않음");
  }
  useEffect(()=>{ 
    console.log('useEffect 호출'); 
  },[location])
  useEffect(()=>{
    //console.log(inputRef);
    inputRef.current.focus();
  },[]);
  useEffect(()=>{
    console.log("카운트 렌더링 됨");
  },[count])
   useEffect(()=>{
    console.log("name이 렌더링 됨");
  },[name])
  
  return (
    <div className="App">
       
        <button onClick={()=>{ setShowtime(!showTime)} }>타이머</button> 
         { showTime ? <Timer/> : null }
        <span> <button onClick={ increse} > 증가 </button> {count} </span>
        <div>Ref : {countRef.current} </div>
        <div><button onClick={upCountRef}>Ref 올려</button> </div> 
      <br /> 
      <input ref={inputRef} value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />     <span> 입력 내용 : {name} </span>
      <br/>
      <button onClick={()=>{
        alert(`환영합니다. ${inputRef.current.value}!`)
        inputRef.current.focus();
      }}>확인</button> 
      <div>
        <h2>어느 나라에 있어요?</h2>
        <p> 나라 : {location.where} </p>
        <button onClick={()=>{ setContury(!contury) }}>여행</button>
      </div>
      
    </div>
  );
}

export default App;

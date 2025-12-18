import { useEffect, useRef, useState } from "react"

export default function App(){
  const [socket,setSocket]=useState<WebSocket>();
  const inputRef=useRef();

  function submitMsg(){

    const message=inputRef.current.value;
    socket?.send(message)
  }

  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage=(ev)=>{
      alert(ev.data)
    }
  },[])

  return <>
    <input type="text" ref={inputRef}  placeholder="Enter text.."/>
    <button onClick={submitMsg}>Submit</button>
  </>
}
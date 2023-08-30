import { useEffect } from "react"

const Timer = () => {
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머 돌아가는중");
        },1000)  
        return () => {
            clearInterval(timer);
            console.log("타이머 종료");
        } 
        

    },[])
    
    return(
        <div>
            <span>타이머를 시작합니다.</span>
        </div>
    )
} 

export default Timer;
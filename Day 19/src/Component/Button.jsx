import React,{ useState } from 'react';
import '../style/Button.css'

export default function Button(){

    const [count,setCount] = useState(0);

    return (
        <>
        <button onClick={()=>{
            let count1 = count + 1;
            setCount(count1)
        }}>{count}</button>
        </>
    )
}
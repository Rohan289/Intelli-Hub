import React , {useEffect, useState} from "react";

const UseStateConcepts = () => {
    const [counter,setCounter] = useState(0);
    console.log("ClassQ");
    return(
        <button onClick={() => {
            setCounter(counter+1);
            setTimeout(() => {
                setCounter(counter+1);
            },1000)
            setTimeout(() => {
                setCounter(counter+1);
            },500)
        }}> {counter}</button>
    )

}

export default UseStateConcepts;
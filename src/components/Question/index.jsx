import React, { useState } from "react";
import {questions} from '../../questions.js';
import {AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai';

import './style.css';
import Answer from "../Answer/index.jsx";


const Question = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [state, setState] = useState(false);

    // const [textSave, setTextSave] = useState('');
    // const savetext = (textSave) => {
    //   setTextSave(textSave);
    // }
    // console.log(textSave)

    const [icon, setIcon] = useState(AiOutlineCheckCircle)
    const handleIcon = () => {
        // if(questions[index] === "What") {
        //     setIcon(AiFillCheckCircle)
        // } else if (questions[index] === "Who") {
        //     setIcon(AiFillCheckCircle)
        // } else if (questions[index] === "When") {
        //     setIcon(AiFillCheckCircle)
        // } else {
        //     setIcon(AiFillCheckCircle) 
        // }
        setIcon(AiFillCheckCircle)
    }
 
     const handleChange = ({target}) => {
        setText(target.value);
    }

    const prevQuest = () => {
        setIndex(index - 1);
        // setText('');
        // setState(icon);
        setState(!state)
        // handleIcon()
        
    }
    const nextQuest = () => {
        setIndex(index + 1);
        // setText('');
        setState(icon);
        // setState(!state)
        // setTextSave('') vymaže jen odstavec, nikoliv input
        handleIcon()
    }
  

    // return (

    //     <>
    //     <div>
    //         <button onClick={prevQuest} disabled={index === 0} >
    //         ←    
    //         </button>

    //    {questions.map((q, i) => <label htmlFor="" key={i}>
    //         {q}
    //         <input type="text" value={text} onChange={handleChange}/>
    //         <hr />
    //         {/* <Answer onSaveText={savetext} buttonClick={nextQuest}/> */}
    //     </label>)}
    //         <button onClick={nextQuest} disabled={index === (questions.length - 1)}>
    //         →
    //         </button>
    //         {/* {state ? <AiFillCheckCircle /> : <AiOutlineCheckCircle/>} */}
    //     </div>
    //     <p>{textSave}</p>
    //     </>
    // )
    return (

        <>
        <div>
            <button onClick={prevQuest} disabled={index === 0} >
            ←    
            </button>

        <label htmlFor="">
            {questions[index]}
            <input type="text" value={text} onChange={handleChange}/>
            {/* <hr /> */}
            {/* <Answer onSaveText={savetext} buttonClick={nextQuest}/> */}
        </label>
            <button onClick={nextQuest} disabled={index === (questions.length - 1)}>
            →
            </button>
            
        </div>
        {/* {questions.map((q, i) => <p key={i}>{q}{state ? <AiFillCheckCircle /> : <AiOutlineCheckCircle/>}</p>)} */}
        <p>{questions[index]}{icon}</p>
        <p>{text}</p>
        </>
    )
}

export default Question;
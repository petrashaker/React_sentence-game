import React from "react";
import { useState, useEffect } from "react";
import { AiFillCheckCircle, AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";


const QWhen = ({handleText, handleIcon}) => {
    const [text, setText] = useState('');
    const[icon,setIcon] = useState(false);
    const handleChange = ({target}) => {
        setText(target.value);
        setIcon(AiFillCheckCircle);
        handleIcon(icon);
    }

    useEffect(() => {
        handleText(text)
    }, [text]);

    const changeIcon = () => {
        setIcon(!icon)
    }
    
    return (
        <div className="flex">
        <Link to="/what"><AiOutlineArrowLeft className="arrow" /></Link>
        <h3>When</h3>
        <input type="text" className="input" value={text} onChange={handleChange}/>
        <Link to="/where"><AiOutlineArrowRight className="arrow" /></Link>
        </div>
    )
}

export default QWhen;
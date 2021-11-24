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
        <>
        <Link to="/what"><AiOutlineArrowLeft /></Link>
        <h3>When</h3>
        <input type="text" value={text} onChange={handleChange}/>
        <Link to="/where"><AiOutlineArrowRight /></Link>
        </>
    )
}

export default QWhen;
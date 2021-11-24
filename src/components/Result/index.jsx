import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Result = ({textWho, textWhat, textWhen, textWhere, iconWho, iconWhat, iconWhen, iconWhere }) => {

    return (
        <>
        {!!iconWho && !!iconWhat && !!iconWhen && !!iconWhere ? 
            <p>{textWho} {textWhat} {textWhen} {textWhere}</p> 
            : 
            <p>Sentenced not shown: You have to fill all questions. </p>
        }
        <Link to="/"><AiOutlineArrowRight /></Link>
        {/* <p>Home</p> */}
        </>
    )
}

export default Result;
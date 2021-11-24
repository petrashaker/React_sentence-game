import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Result = ({textWho, textWhat, textWhen, textWhere, iconWho, iconWhat, iconWhen, iconWhere }) => {

    return (
        <div className="flex">
        {!!iconWho && !!iconWhat && !!iconWhen && !!iconWhere ? 
            <p className="sentence">{textWho} {textWhat} {textWhen} {textWhere}</p> 
            : 
            <p className="sentence">Sentenced not shown. <br/> You have to fill all questions. </p>
        }
        <Link to="/"><AiOutlineArrowRight className="arrow" /></Link>
        </div>
    )
}

export default Result;
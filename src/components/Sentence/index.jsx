import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Sentence = () => (
    <div className="flex">
    <p className="sentence">Let's build a sentence.</p>
    <Link to="/who"><AiOutlineArrowRight className="arrow"/></Link>
    </div>
)

export default Sentence;
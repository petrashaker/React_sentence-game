import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Sentence = () => (
    <>
    <p>Let's build a sentence.'</p>
    <Link to="/who"><AiOutlineArrowRight /></Link>
    </>
)

export default Sentence;
import React, { useState } from "react";

const Answer = ({onSaveText, buttonClick}) => {
    const [text, setText] = useState('');
    const handleChange = ({target}) => {
        setText(target.value);
        onSaveText(text);
    }

    const handleClick = () => {
        setText('');
        buttonClick(text)
    }

    return (
        <>
        <input type="text" value={text} onChange={handleChange}/>
        </>
    )
}

export default Answer;
import { useState } from 'react';
import './App.css';
import {AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import QWho from './components/QWho';
import QWhen from './components/QWhen';
import QWhat from './components/QWhat';
import QWhere from './components/QWhere';
import Result from './components/Result';
import Sentence from './components/Sentence';

const App = () => {
  const questions = ["Who", "What", "When", "Where"]
  const [textWho, setTextWho] = useState();
  const [textWhat, setTextWhat] = useState();
  const [textWhen, setTextWhen] = useState();
  const [textWhere, setTextWhere] = useState();
  
  const [iconWho, setIconWho] = useState();
  const [iconWhat, setIconWhat] = useState();
  const [iconWhen, setIconWhen] = useState();
  const [iconWhere, setIconWhere] = useState();

  const handleWho = (textWho) => { setTextWho(textWho);}
  const handleWhat = (textWhat) => { setTextWhat(textWhat); }
  const handleWhen = (textWhen) => { setTextWhen(textWhen); }
  const handleWhere = (textWhere) => { setTextWhere(textWhere); }
  
  const handleIconWho = (iconWho) => { setIconWho(iconWho); }
  const handleIconWhat = (iconWhat) => { setIconWhat(iconWhat); }
  const handleIconWhen = (iconWhen) => { setIconWhen(iconWhen); }
  const handleIconWhere = (iconWhere) => { setIconWhere(iconWhere); }

  return (

    <BrowserRouter className="page">
       
       <div className="icons">
        {iconWho ? <AiFillCheckCircle className="icon"/> : <AiOutlineCheckCircle className="icon"/> }
        {iconWhat ? <AiFillCheckCircle className="icon" /> : <AiOutlineCheckCircle className="icon"/> }
        {iconWhen ? <AiFillCheckCircle className="icon"/> : <AiOutlineCheckCircle className="icon"/> }
        {iconWhere ? <AiFillCheckCircle className="icon"/> : <AiOutlineCheckCircle className="icon"/> }
      </div>

      <nav className="nav">
        <Link to="/who" className="nav__link">Who?</Link>
        <Link to="/what" className="nav__link">What?</Link>
        <Link to="/when" className="nav__link">When?</Link>
        <Link to="/where" className="nav__link">Where?</Link>
        <Link to="/result" className="nav__link">Your sentence:</Link>
      </nav>

     

      <Routes>
        <Route path="/" element={ <Sentence /> } />
        <Route path="/who" element={ <QWho handleText={handleWho} handleIcon={handleIconWho} /> } />
        <Route path="/what" element={ <QWhat handleText={handleWhat} handleIcon={handleIconWhat}/> } />
        <Route path="/when" element={ <QWhen handleText={handleWhen} handleIcon={handleIconWhen}/> } />
        <Route path="/where" element={ <QWhere handleText={handleWhere} handleIcon={handleIconWhere}/> } />
        <Route path="/result" element={<Result textWho={textWho} textWhat={textWhat} textWhen={textWhen} textWhere={textWhere} 
        iconWho={iconWho} iconWhat={iconWhat} iconWhen={iconWhen} iconWhere={iconWhere}/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

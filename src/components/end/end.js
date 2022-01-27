import './end.css';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
function End(prop){
    const navigate=useNavigate();
    useEffect(function(){
        if(prop.loggedIn===false){
            navigate('/');
        }
    });
    return(
        <div className="end-container">
        <div>
            <h1>Your Final Score</h1>
        </div>
        <div>
            <h1>{prop.score}</h1>
        </div>
        <div><button className="end-btn" onClick={end}>Quit</button></div>
        </div>
    );
    function end(){
        prop.setScore(0);
        prop.setLoggedIn(false);
        navigate('/');

    }
}
export default End;
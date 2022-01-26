import './beginning.css';
import {useNavigate} from 'react-router-dom';
function Beginning(prop){
    let navigate=useNavigate();
    return(
        <div className="start-container">
        <div>
            <h1>Welcome to Quiz Mania....</h1>
        </div>
        <input type='text' placeholder='Enter your userName' id='username'></input>
        <div><button className="start-btn" onClick={begin}>Press to Start</button></div>
        </div>
    );
    function begin(){
        if(document.getElementById('username').value===''){
            alert('Enter your username.')
            return;
        }
        prop.setLoggedIn(true);
        navigate('/inGame');

    }
}
export default Beginning;
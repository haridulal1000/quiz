import react, { useEffect } from "react";
import Question from "./questions";
import questionSet from "../../assets/questionSet";
import { useState } from "react";
import Score from "../score/score";
import { Navigate, useNavigate } from "react-router";

function InGame(prop){
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [renderState,setRenderState]=useState(false);
    const navigate=useNavigate();
    useEffect(function(){
        console.log('logged',prop.loggedIn);
        if(prop.loggedIn===false){
            navigate('/');
        }
    });
    return(
        <>
        <Score score={prop.score}/>
        <Question questions={questionSet[currentQuestion]} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} score={prop.score} setScore={prop.setScore} renderState={renderState} setRenderState={setRenderState}/>
        </>
    );
}
export default InGame;
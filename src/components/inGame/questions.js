import react, { useEffect } from "react";
import { useNavigate } from "react-router";
import './questions.css';
function Question(prop) {
    const navigate=useNavigate();
    useEffect(
        function(){
            if(prop.renderState){
                resetAnswers();
            }
        }
    );
    return (
        <div className="question-container">
            <h1 className="question-item">{prop.currentQuestion+1}. {prop.questions.question}</h1>
            <div className="answers-container">
                <button className="answer-item" onClick={function(){checkAnswer(prop.questions.answers,prop.questions.answers[0])}}>{prop.questions.answers[0].answer}</button>
                <button className="answer-item" onClick={function(){checkAnswer(prop.questions.answers,prop.questions.answers[1])}}>{prop.questions.answers[1].answer}</button>
                <button className="answer-item" onClick={function(){checkAnswer(prop.questions.answers,prop.questions.answers[2])}}>{prop.questions.answers[2].answer}</button>
                <button className="answer-item" onClick={function(){checkAnswer(prop.questions.answers,prop.questions.answers[3])}}>{prop.questions.answers[3].answer}</button>
            </div>
            <div className="next-btn-div"><button className="next-btn" onClick={nextQuestion}>{prop.currentQuestion===4?'Finish':'Next'}</button></div>

        </div>
    );
    function nextQuestion(){
        if(prop.currentQuestion===4){
            navigate('/end');
        }
    prop.setCurrentQuestion(prop.currentQuestion+1);
    prop.setRenderState(true);
}
function resetAnswers(){
    document.querySelectorAll('.answer-item').forEach(element => {
        element.classList.remove('incorrect-answer');
        element.classList.remove('correct-answer');
        element.removeAttribute('disabled');
    });
}
function checkAnswer(ans,choose){
   document.querySelectorAll('.answer-item').forEach(element => {
        element.classList.add('incorrect-answer');
        element.setAttribute('disabled',true);
    });
    for(let i=0;i<ans.length;i++){
        if(ans[i].correct){
            document.getElementsByClassName('answer-item')[i].classList.remove('incorrect-answer')
            document.getElementsByClassName('answer-item')[i].classList.add('correct-answer')
        }
    } 
     prop.setRenderState(false);
    if(choose.correct){
    prop.setScore(prop.score+1);
}
    

   

}
}


export default Question;
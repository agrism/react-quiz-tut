import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => { 

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestionOrder = quizState.currentQuestionIndex + 1;
    const totalQuestions = quizState.questions.length;

    useEffect(()=>{
        if(quizState.questions.length > 0){
            return;
        }
        console.log('useEffect');
        const apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        fetch(apiUrl).then(res=>res.json()).then(data=>{
            dispatch({type: 'LOADED_QUESTIONS', payload: data.results});
        })
    });

    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>   
                    <div>You completed the quiz.</div>
                    <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div> 
                    <div className="next-button" onClick={()=> dispatch({type: "RESTART"})}>Restart</div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length !== 0 && (
                <div>
                    <div className="score">Question {currentQuestionOrder}/{totalQuestions}</div>
                    <Question/>
                    <div 
                        className="next-button"
                        onClick={()=> dispatch({type: "NEXT_QUESTION"})}
                    >Next question</div>
                </div>
            )}

        </div>
    );
};

export default Quiz;
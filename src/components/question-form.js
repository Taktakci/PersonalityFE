import React, { useState } from "react";
import CategoryList from './category-list';
import QuestionList from "./question-list";
import OptionList from "./option-list";
import AnswerForm from './answer-form';

const QuestionForm = () => {
    
    const [questionList, setQuestionList] = useState([]);
    const [optionList, setOptionList] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [questionIdPass, setquestionIdPass] = useState('');
    const [answerTextPass, setAnswerTextPass] = useState('');

    const categoryChange  = ((categoryId) => {
        if (categoryId === 'select')
            return;
        const url = "http://localhost:8080/question/categoryId/" + categoryId;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setQuestionList(json.idList);
            } catch (error) {
                console.log("error", error);
            }
            
        };

        fetchData();    
    });

    const questionChange  = ((questionId) => {
        if (questionId === 'select')
            return;
        const url = "http://localhost:8080/question/" + questionId;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setQuestionText(json.questionText);
                setOptionList(json.options);
                setquestionIdPass(json.id)
            } catch (error) {
                console.log("error", error);
            }
            
        };

    fetchData();    
    });

    const optionChange  = ((optionText) => {
        if (optionText === 'select')
            return;
        setAnswerTextPass(optionText);

    });

    return (
        <div>
            <CategoryList categoryChangeMethod={categoryChange} />
            <QuestionList questionList={questionList} 
                questionChangeMethod={questionChange}
                questionText={questionText}/>
            <OptionList optionList={optionList} 
                optionChangeMethod={optionChange}/>
            <AnswerForm questionId={questionIdPass} 
                answerText={answerTextPass} />
        </div>
            
    );
};

export default QuestionForm;


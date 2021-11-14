
const QuestionList = (props) => {

    return (
        <div>
            <label>Question : </label>
            <select onChange={e => props.questionChangeMethod(e.target.value)} >
                <option value={"select"} >-</option>
            {props.questionList.map((questionId) => (
                <option value={questionId}>{questionId}</option>
                
            ))}
            </select>

            <p style={{ color: 'red' }}>{props.questionText}</p>

        </div>
        )
    
};

export default QuestionList
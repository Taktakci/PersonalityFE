import { useState } from "react";

const Answer = (props) => {
  const [userId, setUserId] = useState('');
  const [resultText, setResultText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let questionId = props.questionId;
    let answerText = props.answerText;
    const blog = { userId, questionId, answerText };

    fetch('http://localhost:8080/answer', {
      method: 'POST',
      headers: { "access-control-allow-origin" : "*",
        "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        setResultText("Error: " + response.message);
      }
      else {
        setResultText("Your Answer Saved for Question " + props.questionId);
      }
    })
    .catch((error) => {
      setResultText('' + error);
    });
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
      <h4>{' '}</h4>

      <div className="form-group">
        <label>User Id:</label>
      </div>
      <div className="form-group">
        <input 
          type="text" 
          required 
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Question Id:</label>
      </div>
      <div className="form-group">
        <input
          type="text" 
          required
          value={props.questionId}
        ></input>
      </div>

      <div className="form-group">
        <label>Answer:</label>
      </div>
      <div className="form-group">
        <input
          type="text" 
          required
          value={props.answerText}
        ></input>
      </div>

        <button>Send Answer</button>
        <p style={{ color: 'red' }}>{resultText}</p>
      </form>
    </div>
  );
}
 
export default Answer;
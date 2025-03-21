import { useState } from "react";
import questions from "./data"

const App = () => {


    return (
        <container>
            <div style={{
                    alignItems: "center", 
                    margin: "50px", 
                    padding: "50px",
                    backgroundColor: "white"
                }}>
            <h1 className="title" style={{marginBottom: "50px"}}>Questions</h1>
            {questions.map(q => <Question key={q.id} {...q} />)}
            </div>
        </container>
    )
};

const Question = ({id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <article className="question">
            <header>
                <h5 className="header">{title}</h5>
                <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>+</button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
}

export default App;

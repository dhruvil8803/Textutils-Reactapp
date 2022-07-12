import React, {useState} from 'react'

export default function TextArea(props) {
    let upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    let lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    let clear = ()=>{
        setText('');
    }
    let textChanger = (event)=>{
        setText(event.target.value);
    }
    let [text, setText] = useState("");
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange = {textChanger} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                <button type="submit" onClick= {upperCase} className="btn btn-primary my-2 mb-3 mx-1">Upper Case</button>
                <button type="submit" onClick= {lowerCase} className="btn btn-primary my-2 mb-3 mx-1">Lower Case</button>
                <button type="submit" onClick= {clear} className="btn btn-primary my-2 mb-3 mx-1">Clear Text</button>
                
            </div>
        </div>
        <div className="container my-3">
            <h2>
                Your text summary
            </h2>
            <p>
                Your text contains {(text.length === 0)? 0: text.split(" ").length} number of words and total character are {text.length}
            </p>
            <p>
               Time required to read this sentence is approx {0.008 * ((text.length === 0)? 0: text.split(" ").length)} minutes
            </p>
            <h2>
                Preview
            </h2>
            <p>
                {text}
            </p>
        </div>
        </>
    )
}


import {marked,Renderer} from 'marked';
import './App.css';
import {useState} from "react";
const markdownInitialText="this is the current value"

export default function App() {
  const [inputText, setInputText] = useState(markdownInitialText);
    const [markup, setMarkup] = useState(marked(markdownInitialText));

    const handleChange = (e) => {
        setInputText(e.target.value);
        setMarkup(marked(e.target.value));
    }

    return (
        <div className="wrapper">
            <div className="navbar">
                <h1>Markdown Previewer</h1>
            </div>
            <div className="editor-pane">
                <textarea id="editor" onInput={handleChange} value={inputText}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{ __html: markup }} />
            </div>
        </div>
    );
}

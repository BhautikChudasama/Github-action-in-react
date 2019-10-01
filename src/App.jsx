import React from "react";
import {render} from "react-dom";

export default function App() {
    var texts = [
        "Cześć! Jak się masz?",
        "Hi! How are you?",
        "नमस्ते! क्या हाल है?",
        "Hi! Si jeni?",
        "તમે કેમ છો?",
        "こんにちは！お元気ですか？",
        "हाय! तू कसा आहेस?",
        "Hæ! Hvernig hefurðu það?",
        "Γεια! Πώς είσαι;"
    ]
    var lucky = Math.floor(Math.random()*9);
    var text = texts[lucky];
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
}

render(<App />, document.getElementById("root"));
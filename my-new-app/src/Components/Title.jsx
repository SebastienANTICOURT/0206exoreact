import {useState} from "react";
import './Title.css'

const Title = () => {
    const [HelloTitle, setHelloTitle] = useState("");

    return (
        <div>
            <p>Hello, {HelloTitle}</p>
            <input
            type = "texte"
            onChange={(e) => setHelloTitle(e.target.value)}
            />
        </div>
    );
};
export default Title



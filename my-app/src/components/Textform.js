import React, {useState} from 'react'
export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
const [text,setText] = useState('Enter text here');

    return(
<div>

    <h1>{props.heading}-</h1>
    <div class="mb-3">
 <label for="myBox" class="form-label">Example textarea</label>
 <textarea class="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
    )

    
}
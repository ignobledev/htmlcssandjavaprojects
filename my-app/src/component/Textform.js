import react,{ useState } from 'react';

 import PropTypes from 'prop-types'
export default function Textform(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearonclick=()=>{
        let newText = ' ';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here');
    //setText("my teeer");
  return (
    <>
    <div>
        <h1>{props.heading}-{text}</h1>
     <div className="mb-4">
  <textarea className="form-control" id="my-box" value={text} onChange={handleOnChange}rows="11"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to Lowercase</button>
<button className="btn btn-danger mx-3" onClick={clearonclick}>cleartextarea</button>
    </div>
    <div className="conatainer my-4">
     <h1> your text summary</h1>
     <p>{text.split(" ").length} words and {text.length}characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read</p>
     <p>{text}</p>
    </div>
    </>
  )
}

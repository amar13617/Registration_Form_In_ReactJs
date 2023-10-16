import React, {useState} from 'react'




function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = ' ';
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  //text = "new text"; // wrong way
  //setText("new text"); correct way
  return (
    <>
    <div>
      <h1>{props.heading} </h1>  
    <div className="mb-3">
        
        <textarea className="form-control" value ={text} onChange = {handleOnChange} id="myBox" rows="7"></textarea>

    </div>
    <button className= "btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
    <button className= "btn btn-primary my-2" onClick={handleLowClick}>convert to Lowercase</button>
    <button className= "btn btn-primary my-2" onClick={handleClearClick}>clear</button>
</div>
<div className="container my-2">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length}words and {text.length} characters</p>
</div>
</>
  )
}

export default TextForm;
export{TextForm};
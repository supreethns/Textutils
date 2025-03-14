import React ,{useState}from "react";

const TextForm = (props) => {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        //
    }
    const handleLoClick=()=>{
      // console.log("Uppercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
      
  }
  const handleclearClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText='';
    setText(newText);
    
}
  
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    
    
  return (
    <>
  <div className="conatiner" style= {{color: props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark' ?'black':'white',color: props.mode==='dark'?'white':'black'}} id="Mybox" rows="9"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>clear</button>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p><b>{0.008 * text.split(" ").length}Minutes read</b></p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter something in the text box above to preview it "}</p>

    </div>

    </>
  );
};

export default TextForm;

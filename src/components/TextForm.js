
import React, {useState} from 'react'

export default function TextForm(props) {
    
//whenever we click on button this function is called and text is converted to upper case
 const handleUpClick= ()=>
 {
     let newText=text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to uppercase!","success");
 }

 //to lower case
 const handleLoClick= ()=>
 {
     let newText=text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to lowercase!","success");
 }


//clear the textarea
 const handleClearClick= ()=>
 {
     let newText=' ';
     setText(newText);
     props.showAlert("Text Cleared!","success");
    
 }

 //copy text
 const handleCopy =() =>
 {
    
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success");

 }

//to remove extra spaces
 const handleExtraSpaces = ()=>
 {
     let newText=text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra spaces removed!","success");

 }



 //whenever we try to change text in textarea this function will be called and we can make changes
    const handleOnChange = (event)=>{
      
        
      setText(event.target.value);
    }

//creating a state text
    const [text,setText]=useState('');


    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#173361'}}>
     <h1 ClassName="mb-4">{props.heading} </h1>
     <div ClassName="mb-3">
     <textarea className="form-control" placeHolder="Enter your text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,
        color:props.mode==='dark'?'white':'#173361'}} id="myBox" rows="8"></textarea>
     </div>
     
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-3 " onClick={handleUpClick} >Convert To Uppercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleLoClick} >Convert To Lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2  my-3" onClick={handleClearClick} >Clear Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-3 " onClick={handleCopy} >Copy Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-3 " onClick={handleExtraSpaces} >Remove Extra Space</button>
     </div>


       <div className="container my-3"  style={{color: props.mode==='dark'?'white':'rgb(12 34 69)'}}>
           <h2>Your text summary</h2>
        {/* split by a space and by a new line */}
           <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
           <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Nothing to preview!"}</p>
       </div>
        </>
    )
}

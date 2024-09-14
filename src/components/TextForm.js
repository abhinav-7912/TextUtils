import React ,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('enter text here');
    //setText=("new text"); rigth way to change the state
    const handleupclick =()=>{
       // console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!..","success");

    }
    const handleloclick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!..","success");
        
    }
    const handleCopy =()=>{
         var Text = document.getElementById("mybox");
         Text.select();
         navigator.clipboard.writeText(Text.value);
         props.showAlert("Copied successfully..","success");
    }
    const handleclearclick =()=>{
         let newText = '';
         setText(newText)
    }
    const handleonChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);

    }

  return (
    <>
    <div className="container" style={ {color:props.mode===`dark`?`white`:`#042743`}}>
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleonChange} style={ {backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#042743`}}id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Change to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Change to lowercase</button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleclearclick}>Clear Text</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
    <div className="container my-3" style={ {color:props.mode===`dark`?`white`:`#042743`}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}

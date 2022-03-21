// import { useState } from "react"
import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const[text,setText]= useState(' ');
  return ( 
    <>
    <div>   
      <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("upper Case Clicked")
        let a = text.toUpperCase()
        setText(a)
    }
    const handleLowClick = () => {
        console.log("upper Case Clicked")
        let a = text.toLowerCase()
        setText(a)
    }
    const handleOnChange = (event) => {
        console.log("Changed")
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>

            <div className={`text-${props.mode==="dark"?"white":"dark"}`}>
                <h1 className='my-3'>Enter Text To Analyze</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==="dark"? "light":"dark"}`} onChange={handleOnChange} value={text} id="myBox" rows="5"></textarea>
                </div>
                <div className="col-6">

                <button className="btn btn-primary col-3" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-secondary col-3" onClick={handleLowClick}>LowerCase</button>
                </div>
            </div>
            <div className={`text-${props.mode==="dark"?"white":"dark"} my-3`}>
                <h1>Text Summary</h1>
                <p>{text.length} Characters and {text.split(" ").length - 1} Words</p>
            </div>
        </>
    )
}

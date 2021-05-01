import React from "react"
import Button from "./Button"
import TelInput from "./Form/TelInput"
import Textarea from "./Form/Textarea"
import FileInput from "./Form/FileInput"
import Select from "./Form/Select"

const Form = () =>{
    return(
        <form className={"form"}>
            <div className="header">
                <h2>Форма</h2>
                <p>Дополнительный текст &#9203;</p>
            </div>

            <div className="input_wrapper">
                <Select/>

                <TelInput/>

                <Textarea/>

                <FileInput/>
            </div>

            <Button/>
        </form>
    )
}

export default Form
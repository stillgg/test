import React from "react"

const Form = (props) =>{
    return(
        <form className={"form"}>
            <input type="text" placeholder={""}/>
            <input type="text"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="file"/>
        </form>
    )
}

export default Form
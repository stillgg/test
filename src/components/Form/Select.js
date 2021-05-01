import React, {useState} from "react"

const Select = () =>{
    const [dropdownMenu,changeDropdown] = useState(false)
    const [placeholder,activePlaceholder] = useState(false)
    const [inputValue,changeInputValue] = useState("")
    const [radioInputValues] = useState(
        [
            "Выбор 1",
            "Выбор 2",
            "Выбор 3",
            "Выбор 4",
            "Выбор 5"
        ]
    )

    return(
        <div className={"select_wrapper"}>
            <ul
                className={"dropDown_inputs"}
                style={{
                    visibility: `${dropdownMenu?"visible":"hidden"}`
                }}
            >
                {
                    radioInputValues.map( (item,index)=>{
                        return(
                            <li onClick={e=>{
                                const textContent = e.target.textContent

                                if(textContent){
                                    changeInputValue(e.target.textContent)
                                    activePlaceholder(true)
                                }

                                changeDropdown(false)
                            }}
                                key={index}
                            >
                                <input className={"radio_input"} name={"choose"} type="radio" id={`choose${index}`}/>
                                <label className="label" htmlFor={`choose${index}`}>
                                    <span>{item}</span>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <label
                className={"select_wrapper_header"}
                onClick={()=>changeDropdown(!dropdownMenu)}
            >
                <span className={placeholder?"active_placeholder":"placeholder"}>Выбор чего-то *</span>
                <input  className={"header_input"} type="text" value={`${inputValue}`} disabled/>
            </label>
        </div>
    )
}

export default Select
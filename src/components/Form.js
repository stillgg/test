import React, {useState} from "react"
import Button from "./Button"

const Form = (props) =>{
    const [dropdownMenu,changeDropdown] = useState(false)
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
    const [placeholder,activePlaceholder] = useState(false)
    const [heightTextArea,changeHeight] = useState(0)

    const scrollTextAreaHandler = (e)=>{
        if (e.target.scrollTop > 0) {
            changeHeight(e.target.clientHeight + e.target.scrollTop)
        }
    }

    return(
        <form className={"form"}>
            <div className="header">
                <h2>Форма</h2>
                <p>Дополнительный текст &#9203;</p>
            </div>

            <div className="input-wrapper">
                <div className={"select-wrapper"}>
                    <ul
                        className={"dropDown-inputs"}
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

                                    }
                                    }>
                                        <input key={index} className={"radio-input"} name={"choose"} type="radio" id={`choose${index}`}/>
                                        <label className="label" htmlFor={`choose${index}`}>
                                            <span>{item}</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <label
                        className={"select-wrapper-header"}
                        onClick={()=>changeDropdown(!dropdownMenu)}
                    >
                        <span className={placeholder?"active-placeholder":"placeholder"}>Выбор чего-то *</span>
                        <input  className={"header-input"} type="text" value={`${inputValue}`} disabled/>
                    </label>
                </div>
                <input className={"tel"} type="tel" placeholder={"Номер телефона *"} required/>
                <textarea className={"shortAboutSMTH"}
                          style={{
                              height: `${heightTextArea ? heightTextArea+2 +"px": "40px"}`
                          }}
                          placeholder={"Коротко о чем-то еще"}
                          rows={3}
                          maxLength={93}
                          required

                          onKeyUp={e => scrollTextAreaHandler(e)}

                          onChange={
                              e => scrollTextAreaHandler(e)
                          }

                          onKeyDown={e=>{
                              if( e.keyCode === 13 ) {
                                  e.preventDefault();
                              }
                          }}
                >
                </textarea>

                <div className="file-input-wrapper">
                    <label className={"file-input"}>
                        <input type="file" multiple onClick={e=>console.log(e.target.files)}/>
                        <span>Прикрепить файл</span>
                    </label>
                </div>

            </div>

            <Button/>
        </form>
    )
}

export default Form
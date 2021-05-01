import React, {useState} from "react"

const Textarea = () =>{
    const [heightTextArea,changeHeight] = useState(0)
    const [textAreaValue, changeTextArea] = useState("")

    const scrollTextAreaHandler = (e)=>{
        if (e.target.scrollTop > 0) {
            changeHeight(e.target.clientHeight + e.target.scrollTop)
        }
    }

    return(
        <div className="shortAboutSMTH_wrapper">
              <textarea className={"shortAboutSMTH"}
                    style={{
                         height: `${heightTextArea ? heightTextArea + 2 + "px" : "40px"}`
                    }}
                    placeholder={"Коротко о чем-то еще"}
                    rows={3}
                    maxLength={95}
                    required
                    value={textAreaValue}
                    onKeyUp={e => scrollTextAreaHandler(e)}

                    onChange={
                         e => {
                              scrollTextAreaHandler(e)
                                  changeTextArea(e.target.value)
                              }
                         }

                    onKeyDown={e => {
                         if (e.keyCode === 13) {
                                   e.preventDefault();
                              }
                         }}
                    >
              </textarea>

              <span
                   style={{
                        opacity: `${textAreaValue ? 1 : 0}`
                   }}
                   className={"shortAboutSMTH_placeholder"}
                   >
                   Коротко о чем-то еще
              </span>
        </div>
    )
}

export default Textarea
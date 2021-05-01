import React, {useState} from "react"

const TelInput = () =>{
    const [telInputValue,changeTelInputValue] = useState("")
    const [isValidTel,changeValid] = useState(true)

    return(
        <div className="tel_wrapper">
                    <span
                        className={"tel_placeholder"}
                        style={{
                            opacity: `${telInputValue?1:0}`
                        }}>Номер телефона *</span>
            <input
                className={`tel ${isValidTel?"valid_tel":"invalid_tel"}`}
                value={telInputValue}
                type="tel"
                required
                placeholder={"Номер телефона *"}
                maxLength={10}
                onBlur={e=>{
                    if(!e.target.value){
                        changeValid(false)
                        return
                    }
                    changeValid(true)
                }}
                onChange={(e)=> changeTelInputValue(e.target.value) }
            />
        </div>
    )
}

export default TelInput
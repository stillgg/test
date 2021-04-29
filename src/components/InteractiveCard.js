import React, {useState} from "react"

const InteractiveCard = (props) =>{
    const [transform, setTransform] = useState(0)
    const [paralax, setParalax] = useState(false)

    return(
        <div className={"card-wrapper"}
             style={{

                 transform: `rotateY(${transform}deg)`
             }}

             onMouseMove={e => {
                 const getCard = (node) =>{
                     if(node.className === "card-wrapper"){
                         return node
                     }
                     return getCard(node.parentNode)
                 }

                 const card = getCard(e.target).getBoundingClientRect()

                 const result = e.clientX - card.left



                 if(card.width/2 < result){
                     setParalax(false)
                     return setTransform(25)
                 }

                 if(card.width/2 > result){
                     setParalax(true)
                     return setTransform(-65)
                 }
             }}

             // onMouseOut={
             //     e=> {
             //     }
             // }
        >
            <img
                src="./img/birds1.svg"
                className={"birds1"}
                alt="birds1"
                style={{
                    transform: `${
                        paralax?
                        "translateX(-60px) translateY(-30px) scale(.9) "
                        :
                        "scale(1)"}`
                }}
            />

            <img
                src="./img/birds2.svg"
                className={"birds2"}
                alt="birds2"
                style={{
                    transform: `${
                        paralax?
                            "scale(1) translateX(40px) translateY(10px)"
                            :
                            "scale(.9)"}`
                }}
            />

            <div className={"card"}>
                <img className="img_infinity" src="./img/infinity.svg" alt="infinity"/>
                <span className="txt1">Интерактивная карточка</span>
                <span className="txt2">Должна вращаться за мышкой</span>
                <div className="btn">
                    <img src="./img/eye.svg" className={"img_eye"} alt="eye"/>
                    <span className={"btn_txt"}>кнопка</span>
                </div>
            </div>
        </div>
    )
}

export default InteractiveCard
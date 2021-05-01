import React, {useState} from "react"
import {Birds1IMG, Birds2IMG,InfinityIMG} from "../assets/image/index"
import Button from "./Button"

const InteractiveCard = () =>{
    const [transformX, setTransformX] = useState(0)
    const [transformY, setTransformY] = useState(0)
    const [paralax, setParalax] = useState(false)

    return(
        <div className={"card_wrapper"}
             onMouseMove={e => {
                 const getCard = (node) =>{
                     if(node.className === "card_wrapper"){
                         return node
                     }
                     return getCard(node.parentNode)
                 }

                 const card = getCard(e.target).getBoundingClientRect()

                 const resultX = e.clientX - card.left
                 const resultY = e.clientY - card.top

                 const cardHeight = card.height
                 const cardWidth = card.width

                 if(cardWidth/2 < resultX){
                     setParalax(false)
                     setTransformX(25)
                 }

                 if(cardWidth/2 > resultX){
                     setParalax(true)
                     setTransformX(-25)
                 }

                 if(resultX * 100 / cardWidth > 35 && resultX * 100 / cardWidth < 65){
                     setParalax(false)
                     setTransformX(0)
                 }

                 if (resultY * 100 / cardHeight > 35 && resultY * 100 / cardHeight < 65) {
                     setTransformY(0)
                     return
                 }

                 if(resultY < cardHeight/2){
                     setTransformY(20)
                 }

                 if(resultY > cardHeight/2){
                     setTransformY(-20)
                 }
             }}

             onMouseLeave={
                 e=> {
                     setParalax(false)
                     setTransformX(0)
                     setTransformY(0)
                 }
             }
        >
            <img
                src={Birds1IMG}
                className={"birds1"}
                alt="birds1"
                style={{
                    transform: `${
                        paralax?
                            `scale(1) rotateX(${transformY}deg) rotateY(${transformX}deg) translateX(-20px) translateY(10px)`
                            :
                            `scale(1.1) rotateX(${transformY}deg) rotateY(${transformX}deg)`}`
                }}
            />

            <img
                src={Birds2IMG}
                className={"birds2"}
                alt="birds2"
                style={{
                    transform: `${
                        paralax?
                            `scale(1.2) rotateX(${transformY}deg) rotateY(${transformX}deg) translateY(-25px) translateX(60px)`
                            :
                            `scale(1) rotateX(${transformY}deg) rotateY(${transformX}deg)`
                    }`
                }}

            />

            <div className={"card"}
                 style={{
                     transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`
                 }}
            >
                <img className="img_infinity" src={InfinityIMG} alt="infinity"/>
                <span className="txt1">Интерактивная карточка</span>
                <span className="txt2">Должна вращаться за мышкой</span>
                <Button/>
            </div>
        </div>
    )
}

export default InteractiveCard
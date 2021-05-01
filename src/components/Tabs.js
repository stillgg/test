import React,{useState} from "react"

const Tabs = () =>{
    const [activeTab,changeTab] = useState(0)
    const [textTab] = useState([
        {
            header: "Заголовок 1", body: "Какой-то текст про очень важные вещи о которых нужно было написать внутри этих табов."
        },
        {
            header: "Заголовок 2", body:"Какой-то текст про очень важные вещи о которых нужно было написать внутри этих табов."
        },
        {
            header: "Заголовок 3", body:"Какой-то текст про очень важные вещи о которых нужно было написать внутри этих табов."
        }
    ])

    return(
        <div className={"wrapper_tabs"}>
            <ul className={"wrapper_select_tab"}>
                {
                    textTab.map(
                        (item,index)=>{
                            return(
                                <li
                                    className={`${activeTab===index?"active_select":"select"}`}
                                    key={index}
                                    onClick={e=>changeTab(index)}
                                >{index+1}</li>
                            )
                        }
                    )
                }
            </ul>

            <ul className={"body_tabs"}>
                {
                    textTab.map((item,index)=>{
                        return(
                            <li className={`${index === activeTab?
                                "active_wrapper_tab" : "wrapper_tab"}`
                            }
                                key={index}
                            >
                                <h3 className={"tab_header"}
                                    onClick={e=>changeTab(index)}
                                >{item.header}</h3>
                                <p className={"text_tab"}>
                                    {item.body}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>

        </div>

    )
}

export default Tabs
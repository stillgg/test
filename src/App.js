import React, { Suspense } from "react"

import Fox from "./components/Fox"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Loader from "./components/Fox/Loader"
import InteractiveCard from "./components/InteractiveCard"
import Form from "./components/Form"
import Tabs from "./components/Tabs"

import './App.scss'

function App() {
    return (
        <div className={"App"}>
            <header className={"header"}>
                <div className={"header_frontTest"}>
                    <span className={"black"}>front</span>
                    <span className={"white"}>_test</span>
                </div>
                <h1 className={"header_test"}>Тестовое задание</h1>
                <div className={"header_help"}>
                    <p className={"text"}>
                        Сверстайте эту страницу включая интерактивные элементы
                    </p>
                </div>
            </header>

            <main className={"main"}>
                <section className={"fox"}>
                    <div className={"model_wrapper"}>
                        <Canvas className={"model"}>
                            <directionalLight intensity={.5} position={[-50, 50, -10]}/>
                            <ambientLight intensity={.1}/>

                            <Suspense
                                fallback={<Loader/>}
                            >
                                <Fox/>

                                <OrbitControls
                                    enableZoom={false}
                                    maxAzimuthAngle={6.28}
                                    maxPolarAngle={1.4}
                                    minAzimuthAngle={0}
                                    minPolarAngle={1.4}
                                />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className={"fox_text"}>
                        <p className={"fox_text_animate"}>
                            Анимация: вращение вокруг своей оси автоматически, или с реакцией на мышку.
                        </p>

                        <p className={"fox_text_model"}>
                            3d модель лисы в формате fbx лежит &nbsp;
                            <span className={"underLine"}>в файлах проекта</span>
                            . Можно использовать любую другую модель
                        </p>
                    </div>
                </section>

                <section className={"interactive_card"}>
                    <InteractiveCard/>
                    <p className={"interactive_card_txt"}>
                        Анимация: карточка отклоняется по направлению к курсору. Верхний и нижний слой с птицами
                        повторяет движение карточки с легким параллаксом.
                    </p>
                </section>

                <section className={"section_form"}>
                    <Form/>
                    <p className={"helper"}>
                        Cверстать форму с учетом всех состояний.
                    </p>
                </section>

                <section className={"section_tabs"}>
                    <Tabs/>
                    <p className={"helper"}>
                        Сверстать табы
                    </p>
                </section>
            </main>
            <footer className={"footer"}>
                <p>
                    Не стесняйтесь задавать вопросы по заданию, если они есть.
                </p>
            </footer>
        </div>
    )
}

export default App

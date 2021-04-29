import React, { useRef, useState } from 'react'


import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { useSpring, animated, config } from "react-spring/three"

function Fox(props) {
    const mesh = useRef()
    const fbx = useLoader(FBXLoader, 'fox.fbx')
    return (
        <animated.mesh
            scale={.04}
            // onClick={() => setActive(!active)}
            // ref={myMesh}
        >
            <primitive
                position={[-10,-40,0]}
                object={fbx}
            />
        </animated.mesh>
        )
}

export default Fox
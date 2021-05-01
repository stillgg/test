import React from 'react'

import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { animated } from "react-spring/three"


function Fox() {
    const fbx = useLoader(FBXLoader, 'fox.fbx')
    return (
        <animated.mesh
            scale={.04}
        >
            <primitive
                position={[-10,-40,0]}
                object={fbx}
            />
        </animated.mesh>
        )
}

export default Fox
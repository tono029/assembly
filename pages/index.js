import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Model from '../public/Rhythm'
import * as THREE from "three"

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Assembly</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div className="app_title" style={{color: "white"}}>
        <h1>Assembly from  &quot;Rhythm Heaven&quot;</h1>
        <p>with <span>Blender</span></p>
      </div>

      <Canvas 
        shadows
        orthographic
        camera={{far: 1000,
          near: 0.1,
          zoom: 50,
          position: [-10 * 10, 16.8 * 10, 16 * 10]
        }}
      >
        {/* <primitive object={new THREE.GridHelper(100, 50, "teal", "teal")} position={[0, 0, 0]} /> */}
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}

        <color attach={"background"} args={["green"]} />

        <ambientLight intensity={0.5} />
        <pointLight
          intensity={0.5}
          position={[20, 50, 20]}
          castShadow
        />

        <Model position={[-11, 0, 10]} />
      </Canvas>
    </div>
  )
}

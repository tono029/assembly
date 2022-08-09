import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Model from '../public/Rhythm-draco'
import { Loader } from '@react-three/drei'
import * as THREE from "three"
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, set] = useState(undefined)
  useEffect(() => {
    set(window.innerWidth)
  }, [width])

  return (
    <div className='main'>
      <Head>
        <title>Assembly</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div className="app_title" style={{color: "white"}}>
        <h1>Assembly</h1>
        <p>from  <span>&quot;Rhythm Heaven&quot;</span> with <span>Blender</span></p>
      </div>

      <Canvas 
        shadows={{type: THREE.PCFSoftShadowMap}}
        orthographic
        onCreated={state => {
          state.gl.toneMapping = THREE.ACESFilmicToneMapping
        }}
        camera={{
          far: 1000,
          near: 0.1,
          zoom: width <= 500 ? 20 : 50,
          position: [-10 * 10, 16.8 * 10, 16 * 10],
        }}
      >
        {/* <primitive object={new THREE.GridHelper(100, 50, "teal", "teal")} position={[0, 0, 0]} /> */}
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}

        <color attach={"background"} args={["green"]} />

        <ambientLight intensity={0.5} />
        <pointLight
          intensity={0.5}
          position={[10, 40, 10]}
          castShadow
          shadowMapSize={new THREE.Vector2 ( 2 ** 10, 2 ** 10 )}
        />

        <Model position={[-11, 0, 10]} />
      </Canvas>

      <Loader />
    </div>
  )
}

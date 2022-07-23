import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Model from '../public/Rhythm'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import * as THREE from "three"

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Assembly</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div className="app_title" style={{color: "white"}}>
        <h1>Assembly from Rhythm Heaven</h1>
        <p>with <span>Blender</span></p>
      </div>

      <Canvas shadows>
        {/* <primitive object={new THREE.GridHelper(100, 50, "teal", "teal")} position={[0, 0, 0]} /> */}
        <primitive object={new THREE.AxesHelper(10)} />

        <color attach={"background"} args={["green"]} />
        <OrbitControls />

        <ambientLight intensity={0.5} />
        <pointLight
          intensity={0.5}
          position={[5, 50, 10]}
          castShadow
        />

        {/* <OrthographicCamera name="カメラ" far={1000} near={0.1} position={[-5.91, 29.63, 17.63]} rotation={[-0.81, -0.42, -0.29]} scale={[0.78, 1, 1]} /> */}

        <OrthographicCamera
          makeDefault
          zoom={40}
          // position={[-100, 160, 160]}
          position={[-5.91 * 10, 20.63 * 10, 17.63 * 10]}
          rotation={[-0.81 * 100, -0.42 * 100, -0.29 * 100]}
        />

        <Model />
      </Canvas>
    </div>
  )
}

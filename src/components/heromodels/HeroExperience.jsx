import React from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import {Room} from './Room.jsx'
import HeroLights from './HeroLights.jsx';
import Particles from './Particles.jsx';

function HeroExperience() {
    const isTablet = useMediaQuery({ query:'(max-width:1024px)'});
    const isMobile = useMediaQuery({ query:'(max-width:768px)'});
    const modelScale = isMobile ? 0.7 : 1;
    const modelPosition = !isTablet ? [0, -5.7, 0] : [0, -6.7, 0];

  return (
    <Canvas camera={{position:[0,0,15], fov:45 }}>
        
      <OrbitControls 
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI/5}
            maxPolarAngle={Math.PI/2.2}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 6}
        />

        <HeroLights />
        {!isMobile && <Particles count = {100}/>}

        <group
          scale={modelScale}
          position={modelPosition}
          rotation={[0,0,0]}
        >
          <Room/>
        </group>
        
    </Canvas>
  )
} 

export default HeroExperience
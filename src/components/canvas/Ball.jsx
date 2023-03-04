import { Suspense } from 'react'
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '@/components/Loader.jsx'

const Ball = props => {
	const [decal] = useTexture([props.imgUrl])

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow={true} recieveShadow={true} scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset={true}
					polygonOffsetFactor={-5}
					flatShading={true}
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					flatShading
					map={decal}
				/>
			</mesh>
		</Float>
	)
}

const BallCanvas = ({ icon }) => {
	return (
		<Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	)
}

export default BallCanvas

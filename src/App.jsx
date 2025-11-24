```jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import SignTube from './components/SignTube'
import FallingStick from './components/FallingStick'
import { useState } from 'react'


export default function App() {
const [activeSign, setActiveSign] = useState(null)


return (
<div className="app-container">
<Canvas shadows camera={{ position: [0, 2.5, 5] }}>
<ambientLight intensity={0.8} />
<directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
<Environment preset="studio" />


<SignTube onDrop={(s) => setActiveSign(s)} />
{activeSign && <FallingStick sign={activeSign} />}


<OrbitControls />
</Canvas>


{activeSign && (
<div className="sign-panel">
<h2>{activeSign.title}</h2>
<p>{activeSign.modern}</p>
</div>
)}
</div>
)
}
```
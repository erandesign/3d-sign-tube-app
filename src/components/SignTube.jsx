```jsx
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import signs from '../data/signs'


export default function SignTube({ onDrop }) {
const tube = useRef()
const [shake, setShake] = useState(false)
const shakeStrength = useRef(0)


useFrame(() => {
if (shake) {
shakeStrength.current = Math.max(0, shakeStrength.current - 0.01)
tube.current.rotation.z = Math.sin(Date.now() * 0.02) * shakeStrength.current
if (shakeStrength.current <= 0.01) {
setShake(false)
const random = signs[Math.floor(Math.random() * signs.length)]
onDrop(random)
}
}
})


return (
<group
position={[0, -1, 0]}
onPointerDown={() => {
shakeStrength.current = 0.3
setShake(true)
}}
>
<mesh ref={tube} castShadow receiveShadow>
<cylinderGeometry args={[0.7, 0.7, 2.2, 32]} />
<meshStandardMaterial color="#c49e68" />
</mesh>
</group>
)
}
```
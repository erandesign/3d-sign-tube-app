```jsx
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'


export default function FallingStick({ sign }) {
const ref = useRef()
const [y, setY] = useState(1)


useFrame(() => {
setY((prev) => Math.max(-1, prev - 0.05))
ref.current.position.y = y
})


return (
<mesh ref={ref} position={[0, 1, 0]}>
<boxGeometry args={[0.15, 1.5, 0.15]} />
<meshStandardMaterial color="#d0b37f" />
</mesh>
)
}
```
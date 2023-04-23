import * as THREE from "three"

const renderer = new THREE.WebGLRenderer()


renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)


const scene = new THREE.Scene()

// The camera is at (0, 0, 0)
const camera = new THREE.PerspectiveCamera(
    75, // Field of View, usually between 40 and 80
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Clipping Plane
    1000 // Far Clipping Plane
)

// Add the Axes
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// Move camera to (0, 0, 5)
camera.position.y = 2
camera.position.z = 5

renderer.render(scene, camera)

console.log("Done!")
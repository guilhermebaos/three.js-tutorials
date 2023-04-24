import * as THREE from "three"

const renderer = new THREE.WebGLRenderer()


renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)


const scene = new THREE.Scene()

// Create a perspective camera at (0, 0, 0)
const camera = new THREE.PerspectiveCamera(
    75, // Field of View, usually between 40 and 80
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Clipping Plane
    1000 // Far Clipping Plane
)

// Add the Axes
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// Move camera to (0, 2, 5)
camera.position.set(0, 2, 5)

// Create a box
const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box);


function animate(time) {
    box.rotation.x = time / 1000
    box.rotation.y = time / 1000
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

console.log("Done!")
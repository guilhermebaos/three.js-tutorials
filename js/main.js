import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

const renderer = new THREE.WebGLRenderer()


renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)


const scene = new THREE.Scene()

// Create a perspective camera at (0, 0, 0)
const camera = new THREE.PerspectiveCamera(
    45, // Field of View, usually between 40 and 80
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Clipping Plane
    1000 // Far Clipping Plane
)

// Preparation to make the camera move
const orbit = new OrbitControls(camera, renderer.domElement)


// Add the Axes
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)


// Move camera to (0, 2, 5) and update the orbit
camera.position.set(-10, 30, 30)
orbit.update()


// Create a box
const boxGeometry = new THREE.BoxGeometry() // Create the box geometry
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00}) // Create the material
const box = new THREE.Mesh(boxGeometry, boxMaterial) // Apply the mesh to the geometry
scene.add(box); // Add the mesh to the scene


// Add a grid
const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)


// Create a plane
const planeGeometry = new THREE.PlaneGeometry(30, 30)
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)

plane.rotation.x = -0.5 * Math.PI


// Create a Sphere
const sphereGeometry = new THREE.SphereGeometry(4, 20, 20) // We set the number of width and height segments (resolution of the geometry)
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000FF,
    wireframe: true
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

sphere.position.set(-10, 10, 0)

// Check the docs for more geometries and materials!


// Make the box rotate
function animate(time) {
    box.rotation.x = time / 1000
    box.rotation.y = time / 1000
    renderer.render(scene, camera)
}


renderer.setAnimationLoop(animate)

console.log("Done!")
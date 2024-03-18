import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('.container');

// Set up the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, container.innerWidth / container.innerHeight, 0.1, 1000);
camera.position.z = 1;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.innerWidth, container.innerHeight);
container.appendChild(renderer.domElement);
//document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smoothly damping effect during rotation
controls.dampingFactor = 0.05;

const cubeTextureLoader = new THREE.CubeTextureLoader();

cubeTextureLoader.setPath('./assets/virtual_cubes/cube1/');

const skyboxTexture = cubeTextureLoader.load([
  'right.jpg', 'left.jpg', 'top.jpg',
  'bottom.jpg', 'front.jpg', 'back.jpg'
]);

scene.background = skyboxTexture;

// Create the CubeRenderTarget
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512);
const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// Handle window resize
window.addEventListener('resize', () => {
  const width = container.innerWidth;
  const height = container.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  });

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  // Update the CubeCamera's environment map
  cubeCamera.update(renderer, scene);
  // Render the main scene
  renderer.render(scene, camera);
  controls.update();
}
animate();
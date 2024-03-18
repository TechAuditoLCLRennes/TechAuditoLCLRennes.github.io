import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';

const container = document.querySelector('#container');
const container2 = document.querySelector('#container2');
const gltfContainer = document.querySelector('#gltf');

// Set up the scene
const scene = new THREE.Scene();
const scene2 = new THREE.Scene();
const gltfScene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load( '../assets/3D/planes.glb', function ( gltf ) {

	gltfScene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


// Create the camera
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, container2.clientWidth / container2.clientHeight, 0.1, 1000);
const gltfCamera = new THREE.PerspectiveCamera(75, gltfContainer.clientWidth / gltfContainer.clientHeight, 0.1, 1000);
camera2.position.z = 1;
camera.position.z = 1;
gltfCamera.position.set(0, 1, 2);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
const renderer2 = new THREE.WebGLRenderer();
const gltfRenderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer2.setSize(container2.clientWidth, container2.clientHeight);
gltfRenderer.setSize(gltfContainer.clientWidth, gltfContainer.clientHeight);
container.appendChild(renderer.domElement);
container2.appendChild(renderer2.domElement);
gltfContainer.appendChild(gltfRenderer.domElement);
//document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
const controls2 = new OrbitControls(camera2, renderer2.domElement);
const gltfControls = new OrbitControls(gltfCamera, gltfRenderer.domElement);
controls.enableDamping = true; // Smoothly damping effect during rotation
controls2.enableDamping = true;
controls.dampingFactor = 0.05;
controls2.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls2.rotateSpeed = 0.5;
controls.enableZoom = true;
controls2.enableZoom = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls2.autoRotate = true;
controls2.autoRotateSpeed = 0.5;
controls.update();
controls2.update();
gltfControls.update();

const cubeTextureLoader = new THREE.CubeTextureLoader();
const cubeTextureLoader2 = new THREE.CubeTextureLoader();

cubeTextureLoader.setPath('./assets/virtual_cubes/cube1/');
cubeTextureLoader2.setPath('./assets/virtual_cubes/cube2/');

const cubeTexture = cubeTextureLoader.load([
  'right.jpg', 'left.jpg', 'top.jpg',
  'bottom.jpg', 'front.jpg', 'back.jpg'
]);

const cubeTexture2 = cubeTextureLoader2.load([
  'right.jpg', 'left.jpg', 'top.jpg',
  'bottom.jpg', 'front.jpg', 'back.jpg'
]);

scene.background = cubeTexture;
scene2.background = cubeTexture2;

// Create the CubeRenderTarget
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512);
const cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(512);
//const gltfRendererTarget = new THREE.WebGLCubeRenderTarget(512);
const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
const cubeCamera2 = new THREE.CubeCamera(1, 1000, cubeRenderTarget2);
scene.add(cubeCamera);
scene2.add(cubeCamera2);
gltfScene.add(gltfCamera)

// Handle window resize
//window.addEventListener('resize', () => {
//  const width = container.clientWidth;
//  const height = container.clientHeight;
//  renderer.setSize(width, height);
//  camera.aspect = width / height;
//  camera.updateProjectionMatrix();
//  });

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

function animate2() {
  requestAnimationFrame(animate2);
  // Update the CubeCamera's environment map
  cubeCamera2.update(renderer2, scene2);
  // Render the main scene
  renderer2.render(scene2, camera2);
  controls2.update();
}
animate2();
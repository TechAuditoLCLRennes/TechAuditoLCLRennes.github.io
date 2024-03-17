// Create a scene
const scene = new THREE.Scene();

// Load textures
const textureLoader = new THREE.TextureLoader();
const textures = [
  textureLoader.load('../assets/virtual_cubes/cube1/front.jpg'),
  textureLoader.load('../assets/virtual_cubes/cube1/back.jpg'),
  textureLoader.load('../assets/virtual_cubes/cube1/top.jpg'),
  textureLoader.load('../assets/virtual_cubes/cube1/bottom.jpg'),
  textureLoader.load('../assets/virtual_cubes/cube1/right.jpg'),
  textureLoader.load('../assets/virtual_cubes/cube1/left.jpg')
];

// Create materials with textures
const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

// Create cube geometry
const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);

// Assign textures to the corresponding faces of the cube
if (cubeGeometry.faces) {
  cubeGeometry.faces.forEach((face, index) => {
    face.materialIndex = index; // Assign material index to each face
  });
}

// Create the cube mesh with the materials
const cube = new THREE.Mesh(cubeGeometry, materials);
scene.add(cube);

// Create camera
const camera = new THREE.PerspectiveCamera(90, 1, 1, 1000);
camera.position.set(0, 0, 0);

// Set camera orientation to face the internal sides of the cube
camera.lookAt([
  new THREE.Vector3(1, 0, 0),   // Positive X face (Right)
  new THREE.Vector3(-1, 0, 0),  // Negative X face (Left)
  new THREE.Vector3(0, 1, 0),   // Positive Y face (Top)
  new THREE.Vector3(0, -1, 0),  // Negative Y face (Bottom)
  new THREE.Vector3(0, 0, -1),  // Positive Z face (Front)
  new THREE.Vector3(0, 0, 1)    // Negative Z face (Back)
});

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
const container = document.getElementById('container');
container.appendChild(renderer.domElement);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';

// Sélecteurs pour le conteneur 3D uniquement
const gltfContainer = document.querySelector('#gltf');

// Si le conteneur n'existe pas, ne pas initialiser
if (!gltfContainer) {
  console.log('Conteneur GLTF non trouvé - arrêt du script');
  throw new Error('Conteneur GLTF manquant');
}

// Set up the scene
const gltfScene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load( '/assets/3D/planes.glb', function ( gltf ) {

	gltfScene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( 'Erreur lors du chargement du modèle 3D:', error );
	// Afficher un message d'erreur à l'utilisateur
	if (gltfContainer) {
		gltfContainer.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">Erreur lors du chargement du modèle 3D</div>';
	}

} );

// Create the camera
const gltfCamera = new THREE.PerspectiveCamera(75, gltfContainer.clientWidth / gltfContainer.clientHeight, 0.1, 1000);
gltfCamera.position.set(-5, 1, 2);
gltfCamera.zoom = 0.25;

// Create the renderer
const gltfRenderer = new THREE.WebGLRenderer();
gltfRenderer.setSize(gltfContainer.clientWidth, gltfContainer.clientHeight);
gltfContainer.appendChild(gltfRenderer.domElement);

// Add OrbitControls
const gltfControls = new OrbitControls(gltfCamera, gltfRenderer.domElement);
gltfControls.enableDamping = true;
gltfControls.dampingFactor = 0.05;
gltfControls.rotateSpeed = 0.5;
gltfControls.enableZoom = true;
gltfControls.autoRotate = true;
gltfControls.autoRotateSpeed = 0.5;
gltfControls.update();

const gltfLight = new THREE.HemisphereLight(0xbbbbff, 0x444422);
gltfLight.position.set(0, 1, 0);
gltfScene.add(gltfLight);

// Handle window resize
window.addEventListener('resize', () => {
  const gltfWidth = gltfContainer.clientWidth;
  const gltfHeight = gltfContainer.clientHeight;
  
  gltfRenderer.setSize(gltfWidth, gltfHeight);
  gltfCamera.aspect = gltfWidth / gltfHeight;
  gltfCamera.updateProjectionMatrix();
});

// Render the scene - boucle d'animation pour le modèle 3D uniquement
function animateGltf() {
  requestAnimationFrame(animateGltf);
  
  // Render the scene
  gltfRenderer.render(gltfScene, gltfCamera);
  gltfControls.update();
}

animateGltf();

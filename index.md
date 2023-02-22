---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Home
permalink: /
---
<div style="display: flex;justify-content:center;align-items:center;">
<div id="box" class="troisd" style="display:flex;border:solid;width:800px;height:800px;"></div>
</div>
<script src="/assets/js/three.min.js"></script>
<script src="/assets/js/GLTFLoader.js"></script>
<script src="/assets/js/OrbitControls.js"></script>
<script src="/assets/js/WebGL.js"></script>
<script >
troisd =  document.querySelector('.troisd');   
troisd.innerHTML="";
scene ="";
camera="";
renderer="";
light="";
sword=""; 
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );

renderer = new THREE.WebGLRenderer(
{antialias : true, alpha: true}
);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.gammaOutput = true ;
document.getElementById("box").appendChild( renderer.domElement );
light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
light.position.set(0, 1, 0);
scene.add(light);
var loader = new THREE.GLTFLoader();

loader.load( '/assets/3D/planes.glb', function ( gltf )
{
sword = gltf.scene; // sword 3D object is loaded
sword.scale.set(0.7,0.7,0.7);
sword.position.y = -2;
sword.position.z = -30;
sword.position.x = -10;
sword.rotation.y = 180;
sword.rotation.x = -5.6;

    scene.add(sword);

} );

camera.position.z = 5;
camera.position.x = -10;

function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
//sword.rotation.y += 0.002;
}
animate();

</script>

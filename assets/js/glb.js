console.log("script launched")
troisd =  document.querySelector('.troisd');   
troisd.innerHTML="";
if(typeof scene !== 'undefined'){
   scene.dispose(); 
}else{
    scene='undefined'
}
if(typeof renderer !== 'undefined'){
   renderer.dispose(); 
}else{
    renderer='undefined'
}
//if(typeof document.getElementsByTagName('canvas')[0] !== 'undefined'){
//   document.getElementsByTagName('canvas')[0].style.width ="inherit"; 
//   document.getElementsByTagName('canvas')[0].style.height ="inherit"; 
//}
camera="null";
light="";
if(typeof loader !== 'undefined'){
   loader=null; 
}else{
    loader='undefined'
}
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
loader = new THREE.GLTFLoader();
loader.load( '/assets/3D/model3D.glb', function ( gltf )
{
sword = gltf.scene; // sword 3D object is loaded
sword.scale.set(0.7,0.7,0.7);
sword.position.y = -2;
sword.position.z = -30;
sword.position.x = -10;
sword.rotation.y = 180;
//sword.rotation.x = -5.6;
sword.rotation.y += 0.0008;
    scene.add(sword);

} );

controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

camera.position.z = 5;
camera.position.x = -10;
camera.zoom = 2;
camera.updateProjectionMatrix();

function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
controls.update()

}
animate();
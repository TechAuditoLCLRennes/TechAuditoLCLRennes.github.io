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
document.querySelector(".pano1").innerHTML =""
path1 =""
format=""
if(typeof panorama1 !== 'undefined'){
  panorama1.dispose()
}else{
panorama1 = 'undefined'}
path1 = "../assets/virtual_cubes/cube1/";
format = ".jpg";
panorama1 = new PANOLENS.CubePanorama( [
    path1 + 'left' + format,
    path1 + 'right' + format,
    path1 + 'top' + format,
    path1 + 'bottom' + format,
    path1 + 'back' + format,
    path1 + 'front' + format
] );

new PANOLENS.Viewer({container: document.querySelector(".pano1"),controlButtons: ["fullscreen"],viewIndicator: true,autoRotate: true,
autoRotateSpeed: 0.5,}).add(panorama1);

//document.querySelector(".pano2").innerHTML =""
//path2 =""
//format=""
//if(typeof panorama2 !== 'undefined'){
//  panorama2.dispose()
//}else{
//panorama2 = 'undefined'}
//path2 = "../assets/virtual_cubes/cube2/";
//format = ".jpg";
//panorama2 = new PANOLENS.CubePanorama( [
//    path2 + 'left1' + format,
//    path2 + 'right1' + format,
//    path2 + 'top1' + format,
//    path2 + 'bottom1' + format,
//    path2 + 'back1' + format,
//    path2 + 'front1' + format
//] );
//
//new PANOLENS.Viewer({container: document.querySelector(".pano2"),controlButtons: ["fullscreen"],viewIndicator: true,autoRotate: true,
//autoRotateSpeed: 0.5,}).add(panorama2);
//
//
let panorama1,panorama2,viewer1,viewer2,divcontainer1,divcontainer2;
 
 const path1 = '../assets/virtual_cubes/cube1/';
 const path2 = '../assets/virtual_cubes/cube2/';
 const format = '.jpg';

 panorama1 = new PANOLENS.CubePanorama( [
  path1 + 'left' + format, path1 + 'right' + format,
  path1 + 'top' + format, path1 + 'bottom' + format,
  path1 + 'back' + format, path1 + 'front' + format
 ] );

// panorama2 = new PANOLENS.CubePanorama( [
//    path2 + 'left' + format, path2 + 'right' + format,
//    path2 + 'top' + format, path2 + 'bottom' + format,
//    path2 + 'back' + format, path2 + 'front' + format
//   ] );

 divcontainer1 = document.querySelector(".pano1")
 //divcontainer2 = document.getElementById("pano2")
 viewer1 = new PANOLENS.Viewer({container: divcontainer1, controlButtons:['fullscreen']});
 //viewer2 = new PANOLENS.Viewer({container: divcontainer2, controlButtons:['fullscreen']});
 viewer1.add(panorama1);
 
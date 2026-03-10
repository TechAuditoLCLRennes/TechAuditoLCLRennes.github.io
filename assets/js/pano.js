// Nettoyage des instances précédentes
if(typeof scene !== 'undefined'){
  scene.dispose(); 
}
if(typeof renderer !== 'undefined'){
  renderer.dispose(); 
}

// Nettoyage des conteneurs
const pano1Container = document.querySelector(".pano1");
const pano2Container = document.querySelector(".pano2");

if (!pano1Container || !pano2Container) {
  console.error('Conteneurs de panoramas non trouvés');
  return;
}

if (pano1Container) pano1Container.innerHTML = "";
if (pano2Container) pano2Container.innerHTML = "";

// Nettoyage des panoramas
if(typeof panorama1 !== 'undefined'){
  panorama1.dispose();
}
if(typeof panorama2 !== 'undefined'){
  panorama2.dispose();
}

// Vérification que PANOLENS est disponible
if (typeof PANOLENS === 'undefined') {
  console.error('PANOLENS n\'est pas chargé');
  pano1Container.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">Erreur : Bibliothèque PANOLENS non chargée</div>';
  pano2Container.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">Erreur : Bibliothèque PANOLENS non chargée</div>';
  return;
}

// Configuration du premier panorama
const path1 = "/assets/virtual_cubes/cube1/";
const format = ".jpg";

try {
  panorama1 = new PANOLENS.CubePanorama( [
      path1 + 'left' + format,
      path1 + 'right' + format,
      path1 + 'top' + format,
      path1 + 'bottom' + format,
      path1 + 'back' + format,
      path1 + 'front' + format
  ] );

  // Configuration du deuxième panorama
  const path2 = "/assets/virtual_cubes/cube2/";

  panorama2 = new PANOLENS.CubePanorama( [
      path2 + 'left' + format,
      path2 + 'right' + format,
      path2 + 'top' + format,
      path2 + 'bottom' + format,
      path2 + 'back' + format,
      path2 + 'front' + format
  ] );

  // Création des viewers
  new PANOLENS.Viewer({
    container: pano1Container,
    controlButtons: ["fullscreen"],
    viewIndicator: true,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }).add(panorama1);

  new PANOLENS.Viewer({
    container: pano2Container,
    controlButtons: ["fullscreen"],
    viewIndicator: true,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }).add(panorama2);

  console.log('Panoramas initialisés avec succès');
} catch (error) {
  console.error('Erreur lors de l\'initialisation des panoramas:', error);
  pano1Container.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">Erreur lors du chargement des panoramas</div>';
  pano2Container.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">Erreur lors du chargement des panoramas</div>';
}


import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.PointLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}


animate();

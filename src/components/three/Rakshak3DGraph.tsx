"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { sounds } from "@/components/sound/SoundEngine";
import { Play, RefreshCw, Eye, ShieldCheck } from "lucide-react";

export function Rakshak3DGraph() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<string>("NODE_B [CENTRAL]");
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 600;
    const height = 300;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#080d0a");

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 1.8, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Grid Floor
    const grid = new THREE.GridHelper(6, 12, 0x34d399, 0x14281c);
    grid.position.y = -0.6;
    scene.add(grid);

    // Nodes definition
    const nodeCoords = [
      { id: "NODE_A", name: "NORTH SECTOR", pos: new THREE.Vector3(-1.8, 0.4, -0.6), color: 0x34d399 },
      { id: "NODE_B", name: "CENTRAL JUNCTION", pos: new THREE.Vector3(0, 0.2, 0.2), color: 0xef4444 }, // Match target
      { id: "NODE_C", name: "METRO GATEWAY", pos: new THREE.Vector3(1.6, 0.5, -0.4), color: 0xfbbf24 },
      { id: "NODE_D", name: "SOUTH TRANSIT", pos: new THREE.Vector3(0.9, -0.2, 1.2), color: 0xfbbf24 },
      { id: "NODE_E", name: "WEST PLAZA", pos: new THREE.Vector3(-1.2, -0.1, 1.0), color: 0x34d399 },
    ];

    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.OctahedronGeometry(0.18, 0);

    nodeCoords.forEach((n) => {
      const mat = new THREE.MeshStandardMaterial({
        color: n.color,
        emissive: n.color,
        emissiveIntensity: 0.8,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.copy(n.pos);
      mesh.userData = { id: n.id, name: n.name };
      scene.add(mesh);
      nodeMeshes.push(mesh);

      // Inner glowing core
      const coreGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const coreMat = new THREE.MeshBasicMaterial({ color: n.color });
      const core = new THREE.Mesh(coreGeo, coreMat);
      mesh.add(core);
    });

    // Edges Lines connecting nodes
    const edgeConnections = [
      [0, 1],
      [1, 2],
      [1, 3],
      [0, 4],
      [4, 3],
      [2, 3],
    ];

    const lineMat = new THREE.LineDashedMaterial({
      color: 0x34d399,
      dashSize: 0.1,
      gapSize: 0.05,
    });

    edgeConnections.forEach(([i, j]) => {
      const points = [nodeCoords[i].pos, nodeCoords[j].pos];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, lineMat);
      line.computeLineDistances();
      scene.add(line);
    });

    // Ambient & Point Lighting
    const light = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light);

    const pointLight = new THREE.PointLight(0x34d399, 2, 8);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // Raycasting for interactive click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        sounds.playKeyClick();
        setSelectedNode(`${hit.userData.id} [${hit.userData.name}]`);
      }
    };

    renderer.domElement.addEventListener("pointerdown", handlePointerDown);

    // Animation loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotate nodes and camera orbit gently
      nodeMeshes.forEach((mesh, idx) => {
        mesh.rotation.y = elapsed * (1 + idx * 0.2);
        mesh.rotation.x = elapsed * 0.5;
      });

      camera.position.x = Math.sin(elapsed * 0.2) * 4.2;
      camera.position.z = Math.cos(elapsed * 0.2) * 4.2;
      camera.lookAt(0, 0.1, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, []);

  const triggerSearch = () => {
    sounds.playRadarPing();
    setIsSimulating(true);
    setTimeout(() => {
      sounds.playAccessGranted();
      setSelectedNode("NODE_B [CENTRAL JUNCTION] - 96.4% MATCH");
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <div className="border border-term-green/30 bg-crt-darkest p-3 font-mono text-xs shadow-term-green">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-green/20 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-term-green animate-ping" />
          <span className="text-term-greenBright font-bold glow-green-sm">
            3D SPATIAL CAMERA MESH // WEBGL ORBIT
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-archive-muted">SELECTED: <strong className="text-term-amber">{selectedNode}</strong></span>
          <button
            onClick={triggerSearch}
            disabled={isSimulating}
            data-cursor="RUN_SEARCH"
            className="border border-term-green/60 bg-term-green/15 px-2.5 py-1 text-[10px] text-term-greenBright hover:bg-term-green hover:text-crt-black transition-colors disabled:opacity-50"
          >
            {isSimulating ? "SCANNING SPATIAL GRAPH..." : "RUN 3D TARGET SCAN"}
          </button>
        </div>
      </div>

      <div ref={mountRef} className="h-[300px] w-full cursor-grab overflow-hidden rounded border border-term-green/20" />
      <div className="mt-2 flex items-center justify-between text-[9px] text-archive-muted">
        <span>CLICK ANY 3D NODE TO INSPECT SURVEILLANCE FEED</span>
        <span>RAYCASTING ACTIVE</span>
      </div>
    </div>
  );
}

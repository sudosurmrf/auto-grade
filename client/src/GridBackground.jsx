import React, { useEffect, useRef } from 'react'
import Grid2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/grid2.cdn.min.js'
import "./GridBackground.css";

function GridBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const bg = Grid2Background(canvasRef.current)
    function handleClick() {
      bg.grid.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
      ])

      bg.grid.light1.color.set(0xffffff * Math.random())
      bg.grid.light1.intensity = 500 + Math.random() * 1000

      bg.grid.light2.color.set(0xffffff * Math.random())
      bg.grid.light2.intensity = 250 + Math.random() * 250
    }
    document.body.addEventListener('click', handleClick)

    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [])

  return <canvas ref={canvasRef} id="webgl-canvas" />
}

export default GridBackground;

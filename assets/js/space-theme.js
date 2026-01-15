// assets/js/space-theme.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. SETUP SMOOTH SCROLLING (Lenis)
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 2. STARFIELD BACKGROUND
  const canvas = document.getElementById('space-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let stars = [];
  
  // Configuration
  const STAR_COUNT = 400;
  const STAR_SPEED = 0.5;
  const STAR_DEPTH = 1000; // How "deep" the space feels

  function initStars() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * STAR_DEPTH
      });
    }
  }

  function animateStars() {
    ctx.fillStyle = '#050505'; // Deep space black
    ctx.fillRect(0, 0, width, height);
    
    // Calculate speed based on scroll velocity (optional dynamic speed)
    // For now constant speed + small boost from scroll
    
    stars.forEach(star => {
      // Move star closer
      star.z -= STAR_SPEED;
      
      // Reset if it passes the camera
      if (star.z <= 0) {
        star.z = STAR_DEPTH;
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
      }
      
      // Project 3D coordinates to 2D screen
      const k = 128.0 / star.z;
      const px = star.x * k + width / 2;
      const py = star.y * k + height / 2;
      
      // Draw star
      if (px >= 0 && px <= width && py >= 0 && py <= height) {
        const size = (1 - star.z / STAR_DEPTH) * 2.5;
        const shade = parseInt((1 - star.z / STAR_DEPTH) * 255);
        ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    
    requestAnimationFrame(animateStars);
  }

  window.addEventListener('resize', initStars);
  initStars();
  animateStars();

  // 3. 3D TILT EFFECT WITH GSAP
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate the main container to tilt slightly as you scroll
  // giving the feeling of a floating HUD
  gsap.to(".container", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    },
    rotateX: 5, // Slight tilt backward
    transformOrigin: "center top",
    ease: "none"
  });

  // Make images float in 3D
  gsap.utils.toArray("img").forEach(img => {
    gsap.fromTo(img, 
      { rotationY: -15, opacity: 0.8, z: -50 },
      {
        rotationY: 15,
        opacity: 1,
        z: 0,
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      }
    );
  });
});
import './style.css'

function createApp() {
  return `
    <div id="app">
      <!-- Hero Section -->
      <section class="hero-section finisher-header">
        <div class="container">
          <h1 class="hero-title">MindWave.AI</h1>
          <p class="hero-subtitle">
            The world's most advanced brain wave signal AI reader.
            Experience unprecedented neural technology that transforms thoughts into digital reality.
          </p>
          <button class="cta-button" id="hero-cta">Discover the Future</button>
          <div class="product-showcase">
            <span class="showcase-text">🧠 MindWave Device</span>
          </div>
        </div>
      </section>

      <!-- Revolutionary Technology -->
      <section class="feature-section">
        <div class="container">
          <div class="feature-content">
            <h2 class="feature-title">Revolutionary Neural Interface</h2>
            <p class="feature-description">
              Advanced machine learning algorithms decode brain signals with unparalleled precision,
              creating a seamless bridge between mind and machine.
            </p>
            <div class="feature-visual">
              ⚡ Real-time Signal Processing
            </div>
          </div>
        </div>
      </section>

      <!-- Precision Technology -->
      <section class="feature-section">
        <div class="container">
          <div class="feature-content">
            <h2 class="feature-title">Unmatched Precision</h2>
            <p class="feature-description">
              Our proprietary AI achieves 99.9% accuracy in thought pattern recognition,
              setting the new standard for brain-computer interfaces.
            </p>
            <div class="feature-visual">
              🎯 99.9% Accuracy
            </div>
          </div>
        </div>
      </section>

      <!-- Future of Human Enhancement -->
      <section class="feature-section">
        <div class="container">
          <div class="feature-content">
            <h2 class="feature-title">Enhanced Human Potential</h2>
            <p class="feature-description">
              Unlock cognitive abilities you never knew existed with AI-powered
              neural optimization and real-time performance enhancement.
            </p>
            <div class="feature-visual">
              🚀 Cognitive Amplification
            </div>
          </div>
        </div>
      </section>

      <!-- Product Features -->
      <section class="grid-section">
        <div class="container">
          <div class="grid-container">
            <div class="grid-item">
              <h3>Effortless Setup</h3>
              <p>Ultra-lightweight, wireless design with instant pairing. Start reading brain waves in under 60 seconds with zero calibration required.</p>
            </div>
            <div class="grid-item">
              <h3>Military-Grade Security</h3>
              <p>Advanced encryption and local processing ensure your neural data never leaves your device. Your thoughts remain completely private.</p>
            </div>
            <div class="grid-item">
              <h3>Live Neural Analytics</h3>
              <p>Real-time visualization of brain activity with instant insights into focus, creativity, stress, and cognitive load levels.</p>
            </div>
            <div class="grid-item">
              <h3>Self-Learning AI</h3>
              <p>Continuously adapts to your unique neural patterns, becoming more accurate and personalized with every use.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Specifications -->
      <section class="specifications-section">
        <div class="container">
          <h2 class="feature-title" style="text-align: center; margin-bottom: 60px; color: white;">Technical Excellence</h2>
          <div class="specs-grid">
            <div class="spec-item">
              <div class="spec-number">1000Hz</div>
              <div class="spec-label">Sampling Rate</div>
            </div>
            <div class="spec-item">
              <div class="spec-number">16</div>
              <div class="spec-label">Neural Channels</div>
            </div>
            <div class="spec-item">
              <div class="spec-number">99.9%</div>
              <div class="spec-label">Accuracy</div>
            </div>
            <div class="spec-item">
              <div class="spec-number">24h</div>
              <div class="spec-label">Battery Life</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing-section">
        <div class="container">
          <h2 class="feature-title" style="text-align: center; margin-bottom: 60px;">Experience the Future</h2>
          <div class="price-card">
            <div class="price">$2,999</div>
            <p class="price-description">Complete MindWave.AI system with lifetime software updates and premium support</p>
            <button class="buy-button" id="buy-now">Pre-order Now</button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 MindWave.AI. Pioneering the next evolution of human consciousness.</p>
        </div>
      </footer>
    </div>
  `
}

function setupInteractions() {
  const heroButton = document.querySelector('#hero-cta')
  const buyButton = document.querySelector('#buy-now')
  const featureVisuals = document.querySelectorAll('.feature-visual')
  const productShowcase = document.querySelector('.product-showcase')

  // Setup parallax scrolling
  setupParallaxScrolling()

  // Setup brain wave visualization
  setupBrainWaveVisualization()

  // Initialize finisher-header with brain wave theme
  initializeFinisherHeader()

  if (heroButton) {
    heroButton.addEventListener('click', () => {
      const firstFeature = document.querySelector('.feature-section')
      firstFeature.scrollIntoView({ behavior: 'smooth' })
    })
  }

  if (buyButton) {
    buyButton.addEventListener('click', () => {
      alert('Thank you for your interest! Pre-orders will be available soon. \n\nJoin our waitlist to be notified when MindWave.AI becomes available.')
    })
  }

  if (productShowcase) {
    productShowcase.addEventListener('mouseenter', () => {
      productShowcase.style.transform = 'translateY(-5px) scale(1.02)'
    })

    productShowcase.addEventListener('mouseleave', () => {
      productShowcase.style.transform = 'translateY(0) scale(1)'
    })
  }

  featureVisuals.forEach((visual, index) => {
    visual.addEventListener('mouseenter', () => {
      visual.style.transform = 'translateY(-10px) scale(1.02)'
    })

    visual.addEventListener('mouseleave', () => {
      visual.style.transform = 'translateY(-5px) scale(1)'
    })

    visual.addEventListener('click', () => {
      visual.style.animation = 'pulse 0.6s ease-in-out'
      setTimeout(() => {
        visual.style.animation = ''
      }, 600)
    })
  })

  const style = document.createElement('style')
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `
  document.head.appendChild(style)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.feature-section, .grid-item, .spec-item, .price-card').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(50px)'
    el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    observer.observe(el)
  })

  // Removed heavy parallax animation for better performance
}

function setupParallaxScrolling() {
  const parallaxElements = document.querySelectorAll('.feature-section, .grid-section, .specifications-section')
  let ticking = false

  function updateParallax() {
    const scrollTop = window.pageYOffset

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1)
      const yPos = -(scrollTop * speed / 10)
      element.style.transform = `translateY(${yPos}px)`
    })

    // Parallax for hero section background
    const heroSection = document.querySelector('.hero-section')
    if (heroSection) {
      const heroParallax = scrollTop * 0.3
      heroSection.style.transform = `translateY(${heroParallax}px)`
    }

    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  })
}

function setupBrainWaveVisualization() {
  // Create floating brain wave particles
  const heroSection = document.querySelector('.hero-section')
  if (!heroSection) return

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.className = 'brain-particle'
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatParticle ${Math.random() * 10 + 15}s linear infinite;
      z-index: 1;
    `
    heroSection.appendChild(particle)
  }

  // Add CSS for particle animation
  const style = document.createElement('style')
  style.textContent = `
    @keyframes floatParticle {
      0% {
        transform: translateY(100vh) translateX(0px);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
}

function initializeFinisherHeader() {
  // Wait for the FinisherHeader library to load
  setTimeout(() => {
    if (typeof FinisherHeader !== 'undefined') {
      new FinisherHeader({
        "count": 6,
        "size": {
          "min": 800,
          "max": 1200,
          "pulse": 0.3
        },
        "speed": {
          "x": {
            "min": 0,
            "max": 0.1
          },
          "y": {
            "min": 0,
            "max": 0.1
          }
        },
        "colors": {
          "background": "#667eea",
          "particles": [
            "#677eea",
            "#764ba2",
            "#f093fb",
            "#56b6ff",
            "#ff7ce5"
          ]
        },
        "blending": "lighten",
        "opacity": {
          "center": 0.4,
          "edge": 0.1
        },
        "skew": -1,
        "shapes": [
          "c"
        ]
      })
    }
  }, 100)
}

document.querySelector('#app').innerHTML = createApp()
setupInteractions()

import './style.css'

function createApp() {
  return `
    <div id="app">
      <!-- Navigation Bar -->
      <nav class="top-nav">
        <div class="nav-container">
          <div class="nav-logo">MindWave.AI</div>
          <ul class="nav-links">
            <li><a href="#hero" class="nav-link">Home</a></li>
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#specs" class="nav-link">Products</a></li>
            <li><a href="#pricing" class="nav-link">Pricing</a></li>
            <li><a href="#faq" class="nav-link">FAQ</a></li>
            <li><a href="#waitlist" class="nav-link">Waitlist</a></li>
          </ul>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="hero" class="hero-section finisher-header">
        <div class="container">
          <h1 class="hero-title">MindWave.AI</h1>
          <p class="hero-subtitle">
            The world's most advanced brain wave signal AI reader.
            Experience unprecedented neural technology that transforms thoughts into digital reality.
          </p>
          <button class="cta-button" id="hero-cta">Discover the Future</button>
          <div class="video-showcase">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/5fpGTE3aIw0?autoplay=1&mute=1&loop=1&playlist=5fpGTE3aIw0"
                title="MindWave.AI Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <!-- Revolutionary Technology -->
      <section id="features" class="feature-section">
        <div class="container">
          <div class="feature-content">
            <h2 class="feature-title">Revolutionary Neural Interface</h2>
            <p class="feature-description">
              Advanced machine learning algorithms decode brain signals with unparalleled precision,
              creating a seamless bridge between mind and machine.
            </p>
            <div class="feature-visual">
              <dotlottie-player src="https://lottie.host/32c7a770-9c88-49fe-a663-61c7dd8f35a3/J6HxKhQsii.lottie" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></dotlottie-player>
              <span>Real-time Signal Processing</span>
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
              <dotlottie-player src="https://lottie.host/b410b946-1fea-46e9-b87d-8745a3b54840/VYebH5bxme.lottie" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></dotlottie-player>
              <span>99.9% Accuracy</span>
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
              <dotlottie-player src="https://lottie.host/e05ac396-bed4-4d3a-b58f-b22ef1e763ec/RSxiaBjKJ1.lottie" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></dotlottie-player>
              <span>Cognitive Amplification</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Features -->
      <section id="specs" class="grid-section">
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
      <section id="pricing" class="pricing-section">
        <div class="container">
          <h2 class="feature-title" style="text-align: center; margin-bottom: 60px;">Experience the Future</h2>
          <div class="price-card">
            <div class="price">$2,999</div>
            <p class="price-description">Complete MindWave.AI system with lifetime software updates and premium support</p>
            <button class="buy-button" id="buy-now">Pre-order Now</button>
          </div>
        </div>
      </section>

      <!-- Q&A Section -->
      <section id="faq" class="faq-section">
        <div class="container">
          <h2 class="feature-title" style="text-align: center; margin-bottom: 60px;">Frequently Asked Questions</h2>
          <div class="faq-container">
            <div class="faq-item">
              <button class="faq-question">
                <span>How does MindWave.AI work?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>MindWave.AI uses advanced EEG sensors to detect brain wave patterns and processes them through our proprietary AI algorithms. The device is completely non-invasive and captures neural signals through comfortable sensors placed on your scalp.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">
                <span>Is it safe to use?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Absolutely. MindWave.AI is completely non-invasive and uses the same safe technology found in medical-grade EEG devices. It only reads brain signals and does not emit any radiation or electrical signals into your brain.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">
                <span>How accurate is the thought recognition?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Our AI achieves 99.9% accuracy in thought pattern recognition after a brief calibration period. The system continuously learns from your unique neural patterns, improving accuracy over time.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">
                <span>What is the battery life?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>MindWave.AI offers up to 24 hours of continuous use on a single charge. It includes wireless charging and fast-charge capability (50% charge in 30 minutes).</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">
                <span>Is my data secure?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Your privacy is our top priority. All neural data is processed locally on your device with military-grade encryption. We never store or transmit your brain data to external servers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Waitlist Section -->
      <section id="waitlist" class="waitlist-section">
        <div class="container">
          <div class="waitlist-content">
            <h2 class="feature-title" style="text-align: center; margin-bottom: 20px;">Join the Waitlist</h2>
            <p class="waitlist-subtitle">Be among the first to experience the future of neural technology. Get early access and exclusive launch benefits.</p>
            <form class="waitlist-form" id="waitlist-form">
              <input type="email" id="waitlist-email" class="waitlist-input" placeholder="Enter your email address" required>
              <button type="submit" class="waitlist-button">Join Waitlist</button>
            </form>
            <div id="waitlist-success" class="waitlist-success hidden">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Successfully Subscribed!</h3>
              <p>Thank you for joining the waitlist. We'll notify you when MindWave.AI becomes available.</p>
            </div>
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

  // Setup navigation
  setupNavigation()

  // Setup parallax scrolling
  setupParallaxScrolling()

  // Setup brain wave visualization
  setupBrainWaveVisualization()

  // Initialize finisher-header with brain wave theme
  initializeFinisherHeader()

  // Setup FAQ accordion
  setupFAQ()

  // Setup waitlist form
  setupWaitlistForm()

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

function setupNavigation() {
  const nav = document.querySelector('.top-nav')
  const navLinks = document.querySelectorAll('.nav-link')

  // Add scroll effect to navigation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })

  // Smooth scroll to sections
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const navHeight = nav.offsetHeight
        // Add extra offset for products section to show section title
        const extraOffset = targetId === '#specs' ? 200 : 0
        const targetPosition = targetSection.offsetTop - navHeight - extraOffset

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
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

function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question')

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement
      const isActive = faqItem.classList.contains('active')

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active')
      })

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active')
      }
    })
  })
}

function setupWaitlistForm() {
  const form = document.querySelector('#waitlist-form')
  const successMessage = document.querySelector('#waitlist-success')
  const emailInput = document.querySelector('#waitlist-email')

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const email = emailInput.value

      // Mock API call - store in console for now
      console.log('Waitlist signup (mock):', { email, timestamp: new Date().toISOString() })

      // Show success message
      form.style.display = 'none'
      successMessage.classList.remove('hidden')

      // Optional: Reset after 5 seconds
      setTimeout(() => {
        form.style.display = 'flex'
        successMessage.classList.add('hidden')
        emailInput.value = ''
      }, 5000)
    })
  }
}

document.querySelector('#app').innerHTML = createApp()
setupInteractions()

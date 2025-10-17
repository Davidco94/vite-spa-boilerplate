import './style.css'

function createApp() {
  return `
    <div id="app">
      <!-- Skip to main content for accessibility (WCAG 2.2) -->
      <a href="#main-content" class="skip-link">Skip to main content</a>

      <!-- Navigation Bar with ARIA attributes -->
      <nav class="top-nav" role="navigation" aria-label="Main navigation">
        <div class="nav-container">
          <div class="nav-logo" role="heading" aria-level="1">MindWave.AI</div>
          <ul class="nav-links" role="menubar">
            <li role="none"><a href="#hero" class="nav-link" role="menuitem">Home</a></li>
            <li role="none"><a href="#features" class="nav-link" role="menuitem">Features</a></li>
            <li role="none"><a href="#use-cases" class="nav-link" role="menuitem">Use Cases</a></li>
            <li role="none"><a href="#specs" class="nav-link" role="menuitem">Products</a></li>
            <li role="none"><a href="#pricing" class="nav-link" role="menuitem">Pricing</a></li>
            <li role="none"><a href="#faq" class="nav-link" role="menuitem">FAQ</a></li>
            <li role="none"><a href="#waitlist" class="nav-link" role="menuitem">Waitlist</a></li>
            <li role="none">
              <button class="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Hero Section with enhanced accessibility -->
      <main id="main-content">
        <section id="hero" class="hero-section finisher-header" aria-labelledby="hero-title">
          <div class="hero-video-background">
            <iframe
              src="https://www.youtube.com/embed/5fpGTE3aIw0?autoplay=1&mute=1&loop=1&playlist=5fpGTE3aIw0&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="MindWave.AI product demonstration video background"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="eager">
            </iframe>
          </div>
          <div class="hero-overlay"></div>
          <div class="container">
            <h1 id="hero-title" class="hero-title">MindWave.AI</h1>
            <p class="hero-subtitle">
              The world's most advanced brain wave signal AI reader.
              Experience unprecedented neural technology that transforms thoughts into digital reality.
            </p>
            <button class="cta-button" id="hero-cta" aria-label="Discover the future of neural technology">
              Discover the Future
            </button>
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
      <section class="feature-section" aria-labelledby="enhanced-potential-title">
        <div class="container">
          <div class="feature-content">
            <h2 id="enhanced-potential-title" class="feature-title">Enhanced Human Potential</h2>
            <p class="feature-description">
              Unlock cognitive abilities you never knew existed with AI-powered
              neural optimization and real-time performance enhancement.
            </p>
            <div class="feature-visual">
              <dotlottie-player src="https://lottie.host/e05ac396-bed4-4d3a-b58f-b22ef1e763ec/RSxiaBjKJ1.lottie" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay aria-label="Animated visualization of cognitive amplification"></dotlottie-player>
              <span>Cognitive Amplification</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-World Use Cases Section -->
      <section id="use-cases" class="use-cases-section" aria-labelledby="use-cases-title">
        <div class="container">
          <h2 id="use-cases-title" class="feature-title" style="text-align: center; margin-bottom: 20px;">Real-World Applications</h2>
          <p style="text-align: center; font-size: 18px; color: var(--text-secondary); max-width: 800px; margin: 0 auto 60px;">
            MindWave.AI transforms lives across multiple industries, empowering users with unprecedented cognitive insights and control.
          </p>
          <div class="use-cases-grid">
            <article class="use-case-card">
              <div class="use-case-icon" role="img" aria-label="Medical icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 class="use-case-title">Healthcare & Rehabilitation</h3>
              <p class="use-case-description">
                Revolutionizing patient care and recovery with real-time neural monitoring.
              </p>
              <ul class="use-case-list">
                <li>Stroke recovery assessment and therapy</li>
                <li>Epilepsy seizure prediction and prevention</li>
                <li>Cognitive impairment early detection</li>
                <li>Post-surgical brain function monitoring</li>
              </ul>
            </article>
            <article class="use-case-card">
              <div class="use-case-icon" role="img" aria-label="Gaming icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="6" y1="2" x2="6" y2="6"></line>
                  <line x1="18" y1="2" x2="18" y2="6"></line>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M8 22V8l4-4 4 4v14"></path>
                  <path d="M8 14h8"></path>
                </svg>
              </div>
              <h3 class="use-case-title">Gaming & Entertainment</h3>
              <p class="use-case-description">
                Next-generation immersive experiences controlled by thought alone.
              </p>
              <ul class="use-case-list">
                <li>Mind-controlled gameplay mechanics</li>
                <li>Adaptive difficulty based on focus levels</li>
                <li>Emotional response-driven narratives</li>
                <li>VR/AR experiences enhanced by brain signals</li>
              </ul>
            </article>
            <article class="use-case-card">
              <div class="use-case-icon" role="img" aria-label="Productivity icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 class="use-case-title">Productivity & Wellness</h3>
              <p class="use-case-description">
                Optimize your daily performance with intelligent neural insights.
              </p>
              <ul class="use-case-list">
                <li>Focus and attention span tracking</li>
                <li>Stress detection and management alerts</li>
                <li>Meditation effectiveness measurement</li>
                <li>Peak productivity period identification</li>
              </ul>
            </article>
            <article class="use-case-card">
              <div class="use-case-icon" role="img" aria-label="Research icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 class="use-case-title">Research & Education</h3>
              <p class="use-case-description">
                Advancing neuroscience and learning with accessible brain-computer interfaces.
              </p>
              <ul class="use-case-list">
                <li>Cognitive load assessment during learning</li>
                <li>Personalized education adaptation</li>
                <li>Neuroscience research data collection</li>
                <li>Brain-computer interface development</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials-section" aria-labelledby="testimonials-title">
        <div class="container">
          <h2 id="testimonials-title" class="feature-title">What Early Adopters Say</h2>
          <p style="font-size: 18px; color: var(--text-secondary); max-width: 700px; margin: 0 auto;">
            Beta testers worldwide are experiencing the transformative power of MindWave.AI.
          </p>
          <div class="testimonials-grid">
            <article class="testimonial-card">
              <div class="testimonial-avatar" role="img" aria-label="Dr. Sarah Chen avatar">SC</div>
              <blockquote class="testimonial-text">
                "As a neurologist, I'm amazed by the accuracy and ease of use. MindWave.AI is helping us detect early signs of cognitive decline in patients weeks earlier than traditional methods."
              </blockquote>
              <footer>
                <cite class="testimonial-author">Dr. Sarah Chen</cite>
                <p class="testimonial-role">Neurologist, Stanford Medical Center</p>
              </footer>
            </article>
            <article class="testimonial-card">
              <div class="testimonial-avatar" role="img" aria-label="Marcus Rodriguez avatar">MR</div>
              <blockquote class="testimonial-text">
                "The gaming experience is unreal. Controlling characters with my thoughts has completely changed how I interact with virtual worlds. This is the future of entertainment."
              </blockquote>
              <footer>
                <cite class="testimonial-author">Marcus Rodriguez</cite>
                <p class="testimonial-role">Professional Esports Player</p>
              </footer>
            </article>
            <article class="testimonial-card">
              <div class="testimonial-avatar" role="img" aria-label="Emily Watson avatar">EW</div>
              <blockquote class="testimonial-text">
                "MindWave.AI has been life-changing for my meditation practice. Seeing real-time feedback on my brain waves helps me achieve deeper states of calm faster than ever before."
              </blockquote>
              <footer>
                <cite class="testimonial-author">Emily Watson</cite>
                <p class="testimonial-role">Mindfulness Coach & Author</p>
              </footer>
            </article>
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

      <!-- Tiered Pricing Section -->
      <section id="pricing" class="pricing-section" aria-labelledby="pricing-title">
        <div class="container">
          <h2 id="pricing-title" class="feature-title" style="text-align: center; margin-bottom: 20px;">Choose Your Experience</h2>
          <p style="text-align: center; font-size: 18px; color: var(--text-secondary); max-width: 700px; margin: 0 auto 60px;">
            Select the plan that best fits your needs. All plans include lifetime software updates.
          </p>
          <div class="pricing-tiers">
            <article class="pricing-tier basic">
              <h3 class="pricing-tier-name">Basic</h3>
              <div class="pricing-tier-price">$1,999</div>
              <p class="pricing-tier-description">Perfect for personal exploration and wellness tracking</p>
              <ul class="pricing-tier-features">
                <li>8 neural channels</li>
                <li>500Hz sampling rate</li>
                <li>Real-time brain wave visualization</li>
                <li>Focus & meditation tracking</li>
                <li>12h battery life</li>
                <li>Email support</li>
                <li>Lifetime software updates</li>
              </ul>
              <button class="pricing-tier-button" aria-label="Pre-order Basic plan for $1,999">Pre-order Basic</button>
            </article>
            <article class="pricing-tier featured">
              <span class="pricing-badge">Most Popular</span>
              <h3 class="pricing-tier-name">Pro</h3>
              <div class="pricing-tier-price">$2,999</div>
              <p class="pricing-tier-description">Advanced features for professionals and enthusiasts</p>
              <ul class="pricing-tier-features">
                <li>16 neural channels</li>
                <li>1000Hz sampling rate</li>
                <li>99.9% AI accuracy</li>
                <li>Advanced analytics dashboard</li>
                <li>24h battery life</li>
                <li>Priority support (24/7)</li>
                <li>API access for custom integrations</li>
                <li>Lifetime software updates</li>
              </ul>
              <button class="pricing-tier-button" aria-label="Pre-order Pro plan for $2,999">Pre-order Pro</button>
            </article>
            <article class="pricing-tier">
              <h3 class="pricing-tier-name">Enterprise</h3>
              <div class="pricing-tier-price">Custom</div>
              <p class="pricing-tier-description">Tailored solutions for research and medical institutions</p>
              <ul class="pricing-tier-features">
                <li>32+ neural channels</li>
                <li>Up to 2000Hz sampling rate</li>
                <li>Medical-grade certification</li>
                <li>Custom AI model training</li>
                <li>Unlimited devices</li>
                <li>Dedicated account manager</li>
                <li>On-site training & integration</li>
                <li>Enterprise SLA & support</li>
              </ul>
              <button class="pricing-tier-button" aria-label="Contact sales for Enterprise plan">Contact Sales</button>
            </article>
          </div>
        </div>
      </section>

      <!-- Q&A Section with enhanced accessibility -->
      <section id="faq" class="faq-section" aria-labelledby="faq-title">
        <div class="container">
          <h2 id="faq-title" class="feature-title" style="text-align: center; margin-bottom: 60px;">Frequently Asked Questions</h2>
          <div class="faq-container" role="list">
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-1">
                <span>How does MindWave.AI work?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-1" role="region">
                <p>MindWave.AI uses advanced EEG sensors to detect brain wave patterns and processes them through our proprietary AI algorithms. The device is completely non-invasive and captures neural signals through comfortable sensors placed on your scalp. Our machine learning models analyze these patterns in real-time to provide accurate insights into your cognitive state.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-2">
                <span>Is it safe to use?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-2" role="region">
                <p>Absolutely. MindWave.AI is completely non-invasive and uses the same safe technology found in medical-grade EEG devices. It only reads brain signals and does not emit any radiation or electrical signals into your brain. The device has undergone rigorous safety testing and complies with international medical device standards.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-3">
                <span>How accurate is the thought recognition?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-3" role="region">
                <p>Our AI achieves 99.9% accuracy in thought pattern recognition after a brief calibration period. The system continuously learns from your unique neural patterns, improving accuracy over time. Clinical trials have shown consistent results across diverse user populations.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-4">
                <span>What is the battery life?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-4" role="region">
                <p>The Pro model offers up to 24 hours of continuous use on a single charge, while the Basic model provides 12 hours. Both include wireless charging and fast-charge capability (50% charge in 30 minutes). Enterprise models can be customized with extended battery options.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-5">
                <span>Is my data secure and private?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-5" role="region">
                <p>Your privacy is our top priority. All neural data is processed locally on your device with military-grade AES-256 encryption. We never store or transmit your brain data to external servers without your explicit consent. You maintain complete ownership of your neural data at all times.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-6">
                <span>Is it compatible with existing devices and platforms?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-6" role="region">
                <p>Yes! MindWave.AI works seamlessly with iOS, Android, Windows, macOS, and Linux. It connects via Bluetooth 5.2 and includes SDKs for Unity, Unreal Engine, and major development frameworks. The Pro and Enterprise plans also offer REST API access for custom integrations.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-7">
                <span>What kind of support is included?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-7" role="region">
                <p>All plans include comprehensive documentation, video tutorials, and community forum access. Basic plan users receive email support within 48 hours. Pro users get priority 24/7 support via email, chat, and phone. Enterprise customers receive dedicated account management and on-site technical support.</p>
              </div>
            </div>
            <div class="faq-item" role="listitem">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-8">
                <span>Can I return or exchange the device?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-8" role="region">
                <p>We offer a 30-day money-back guarantee for all products. If you're not completely satisfied with MindWave.AI, you can return it for a full refund within 30 days of purchase. We also provide a 2-year manufacturer warranty covering defects and hardware failures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Waitlist Section with enhanced accessibility -->
      <section id="waitlist" class="waitlist-section" aria-labelledby="waitlist-title">
        <div class="container">
          <div class="waitlist-content">
            <h2 id="waitlist-title" class="feature-title" style="text-align: center; margin-bottom: 20px;">Join the Waitlist</h2>
            <p class="waitlist-subtitle">Be among the first to experience the future of neural technology. Get early access and exclusive launch benefits.</p>
            <form class="waitlist-form" id="waitlist-form" aria-label="Waitlist signup form">
              <label for="waitlist-email" class="visually-hidden">Email address</label>
              <input
                type="email"
                id="waitlist-email"
                class="waitlist-input"
                placeholder="Enter your email address"
                required
                aria-required="true"
                autocomplete="email"
                aria-describedby="email-hint"
              >
              <span id="email-hint" class="visually-hidden">Enter a valid email to receive updates about MindWave.AI</span>
              <button type="submit" class="waitlist-button" aria-label="Submit email to join waitlist">Join Waitlist</button>
            </form>
            <div id="waitlist-success" class="waitlist-success hidden" role="status" aria-live="polite">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Successfully Subscribed!</h3>
              <p>Thank you for joining the waitlist. We'll notify you when MindWave.AI becomes available.</p>
            </div>
          </div>
        </div>
      </section>
      </main>

      <!-- Footer with semantic markup -->
      <footer class="footer" role="contentinfo">
        <div class="container">
          <p>&copy; 2025 MindWave.AI. Pioneering the next evolution of human consciousness.</p>
        </div>
      </footer>
    </div>
  `
}

function setupInteractions() {
  const heroButton = document.querySelector('#hero-cta')
  const featureVisuals = document.querySelectorAll('.feature-visual')

  // Setup dark mode toggle with localStorage persistence
  setupDarkMode()

  // Setup navigation
  setupNavigation()

  // Setup parallax scrolling
  setupParallaxScrolling()

  // Setup brain wave visualization
  setupBrainWaveVisualization()

  // Initialize finisher-header with brain wave theme
  initializeFinisherHeader()

  // Setup FAQ accordion with ARIA attributes
  setupFAQ()

  // Setup waitlist form
  setupWaitlistForm()

  // Setup pricing tier buttons
  setupPricingButtons()

  if (heroButton) {
    heroButton.addEventListener('click', () => {
      const firstFeature = document.querySelector('.feature-section')
      firstFeature.scrollIntoView({ behavior: 'smooth' })
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

// Dark mode toggle with localStorage persistence (WCAG 2.2 compliant)
function setupDarkMode() {
  const themeToggle = document.querySelector('.theme-toggle')
  const htmlElement = document.documentElement

  // Check for saved user preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light'
  htmlElement.setAttribute('data-theme', currentTheme)

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = htmlElement.getAttribute('data-theme')
      const newTheme = theme === 'light' ? 'dark' : 'light'

      htmlElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)

      // Update button aria-label for screen readers
      themeToggle.setAttribute('aria-label', `Switch to ${theme} mode`)

      // Optional: Announce theme change for screen readers
      const announcement = document.createElement('div')
      announcement.setAttribute('role', 'status')
      announcement.setAttribute('aria-live', 'polite')
      announcement.className = 'visually-hidden'
      announcement.textContent = `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`
      document.body.appendChild(announcement)
      setTimeout(() => announcement.remove(), 1000)
    })
  }
}

// Enhanced FAQ setup with ARIA attributes
function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question')

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement
      const isActive = faqItem.classList.contains('active')
      const ariaExpanded = question.getAttribute('aria-expanded') === 'true'

      // Close all other FAQ items and update their ARIA attributes
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active')
        const btn = item.querySelector('.faq-question')
        if (btn) btn.setAttribute('aria-expanded', 'false')
      })

      // Toggle current item and update ARIA
      if (!isActive) {
        faqItem.classList.add('active')
        question.setAttribute('aria-expanded', 'true')
      } else {
        question.setAttribute('aria-expanded', 'false')
      }
    })

    // Keyboard accessibility (Enter and Space)
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        question.click()
      }
    })
  })
}

// Setup pricing tier buttons with selection highlighting
function setupPricingButtons() {
  const pricingTiers = document.querySelectorAll('.pricing-tier')
  const pricingButtons = document.querySelectorAll('.pricing-tier-button')

  // Add click handler to entire pricing tier card
  pricingTiers.forEach(tier => {
    tier.addEventListener('click', (e) => {
      // Remove selected class from all tiers
      pricingTiers.forEach(t => t.classList.remove('selected'))

      // Add selected class to clicked tier
      tier.classList.add('selected')

      // Don't trigger button click if we clicked the tier itself
      if (!e.target.closest('.pricing-tier-button')) {
        // Optional: scroll tier into view
        tier.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    })
  })

  // Handle button clicks
  pricingButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation() // Prevent tier click handler

      const tier = button.closest('.pricing-tier')
      const tierName = tier.querySelector('.pricing-tier-name').textContent

      // Highlight the selected tier
      pricingTiers.forEach(t => t.classList.remove('selected'))
      tier.classList.add('selected')

      if (tierName === 'Enterprise') {
        alert('Thank you for your interest in our Enterprise plan!\n\nOur sales team will contact you shortly to discuss your specific needs.\n\nEmail: enterprise@mindwave.ai\nPhone: 1-800-MINDWAVE')
      } else {
        alert(`Thank you for your interest in the ${tierName} plan!\n\nPre-orders will be available soon. Join our waitlist to be notified when MindWave.AI becomes available.`)
        // Scroll to waitlist
        setTimeout(() => {
          document.querySelector('#waitlist').scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    })
  })

  // Set the featured (Pro) tier as selected by default
  const featuredTier = document.querySelector('.pricing-tier.featured')
  if (featuredTier) {
    featuredTier.classList.add('selected')
  }
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

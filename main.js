/* 
   Kashi Dharshan - Core Interactive Engine
   GSAP, Lenis, and Sanctuary Mode triggers
*/

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lenis Smooth Scroll
  let lenis;
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard fast-out ease
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (error) {
    console.error("Lenis smooth scroll failed to initialize:", error);
  }

  // 2. Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Synchronize Lenis with GSAP ScrollTrigger
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // 3. Dynamic Navigation Style (Flyward Nav Color Switch logic)
  const navWrapper = document.querySelector(".nav-wrapper");
  const heroSection = document.querySelector(".hero-section");
  const destSection = document.querySelector(".destinations-section");

  // Hero nav color (transparent / white blend)
  ScrollTrigger.create({
    trigger: heroSection,
    start: "top top",
    end: "bottom 90px",
    onLeave: () => {
      navWrapper.style.setProperty("--nav-bg", "rgba(251, 248, 243, 0.95)");
      navWrapper.style.setProperty("--nav-border", "rgba(61, 45, 32, 0.12)");
    },
    onEnterBack: () => {
      navWrapper.style.setProperty("--nav-bg", "rgba(251, 248, 243, 0.85)");
      navWrapper.style.setProperty("--nav-border", "rgba(61, 45, 32, 0.06)");
    }
  });

  // Dark destinations section nav color toggle
  ScrollTrigger.create({
    trigger: destSection,
    start: "top 90px",
    end: "bottom 90px",
    onEnter: () => {
      navWrapper.style.setProperty("--nav-bg", "rgba(21, 17, 14, 0.95)");
      navWrapper.style.setProperty("--nav-text", "#FBF8F3");
      navWrapper.style.setProperty("--nav-border", "rgba(251, 248, 243, 0.15)");
    },
    onLeave: () => {
      navWrapper.style.setProperty("--nav-bg", "rgba(251, 248, 243, 0.95)");
      navWrapper.style.setProperty("--nav-text", "#3D2D20");
      navWrapper.style.setProperty("--nav-border", "rgba(61, 45, 32, 0.12)");
    },
    onEnterBack: () => {
      navWrapper.style.setProperty("--nav-bg", "rgba(21, 17, 14, 0.95)");
      navWrapper.style.setProperty("--nav-text", "#FBF8F3");
      navWrapper.style.setProperty("--nav-border", "rgba(251, 248, 243, 0.15)");
    },
    onLeaveBack: () => {
      navWrapper.style.setProperty("--nav-bg", "rgba(251, 248, 243, 0.85)");
      navWrapper.style.setProperty("--nav-text", "#3D2D20");
      navWrapper.style.setProperty("--nav-border", "rgba(61, 45, 32, 0.06)");
    }
  });

  // 4. Parallax Scroll Effect for Hero Background
  gsap.to(".hero-bg-image", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // 5. Interactive SVG Timeline Path Drawing
  const timelinePath = document.querySelector("#timeline-draw-path");
  if (timelinePath) {
    const pathLength = timelinePath.getTotalLength();
    
    // Set initial dasharray and offset
    timelinePath.style.strokeDasharray = pathLength;
    timelinePath.style.strokeDashoffset = pathLength;

    gsap.to(timelinePath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 25%",
        end: "bottom 75%",
        scrub: 0.5,
      }
    });
  }

  // Highlight timeline stops as the path draws over them
  const timelineStops = document.querySelectorAll(".timeline-stop-item");
  timelineStops.forEach((stop) => {
    const dot = stop.querySelector(".timeline-dot");
    const content = stop.querySelector(".timeline-content-block");
    const visual = stop.querySelector(".timeline-visual-block");

    gsap.fromTo([dot, content, visual], 
      { opacity: 0.2, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: stop,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });

  // 6. Interactive 3D Card Tilt Effect for Destinations
  const destCards = document.querySelectorAll(".dest-card");
  destCards.forEach((card) => {
    const inner = card.querySelector(".dest-card-inner");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate within element
      const y = e.clientY - rect.top;  // y coordinate within element

      // Calculate tilt angles based on position (-10 to 10 deg)
      const tiltX = -((rect.height / 2 - y) / (rect.height / 2)) * 12;
      const tiltY = ((rect.width / 2 - x) / (rect.width / 2)) * 12;

      // Apply transform
      inner.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      // Return card back to normal
      inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

  // 7. Metrics Count-Up Animation
  const animateValue = (id, start, end, duration) => {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Calculate current value
      let currentVal = Math.floor(progress * (end - start) + start);
      
      // Formatting
      if (end >= 1000) {
        // Format as 50k+
        currentVal = Math.floor(currentVal / 1000) + "k+";
      } else if (id === "metric3") {
        currentVal = currentVal + "+";
      }
      
      obj.innerHTML = currentVal;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Trigger metrics counting when they scroll into view
  ScrollTrigger.create({
    trigger: ".metrics-section",
    start: "top 80%",
    once: true, // Only play once
    onEnter: () => {
      animateValue("metric1", 0, 50000, 2000); // 50k+ pilgrims
      animateValue("metric2", 0, 94, 2000);    // 94% repeat rate
      animateValue("metric3", 0, 50, 2000);    // 50+ Vedic guides
      animateValue("metric4", 0, 12, 2000);    // 12 years of service
    }
  });

  // 8. Testimonial Slideshow (Simple Fade Carousel)
  // We can add multiple reviews in the list
  const reviews = [
    {
      quote: `"Originally, I thought arranging complex pujas and boat timings across multiple cities in UP would be impossible. Kashi Dharshan made it completely seamless. They took care of our VIP entries and gave my parents an unforgettable spiritual retreat."`,
      author: "Ramanathan Sharma",
      desc: "Pilgrim from Chennai (Family Group Tour)"
    },
    {
      quote: `"Their digital discretion during our booking was top notch. In 'Sanctuary Mode', we planned our entire Ashtabhuja and Sarayu routes peacefully. Having a dedicated Vedic guide who understands local history was a game-changer."`,
      author: "Pooja Deshmukh",
      desc: "Executive Travel Coordinator (Mumbai)"
    }
  ];

  let currentReviewIndex = 0;
  const quoteEl = document.querySelector(".testimonial-quote");
  const nameEl = document.querySelector(".author-name");
  const descEl = document.querySelector(".author-desc");

  function updateTestimonial(index) {
    gsap.to(".testimonial-content", {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        quoteEl.innerHTML = reviews[index].quote;
        nameEl.innerHTML = reviews[index].author;
        descEl.innerHTML = reviews[index].desc;
        gsap.to(".testimonial-content", {
          opacity: 1,
          x: 0,
          duration: 0.5
        });
      }
    });
  }

  document.getElementById("nextSlide").addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateTestimonial(currentReviewIndex);
  });

  document.getElementById("prevSlide").addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateTestimonial(currentReviewIndex);
  });

  // 9. Sanctuary Mode Toggle Logic
  const sanctuaryBtn = document.getElementById("sanctuaryBtn");
  const sanctuaryOverlay = document.getElementById("sanctuaryOverlay");
  const exitSanctuaryBtn = document.getElementById("exitSanctuaryBtn");
  const downloadItineraryBtn = document.getElementById("downloadItineraryBtn");
  
  function enterSanctuaryMode() {
    document.body.classList.add("dark-mode");
    sanctuaryBtn.classList.add("active");
    sanctuaryOverlay.classList.add("active");
    if (lenis) lenis.stop(); // Stop scroll when overlay is active
    
    // Simulate telemetry wipe & cookie clear
    console.log("Telemetry session cleared. Active session status: ENCRYPTED SANCTUARY.");
  }

  function exitSanctuaryMode() {
    document.body.classList.remove("dark-mode");
    sanctuaryBtn.classList.remove("active");
    sanctuaryOverlay.classList.remove("active");
    if (lenis) lenis.start(); // Restore scroll
  }

  sanctuaryBtn.addEventListener("click", () => {
    if (sanctuaryBtn.classList.contains("active")) {
      exitSanctuaryMode();
    } else {
      enterSanctuaryMode();
    }
  });

  exitSanctuaryBtn.addEventListener("click", exitSanctuaryMode);

  downloadItineraryBtn.addEventListener("click", () => {
    // Generate simple print text / clean download behavior
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
      <head>
        <title>Kashi Dharshan Sanctuary - Travel Itinerary</title>
        <style>
          body { font-family: 'Georgia', serif; padding: 40px; color: #3D2D20; background-color: #FBF8F3; line-height: 1.6; }
          h1 { text-align: center; border-bottom: 2px solid #C5A880; padding-bottom: 10px; font-weight: normal; }
          .route { font-style: italic; text-align: center; color: #705F51; margin-bottom: 30px; }
          .stop { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(61,45,32,0.1); }
          .stop h3 { margin-bottom: 6px; color: #3D2D20; }
        </style>
      </head>
      <body>
        <h1>Kashi Dharshan - Holy Tour Itinerary</h1>
        <div class="route">Varanasi • Prayagraj • Vindhyachal • Chitrakoot • Ayodhya</div>
        
        <div class="stop">
          <h3>1. Varanasi (Kashi Vishwanath Mandir &amp; Heritage Ghats)</h3>
          <p>Private bajra cruise and Vedic Rudrabhishek puja arrangements.</p>
        </div>
        <div class="stop">
          <h3>2. Prayagraj (Sacred Triveni Sangam Confluence)</h3>
          <p>Managed boat routes to the center confluence and luxury tent support.</p>
        </div>
        <div class="stop">
          <h3>3. Vindhyachal (Hill Shrine of Goddess Vindhyavasini)</h3>
          <p>Fast-track Shakti Peeth passes and ropeway transit.</p>
        </div>
        <div class="stop">
          <h3>4. Chitrakoot (Ram Ghat &amp; Forest hermits trail)</h3>
          <p>Guided cave walks in Gupt Godavari and Mandakini riverside explorations.</p>
        </div>
        <div class="stop">
          <h3>5. Ayodhya (Sarayu Banks &amp; Ram Lalla citadel)</h3>
          <p>VIP Darshan passes and Private Sarayu Aarti views coordinated seamlessly.</p>
        </div>
        
        <p style="text-align: center; font-size: 0.8rem; margin-top: 50px; color: #705F51;">This document was printed in Sanctuary Mode. No search engines tracking records remain.</p>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  });

  // 10. Live Indian Standard Time Clock
  const clockEl = document.getElementById("istClock");
  const dateEl = document.getElementById("istDate");

  function updateISTClock() {
    const now = new Date();
    
    // Format options for IST (Asia/Kolkata timezone)
    const timeOptions = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    
    const dateOptions = {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    try {
      const timeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
      const dateStr = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
      
      clockEl.textContent = timeStr;
      dateEl.textContent = dateStr;
    } catch (e) {
      // Fallback if Intl is not supported
      clockEl.textContent = now.toLocaleTimeString();
    }
  }

  // Update clock every second
  updateISTClock();
  setInterval(updateISTClock, 1000);
});

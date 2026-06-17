/**
 * Kashi Dharshan - Premium Pilgrimage Landing Page
 * Interactive Logic & UI Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Scroll-Based Header Transitions
  const header = document.querySelector('header');
  const scrollThreshold = 50;

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger immediately in case page loads scrolled down
    handleScroll();
  }

  // 2. Mobile Menu Toggle (Safe Guarded)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileLinks = mobileNavOverlay ? mobileNavOverlay.querySelectorAll('a') : [];

  if (mobileMenuBtn && mobileNavOverlay) {
    const toggleMobileMenu = () => {
      const isOpen = mobileNavOverlay.classList.toggle('open');
      mobileMenuBtn.innerHTML = isOpen 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileNavOverlay.classList.contains('open')) {
          toggleMobileMenu();
        }
      });
    });
  }

  // 3. Accordion Exclusive Open (For Detailed Itineraries and FAQs)
  const itineraries = document.querySelectorAll('#itinerary-accordions details');
  itineraries.forEach(detail => {
    detail.addEventListener('toggle', (e) => {
      if (detail.open) {
        itineraries.forEach(item => {
          if (item !== detail && item.open) {
            item.removeAttribute('open');
          }
        });
      }
    });
  });

  const faqs = document.querySelectorAll('#faq-accordions details');
  faqs.forEach(detail => {
    detail.addEventListener('toggle', (e) => {
      if (detail.open) {
        faqs.forEach(item => {
          if (item !== detail && item.open) {
            item.removeAttribute('open');
          }
        });
      }
    });
  });

  // 4. Carousels Drag / Swipe scroll logic (Safe Guarded for Testimonials & Batches)
  const carousels = document.querySelectorAll('.reviews-carousel-container');
  carousels.forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.style.cursor = 'grab';

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Speed multiplier
      carousel.scrollLeft = scrollLeft - walk;
    });
  });

  // 5. Booking Lead Capture Form & WhatsApp Redirection
  const bookingForm = document.getElementById('lead-booking-form');
  const successModal = document.getElementById('success-modal-overlay');
  const modalCloseBtn = document.getElementById('btn-modal-close');
  const targetPhoneNumber = '917408763401'; // Pre-pending country code 91 for India

  // Set default minimum date to today
  const dateInput = document.getElementById('travel-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Handle flexible date checkbox
  const flexibleDateCheckbox = document.getElementById('flexible-date-checkbox');
  if (flexibleDateCheckbox && dateInput) {
    flexibleDateCheckbox.addEventListener('change', () => {
      if (flexibleDateCheckbox.checked) {
        dateInput.value = '';
        dateInput.disabled = true;
        dateInput.required = false;
        dateInput.style.opacity = '0.5';
      } else {
        dateInput.disabled = false;
        dateInput.required = true;
        dateInput.style.opacity = '1';
      }
    });
  }

  // Handle booking mode toggle (Segmented Tabs style)
  const bookingModeRadios = document.querySelectorAll('input[name="booking-mode"]');
  const submitBtn = document.getElementById('submit-btn');
  const directLabel = document.getElementById('booking-mode-direct-label');
  const lockLabel = document.getElementById('booking-mode-lock-label');

  if (bookingModeRadios && submitBtn && directLabel && lockLabel) {
    const updateBookingModeStyles = () => {
      bookingModeRadios.forEach(radio => {
        if (radio.value === 'Direct Confirm (25% Advance)') {
          if (radio.checked) {
            directLabel.style.background = '#FF6B00';
            directLabel.style.color = '#FFFFFF';
            directLabel.classList.remove('text-white/40', 'hover:text-white/70');
            directLabel.classList.add('shadow-[0_4px_12px_rgba(255,107,0,0.3)]');
          } else {
            directLabel.style.background = 'transparent';
            directLabel.style.color = 'rgba(255,255,255,0.4)';
            directLabel.classList.add('text-white/40', 'hover:text-white/70');
            directLabel.classList.remove('shadow-[0_4px_12px_rgba(255,107,0,0.3)]');
          }
        } else if (radio.value === 'Lock Price (₹1,999 Token)') {
          if (radio.checked) {
            lockLabel.style.background = '#FF6B00';
            lockLabel.style.color = '#FFFFFF';
            lockLabel.classList.remove('text-white/40', 'hover:text-white/70');
            lockLabel.classList.add('shadow-[0_4px_12px_rgba(255,107,0,0.3)]');
          } else {
            lockLabel.style.background = 'transparent';
            lockLabel.style.color = 'rgba(255,255,255,0.4)';
            lockLabel.classList.add('text-white/40', 'hover:text-white/70');
            lockLabel.classList.remove('shadow-[0_4px_12px_rgba(255,107,0,0.3)]');
          }
        }
      });
    };

    bookingModeRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          if (radio.value === 'Direct Confirm (25% Advance)') {
            submitBtn.textContent = 'Confirm Booking (25% Advance)';
          } else {
            submitBtn.textContent = 'Lock Package Price at ₹1,999';
          }
          updateBookingModeStyles();
        }
      });
    });

    // Run once at start to set the initial checked styling
    updateBookingModeStyles();
  }

  // Pre-fill package selection if user clicks booking button in cards
  window.selectPackage = (packageName) => {
    const packageSelect = document.getElementById('package-select');
    if (packageSelect) {
      packageSelect.value = packageName;
      // Scroll smoothly to form
      const formSection = document.getElementById('home');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form Fields (Safe extraction)
      const fullNameEl = document.getElementById('full-name');
      const phoneNumberEl = document.getElementById('phone-number');
      const travelDateEl = document.getElementById('travel-date');
      const flexibleDateCheckboxEl = document.getElementById('flexible-date-checkbox');
      const selectedPackageEl = document.getElementById('package-select');
      const emailEl = document.getElementById('email-address');
      const notesEl = document.getElementById('notes');

      const fullName = fullNameEl ? fullNameEl.value.trim() : '';
      const phoneNumber = phoneNumberEl ? phoneNumberEl.value.trim() : '';
      const travelDate = travelDateEl ? travelDateEl.value : '';
      const isFlexibleDate = flexibleDateCheckboxEl ? flexibleDateCheckboxEl.checked : false;
      const selectedPackage = selectedPackageEl ? selectedPackageEl.value : '';
      const email = emailEl ? emailEl.value.trim() : '';
      const notes = notesEl ? notesEl.value.trim() : '';

      // Check booking mode
      const selectedBookingModeEl = document.querySelector('input[name="booking-mode"]:checked');
      const bookingMode = selectedBookingModeEl ? selectedBookingModeEl.value : 'Direct Confirm (25% Advance)';

      // Simple Validation
      if (!fullName || !phoneNumber || (!isFlexibleDate && !travelDate) || !selectedPackage) {
        alert('कृपया सभी आवश्यक फ़ील्ड भरें ताकि हम आपकी यात्रा की व्यवस्था कर सकें।');
        return;
      }

      if (phoneNumber.length < 10) {
        alert('कृपया एक वैध 10-अंकों का मोबाइल नंबर दर्ज करें।');
        return;
      }

      // Generate WhatsApp message template
      let formattedDate = '';
      if (isFlexibleDate) {
        formattedDate = 'Flexible / Decide Later';
      } else {
        formattedDate = new Date(travelDate).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }

      let whatsappMessage = '';
      if (bookingMode === 'Direct Confirm (25% Advance)') {
        whatsappMessage = `नमस्ते काशी दर्शन टीम! 🙏\n\nमैं 25% एडवांस भुगतान के साथ अपनी टूर बुकिंग पक्की (Confirm) करना चाहता हूँ। विवरण नीचे दिया गया है:\n\n🚩 नाम: ${fullName}\n📞 संपर्क नंबर: ${phoneNumber}\n📦 टूर पैकेज: ${selectedPackage}\n📅 यात्रा की तिथि: ${formattedDate}`;
      } else {
        whatsappMessage = `नमस्ते काशी दर्शन टीम! 🙏\n\nमैं ₹1,999 की टोकन राशि के साथ टूर पैकेज का मूल्य लॉक करना चाहता हूँ। विवरण नीचे दिया गया है:\n\n🚩 नाम: ${fullName}\n📞 संपर्क नंबर: ${phoneNumber}\n📦 टूर पैकेज: ${selectedPackage}\n📅 यात्रा की तिथि: ${formattedDate}`;
      }

      if (email) {
        whatsappMessage += `\n📧 ईमेल: ${email}`;
      }
      if (notes) {
        whatsappMessage += `\n📝 विशेष अनुरोध: ${notes}`;
      }

      if (bookingMode === 'Direct Confirm (25% Advance)') {
        whatsappMessage += `\n\nकृपया मुझे बुकिंग कंफर्म करने और 25% एडवांस जमा करने के लिए क्यूआर कोड / खाता विवरण साझा करें। धन्यवाद!`;
      } else {
        whatsappMessage += `\n\nकृपया मुझे बुकिंग टोकन राशि भेजने के लिए क्यूआर कोड / खाता विवरण साझा करें। धन्यवाद!`;
      }

      // Encode message text
      const encodedText = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://wa.me/${targetPhoneNumber}?text=${encodedText}`;

      // Save submission state to LocalStorage for analytics/retention
      const leadData = {
        fullName,
        phoneNumber,
        travelDate,
        bookingMode,
        selectedPackage,
        email,
        notes,
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem('kashi_lead', JSON.stringify(leadData));

      // Show Success Alert or Modal if present
      if (successModal) {
        successModal.classList.add('open');
      } else {
        alert('आपकी पूछताछ दर्ज हो गई है! हम आपको व्हाट्सएप पर रीडायरेक्ट कर रहे हैं...');
      }

      // Trigger redirection
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1500);
    });
  }

  // Modal Close triggers
  if (successModal) {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        successModal.classList.remove('open');
        if (bookingForm) bookingForm.reset();
      });
    }

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('open');
        if (bookingForm) bookingForm.reset();
      }
    });
  }

  // 6. Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-element');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, no need to track it anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // Viewport
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Margins around viewport
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Auto-slide logic for Devotee Batches carousel (Smooth Continuous Scroll / Marquee)
  const devoteeCarousel = document.getElementById('devotee-batches-carousel');
  if (devoteeCarousel) {
    let marqueeInterval;
    const scrollSpeed = 0.8; // Speed of scroll (pixels per tick)
    const tickInterval = 25; // Interval between ticks in milliseconds (~40 fps)

    const stepScroll = () => {
      // If user is actively dragging, skip auto-slide
      if (devoteeCarousel.style.cursor === 'grabbing') return;

      const maxScrollLeft = devoteeCarousel.scrollWidth - devoteeCarousel.clientWidth;
      
      // Increment scroll position
      devoteeCarousel.scrollLeft += scrollSpeed;

      // If we reach the end, reset back to start smoothly
      if (devoteeCarousel.scrollLeft >= maxScrollLeft - 1) {
        devoteeCarousel.scrollLeft = 0;
      }
    };

    const startAutoSlide = () => {
      marqueeInterval = setInterval(stepScroll, tickInterval);
    };

    const stopAutoSlide = () => {
      clearInterval(marqueeInterval);
    };

    startAutoSlide();

    // Pause auto-play on hover or touch interactions
    devoteeCarousel.addEventListener('mouseenter', stopAutoSlide);
    devoteeCarousel.addEventListener('mouseleave', startAutoSlide);
    devoteeCarousel.addEventListener('touchstart', stopAutoSlide, { passive: true });
    devoteeCarousel.addEventListener('touchend', startAutoSlide, { passive: true });
  }

  // 7. Gallery "View More" toggle logic
  const viewMoreBtn = document.getElementById('btn-gallery-view-more');
  const hiddenGalleryItems = document.querySelectorAll('.gallery-item-hidden');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      const isExpanded = viewMoreBtn.classList.contains('expanded');
      
      hiddenGalleryItems.forEach(item => {
        if (isExpanded) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      });
      
      if (isExpanded) {
        viewMoreBtn.classList.remove('expanded');
        viewMoreBtn.querySelector('span').textContent = 'VIEW ALL YATRA MEMORIES (21+)';
        viewMoreBtn.querySelector('svg').classList.remove('rotate-180');
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
      } else {
        viewMoreBtn.classList.add('expanded');
        viewMoreBtn.querySelector('span').textContent = 'VIEW LESS';
        viewMoreBtn.querySelector('svg').classList.add('rotate-180');
      }
    });
  }

});

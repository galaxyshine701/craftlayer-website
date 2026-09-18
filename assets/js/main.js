document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.page-intro');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (intro) {
    document.body.classList.add('intro-active');

    window.setTimeout(() => {
      document.body.classList.remove('intro-active');
      document.body.classList.add('intro-complete');
    }, reducedMotion ? 120 : 1350);

    intro.addEventListener('transitionend', () => {
      intro.remove();
    }, { once: true });
  }

  document.body.classList.add('motion-ready');

  const heroVideo = document.querySelector('.hero-media-wrap video');
  if (heroVideo) {
    heroVideo.muted = true;

    const startHeroVideo = () => {
      if (!heroVideo.paused) return;

      const playback = heroVideo.play();
      if (playback && typeof playback.catch === 'function') {
        playback.catch(() => {
        });
      }
    };

    heroVideo.addEventListener('loadeddata', startHeroVideo, { once: true });
    heroVideo.addEventListener('canplay', startHeroVideo, { once: true });
    startHeroVideo();

    const playbackRetry = window.setInterval(() => {
      startHeroVideo();

      if (heroVideo.readyState >= 2 && !heroVideo.paused) {
        window.clearInterval(playbackRetry);
      }
    }, 250);

    window.setTimeout(() => window.clearInterval(playbackRetry), 6000);
  }

  const heroTitle = document.querySelector('.hero-copy h1');
  if (heroTitle) {
    const titleText = heroTitle.textContent.trim();
    heroTitle.setAttribute('aria-label', titleText);
    heroTitle.innerHTML = titleText.split(' ').map((word, index) => (
      `<span class="hero-word" aria-hidden="true" style="animation-delay: ${0.18 + index * 0.045}s">${word}</span>`
    )).join(' ');
  }

  const motionTargets = document.querySelectorAll('.section-heading, .service-card, .process-card, .work-card, .work-visual');
  motionTargets.forEach((element) => element.classList.add('reveal-on-scroll'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  motionTargets.forEach((element) => revealObserver.observe(element));

  const approvedServiceIds = new Set([
    'brand-identity',
    'web-development',
    'ui-ux',
    'ai-agents',
    'video-editing',
    'social-media-marketing'
  ]);

  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const logo = document.querySelector('.brand-mark');
  const requestForm = document.getElementById('request-form');

  if (requestForm) {
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const serviceInput = document.getElementById('selected-service');
    const budgetInput = document.getElementById('budget');
    const timelineInput = document.getElementById('timeline');
    const briefInput = document.getElementById('project-brief');
    const submitButton = document.getElementById('submit-button');
    const statusBox = document.getElementById('form-status');

    const setFieldError = (fieldWrapperId, message) => {
      const fieldWrapper = document.getElementById(fieldWrapperId);
      const errorText = fieldWrapper ? fieldWrapper.querySelector('.error-message') : null;

      if (!fieldWrapper || !errorText) return;

      if (message) {
        fieldWrapper.classList.add('has-error');
        errorText.textContent = message;
      } else {
        fieldWrapper.classList.remove('has-error');
        errorText.textContent = '';
      }
    };

    const validateFieldValues = () => {
      let valid = true;

      const fullNameValue = (fullNameInput.value || '').trim();
      if (!fullNameValue) {
        setFieldError('field-full-name', 'Please enter your full name.');
        valid = false;
      } else {
        setFieldError('field-full-name', '');
      }

      const emailValue = (emailInput.value || '').trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue || !emailPattern.test(emailValue)) {
        setFieldError('field-email', 'Please enter a valid professional email address.');
        valid = false;
      } else {
        setFieldError('field-email', '');
      }

      const selectedServiceValue = (serviceInput.value || '').trim();
      if (!selectedServiceValue || !approvedServiceIds.has(selectedServiceValue)) {
        setFieldError('field-service', 'Please select one of the approved services.');
        valid = false;
      } else {
        setFieldError('field-service', '');
      }

      const budgetValue = (budgetInput.value || '').trim();
      if (!budgetValue) {
        setFieldError('field-budget', 'Please choose a budget bracket.');
        valid = false;
      } else {
        setFieldError('field-budget', '');
      }

      const timelineValue = (timelineInput.value || '').trim();
      if (!timelineValue) {
        setFieldError('field-timeline', 'Please choose a delivery timeline.');
        valid = false;
      } else {
        setFieldError('field-timeline', '');
      }

      const briefValue = (briefInput.value || '').trim();
      if (briefValue.length < 30) {
        setFieldError('field-brief', 'Project brief must be at least 30 characters after trimming whitespace.');
        valid = false;
      } else {
        setFieldError('field-brief', '');
      }

      return valid;
    };

    const createReferenceId = () => {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let id = '#REQ-';

      for (let i = 0; i < 5; i += 1) {
        id += chars[Math.floor(Math.random() * chars.length)];
      }

      return id;
    };

    const urlParams = new URLSearchParams(window.location.search);
    const requestedService = urlParams.get('service');

    if (requestedService && approvedServiceIds.has(requestedService)) {
      serviceInput.value = requestedService;
    }

    const resetStatus = () => {
      if (statusBox && !statusBox.hidden) {
        statusBox.hidden = true;
        statusBox.textContent = '';
      }
    };

    [fullNameInput, emailInput, serviceInput, budgetInput, timelineInput, briefInput].forEach((element) => {
      if (!element) return;

      element.addEventListener('input', resetStatus);
      element.addEventListener('blur', validateFieldValues);
    });

    requestForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const isValid = validateFieldValues();

      if (!isValid) {
        return;
      }

      submitButton.disabled = true;
      submitButton.classList.add('is-loading');
      submitButton.textContent = 'Sending...';

      if (statusBox) {
        statusBox.hidden = false;
        statusBox.classList.remove('is-error');
        statusBox.textContent = 'Simulating transmission...';
      }

      window.setTimeout(() => {
        const referenceId = createReferenceId();

        if (statusBox) {
          statusBox.hidden = false;
          statusBox.classList.remove('is-error');
          statusBox.innerHTML = `
            <strong>${referenceId}</strong><br />
            This brief was received for simulation purposes only. CraftLayer will review the brief within 1 business day.
          `;
        }

        submitButton.disabled = false;
        submitButton.classList.remove('is-loading');
        submitButton.textContent = 'Transmit Brief';

        // Front-end simulation only: no real network request or backend submission is performed.
      }, 700);
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('is-open', !isExpanded);
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }

  if (logo && window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
    logo.classList.add('is-visible');
  } else if (logo) {
    logo.classList.add('is-visible');
  }

  const serviceDetailFiles = {
    'brand-identity': 'service-brand-identity.html',
    'web-development': 'service-web-development.html',
    'ui-ux': 'service-ui-ux.html',
    'ai-agents': 'service-ai-agents.html',
    'video-editing': 'service-video-editing.html',
    'social-media-marketing': 'service-social-media-marketing.html'
  };

  const categoryLabels = {
    'design-ui': 'Design & UI',
    'code-web': 'Code & Web',
    'media-growth': 'Media & Growth'
  };

  const serviceTagMap = {
    'brand-identity': ['Brand strategy', 'Logo systems', 'Launch kit'],
    'web-development': ['Responsive builds', 'UX flows', 'Performance'],
    'ui-ux': ['Wireframes', 'Design systems', 'Prototype'],
    'ai-agents': ['Automation', 'Ops logic', 'Bot flows'],
    'video-editing': ['Reels', 'Color grade', 'Motion'],
    'social-media-marketing': ['Campaigns', 'Content', 'Growth']
  };

  const renderServiceCards = (container, services) => {
    if (!container) return;

    container.innerHTML = '';

    services.forEach((service) => {
      const card = document.createElement('article');
      card.className = `service-card service-card--${service.id}`;
      card.dataset.category = service.category;

      if (service.id === 'social-media-marketing') {
        card.classList.add('service-card--marketing');
      }

      const tags = serviceTagMap[service.id] || ['Strategy', 'Systems', 'Delivery'];
      const categoryName = categoryLabels[service.category] || 'Strategy';

      card.innerHTML = `
        <div class="service-card-top">
          <span class="service-card-label">${categoryName}</span>
          <span class="service-card-ornament" aria-hidden="true"></span>
        </div>
        <h3>${service.name}</h3>
        <ul class="service-tags">
          ${tags.map((tag) => `<li>${tag}</li>`).join('')}
        </ul>
        <a class="service-link" href="${serviceDetailFiles[service.id] || '#'}">View Details</a>
      `;

      container.appendChild(card);
    });
  };

  const services = window.craftLayerData?.services || [];

  const marquee = document.getElementById('services-marquee-track');

  if (marquee && services.length) {
    const createMarqueeGroup = () => {
      const group = document.createElement('div');
      group.className = 'marquee-group';
      group.setAttribute('aria-hidden', 'true');

      services.forEach((service) => {
        const tile = document.createElement('a');
        tile.className = 'marquee-tile';
        tile.href = serviceDetailFiles[service.id];
        tile.innerHTML = `
          <img src="${service.image}" alt="${service.imageAlt}" width="720" height="720" decoding="async" />
          <span class="marquee-tile-label">${service.marqueeLabel || service.name}</span>
        `;
        group.appendChild(tile);
      });

      return group;
    };

    marquee.appendChild(createMarqueeGroup());
    marquee.appendChild(createMarqueeGroup());

    let depthFrame = null;

    const updateMarqueeDepth = () => {
      depthFrame = null;
      const marqueeBounds = marquee.closest('.services-marquee').getBoundingClientRect();
      const focusPoint = marqueeBounds.left + marqueeBounds.width / 2;
      const tiles = marquee.querySelectorAll('.marquee-tile');
      let closestTile = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      tiles.forEach((tile) => {
        const tileBounds = tile.getBoundingClientRect();
        const distance = Math.abs(tileBounds.left + tileBounds.width / 2 - focusPoint);
        if (distance < closestDistance) {
          closestTile = tile;
          closestDistance = distance;
        }
      });

      tiles.forEach((tile) => {
        const tileBounds = tile.getBoundingClientRect();
        const distance = Math.abs(tileBounds.left + tileBounds.width / 2 - focusPoint);
        const focus = Math.max(0, 1 - distance / (marqueeBounds.width * 0.65));
        const isActive = tile === closestTile;
        tile.classList.toggle('is-active', isActive);
        tile.style.setProperty('--tile-scale', (isActive ? 1.1 : 0.94 + focus * 0.04).toFixed(3));
        tile.style.setProperty('--tile-opacity', (isActive ? 1 : 0.52 + focus * 0.24).toFixed(3));
        tile.style.zIndex = String(isActive ? 3 : Math.round(focus * 2));
      });
    };

    const requestMarqueeDepth = () => {
      if (depthFrame === null) depthFrame = window.requestAnimationFrame(updateMarqueeDepth);
    };

    window.addEventListener('resize', requestMarqueeDepth);

    const trackLoop = () => {
      requestMarqueeDepth();
      window.requestAnimationFrame(trackLoop);
    };

    window.requestAnimationFrame(trackLoop);
  }

  if (document.getElementById('home-services-grid')) {
    renderServiceCards(document.getElementById('home-services-grid'), services);
  }

  if (document.getElementById('catalog-services-grid')) {
    renderServiceCards(document.getElementById('catalog-services-grid'), services);

    const filterButtons = document.querySelectorAll('.filter-tab');
    const catalogCards = document.querySelectorAll('#catalog-services-grid .service-card');

    const applyFilter = (filterValue) => {
      let visibleCount = 0;

     catalogCards.forEach((card) => {
  const matches = filterValue === 'all' || card.dataset.category === filterValue;

  if (matches) {
    card.hidden = false;
    card.style.removeProperty('display');
    visibleCount += 1;
  } else {
    card.hidden = true;
    card.style.setProperty('display', 'none', 'important');
  }
});

      filterButtons.forEach((button) => {
        const active = button.dataset.filter === filterValue;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      return visibleCount;
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        applyFilter(button.dataset.filter);
      });
    });

    applyFilter('all');
  }
});

/* ============================================
   GSAP Configuration & Initialization
   ============================================ */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    });
});

/* ============================================
   SCROLL PROGRESS INDICATOR
   ============================================ */

const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    if (scrollProgress) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

/* ============================================
   NAVBAR SCROLL ENHANCEMENT
   ============================================ */

const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
}, { passive: true });

/* ============================================
   ACTIVE NAVIGATION LINK TRACKING
   ============================================ */

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 180) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
    });
}, { passive: true });

/* ============================================
   SCROLL INDICATOR IN HERO SECTION
   ============================================ */

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    gsap.to(scrollIndicator, {
        opacity: 1,
        delay: 1,
        duration: 0.6
    });

    scrollIndicator.addEventListener('click', () => {
        gsap.to(window, {
            duration: 0.8,
            scrollTo: {
                y: window.innerHeight,
                offsetY: 0
            },
            ease: 'power2.inOut'
        });
    });
}

/* ============================================
   GSAP SCROLL REVEAL ANIMATIONS
   ============================================ */

// Hero title special animation
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    gsap.from(heroTitle, {
        scrollTrigger: {
            trigger: heroTitle,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 1
    });
}

// Project card hover effects with GSAP
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.4,
            ease: 'power2.out',
            y: -8
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.4,
            ease: 'power2.out',
            y: 0
        });
    });
});

// Service cards scroll reveal
document.querySelectorAll('.service-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power2.out'
    });

    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.4,
            ease: 'power2.out',
            y: -8,
            boxShadow: '0 40px 100px rgba(63, 32, 24, 0.18)'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.4,
            ease: 'power2.out',
            y: 0,
            boxShadow: '0 8px 24px rgba(63, 32, 24, 0.08)'
        });
    });
});

// Experience items scroll reveal
document.querySelectorAll('.exp-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -40,
        duration: 0.7,
        delay: index * 0.12,
        ease: 'power2.out'
    });

    // Hover animation
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            duration: 0.4,
            ease: 'power2.out',
            y: -6,
            boxShadow: '0 22px 70px rgba(63, 32, 24, 0.12)'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            duration: 0.4,
            ease: 'power2.out',
            y: 0,
            boxShadow: '0 8px 24px rgba(63, 32, 24, 0.08)'
        });
    });
});

// Featured image parallax effect
document.querySelectorAll('[data-parallax="true"]').forEach(image => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            markers: false
        },
        y: 80,
        ease: 'none'
    });
});

// Metric cards hover and scroll reveal
document.querySelectorAll('.metric-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });

    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            ease: 'power2.out',
            y: -4,
            boxShadow: '0 22px 70px rgba(63, 32, 24, 0.12)'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            ease: 'power2.out',
            y: 0,
            boxShadow: '0 8px 24px rgba(63, 32, 24, 0.08)'
        });
    });
});

// Highlights scroll reveal
document.querySelectorAll('.highlight').forEach((highlight, index) => {
    gsap.from(highlight, {
        scrollTrigger: {
            trigger: highlight,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });

    highlight.addEventListener('mouseenter', () => {
        gsap.to(highlight, {
            duration: 0.3,
            ease: 'power2.out',
            y: -6,
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.15)'
        });
    });

    highlight.addEventListener('mouseleave', () => {
        gsap.to(highlight, {
            duration: 0.3,
            ease: 'power2.out',
            y: 0,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        });
    });
});

// Stats scroll reveal
document.querySelectorAll('.stat').forEach((stat, index) => {
    gsap.from(stat, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power2.out'
    });

    stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
            duration: 0.3,
            ease: 'power2.out',
            y: -4,
            background: 'rgba(255, 255, 255, 0.15)'
        });
    });

    stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
            duration: 0.3,
            ease: 'power2.out',
            y: 0,
            background: 'rgba(255, 255, 255, 0.1)'
        });
    });
});

/* ============================================
   CONTACT FORM ENHANCEMENTS
   ============================================ */

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

function updateFormStatus(message, type = '') {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.classList.remove('is-success', 'is-error');

    if (type) {
        formStatus.classList.add(type);
    }

    // Animate status message
    gsap.from(formStatus, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: 'power2.out'
    });
}

// Form input focus animations
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

if (contactForm) {
    const serviceId = contactForm.dataset.serviceId;
    const templateId = contactForm.dataset.templateId;
    const publicKey = contactForm.dataset.publicKey;
    const submitButton = contactForm.querySelector('.submit-btn');
    const hasEmailJs = typeof window.emailjs !== 'undefined';

    if (hasEmailJs && publicKey) {
        emailjs.init({ publicKey });
    } else {
        updateFormStatus(
            hasEmailJs
                ? 'Contact form setup is incomplete. Please add your EmailJS public key.'
                : 'EmailJS failed to load. Open the site with internet access or run it from a local server instead of a blocked/offline page.',
            'is-error'
        );
    }

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (!hasEmailJs) {
            updateFormStatus('EmailJS is not loaded in the browser, so the form cannot send yet.', 'is-error');
            return;
        }

        if (!serviceId || !templateId || !publicKey) {
            updateFormStatus('Email sending is not configured yet. Update the EmailJS IDs in the contact form first.', 'is-error');
            return;
        }

        const formData = {
            from_name: contactForm.elements.from_name.value.trim(),
            from_email: contactForm.elements.from_email.value.trim(),
            message: contactForm.elements.message.value.trim(),
            to_email: 'swetha2912a@gmail.com'
        };

        submitButton.disabled = true;

        // Button loading animation
        gsap.to(submitButton, {
            duration: 0.3,
            opacity: 0.7,
            ease: 'power2.out',
            onComplete: () => {
                submitButton.textContent = 'Sending...';
                gsap.to(submitButton, {
                    duration: 0.3,
                    opacity: 1,
                    ease: 'power2.out'
                });
            }
        });

        updateFormStatus('Sending your message...', '');

        try {
            await emailjs.send(serviceId, templateId, formData);
            updateFormStatus('Thanks! Your message was sent successfully.', 'is-success');
            contactForm.reset();

            // Success button animation
            gsap.to(submitButton, {
                duration: 0.3,
                backgroundColor: '#1c7a46',
                ease: 'power2.out'
            });

            setTimeout(() => {
                gsap.to(submitButton, {
                    duration: 0.3,
                    backgroundColor: '',
                    ease: 'power2.out'
                });
            }, 2000);
        } catch (error) {
            console.error('Failed to send email:', error);
            const errorText = error?.text || error?.message || 'Unknown EmailJS error';
            updateFormStatus(`Message failed to send: ${errorText}`, 'is-error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });

    // Custom validation message handlers for all fields
    const formFields = [
        {
            input: contactForm.querySelector('#name'),
            error: document.querySelector('#name-error'),
            message: 'Please enter your name.'
        },
        {
            input: contactForm.querySelector('#email'),
            error: document.querySelector('#email-error'),
            message: 'Please enter a valid email.'
        },
        {
            input: contactForm.querySelector('#message'),
            error: document.querySelector('#message-error'),
            message: 'Please fill out this field.'
        }
    ];

    formFields.forEach(field => {
        if (field.input && field.error) {
            field.input.addEventListener('invalid', (e) => {
                e.preventDefault();
                field.error.classList.add('show');
            });

            field.input.addEventListener('input', () => {
                if (field.input.value.trim().length > 0) {
                    field.error.classList.remove('show');
                }
            });

            field.input.addEventListener('blur', () => {
                if (field.input.value.trim().length === 0) {
                    field.error.classList.add('show');
                } else {
                    field.error.classList.remove('show');
                }
            });
        }
    });
}

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ============================================
   DISABLE ANIMATIONS ON REDUCED MOTION
   ============================================ */

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0);
}

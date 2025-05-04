document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLLING FOR NAV LINKS ---
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"], .hero-buttons a[href^="#"], .menu-cta a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('.site-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 10; // Extra offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                 // Close mobile nav if open
                 if (document.body.classList.contains('nav-open')) {
                    document.body.classList.remove('nav-open');
                }
            }
        });
    });

    // --- MOBILE NAVIGATION TOGGLE ---
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
        });
    }

    // --- ANIMATE ON SCROLL USING INTERSECTION OBSERVER ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
            // Optional: Remove class if you want animation to repeat when scrolling up
            // else {
            //     entry.target.classList.remove('is-visible');
            // }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    scrollElements.forEach(el => {
        elementObserver.observe(el);
    });


    // --- WHATSAPP ORDER BUTTON ---
    const orderBtn = document.getElementById('orderBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = '5524998569778'; // ** CONFIRM THIS IS CORRECT **
            const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os bolos e fazer uma encomenda.');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- SHARE BUTTON (Using Web Share API with fallback) ---
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            const shareData = {
                title: "Ivanete's Cakes - Confeitaria Artesanal",
                text: "Descubra os bolos artesanais incríveis da Ivanete's Cakes! Perfeitos para qualquer celebração.",
                url: window.location.href // Share the current page URL
            };

            try {
                // Use Web Share API if available
                if (navigator.share) {
                    await navigator.share(shareData);
                    console.log('Conteúdo compartilhado com sucesso!');
                } else {
                    // Fallback for browsers/devices without Web Share API (e.g., Desktop WhatsApp)
                    console.log('Web Share API não suportada, usando fallback para WhatsApp.');
                    const fallbackText = encodeURIComponent(`${shareData.text} ${shareData.url}`);
                    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
                    const whatsappFallbackUrl = isMobile
                        ? `whatsapp://send?text=${fallbackText}`
                        : `https://web.whatsapp.com/send?text=${fallbackText}`;
                     window.open(whatsappFallbackUrl, '_blank');
                }
            } catch (err) {
                console.error('Erro ao compartilhar:', err);
                 // Optional: Provide feedback to the user if sharing fails
                // alert(`Não foi possível compartilhar: ${err}`);
            }
        });
    }


    // --- UPDATE CURRENT YEAR IN FOOTER ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- (OPTIONAL) MENU MODAL FUNCTIONALITY (If you decide to use it) ---
    /*
    const menuBtn = document.getElementById('menuBtn'); // Or trigger from nav
    const menuModal = document.getElementById('menuModal');
    const closeBtn = document.querySelector('#menuModal .close'); // Adjust selector if needed

    if (menuBtn && menuModal && closeBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            menuModal.style.display = 'block';
            body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        closeBtn.addEventListener('click', () => {
            menuModal.style.display = 'none';
            body.style.overflow = 'auto';
        });

        window.addEventListener('click', (event) => {
            if (event.target == menuModal) {
                menuModal.style.display = 'none';
                body.style.overflow = 'auto';
            }
        });
    }
    */

}); // End DOMContentLoaded


        /* --- START JS FILE --- */

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu()
         {
            mobileMenu.classList.toggle('translate-x-full');
        }

        if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

        // Smooth Scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        /* --- END JS FILE --- */

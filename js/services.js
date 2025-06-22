// Services Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-detail-card');
    const categoryTitles = document.querySelectorAll('.category-title');

    // Filter services by category
    function filterServices(category) {
        serviceCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                card.classList.remove('hidden');
                // Add fade-in animation
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, 100);
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
                card.classList.remove('fade-in');
            }
        });

        // Show/hide category titles
        if (category === 'all') {
            categoryTitles.forEach(title => {
                title.style.display = 'block';
            });
        } else {
            categoryTitles.forEach(title => {
                const titleId = title.closest('.category-section').id;
                if (titleId === category) {
                    title.style.display = 'block';
                } else {
                    title.style.display = 'none';
                }
            });
        }
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and filter
            const category = this.getAttribute('data-category');
            filterServices(category);
            
            // Scroll to services section
            const servicesSection = document.querySelector('.services-grid-section');
            if (servicesSection) {
                servicesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scrolling for category anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const filtersHeight = document.querySelector('.services-categories').offsetHeight;
                const totalOffset = headerHeight + filtersHeight + 20;
                
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - totalOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search functionality (can be added later)
    function createSearchBox() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <input type="text" id="serviceSearch" placeholder="Buscar procedimento...">
                <i class="fas fa-search"></i>
            </div>
        `;
        
        const filtersContainer = document.querySelector('.category-filters');
        filtersContainer.parentNode.insertBefore(searchContainer, filtersContainer.nextSibling);
        
        // Add search functionality
        const searchInput = document.getElementById('serviceSearch');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            serviceCards.forEach(card => {
                const serviceName = card.querySelector('h3').textContent.toLowerCase();
                const serviceDescription = card.querySelector('p').textContent.toLowerCase();
                
                if (serviceName.includes(searchTerm) || serviceDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            });
        });
    }

    // Intersection Observer for card animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards for animation
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Service card hover effects
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Price comparison feature
    function createPriceComparison() {
        const prices = [];
        serviceCards.forEach(card => {
            const priceElement = card.querySelector('.service-price');
            if (priceElement) {
                const priceText = priceElement.textContent;
                const priceMatch = priceText.match(/R\$\s*(\d+)/);
                if (priceMatch) {
                    prices.push(parseInt(priceMatch[1]));
                }
            }
        });
        
        if (prices.length > 0) {
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            
            // Add price badges
            serviceCards.forEach(card => {
                const priceElement = card.querySelector('.service-price');
                if (priceElement) {
                    const priceText = priceElement.textContent;
                    const priceMatch = priceText.match(/R\$\s*(\d+)/);
                    if (priceMatch) {
                        const price = parseInt(priceMatch[1]);
                        if (price === minPrice) {
                            const badge = document.createElement('div');
                            badge.className = 'service-badge price-badge';
                            badge.textContent = 'Melhor Preço';
                            badge.style.background = '#28a745';
                            card.querySelector('.service-image').appendChild(badge);
                        }
                    }
                }
            });
        }
    }

    // Call price comparison
    createPriceComparison();

    // Load more services functionality (for future expansion)
    function createLoadMoreButton() {
        if (serviceCards.length > 6) {
            // Hide services after the 6th one
            serviceCards.forEach((card, index) => {
                if (index >= 6) {
                    card.style.display = 'none';
                    card.classList.add('load-more-hidden');
                }
            });

            // Create load more button
            const loadMoreContainer = document.createElement('div');
            loadMoreContainer.className = 'load-more-container';
            loadMoreContainer.innerHTML = `
                <button class="btn btn-outline load-more-btn">
                    <i class="fas fa-plus"></i>
                    Ver Mais Procedimentos
                </button>
            `;

            const servicesSection = document.querySelector('.services-grid-section .container');
            servicesSection.appendChild(loadMoreContainer);

            // Add click event to load more button
            const loadMoreBtn = document.querySelector('.load-more-btn');
            loadMoreBtn.addEventListener('click', function() {
                const hiddenCards = document.querySelectorAll('.load-more-hidden');
                hiddenCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.classList.remove('load-more-hidden');
                        card.classList.add('fade-in');
                    }, index * 100);
                });
                
                this.parentElement.style.display = 'none';
            });
        }
    }

    // URL hash handling for direct category access
    function handleUrlHash() {
        const hash = window.location.hash.substring(1);
        if (hash && ['facial', 'corporal', 'emagrecimento', 'rejuvenescimento'].includes(hash)) {
            // Update filter
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === hash) {
                    btn.classList.add('active');
                }
            });
            
            // Filter services
            filterServices(hash);
            
            // Scroll to category
            setTimeout(() => {
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }

    // Handle hash on page load
    handleUrlHash();

    // Handle hash changes
    window.addEventListener('hashchange', handleUrlHash);

    // WhatsApp message customization
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add loading state
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecionando...';
            
            setTimeout(() => {
                this.innerHTML = originalContent;
            }, 2000);
        });
    });

    // Performance: Lazy load service images
    const serviceImages = document.querySelectorAll('.service-image img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    serviceImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Analytics tracking (can be integrated with Google Analytics)
    function trackServiceInteraction(serviceName, action) {
        // Example for Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': 'Services',
                'event_label': serviceName
            });
        }
        
        // Console log for debugging
        console.log(`Service interaction: ${action} - ${serviceName}`);
    }

    // Track service card clicks
    serviceCards.forEach(card => {
        const serviceName = card.querySelector('h3').textContent;
        
        card.addEventListener('click', function() {
            trackServiceInteraction(serviceName, 'card_click');
        });
        
        const whatsappBtn = card.querySelector('.btn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                trackServiceInteraction(serviceName, 'whatsapp_click');
            });
        }
    });

    // Track filter usage
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            trackServiceInteraction(category, 'filter_click');
        });
    });

    console.log('Services page loaded successfully!');
});

// Export functions for external use
window.ServicesPage = {
    filterServices: function(category) {
        // Allow external filtering
        const event = new CustomEvent('filterServices', { detail: { category } });
        document.dispatchEvent(event);
    }
};

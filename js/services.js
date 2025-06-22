// Services Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados dos procedimentos
    loadProcedimentos();
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the category
            const category = this.getAttribute('data-category');
            
            // Filter services
            filterServices(category);
        });
    });

    // Função para carregar procedimentos do JSON
    async function loadProcedimentos() {
        try {
            const response = await fetch('servicos.json');
            const data = await response.json();
            
            const container = document.getElementById('procedimentos-container');
            container.innerHTML = '';
            
            // Criar seção de procedimentos
            const procedimentosSection = document.createElement('div');
            procedimentosSection.innerHTML = `
                <h2 class="category-title">Procedimentos Estéticos</h2>
                <div class="services-grid" id="procedimentos-grid">
                </div>
            `;
            
            const procedimentosGrid = procedimentosSection.querySelector('#procedimentos-grid');
            
            // Adicionar cada procedimento
            data.procedimentos.forEach((procedimento, index) => {
                const card = createServiceCard(procedimento, 'procedimentos', index);
                procedimentosGrid.appendChild(card);
            });
            
            container.appendChild(procedimentosSection);
            
        } catch (error) {
            console.error('Erro ao carregar procedimentos:', error);
        }
    }
    
    // Função para criar um card de serviço
    function createServiceCard(service, type, index) {
        const card = document.createElement('div');
        card.className = 'service-detail-card';
        
        // Definir categoria baseada no tipo de procedimento
        let category = 'procedimentos';
        if (service.nome.includes('Limpeza') || service.nome.includes('Ulthera')) {
            category = 'facial';
        } else if (service.nome.includes('Criolipólise') || service.nome.includes('Lipocavitação') || service.nome.includes('I-Lipo') || service.nome.includes('Drenagem')) {
            category = 'emagrecimento';
        } else if (service.nome.includes('Radiofrequência')) {
            category = 'rejuvenescimento';
        } else {
            category = 'corporal';
        }
        
        card.setAttribute('data-category', category);
        
        // Definir badges especiais
        let badge = '';
        if (index === 0) badge = '<div class="service-badge">Mais Procurado</div>';
        else if (index === 1) badge = '<div class="service-badge">Novo</div>';
        else if (service.nome === 'Ulthera') badge = '<div class="service-badge">Premium</div>';
        
        card.innerHTML = `
            <div class="service-image">
                <img src="${service.imagem}" alt="${service.nome}" loading="lazy">
                ${badge}
            </div>
            <div class="service-content">
                <h3>${service.nome}</h3>
                <div class="service-price">${service.preco}</div>
                <p>${service.descricao}</p>
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar ${service.nome}" class="btn btn-primary" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    Agendar Agora
                </a>
            </div>
        `;
        
        return card;
    }

    // Filter services by category
    function filterServices(category) {
        const serviceCards = document.querySelectorAll('.service-detail-card');
        const categoryTitles = document.querySelectorAll('.category-title');

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
                const section = title.closest('.category-section');
                const titleId = section ? section.id : null;
                if (titleId === category) {
                    title.style.display = 'block';
                } else {
                    title.style.display = 'none';
                }
            });
        }
    }

    // Search functionality
    const searchInput = document.getElementById('service-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const serviceCards = document.querySelectorAll('.service-detail-card');
            
            serviceCards.forEach(card => {
                const serviceName = card.querySelector('h3').textContent.toLowerCase();
                const serviceDescription = card.querySelector('p').textContent.toLowerCase();
                
                if (serviceName.includes(searchTerm) || serviceDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Smooth scroll to sections
    const categoryLinks = document.querySelectorAll('a[href^="#"]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service cards for animation
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-detail-card');
        serviceCards.forEach(card => {
            observer.observe(card);
        });
    }, 1000);
});

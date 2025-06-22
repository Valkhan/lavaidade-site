// Equipment Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados dos equipamentos
    loadEquipamentos();
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('equipmentModal');
    const modalClose = document.querySelector('.modal-close');
    
    // Variável global para armazenar dados dos equipamentos
    let equipmentData = {};
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the category
            const category = this.getAttribute('data-category');
            
            // Filter equipments
            filterEquipments(category);
        });
    });

    // Função para carregar equipamentos do JSON
    async function loadEquipamentos() {
        try {
            const response = await fetch('servicos.json');
            const data = await response.json();
            
            const container = document.getElementById('equipamentos-container');
            container.innerHTML = '';
            
            // Criar seção de equipamentos
            const equipamentosSection = document.createElement('div');
            equipamentosSection.innerHTML = `
                <h2 class="category-title">Equipamentos para Locação</h2>
                <div class="equipment-grid" id="equipamentos-grid">
                </div>
            `;
            
            const equipamentosGrid = equipamentosSection.querySelector('#equipamentos-grid');            // Carregar dados dos equipamentos para o modal
            equipmentData = {};
            data.locacoes.forEach((equipamento) => {
                const key = equipamento.nome.toLowerCase().replace(/\s+/g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[íî]/g, 'i').replace(/[óôõ]/g, 'o').replace(/[úû]/g, 'u').replace(/ç/g, 'c');
                equipmentData[key] = {
                    title: equipamento.nome,
                    price: equipamento.preco,
                    image: equipamento.imagem,
                    description: equipamento.descricao,
                    duration: equipamento.duracao,
                    whatsappText: `Olá! Gostaria de alugar ${equipamento.nome}`
                };
            });
            
            // Adicionar cada equipamento
            data.locacoes.forEach((equipamento, index) => {
                const card = createEquipmentCard(equipamento, index);
                equipamentosGrid.appendChild(card);
            });
            
            container.appendChild(equipamentosSection);
            
            // Reconfigurar event listeners após carregar os cards
            setupEventListeners();
            
        } catch (error) {
            console.error('Erro ao carregar equipamentos:', error);
        }
    }    // Função para criar um card de equipamento
    function createEquipmentCard(equipment, index) {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        
        // Definir categoria baseada no nome do equipamento
        let category = 'equipamentos';
        if (equipment.nome.includes('Laser') || equipment.nome.includes('Picoway') || equipment.nome.includes('Endolaser')) {
            category = 'laser';
        } else if (equipment.nome.includes('Ulthera')) {
            category = 'ultrassom';
        } else if (equipment.nome.includes('Criolipólise')) {
            category = 'corporal';
        } else if (equipment.nome.includes('Lavieen')) {
            category = 'estetica';
        } else {
            category = 'corporal';
        }
        
        card.setAttribute('data-category', category);
        
        // Definir badges especiais
        let badge = '';
        if (index === 0) badge = '<div class="equipment-badge">Mais Alugado</div>';
        else if (index === 1) badge = '<div class="equipment-badge">Novidade</div>';
        else if (equipment.nome.includes('Premium') || equipment.nome.includes('Ulthera') || equipment.nome.includes('Picoway')) {
            badge = '<div class="equipment-badge">Premium</div>';
        }        // Layout do card focado em título, preço e tempo de locação
        card.innerHTML = `
            <div class="equipment-image">
                <img src="${equipment.imagem}" alt="${equipment.nome}" loading="lazy">
                ${badge}
            </div>
            <div class="equipment-content">
                <h3 class="equipment-title">${equipment.nome}</h3>
                <div class="equipment-price-section">
                    <div class="equipment-price">${equipment.preco}</div>
                    <div class="equipment-price-period">por dia</div>
                </div>
                <div class="equipment-duration">
                    <i class="fas fa-clock"></i>
                    <span>Locação de ${equipment.duracao}</span>
                </div>
                <button class="btn btn-primary equipment-details-btn" data-equipment="${equipment.nome.toLowerCase().replace(/\s+/g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[íî]/g, 'i').replace(/[óôõ]/g, 'o').replace(/[úû]/g, 'u').replace(/ç/g, 'c')}">
                    <i class="fas fa-info-circle"></i>
                    Ver Detalhes
                </button>
            </div>
        `;
        
        return card;
    }

    // Função para configurar event listeners após carregar os cards
    function setupEventListeners() {
        const detailButtons = document.querySelectorAll('.equipment-details-btn');
        
        // Equipment details modal
        detailButtons.forEach(button => {
            button.addEventListener('click', function() {
                const equipmentId = this.getAttribute('data-equipment');
                openEquipmentModal(equipmentId);
            });
        });

        // Modal close functionality
        if (modal && modalClose) {
            modalClose.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    // Filter equipments by category
    function filterEquipments(category) {
        const equipmentCards = document.querySelectorAll('.equipment-card');
        const categoryTitles = document.querySelectorAll('.category-title');

        equipmentCards.forEach(card => {
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

    // Modal functionality
    function openEquipmentModal(equipmentId) {
        const equipment = equipmentData[equipmentId];
        if (!equipment || !modal) return;        // Populate modal content
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalDuration = document.getElementById('modalDuration');
        const modalImage = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');
        const modalWhatsapp = document.getElementById('modalWhatsappBtn');

        if (modalTitle) modalTitle.textContent = equipment.title;
        if (modalPrice) modalPrice.textContent = `${equipment.price} por dia`;
        if (modalDuration) {
            modalDuration.innerHTML = `
                <i class="fas fa-clock"></i>
                <span>Período de locação: ${equipment.duration}</span>
            `;
        }
        if (modalImage) {
            modalImage.src = equipment.image;
            modalImage.alt = equipment.title;
        }
        if (modalDescription) modalDescription.textContent = equipment.description;
        if (modalWhatsapp) {
            modalWhatsapp.href = `tel:+5511946394121`;
        }

        modal.style.display = 'block';
    }

    // Search functionality
    const searchInput = document.getElementById('equipment-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const equipmentCards = document.querySelectorAll('.equipment-card');
            
            equipmentCards.forEach(card => {
                const equipmentName = card.querySelector('h3').textContent.toLowerCase();
                const equipmentDescription = card.querySelector('p').textContent.toLowerCase();
                
                if (equipmentName.includes(searchTerm) || equipmentDescription.includes(searchTerm)) {
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

    // Observe equipment cards for animation
    setTimeout(() => {
        const equipmentCards = document.querySelectorAll('.equipment-card');
        equipmentCards.forEach(card => {
            observer.observe(card);
        });
    }, 1000);
});

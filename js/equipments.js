// Equipment Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const equipmentCards = document.querySelectorAll('.equipment-card');
    const modal = document.getElementById('equipmentModal');
    const modalClose = document.querySelector('.modal-close');
    const detailButtons = document.querySelectorAll('.equipment-details-btn');

    // Equipment data for modal
    const equipmentData = {
        'criolipólise-premium': {
            title: 'Criolipólise Premium',
            price: 'R$ 800/mês',
            image: 'assets/equipment-criolipólise-1.jpg',
            specs: [
                { icon: 'fas fa-thermometer-half', text: 'Temperatura: -10°C a +45°C' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 35-60 minutos' },
                { icon: 'fas fa-tools', text: '4 Aplicadores inclusos' },
                { icon: 'fas fa-certificate', text: 'Certificação ANVISA' }
            ],
            description: 'Equipamento de criolipólise de última geração com tecnologia de resfriamento controlado. Ideal para redução de gordura localizada de forma não invasiva.',
            features: [
                'Sistema de resfriamento duplo',
                'Aplicadores de diferentes tamanhos',
                'Interface touchscreen',
                'Protocolo automático de segurança',
                'Resultados visíveis em 60 dias',
                'Sem tempo de recuperação'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Criolipólise Premium'
        },
        'criolipólise-compacta': {
            title: 'Criolipólise Compacta',
            price: 'R$ 500/mês',
            image: 'assets/equipment-criolipólise-2.jpg',
            specs: [
                { icon: 'fas fa-thermometer-half', text: 'Temperatura: -8°C a +40°C' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 35 minutos' },
                { icon: 'fas fa-tools', text: '2 Aplicadores inclusos' },
                { icon: 'fas fa-home', text: 'Ideal para consultórios' }
            ],
            description: 'Versão compacta da criolipólise, perfeita para consultórios menores. Mantém a eficácia com preço mais acessível.',
            features: [
                'Design compacto',
                'Fácil operação',
                'Baixo consumo de energia',
                'Manutenção simplificada',
                'Resultados comprovados',
                'Excelente custo-benefício'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Criolipólise Compacta'
        },
        'radiofrequencia-multipolar': {
            title: 'Radiofrequência Multipolar',
            price: 'R$ 600/mês',
            image: 'assets/equipment-radiofrequencia-1.jpg',
            specs: [
                { icon: 'fas fa-bolt', text: 'Frequência: 1MHz - 6MHz' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 40-60 minutos' },
                { icon: 'fas fa-tools', text: '5 Aplicadores diferentes' },
                { icon: 'fas fa-fire', text: 'Aquecimento controlado' }
            ],
            description: 'Radiofrequência multipolar para tratamentos faciais e corporais. Estimula produção de colágeno e combate flacidez.',
            features: [
                'Tecnologia multipolar',
                'Controle de temperatura',
                'Aplicadores faciais e corporais',
                'Sistema de resfriamento',
                'Resultados progressivos',
                'Sem dor ou desconforto'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Radiofrequência Multipolar'
        },
        'radiofrequencia-fracionada': {
            title: 'Radiofrequência Fracionada',
            price: 'R$ 750/mês',
            image: 'assets/equipment-radiofrequencia-2.jpg',
            specs: [
                { icon: 'fas fa-bolt', text: 'Tecnologia Frax' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 30-45 minutos' },
                { icon: 'fas fa-star', text: 'Rejuvenescimento intenso' },
                { icon: 'fas fa-shield-alt', text: 'Segurança máxima' }
            ],
            description: 'Tecnologia fracionada para rejuvenescimento facial intenso. Ideal para tratamento de cicatrizes e rugas profundas.',
            features: [
                'Radiofrequência fracionada',
                'Renovação celular acelerada',
                'Estímulo de colágeno',
                'Redução de cicatrizes',
                'Lifting natural',
                'Protocolo personalizado'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Radiofrequência Fracionada'
        },
        'laser-co2': {
            title: 'Laser CO2 Fracionado',
            price: 'R$ 1200/mês',
            image: 'assets/equipment-laser-1.jpg',
            specs: [
                { icon: 'fas fa-laser', text: 'Comprimento: 10.600nm' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 30-60 minutos' },
                { icon: 'fas fa-award', text: 'Tecnologia Premium' },
                { icon: 'fas fa-shield-alt', text: 'Sistema de segurança' }
            ],
            description: 'Laser CO2 fracionado para renovação celular profunda. Tratamento premium para rejuvenescimento e cicatrizes.',
            features: [
                'Laser CO2 fracionado',
                'Renovação celular profunda',
                'Redução de rugas severas',
                'Tratamento de cicatrizes',
                'Melria da textura da pele',
                'Resultados duradouros'
            ],
            whatsappText: 'Olá! Gostaria de alugar o Laser CO2 Fracionado'
        },
        'ultrassom-microfocado': {
            title: 'Ultrassom Microfocado',
            price: 'R$ 900/mês',
            image: 'assets/equipment-ultrassom-1.jpg',
            specs: [
                { icon: 'fas fa-sound', text: 'Frequência: 4MHz - 7MHz' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 60-90 minutos' },
                { icon: 'fas fa-magic', text: 'Lifting não cirúrgico' },
                { icon: 'fas fa-layer-group', text: 'Ação em camadas profundas' }
            ],
            description: 'Ultrassom microfocado para lifting não cirúrgico. Atua nas camadas profundas da pele para rejuvenescimento.',
            features: [
                'Ultrassom microfocado',
                'Lifting não invasivo',
                'Ação nas camadas profundas',
                'Estimulação do colágeno',
                'Resultados progressivos',
                'Sem tempo de recuperação'
            ],
            whatsappText: 'Olá! Gostaria de alugar o Ultrassom Microfocado'
        },
        'ultracavitacao': {
            title: 'Ultracavitação',
            price: 'R$ 400/mês',
            image: 'assets/equipment-ultrassom-2.jpg',
            specs: [
                { icon: 'fas fa-sound', text: 'Frequência: 40kHz' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 40 minutos' },
                { icon: 'fas fa-weight', text: 'Redução de gordura' },
                { icon: 'fas fa-heart', text: 'Procedimento indolor' }
            ],
            description: 'Ultracavitação para quebra de gordura localizada. Tratamento não invasivo e indolor para redução de medidas.',
            features: [
                'Quebra células de gordura',
                'Procedimento indolor',
                'Redução de medidas',
                'Melhora do contorno corporal',
                'Resultados progressivos',
                'Sem efeitos colaterais'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Ultracavitação'
        },
        'endermoterapia': {
            title: 'Endermoterapia',
            price: 'R$ 550/mês',
            image: 'assets/equipment-endermoterapia.jpg',
            specs: [
                { icon: 'fas fa-hand-paper', text: 'Massagem mecânica' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 45 minutos' },
                { icon: 'fas fa-spa', text: 'Redução de celulite' },
                { icon: 'fas fa-arrows-alt', text: 'Modelagem corporal' }
            ],
            description: 'Sistema de massagem mecânica para redução de celulite e modelagem corporal. Combina sucção e massagem.',
            features: [
                'Massagem mecânica',
                'Redução de celulite',
                'Modelagem corporal',
                'Melhora da circulação',
                'Drenagem linfática',
                'Tonificação da pele'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Endermoterapia'
        },
        'pressoterapia': {
            title: 'Pressoterapia',
            price: 'R$ 300/mês',
            image: 'assets/equipment-pressoterapia.jpg',
            specs: [
                { icon: 'fas fa-compress-arrows-alt', text: 'Compressão pneumática' },
                { icon: 'fas fa-stopwatch', text: 'Sessões: 30 minutos' },
                { icon: 'fas fa-water', text: 'Drenagem linfática' },
                { icon: 'fas fa-leaf', text: 'Redução de edemas' }
            ],
            description: 'Sistema de compressão pneumática para drenagem linfática. Ideal para redução de edemas e relaxamento.',
            features: [
                'Compressão pneumática',
                'Drenagem linfática',
                'Redução de edemas',
                'Melhora da circulação',
                'Relaxamento profundo',
                'Alívio das pernas pesadas'
            ],
            whatsappText: 'Olá! Gostaria de alugar a Pressoterapia'
        }
    };

    // Filter equipment by category
    function filterEquipment(category) {
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
            filterEquipment(category);
            
            // Scroll to equipment section
            const equipmentSection = document.querySelector('.equipment-grid-section');
            if (equipmentSection) {
                equipmentSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal functionality
    function openModal(equipmentId) {
        const equipment = equipmentData[equipmentId];
        if (!equipment) return;

        // Populate modal content
        document.getElementById('modalTitle').textContent = equipment.title;
        document.getElementById('modalPrice').textContent = equipment.price;
        document.getElementById('modalImage').src = equipment.image;
        document.getElementById('modalImage').alt = equipment.title;
        document.getElementById('modalDescription').textContent = equipment.description;

        // Populate specs
        const specsContainer = document.getElementById('modalSpecs');
        specsContainer.innerHTML = '';
        equipment.specs.forEach(spec => {
            const specDiv = document.createElement('div');
            specDiv.className = 'spec-item';
            specDiv.innerHTML = `
                <i class="${spec.icon}"></i>
                <span>${spec.text}</span>
            `;
            specsContainer.appendChild(specDiv);
        });

        // Populate features
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = '<h4>Características:</h4><ul>';
        equipment.features.forEach(feature => {
            featuresContainer.innerHTML += `
                <li>
                    <i class="fas fa-check"></i>
                    ${feature}
                </li>
            `;
        });
        featuresContainer.innerHTML += '</ul>';

        // Set WhatsApp link
        const whatsappBtn = document.getElementById('modalWhatsappBtn');
        whatsappBtn.href = `https://wa.me/5511999999999?text=${encodeURIComponent(equipment.whatsappText)}`;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Add click event listeners to detail buttons
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const equipmentId = this.getAttribute('data-equipment');
            openModal(equipmentId);
        });
    });

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

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

    // Observe equipment cards for animation
    equipmentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Equipment card hover effects
    equipmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Price sorting functionality
    function createPriceSorter() {
        const sorterContainer = document.createElement('div');
        sorterContainer.className = 'price-sorter';
        sorterContainer.innerHTML = `
            <label for="priceSort">Ordenar por preço:</label>
            <select id="priceSort">
                <option value="">Selecione</option>
                <option value="asc">Menor para maior</option>
                <option value="desc">Maior para menor</option>
            </select>
        `;

        const filtersContainer = document.querySelector('.category-filters');
        filtersContainer.parentNode.appendChild(sorterContainer);

        const priceSelect = document.getElementById('priceSort');
        priceSelect.addEventListener('change', function() {
            const sortOrder = this.value;
            if (!sortOrder) return;

            const grid = document.querySelector('.equipment-grid');
            const cards = Array.from(equipmentCards);

            cards.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.equipment-price').textContent.match(/\d+/)[0]);
                const priceB = parseInt(b.querySelector('.equipment-price').textContent.match(/\d+/)[0]);

                return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
            });

            // Reorder cards in DOM
            cards.forEach(card => grid.appendChild(card));
        });
    }

    // Create price sorter
    createPriceSorter();

    // Comparison functionality
    let comparisonList = [];

    function createComparisonFeature() {
        const compareContainer = document.createElement('div');
        compareContainer.className = 'comparison-container';
        compareContainer.innerHTML = `
            <div class="comparison-header">
                <h3>Comparar Equipamentos</h3>
                <button class="clear-comparison">Limpar</button>
            </div>
            <div class="comparison-list"></div>
            <button class="compare-btn" disabled>Comparar</button>
        `;

        document.body.appendChild(compareContainer);

        // Add compare checkboxes to cards
        equipmentCards.forEach(card => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'compare-checkbox';
            checkbox.addEventListener('change', function() {
                const equipmentName = card.querySelector('h3').textContent;
                if (this.checked) {
                    if (comparisonList.length < 3) {
                        comparisonList.push({
                            name: equipmentName,
                            card: card
                        });
                    } else {
                        this.checked = false;
                        alert('Você pode comparar no máximo 3 equipamentos');
                        return;
                    }
                } else {
                    comparisonList = comparisonList.filter(item => item.name !== equipmentName);
                }
                updateComparisonDisplay();
            });

            const checkboxLabel = document.createElement('label');
            checkboxLabel.innerHTML = '<i class="fas fa-balance-scale"></i> Comparar';
            checkboxLabel.prepend(checkbox);
            checkboxLabel.className = 'compare-label';

            card.querySelector('.equipment-content').appendChild(checkboxLabel);
        });
    }

    function updateComparisonDisplay() {
        const comparisonListElement = document.querySelector('.comparison-list');
        const compareBtn = document.querySelector('.compare-btn');

        comparisonListElement.innerHTML = '';
        comparisonList.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = item.name;
            comparisonListElement.appendChild(listItem);
        });

        compareBtn.disabled = comparisonList.length < 2;
    }

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

    // Analytics tracking
    function trackEquipmentInteraction(equipmentName, action) {
        // Example for Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': 'Equipment',
                'event_label': equipmentName
            });
        }
        
        console.log(`Equipment interaction: ${action} - ${equipmentName}`);
    }

    // Track equipment interactions
    equipmentCards.forEach(card => {
        const equipmentName = card.querySelector('h3').textContent;
        
        card.addEventListener('click', function() {
            trackEquipmentInteraction(equipmentName, 'card_click');
        });
        
        const detailBtn = card.querySelector('.equipment-details-btn');
        if (detailBtn) {
            detailBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                trackEquipmentInteraction(equipmentName, 'details_click');
            });
        }
    });

    // Track filter usage
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            trackEquipmentInteraction(category, 'filter_click');
        });
    });

    // Track plan clicks
    document.querySelectorAll('.plan-card .btn').forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.closest('.plan-card').querySelector('h3').textContent;
            trackEquipmentInteraction(planName, 'plan_click');
        });
    });

    console.log('Equipment page loaded successfully!');
});

// Export functions for external use
window.EquipmentPage = {
    filterEquipment: function(category) {
        const event = new CustomEvent('filterEquipment', { detail: { category } });
        document.dispatchEvent(event);
    }
};

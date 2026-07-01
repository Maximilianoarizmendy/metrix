// METRIX - STREETWEAR WEBSITE LOGIC

// 1. PRODUCT DATABASE
// COLECCIÓN 1: BARRIO NORTE — ropa de concreto, grafiti y periferia
// COLECCIÓN 2: CANCHA LIBRE — jerseys sport reconvertidos al street urbano
const PRODUCTS = [
    // ─── BARRIO NORTE ───────────────────────────────────────────────
    {
        id: "prod-01",
        title: "Set Concreto — Hoodie + Jogger",
        price: 320000,
        category: "hoodies",
        collection: "BARRIO_NORTE",
        image: "assets/1ra/1adc2a17-aeae-4bdf-8278-4a081b20331d.jpg",
        story: "LOOK // 01",
        description: "Nacido bajo los puentes donde nadie mira. Este set hoodie + jogger en crudo arena habla del que madrug sin quejarse. El grafiti en la espalda es el lenguaje del barrio: no se traduce, se siente. Algodón pesado de 380g, costuras reforzadas, fit sobredimensionado para moverse libre.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: "prod-02",
        title: "MTRX Gris Cemento — Baggy Set",
        price: 295000,
        category: "pantalones",
        collection: "BARRIO_NORTE",
        image: "assets/1ra/49dbd273-08b4-4bf0-8ab2-00a1ad30211b.jpg",
        story: "LOOK // 02",
        description: "El color del asfalto mojado al amanecer. Este baggy en gris cemento lleva el sello METRIX bordado en el bolsillo trasero como una firma, no como un logo. El zip hoodie a juego cierra el look del que no necesita explicaciones. Para los que pertenecen a la calle sin que la calle los consuma.",
        hasMascotOverlay: false,
        sizes: ["28", "30", "32", "34", "36"]
    },
    {
        id: "prod-03",
        title: "GO ROGUE — Tee Oversized",
        price: 120000,
        category: "camisetas",
        collection: "BARRIO_NORTE",
        image: "assets/1ra/5633c607-1977-46ef-b27c-b970fe469b81.jpg",
        story: "LOOK // 03",
        description: "Break the flow. Unfollow rules. Esta camiseta oversize grita lo que muchos piensan pero no se atreven a decir. Impresión de alta densidad tipo desgastado sobre crudo arena, con pantalones balloon denim oscuro. Para el que va contracorriente sin esfuerzo.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-04",
        title: "Camisa Desgastada + Cargo Tactical",
        price: 280000,
        category: "accesorios",
        collection: "BARRIO_NORTE",
        image: "assets/1ra/5c7df988-21c0-4702-be34-60526e574327.jpg",
        story: "LOOK // 04",
        description: "La dualidad del barrio: mitad arena, mitad noche. Camisa manga corta con degradado acid-wash de arena a negro, bordes deshilachados sin terminar porque lo inacabado también tiene su belleza. Combinada con cargo pants en nylon táctico. El que lleva esto no busca atención — la atención lo busca a él.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-05",
        title: "Tracksuit Táctico Bicolor",
        price: 350000,
        category: "hoodies",
        collection: "BARRIO_NORTE",
        image: "assets/1ra/7c26f2e8-f323-46fd-96a4-b0e0d1c9bad3.jpg",
        story: "LOOK // 05",
        description: "En el barrio los colores no significan moda — significan pertenencia. Este tracksuit en nylon técnico negro y arena viene con parches bordados y el sello circular METRIX en el pecho. Dos versiones, un solo mensaje: somos del mismo lado. Corte holgado pensado para moverse, no para posar.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-06",
        title: "Hoodie Anonimato — Camo Cargo",
        price: 265000,
        category: "hoodies",
        collection: "BARRIO_NORTE",
        image: "assets/1ra/e44f6e3e-876e-4a74-9ebb-bcd970292a9f.jpg",
        story: "LOOK // 06",
        description: "Cuando quieres desaparecer sin desaparecer. El hoodie gris piedra cubre la capucha hasta los ojos, el cargo camo forest completa el silencio. Este look es para el que habla poco y mueve mucho. Hecho para resistir el barrio, para sobrevivir el ruido.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },

    // ─── CANCHA LIBRE ───────────────────────────────────────────────
    {
        id: "prod-07",
        title: "Jersey Dual — Barrio vs. Barrio",
        price: 180000,
        category: "camisetas",
        collection: "CANCHA_LIBRE",
        image: "assets/2da/10e8273b-4735-4c07-84a8-938269b3bbe2.jpg",
        story: "LOOK // 01",
        description: "En la cancha no hay neutrales. El jersey degradado negro-humo es para el visitante. El jersey blanco a rayas es para el local. Ambos llevan el mismo ADN: METRIX en la espalda, calle en los genes. Malla deportiva respirante reconvertida al día a día urbano.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-08",
        title: "Hoodie Tierra + Wide Leg Set",
        price: 310000,
        category: "hoodies",
        collection: "CANCHA_LIBRE",
        image: "assets/2da/2dc826f6-efe5-4afc-888e-d86049724ab7.jpg",
        story: "LOOK // 02",
        description: "La tierra no miente. El hoodie caqui oscuro lleva el logo script en el pecho como un apellido, no como un anuncio. El wide leg gris acompaña sin competir. Para los que construyen silencio desde la ropa hacia afuera. Tela pesada de algodón francés, cordón dorado, fit boxy.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: "prod-09",
        title: "Full Send — Cargo + Hoodie Gráfico",
        price: 330000,
        category: "hoodies",
        collection: "CANCHA_LIBRE",
        image: "assets/2da/62da7cfa-2d1e-4a14-a02f-b1dee49b3e6c.jpg",
        story: "LOOK // 03",
        description: "El movimiento es el mensaje. Estos dos salen corriendo porque tienen todo lo que necesitan puesto. Hoodie negro con estampado LOVE x MONEY en gran formato, y el azul con siluetas en blanco: gente real, calles reales. Cargo gris urbano de tiro alto. Cuando el look habla, tú no tienes que hacerlo.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-10",
        title: "Grafiti Hoodie Rosa + Denim Set",
        price: 290000,
        category: "hoodies",
        collection: "CANCHA_LIBRE",
        image: "assets/2da/bb2c7471-4399-4e0f-bbe3-c0484fe397af.jpg",
        story: "LOOK // 04",
        description: "El rosa no es suave cuando lo lleva el barrio. Hoodie oversize con grafiti tag escrito a mano en la espalda — igual que en los muros, pero en tela. El denim jacket azul al lado recuerda que el street no tiene género ni reglas de color. Tres panas, una estética.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-11",
        title: "Sports Club #14 — Jersey Colectivo",
        price: 165000,
        category: "camisetas",
        collection: "CANCHA_LIBRE",
        image: "assets/2da/d128fd27-ded4-4599-a1f9-78350590751d.jpg",
        story: "LOOK // 05",
        description: "Cada equipo tiene su número. Este jersey azul y blanco con el 14 en la espalda rinde homenaje a la cultura deportiva del barrio reconvertida al día a día. El corte es amplio, la tela técnica, el mensaje claro: la cancha no termina cuando se va el sol.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "prod-12",
        title: "METRIX #85 — Hockey Street Edition",
        price: 175000,
        category: "camisetas",
        collection: "CANCHA_LIBRE",
        image: "assets/2da/e6daf5f5-d80c-49e3-b2f1-cc5963b33abf.jpg",
        story: "LOOK // 06",
        description: "El número 85 no es estadística, es identidad. Jersey largo de inspiración hockey con el 85 en rojo sangre sobre blanco puro, y en negro oscuro para el que prefiere el lado B. Unisex, streetwear 100%. Para los que juegan su propio partido.",
        hasMascotOverlay: false,
        sizes: ["S", "M", "L", "XL"]
    }
];

// SVG del logo de la Mascota METRIX
const MASCOT_SVG = (color = "currentColor") => `
<svg viewBox="0 0 100 100" class="logo-mascot-graphic" style="color: ${color};">
  <polygon points="50,8 58,32 82,20 70,42 96,52 70,62 82,84 58,72 50,96 42,72 18,84 30,62 4,52 30,42 18,20 42,32" fill="currentColor" stroke="black" stroke-width="2" />
  <ellipse cx="50" cy="52" rx="14" ry="7" fill="white" stroke="black" stroke-width="2"/>
  <circle cx="50" cy="52" r="5" fill="black"/>
  <path d="M44,76 L44,88 M56,76 L56,88" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  <!-- Zapato Izquierdo -->
  <path d="M34,88 H48 L46,92 H36 Z" fill="black" stroke="currentColor" stroke-width="1.5"/>
  <!-- Zapato Derecho -->
  <path d="M52,88 H66 L64,92 H54 Z" fill="black" stroke="currentColor" stroke-width="1.5"/>
</svg>
`;

// 2. STATE MANAGEMENT
let cart = [];
let activeCategory = "all";
let activeCollection = "all";

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartToggle = document.getElementById("cart-toggle");
const cartClose = document.getElementById("cart-close");
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartFooter = document.getElementById("cart-footer");
const cartSubtotal = document.getElementById("cart-subtotal");
const checkoutBtn = document.getElementById("checkout-btn");

const productModal = document.getElementById("product-modal");
const modalClose = document.getElementById("modal-close");
const modalContentInner = document.getElementById("modal-content-inner");

const checkoutModal = document.getElementById("checkout-modal");
const checkoutClose = document.getElementById("checkout-close");
const checkoutForm = document.getElementById("checkout-form");
const checkoutTotal = document.getElementById("checkout-total-price");

// 3. RENDER PRODUCTS
function renderProducts() {
    productsGrid.innerHTML = "";
    
    const filtered = PRODUCTS.filter(p => {
        const matchesCat = activeCategory === "all" || p.category === activeCategory;
        const matchesCol = activeCollection === "all" || p.collection === activeCollection;
        return matchesCat && matchesCol;
    });

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<div class="no-products-msg">No hay productos en esta selección.</div>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = `product-card card-theme-${product.collection === "BARRIO_NORTE" ? 'neon' : 'raw'}`;
        card.setAttribute("data-id", product.id);
        
        // Determinar etiquetas de colección
        const colTagText = product.collection === "BARRIO_NORTE" ? "BARRIO" : "CANCHA";
        const colTagClass = product.collection === "BARRIO_NORTE" ? "product-tag-neon" : "product-tag-raw";
        const storyLabel = product.story || "";

        // Preparar overlay del logo de la mascota sobre el vestuario
        let mascotOverlayHTML = "";
        if (product.hasMascotOverlay) {
            mascotOverlayHTML = `
                <div class="clothing-logo-overlay" style="
                    position: absolute;
                    top: ${product.overlayTop};
                    left: ${product.overlayLeft};
                    transform: translate(-50%, -50%) scale(${product.overlayScale});
                    width: 90px;
                    height: 90px;
                    pointer-events: none;
                    z-index: 4;
                    opacity: 0.8;
                    mix-blend-mode: overlay;
                    transition: all 0.5s ease;
                ">
                    ${MASCOT_SVG(product.overlayColor)}
                </div>
            `;
        }

        card.innerHTML = `
            <span class="product-tag ${colTagClass}">${colTagText}</span>
            <div class="product-card-img-wrap">
                <img src="${product.image}" alt="${product.title}" class="product-card-img">
                ${mascotOverlayHTML}
                <div class="product-card-overlay">
                    <button class="product-action-btn view-detail-btn" title="Detalles">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button class="product-action-btn add-to-cart-btn-grid" title="Agregar al Carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="product-card-info">
                <div class="product-card-meta">${storyLabel ? storyLabel + ' // ' : ''}${product.collection} // ${product.category.toUpperCase()}</div>
                <h3 class="product-card-title">${product.title}</h3>
                <div class="product-card-price">${formatPrice(product.price)}</div>
            </div>
        `;
        
        // Agregar listeners
        card.querySelector(".view-detail-btn").addEventListener("click", () => openProductModal(product));
        card.querySelector(".add-to-cart-btn-grid").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });

        productsGrid.appendChild(card);
    });

    // Custom cursors dynamic color update
    attachCursorEvents();
}

// Format COP Currency
function formatPrice(number) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(number);
}

// 4. CART OPERATIONS
function addToCart(productId, size = "M") {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check if already in cart with same size
    const existing = cart.find(item => item.id === productId && item.size === size);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            collection: product.collection,
            size: size,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(`Se añadió ${product.title} (Talla ${size}) al carrito`, product.collection);
    
    // Auto open drawer
    toggleCart(true);
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartUI();
}

function updateQuantity(productId, size, delta) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId, size);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Tu carrito está vacío</p>
                <a href="#catalogo" class="btn btn-primary" id="go-shopping-btn-empty">EXPLORAR TIENDA</a>
            </div>
        `;
        cartFooter.style.display = "none";
        
        const goShopping = document.getElementById("go-shopping-btn-empty");
        if (goShopping) {
            goShopping.addEventListener("click", () => toggleCart(false));
        }
    } else {
        cartFooter.style.display = "block";
        cartItemsContainer.innerHTML = "";

        let subtotal = 0;

        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <span class="cart-item-option">TALLA: ${item.size}</span>
                    <div class="cart-item-qty">
                        <button class="qty-btn dec-qty-btn"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn inc-qty-btn"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <div class="cart-item-price-remove">
                    <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                    <button class="cart-item-remove" aria-label="Eliminar item"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;

            // Listeners for quantity and remove
            itemEl.querySelector(".dec-qty-btn").addEventListener("click", () => updateQuantity(item.id, item.size, -1));
            itemEl.querySelector(".inc-qty-btn").addEventListener("click", () => updateQuantity(item.id, item.size, 1));
            itemEl.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(item.id, item.size));

            cartItemsContainer.appendChild(itemEl);
        });

        cartSubtotal.textContent = formatPrice(subtotal);
        checkoutTotal.textContent = formatPrice(subtotal);
    }
}

function toggleCart(open) {
    if (open) {
        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // block scroll
    } else {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
        document.body.style.overflow = ""; // enable scroll
    }
}

// 5. TOAST NOTIFICATIONS
function showToast(message, theme = "NEON_BARRIO") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${theme === "CANCHA_LIBRE" ? 'toast-raw' : ''}`;
    
    const icon = theme === "CANCHA_LIBRE" ? "fa-solid fa-screwdriver-wrench" : "fa-solid fa-bolt-lightning";
    toast.innerHTML = `
        <i class="${icon}"></i>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);
    
    // Auto remove after animation finishes (3 seconds total)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 6. MODALS MANAGEMENT
function openProductModal(product) {
    const isNeon = product.collection === "BARRIO_NORTE";
    
    // Preparar el overlay del logo/mascota gigante dentro de la vista de modal
    let mascotOverlayHTML = "";
    if (product.hasMascotOverlay) {
        mascotOverlayHTML = `
            <div class="modal-mascot-overlay" style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(1.1);
                width: 250px;
                height: 250px;
                pointer-events: none;
                z-index: 5;
                opacity: 0.15;
                mix-blend-mode: overlay;
            ">
                ${MASCOT_SVG(isNeon ? "var(--accent-neon-green)" : "var(--accent-raw-sand)")}
            </div>
        `;
    }

    modalContentInner.innerHTML = `
        <div class="modal-img-wrap">
            <img src="${product.image}" alt="${product.title}" class="modal-img">
            ${mascotOverlayHTML}
        </div>
        <div class="modal-details">
            <span class="modal-collection-tag" style="color: ${isNeon ? 'var(--accent-neon-green)' : 'var(--accent-raw-sand)'}">
                ${product.collection === 'BARRIO_NORTE' ? 'BARRIO NORTE' : 'CANCHA LIBRE'} // DROPS_2026
            </span>
            <h2 class="modal-title">${product.title}</h2>
            <div class="modal-price">${formatPrice(product.price)}</div>
            
            <p class="modal-desc">${product.description}</p>
            
            <div class="modal-options">
                <h4 class="modal-option-title">SELECCIONA TALLA</h4>
                <div class="size-selector" id="modal-size-selector">
                    ${product.sizes.map((s, idx) => `
                        <button class="size-btn ${idx === 1 ? 'active' : ''}" data-size="${s}">${s}</button>
                    `).join('')}
                </div>
            </div>
            
            <button class="btn btn-primary modal-add-to-cart-btn ${isNeon ? 'btn-neon' : ''}" id="modal-add-btn">
                AÑADIR AL CARRITO <i class="fa-solid fa-cart-arrow-down" style="margin-left: 10px;"></i>
            </button>
        </div>
    `;

    // Size button listeners
    const sizeBtns = modalContentInner.querySelectorAll(".size-btn");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Add to cart listener
    modalContentInner.querySelector("#modal-add-btn").addEventListener("click", () => {
        const activeSize = modalContentInner.querySelector(".size-btn.active").getAttribute("data-size");
        addToCart(product.id, activeSize);
        closeModals();
    });

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
    attachCursorEvents();
}

function openCheckoutModal() {
    if (cart.length === 0) return;
    
    // Close cart first
    toggleCart(false);
    
    // Set total
    const total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    checkoutTotal.textContent = formatPrice(total);
    
    checkoutModal.classList.add("active");
    document.body.style.overflow = "hidden";
    attachCursorEvents();
}

function closeModals() {
    productModal.classList.remove("active");
    checkoutModal.classList.remove("active");
    document.body.style.overflow = "";
}

// 7. CUSTOM CURSOR TRACKING
function initCustomCursor() {
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");
    
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });
}

function attachCursorEvents() {
    const interactiveElements = document.querySelectorAll("a, button, .filter-btn, .filter-col-btn, .size-btn, .payment-method");
    
    interactiveElements.forEach(el => {
        // Clear previous to prevent duplicate events
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
    });
}

function handleMouseEnter(e) {
    document.body.classList.add("hover-link");
    
    // Context-specific cursor colors
    if (e.currentTarget.classList.contains("btn-neon") || 
        e.currentTarget.classList.contains("tag-neon") || 
        e.currentTarget.classList.contains("btn-text-neon") ||
        e.currentTarget.classList.contains("neon-color-btn") ||
        e.currentTarget.closest(".col-neon")) {
        document.body.classList.add("hover-neon");
    } else if (e.currentTarget.classList.contains("btn-text-raw") ||
               e.currentTarget.classList.contains("tag-raw") ||
               e.currentTarget.classList.contains("raw-color-btn") ||
               e.currentTarget.closest(".col-raw")) {
        document.body.classList.add("hover-raw");
    }
}

function handleMouseLeave() {
    document.body.classList.remove("hover-link", "hover-neon", "hover-raw");
}

// 8. SCROLL & HEADER ANIMATION
function handleScroll() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// 9. EVENT LISTENERS SETUP
function setupEventListeners() {
    // Header Scroll
    window.addEventListener("scroll", handleScroll);

    // Cart toggles
    cartToggle.addEventListener("click", () => toggleCart(true));
    cartClose.addEventListener("click", () => toggleCart(false));
    cartOverlay.addEventListener("click", () => toggleCart(false));
    checkoutBtn.addEventListener("click", openCheckoutModal);

    // Modal Close
    modalClose.addEventListener("click", closeModals);
    checkoutClose.addEventListener("click", closeModals);
    
    // Close modal on background click
    window.addEventListener("click", (e) => {
        if (e.target === productModal || e.target === checkoutModal) {
            closeModals();
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // Catalog Filter Buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-filter");
            renderProducts();
        });
    });

    // Collection Filter Buttons
    const filterColBtns = document.querySelectorAll(".filter-col-btn");
    filterColBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterColBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCollection = btn.getAttribute("data-col-filter");
            renderProducts();
        });
    });

    // Inline Lookbook Buttons
    const inlineColBtns = document.querySelectorAll(".filter-collection-btn");
    inlineColBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const targetCol = btn.getAttribute("data-target");
            
            // Set collection filter active
            filterColBtns.forEach(b => {
                if (b.getAttribute("data-col-filter") === targetCol) {
                    b.classList.add("active");
                } else {
                    b.classList.remove("active");
                }
            });

            activeCollection = targetCol;
            renderProducts();
        });
    });

    // Payment Method Selection
    const paymentMethods = document.querySelectorAll(".payment-method");
    const cardDetailsFields = document.getElementById("card-details-fields");
    
    paymentMethods.forEach(method => {
        method.addEventListener("click", () => {
            paymentMethods.forEach(m => m.classList.remove("active"));
            method.classList.add("active");
            
            const selected = method.getAttribute("data-method");
            if (selected === "card") {
                cardDetailsFields.style.display = "block";
                cardDetailsFields.querySelectorAll("input").forEach(i => i.required = true);
            } else {
                cardDetailsFields.style.display = "none";
                cardDetailsFields.querySelectorAll("input").forEach(i => i.required = false);
            }
        });
    });

    // Checkout Form Submission
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Simular éxito de pago
        const name = document.getElementById("c-name").value;
        const totalPaid = checkoutTotal.textContent;
        
        closeModals();
        
        // Vaciar Carrito
        cart = [];
        updateCartUI();

        // Mostrar felicitaciones
        showCheckoutSuccess(name, totalPaid);
    });

    // Newsletter Form
    const newsletterForm = document.getElementById("newsletter-form");
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector("input");
        showToast(`REGISTRADO: Bienvenido al sindicato METRIX.`, "NEON_BARRIO");
        emailInput.value = "";
    });
}

function showCheckoutSuccess(clientName, totalPaid) {
    // Modal de éxito de checkout temporal
    const successOverlay = document.createElement("div");
    successOverlay.className = "modal-overlay active";
    successOverlay.style.zIndex = "5000";
    successOverlay.innerHTML = `
        <div class="modal-container" style="max-width: 500px; text-align: center;">
            <div style="font-size: 3.5rem; color: var(--accent-neon-green); margin-bottom: 1.5rem; animation: pulseCount 1s infinite alternate;">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2 class="orbitron-font" style="margin-bottom: 1rem; font-size: 1.5rem;">COMPRA CONFIRMADA</h2>
            <p style="font-size: 0.95rem; margin-bottom: 1.5rem;">¡Gracias por tu compra, <strong>${clientName}</strong>!</p>
            <div style="background: var(--bg-primary); border: 1px dashed rgba(255,255,255,0.1); padding: 1rem; font-family: var(--font-primary); font-size: 0.85rem; margin-bottom: 2rem;">
                ORDEN DE COMPRA: #MTX-${Math.floor(100000 + Math.random() * 900000)}<br>
                VALOR PAGADO: ${totalPaid}<br>
                ENVÍO: 24-48 horas hábiles
            </div>
            <button class="btn btn-primary btn-neon" id="success-close-btn" style="width: 100%;">CONTINUAR COMPRANDO</button>
        </div>
    `;

    document.body.appendChild(successOverlay);
    document.body.style.overflow = "hidden";

    successOverlay.querySelector("#success-close-btn").addEventListener("click", () => {
        successOverlay.remove();
        document.body.style.overflow = "";
    });
}

// 10. INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    renderProducts();
    setupEventListeners();
    handleScroll(); // Check scroll initial state
});

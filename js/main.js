/**
 * Restaurant Website - Haupt JavaScript
 * Erstellt von Hans Hahn - Alle Rechte vorbehalten
 * Datum: 11.08.2025
 */

// ====================================
// GLOBALE KONFIGURATION
// ====================================
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 80,
    breakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1440
    }
};

// ====================================
// MOBILE NAVIGATION
// ====================================
class MobileNavigation {
    constructor() {
        this.toggle = document.querySelector('.header__mobile-toggle');
        this.navList = document.querySelector('.header__nav-list');
        this.isOpen = false;
        
        if (this.toggle && this.navList) {
            this.init();
        }
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        // Schließe Menü beim Klick auf einen Link
        const navLinks = this.navList.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Schließe Menü beim Klick außerhalb
        document.addEventListener('click', (e) => {
            if (!this.toggle.contains(e.target) && !this.navList.contains(e.target)) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.navList.classList.toggle('active');
        this.toggle.classList.toggle('active');
        
        // Animiere Hamburger-Icon
        const spans = this.toggle.querySelectorAll('span');
        if (this.isOpen) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }
    
    closeMenu() {
        this.isOpen = false;
        this.navList.classList.remove('active');
        this.toggle.classList.remove('active');
        
        const spans = this.toggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
}

// ====================================
// SMOOTH SCROLLING
// ====================================
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Alle internen Links mit Hash
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href !== '#' && href !== '#0') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - CONFIG.scrollOffset;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ====================================
// LAZY LOADING FÜR BILDER
// ====================================
class LazyImageLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.imageOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };
        
        if ('IntersectionObserver' in window) {
            this.init();
        } else {
            this.loadAllImages();
        }
    }
    
    init() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, this.imageOptions);
        
        this.images.forEach(img => imageObserver.observe(img));
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
        }
    }
    
    loadAllImages() {
        this.images.forEach(img => this.loadImage(img));
    }
}

// ====================================
// SCROLL TO TOP BUTTON
// ====================================
class ScrollToTop {
    constructor() {
        this.createButton();
        this.init();
    }
    
    createButton() {
        const button = document.createElement('button');
        button.className = 'scroll-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Nach oben scrollen');
        document.body.appendChild(button);
        this.button = button;
    }
    
    init() {
        // Zeige/Verstecke Button basierend auf Scroll-Position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });
        
        // Scroll nach oben beim Klick
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ====================================
// FORMULAR UTILITIES
// ====================================
class FormUtils {
    static saveToLocalStorage(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const key = `${formId}_${input.name}`;
                localStorage.setItem(key, input.value);
            });
        });
    }
    
    static loadFromLocalStorage(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            const key = `${formId}_${input.name}`;
            const savedValue = localStorage.getItem(key);
            
            if (savedValue && input.type !== 'checkbox' && input.type !== 'radio') {
                input.value = savedValue;
            }
        });
    }
    
    static clearLocalStorage(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            const key = `${formId}_${input.name}`;
            localStorage.removeItem(key);
        });
    }
}

// ====================================
// COOKIE BANNER
// ====================================
class CookieBanner {
    constructor() {
        if (!this.hasAcceptedCookies()) {
            this.createBanner();
        }
    }
    
    hasAcceptedCookies() {
        return localStorage.getItem('cookiesAccepted') === 'true';
    }
    
    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner__content">
                <p>Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.</p>
                <div class="cookie-banner__actions">
                    <button class="btn btn--primary" id="acceptCookies">Akzeptieren</button>
                    <button class="btn btn--outline" id="rejectCookies">Ablehnen</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Event Listeners
        document.getElementById('acceptCookies').addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            banner.remove();
        });
        
        document.getElementById('rejectCookies').addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'false');
            banner.remove();
        });
        
        // Zeige Banner nach kurzer Verzögerung
        setTimeout(() => {
            banner.classList.add('visible');
        }, 1000);
    }
}

// ====================================
// INITIALISIERUNG
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialisiere alle Module
    new MobileNavigation();
    new SmoothScroll();
    new LazyImageLoader();
    new ScrollToTop();
    new CookieBanner();
    
    // Speichere Formulardaten lokal (falls Reservierungsformular vorhanden)
    if (document.getElementById('reservationForm')) {
        FormUtils.loadFromLocalStorage('reservationForm');
        FormUtils.saveToLocalStorage('reservationForm');
    }
    
    // Debug-Modus (nur in Entwicklung)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🚀 Restaurant Website geladen');
        console.log('📱 Mobile Navigation:', document.querySelector('.header__mobile-toggle') ? 'Aktiv' : 'Nicht gefunden');
        console.log('🖼️ Lazy Loading Bilder:', document.querySelectorAll('img[data-src]').length);
    }
});

// ====================================
// HILFSFUNKTIONEN
// ====================================
const Utils = {
    // Debounce Funktion für Performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle Funktion für Performance
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Prüfe ob Element im Viewport ist
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Exportiere für andere Module
window.RestaurantApp = {
    CONFIG,
    Utils,
    FormUtils,
    MobileNavigation,
    SmoothScroll,
    LazyImageLoader,
    ScrollToTop,
    CookieBanner
};

/* Erstellt von Hans Hahn - Alle Rechte vorbehalten */
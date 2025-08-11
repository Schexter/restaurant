// ==============================================
// IMAGE HANDLER - Automatisches Fallback System
// Erstellt von Hans Hahn - Alle Rechte vorbehalten
// ==============================================

class ImageHandler {
    constructor() {
        this.imageMap = {
            // Restaurant Bilder
            'restaurant/hero-bg': ['jpg', 'svg'],
            'restaurant/logo': ['png', 'svg'],
            'restaurant/interior-1': ['jpg', 'svg'],
            'restaurant/exterior': ['jpg', 'svg'],
            
            // Catering Bilder
            'catering/gala-dinner': ['jpg', 'svg'],
            'catering/flying-buffet': ['jpg', 'svg'],
            'catering/business-lunch': ['jpg', 'svg'],
            'catering/hochzeit': ['jpg', 'svg'],
            
            // Chef Bilder
            'chef/anna-schmidt-portrait': ['jpg', 'svg'],
            'chef/dish-1': ['jpg', 'svg'],
            'chef/dish-2': ['jpg', 'svg'],
            'chef/dish-3': ['jpg', 'svg'],
            'chef/dish-4': ['jpg', 'svg'],
            'chef/dish-5': ['jpg', 'svg'],
            'chef/dish-6': ['jpg', 'svg'],
            
            // Rezept Bilder
            'rezepte/zwiebelsuppe': ['jpg', 'svg'],
            'rezepte/risotto': ['jpg', 'svg'],
            'rezepte/lava-kuchen': ['jpg', 'svg']
        };
        
        this.init();
    }
    
    init() {
        // Alle Bilder beim Laden prüfen
        document.addEventListener('DOMContentLoaded', () => {
            this.checkAllImages();
            this.setupLazyLoading();
        });
    }
    
    checkAllImages() {
        const images = document.querySelectorAll('img[data-fallback]');
        images.forEach(img => this.setupImageFallback(img));
    }
    
    setupImageFallback(img) {
        const originalSrc = img.src;
        const fallbackSrc = img.dataset.fallback;
        
        // Versuche das Hauptbild zu laden
        const testImage = new Image();
        testImage.onload = () => {
            img.src = originalSrc;
            img.classList.add('loaded');
        };
        
        testImage.onerror = () => {
            // Hauptbild fehlgeschlagen, versuche Fallback
            if (fallbackSrc) {
                const fallbackImage = new Image();
                fallbackImage.onload = () => {
                    img.src = fallbackSrc;
                    img.classList.add('loaded', 'using-fallback');
                };
                
                fallbackImage.onerror = () => {
                    // Beide fehlgeschlagen, zeige Platzhalter
                    this.showPlaceholder(img);
                };
                
                fallbackImage.src = fallbackSrc;
            } else {
                this.showPlaceholder(img);
            }
        };
        
        testImage.src = originalSrc;
    }
    
    showPlaceholder(img) {
        img.classList.add('error');
        const parent = img.parentElement;
        
        // Erstelle Platzhalter-Element
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        
        const title = document.createElement('div');
        title.className = 'image-placeholder__title';
        title.textContent = img.alt || 'Bild nicht verfügbar';
        
        const desc = document.createElement('div');
        desc.className = 'image-placeholder__desc';
        desc.textContent = 'Dieses Bild wird in Kürze hinzugefügt';
        
        placeholder.appendChild(title);
        placeholder.appendChild(desc);
        
        // Ersetze Bild mit Platzhalter
        parent.replaceChild(placeholder, img);
    }
    
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    loadImage(img) {
        const src = img.dataset.src || img.src;
        if (src && !img.src.includes(src)) {
            img.src = src;
            img.classList.add('loaded');
        }
    }
    
    // Hilfsfunktion zum Konvertieren zwischen Formaten
    convertImagePath(path, fromFormat, toFormat) {
        return path.replace(new RegExp(`\\.${fromFormat}$`), `.${toFormat}`);
    }
    
    // Prüfe ob Bild existiert
    async imageExists(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        } catch {
            return false;
        }
    }
    
    // Automatisches Setup für alle Bilder mit data-auto-fallback
    async autoSetupFallbacks() {
        const images = document.querySelectorAll('img[data-auto-fallback]');
        
        for (const img of images) {
            const basePath = img.dataset.autoFallback;
            const formats = this.imageMap[basePath] || ['jpg', 'svg'];
            
            let loaded = false;
            for (const format of formats) {
                const testUrl = `images/${basePath}.${format}`;
                if (await this.imageExists(testUrl)) {
                    img.src = testUrl;
                    loaded = true;
                    break;
                }
            }
            
            if (!loaded) {
                this.showPlaceholder(img);
            }
        }
    }
}

// Initialisiere Image Handler
const imageHandler = new ImageHandler();

// Exportiere für globale Nutzung
window.ImageHandler = ImageHandler;

// ==============================================
// BILDOPTIMIERUNG HELPER
// ==============================================

class ImageOptimizer {
    constructor() {
        this.supportedFormats = this.checkFormatSupport();
    }
    
    checkFormatSupport() {
        const formats = {
            webp: false,
            avif: false
        };
        
        // WebP Support prüfen
        const webP = new Image();
        webP.onload = () => { formats.webp = true; };
        webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
        
        // AVIF Support prüfen (moderne Browser)
        const avif = new Image();
        avif.onload = () => { formats.avif = true; };
        avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A==';
        
        return formats;
    }
    
    // Erstelle <picture> Element mit mehreren Formaten
    createPictureElement(basePath, alt, className = '') {
        const picture = document.createElement('picture');
        
        // AVIF Source (wenn unterstützt)
        if (this.supportedFormats.avif) {
            const sourceAvif = document.createElement('source');
            sourceAvif.srcset = `${basePath}.avif`;
            sourceAvif.type = 'image/avif';
            picture.appendChild(sourceAvif);
        }
        
        // WebP Source (wenn unterstützt)
        if (this.supportedFormats.webp) {
            const sourceWebp = document.createElement('source');
            sourceWebp.srcset = `${basePath}.webp`;
            sourceWebp.type = 'image/webp';
            picture.appendChild(sourceWebp);
        }
        
        // Fallback IMG
        const img = document.createElement('img');
        img.src = `${basePath}.jpg`;
        img.alt = alt;
        img.className = className;
        img.loading = 'lazy';
        
        picture.appendChild(img);
        
        return picture;
    }
}

// Initialisiere Image Optimizer
const imageOptimizer = new ImageOptimizer();

// ==============================================
// AUTOMATISCHES BILDLADEN BEI SEITEN-LOAD
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Restaurant Website - Image System initialisiert');
    console.log('SVG Fallbacks verfügbar für alle fehlenden Bilder');
    
    // Zeige Hinweis wenn Bilder fehlen
    const checkMissingImages = () => {
        const images = document.querySelectorAll('img');
        let missingCount = 0;
        
        images.forEach(img => {
            if (img.classList.contains('error') || img.classList.contains('using-fallback')) {
                missingCount++;
            }
        });
        
        if (missingCount > 0) {
            console.warn(`${missingCount} Bilder verwenden Fallback oder Platzhalter`);
            console.info('Besuche /image-generator.html für Anleitung zur Bildbeschaffung');
        }
    };
    
    // Prüfe nach 2 Sekunden (Zeit für Bildladen)
    setTimeout(checkMissingImages, 2000);
});

// Erstellt von Hans Hahn - Alle Rechte vorbehalten
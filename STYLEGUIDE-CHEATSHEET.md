# 🎨 STYLEGUIDE CHEATSHEET
**Restaurant "Zum Goldenen Löffel"**  
**Erstellt von Hans Hahn - Alle Rechte vorbehalten**  
**Version 1.0 - Stand: 11.08.2025**

---

## 🎨 FARBPALETTE

### Hauptfarben
```css
/* Primärfarbe - Dunkelgrün */
--color-primary: #2C5530;
--color-primary-dark: #1a3320;
--color-primary-light: #3d6b42;

/* Sekundärfarbe - Gold */
--color-secondary: #D4AF37;
--color-secondary-dark: #b8941f;
--color-secondary-light: #e0c456;

/* Hintergrundfarben */
--color-bg-main: #FFF8E7;      /* Cremeweiß */
--color-bg-white: #FFFFFF;     /* Reinweiß */
--color-bg-light: #F9F9F9;     /* Hellgrau */
--color-bg-gray: #F0F0F0;      /* Grau */
```

### Textfarben
```css
/* Text */
--color-text-primary: #333333;   /* Haupttext */
--color-text-secondary: #666666; /* Sekundärtext */
--color-text-light: #999999;     /* Heller Text */
--color-text-white: #FFFFFF;     /* Weißer Text */
```

### Status-Farben
```css
/* Status */
--color-success: #4CAF50;    /* Erfolg/Vegetarisch */
--color-vegan: #8BC34A;       /* Vegan */
--color-warning: #FF9800;     /* Warnung */
--color-error: #F44336;       /* Fehler */
--color-info: #2196F3;        /* Info */
```

### Verwendung im Code:
```css
.beispiel {
    background-color: #2C5530;  /* Primär Dunkelgrün */
    color: #D4AF37;              /* Gold */
    border: 2px solid #FFF8E7;   /* Cremeweiß */
}
```

---

## 📝 TYPOGRAFIE

### Schriftarten
```css
/* Import in HTML <head> */
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">

/* CSS Verwendung */
font-family: 'Playfair Display', serif;    /* Überschriften */
font-family: 'Open Sans', sans-serif;      /* Fließtext */
```

### Schriftgrößen
```css
/* Desktop */
h1 { font-size: 2.5rem; }    /* 40px */
h2 { font-size: 2rem; }       /* 32px */
h3 { font-size: 1.5rem; }     /* 24px */
h4 { font-size: 1.25rem; }    /* 20px */
p  { font-size: 1rem; }       /* 16px */
small { font-size: 0.875rem; }/* 14px */

/* Mobile (< 768px) */
h1 { font-size: 2rem; }       /* 32px */
h2 { font-size: 1.75rem; }    /* 28px */
h3 { font-size: 1.25rem; }    /* 20px */
```

### Schriftgewichte
```css
font-weight: 300;  /* Light (Open Sans) */
font-weight: 400;  /* Regular */
font-weight: 600;  /* Semi-Bold (Open Sans) */
font-weight: 700;  /* Bold (Playfair Display) */
```

### Zeilenhöhe
```css
line-height: 1.2;   /* Überschriften */
line-height: 1.6;   /* Fließtext */
line-height: 1.8;   /* Lockerer Text */
```

---

## 📐 ABSTÄNDE & LAYOUT

### Container-Breiten
```css
.container {
    max-width: 1200px;  /* Desktop */
    margin: 0 auto;
    padding: 0 1rem;    /* 16px seitlich */
}
```

### Standard-Abstände
```css
/* Padding/Margin Einheiten */
0.25rem  /* 4px */
0.5rem   /* 8px */
0.75rem  /* 12px */
1rem     /* 16px - Standard */
1.5rem   /* 24px */
2rem     /* 32px */
3rem     /* 48px */
4rem     /* 64px */
```

### Grid-System
```css
/* Responsive Grid */
.grid {
    display: grid;
    gap: 2rem;
}

/* Desktop: 3 Spalten */
grid-template-columns: repeat(3, 1fr);

/* Tablet: 2 Spalten */
@media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}

/* Mobile: 1 Spalte */
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

---

## 🎯 KOMPONENTEN-STYLES

### Buttons
```css
/* Basis Button */
.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Primär (Gold) */
.btn--primary {
    background: #D4AF37;
    color: white;
}
.btn--primary:hover {
    background: #b8941f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

/* Sekundär (Grün) */
.btn--secondary {
    background: #2C5530;
    color: white;
}

/* Outline */
.btn--outline {
    background: transparent;
    border: 2px solid white;
    color: white;
}
```

### Cards
```css
.card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
```

### Formulare
```css
.form__input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form__input:focus {
    outline: none;
    border-color: #D4AF37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}
```

---

## 📱 BREAKPOINTS

```css
/* Mobile First Approach */
/* Basis-Styles für Mobile */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }

/* Oder Desktop First */
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (max-width: 1023px) { }
```

---

## 🔄 ANIMATIONEN & ÜBERGÄNGE

### Standard-Transitions
```css
transition: all 0.3s ease;        /* Standard */
transition: transform 0.3s ease;  /* Nur Transform */
transition: opacity 0.5s ease;    /* Fade */
```

### Hover-Effekte
```css
/* Lift-Up Effekt */
transform: translateY(-5px);

/* Scale */
transform: scale(1.05);

/* Rotation */
transform: rotate(5deg);

/* Shadow verstärken */
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
```

### Keyframe-Animationen
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## 🏷️ BEM-NOTATION

### Struktur
```css
/* Block */
.header { }

/* Element (mit __) */
.header__logo { }
.header__nav { }

/* Modifier (mit --) */
.header--fixed { }
.header__nav--active { }
```

### Beispiel
```html
<div class="card card--featured">
    <img class="card__image" src="...">
    <div class="card__content">
        <h3 class="card__title">Titel</h3>
        <p class="card__description">Text</p>
        <button class="card__button card__button--primary">
            Mehr
        </button>
    </div>
</div>
```

---

## 🖼️ BILDER

### Seitenverhältnisse
```css
/* Hero/Banner */
aspect-ratio: 16/9;   /* 1920x1080 */

/* Cards */
aspect-ratio: 4/3;    /* 800x600 */

/* Quadratisch */
aspect-ratio: 1/1;    /* 600x600 */

/* Portrait */
aspect-ratio: 3/4;    /* 600x800 */
```

### Bildgrößen
```
Hero: 1920x1080px (max. 500KB)
Cards: 800x600px (max. 200KB)
Thumbnails: 400x300px (max. 100KB)
Icons: 64x64px (SVG bevorzugt)
```

### Object-Fit
```css
object-fit: cover;      /* Bild füllt Container */
object-fit: contain;    /* Ganzes Bild sichtbar */
object-fit: fill;       /* Verzerrt auf Größe */
```

---

## ⚡ PERFORMANCE-TIPPS

### CSS-Optimierung
```css
/* Verwende CSS-Variablen */
:root {
    --primary: #2C5530;
    --secondary: #D4AF37;
}

/* Nutze Kurzschreibweisen */
margin: 1rem 2rem;  /* statt margin-top, margin-right... */
background: #fff url('bg.jpg') center/cover no-repeat;
```

### Lazy Loading
```html
<img src="thumbnail.jpg" 
     data-src="full-image.jpg" 
     loading="lazy" 
     alt="Beschreibung">
```

---

## 🔍 SEO & ACCESSIBILITY

### Meta-Tags Template
```html
<meta name="description" content="Max. 160 Zeichen">
<meta name="keywords" content="restaurant, catering, gourmet">
<meta property="og:title" content="Zum Goldenen Löffel">
<meta property="og:image" content="preview.jpg">
```

### ARIA-Labels
```html
<nav role="navigation" aria-label="Hauptnavigation">
<button aria-label="Menü öffnen">
<img alt="Aussagekräftige Beschreibung">
```

---

## 📋 CHECKLISTE FÜR NEUE KOMPONENTEN

- [ ] Farben aus Palette verwenden
- [ ] Schriftarten korrekt eingesetzt
- [ ] BEM-Notation befolgt
- [ ] Responsive getestet (Mobile, Tablet, Desktop)
- [ ] Hover-States definiert
- [ ] Transitions hinzugefügt
- [ ] Accessibility beachtet (ARIA, Alt-Texte)
- [ ] Performance optimiert
- [ ] Cross-Browser getestet

---

## 🚀 QUICK COPY & PASTE

### Standard Card
```html
<article class="card">
    <div class="card__image">
        <img src="images/..." alt="...">
    </div>
    <div class="card__content">
        <h3 class="card__title">Titel</h3>
        <p class="card__description">Beschreibung</p>
        <button class="btn btn--primary">Mehr erfahren</button>
    </div>
</article>
```

### Hero Section
```html
<section class="hero">
    <div class="hero__background"></div>
    <div class="container">
        <div class="hero__content">
            <h1 class="hero__title">Überschrift</h1>
            <p class="hero__subtitle">Untertitel</p>
            <a href="#" class="btn btn--primary btn--large">CTA</a>
        </div>
    </div>
</section>
```

### Responsive Grid
```html
<div class="grid">
    <div class="grid__item">1</div>
    <div class="grid__item">2</div>
    <div class="grid__item">3</div>
</div>
```

---

**Dieses Cheatsheet ausdrucken und griffbereit halten!** 🎯

**Erstellt von Hans Hahn - Alle Rechte vorbehalten**

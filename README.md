# 🍽️ Restaurant Website - "Zum Goldenen Löffel"

![Version](https://img.shields.io/badge/Version-1.0.0-green)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

## 📋 Übersicht

Professionelle Restaurant-Website für ein gehobenes Restaurant mit Event-Catering Service. Entwickelt als Übungsprojekt für die Ausbildung zum Anwendungsentwickler.

**Live-Demo:** [Hier einfügen wenn deployed]

## ✨ Features

- 🎨 **Modernes, responsives Design** - Funktioniert auf allen Geräten
- 📱 **Mobile-First Approach** - Optimiert für Smartphones
- 🍽️ **5 Hauptbereiche:**
  - Event-Catering Landing Page
  - Chefköchin Portfolio
  - Online-Reservierungssystem
  - Digitale Speisekarte
  - Rezepte-Blog
- ⚡ **Performance-optimiert** - Lazy Loading, minimierte Assets
- ♿ **Barrierefrei** - ARIA-Labels, semantisches HTML
- 🔍 **SEO-optimiert** - Meta-Tags, strukturierte Daten

## 🚀 Quick Start

### Installation

1. Repository klonen:
```bash
git clone https://github.com/[username]/restaurant-website.git
cd restaurant-website
```

2. Im Browser öffnen:
```bash
# Direkt die index.html öffnen oder einen lokalen Server starten
python -m http.server 8000
# oder
npx serve
```

3. Browser öffnen: http://localhost:8000

## 📁 Projektstruktur

```
RestaurantWebsite/
├── 📄 index.html           # Landing Page
├── 📄 chefkoechin.html     # Chefköchin Portfolio
├── 📄 reservierung.html    # Reservierungsformular
├── 📄 speisekarte.html     # Digitale Speisekarte
├── 📄 rezepte.html         # Rezepte-Blog
├── 📁 css/
│   ├── main.css            # Haupt-Styles
│   ├── responsive.css      # Media Queries
│   ├── components.css      # UI-Komponenten
│   └── features.css        # JavaScript-Features
├── 📁 js/
│   └── main.js             # JavaScript-Funktionen
├── 📁 images/
│   ├── 📁 catering/        # Catering-Bilder
│   ├── 📁 chef/            # Chefköchin-Bilder
│   ├── 📁 gerichte/        # Speisen-Bilder
│   ├── 📁 rezepte/         # Rezept-Bilder
│   ├── 📁 restaurant/      # Allgemeine Bilder
│   └── BILDER-CHECKLISTE.md
├── 📁 team/
│   └── TEAM-ARBEITSTEILUNG.md
├── 📁 docs/
│   ├── PROJEKTPLAN.md
│   └── INDEX.md
└── README.md
```

## 👥 Team-Entwicklung

Das Projekt ist für die Zusammenarbeit von **4 Personen** optimiert:

| Person | Rolle | Verantwortlichkeiten |
|--------|-------|---------------------|
| 1 | Frontend-Entwickler | HTML-Struktur, Semantik, SEO |
| 2 | CSS-Spezialist | Styling, Responsive Design, Animationen |
| 3 | JavaScript-Entwickler | Interaktivität, Validierung, Features |
| 4 | Content-Manager | Bilder, Texte, Optimierung |

Siehe [TEAM-ARBEITSTEILUNG.md](team/TEAM-ARBEITSTEILUNG.md) für Details.

## 🖼️ Bilder hinzufügen

### Schnellanleitung:

1. Bilder in den entsprechenden Ordner kopieren:
   - `images/catering/` - Catering-Pakete
   - `images/chef/` - Chefköchin Portfolio
   - `images/gerichte/` - Speisekarte
   - `images/rezepte/` - Rezepte
   - `images/restaurant/` - Allgemeine Bilder

2. Dateinamen gemäß [BILDER-CHECKLISTE.md](images/BILDER-CHECKLISTE.md) vergeben

3. HTML-Dateien aktualisieren (Alt-Texte nicht vergessen!)

### Empfohlene Bildgrößen:
- Hero-Bilder: 1920x1080px
- Card-Bilder: 800x600px
- Thumbnails: 400x300px
- Portraits: 600x800px

## 🛠️ Technologien

- **HTML5** - Semantische Struktur
- **CSS3** - Modernes Styling mit Flexbox/Grid
- **JavaScript** - Vanilla JS für Interaktivität
- **Google Fonts** - Playfair Display & Open Sans
- **BEM** - CSS-Methodologie

## 📱 Browser-Kompatibilität

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Vollständig unterstützt |
| Firefox | 88+ | ✅ Vollständig unterstützt |
| Safari | 14+ | ✅ Vollständig unterstützt |
| Edge | 90+ | ✅ Vollständig unterstützt |
| IE 11 | - | ❌ Nicht unterstützt |

## 🎨 Design-System

### Farbpalette:
- **Primär:** `#2C5530` (Dunkelgrün)
- **Sekundär:** `#D4AF37` (Gold)
- **Hintergrund:** `#FFF8E7` (Cremeweiß)
- **Text:** `#333333` (Dunkelgrau)

### Typografie:
- **Überschriften:** Playfair Display (Serif)
- **Fließtext:** Open Sans (Sans-Serif)

## 📝 ToDo

- [ ] Bilder hochladen und einbinden
- [ ] Favicon erstellen
- [ ] Social Media Meta-Tags
- [ ] Google Analytics einbinden
- [ ] Kontaktformular Backend
- [ ] Mehrsprachigkeit (DE/EN)
- [ ] Dark Mode Option
- [ ] PWA-Funktionalität

## 🤝 Contributing

1. Fork das Projekt
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request öffnen

## 📄 Lizenz

Dieses Projekt ist urheberrechtlich geschützt. Alle Rechte vorbehalten.

**© 2025 Hans Hahn - Alle Rechte vorbehalten**

## 👨‍💻 Autor

**Hans Hahn**
- Projekt: Übungsaufgabe Anwendungsentwickler
- Datum: 11.08.2025

## 🙏 Danksagungen

- Unsplash für Platzhalter-Bilder
- Google Fonts für Schriftarten
- MDN Web Docs für Dokumentation

---

**Hinweis:** Dies ist ein Übungsprojekt im Rahmen der Ausbildung zum Anwendungsentwickler.

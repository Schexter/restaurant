# 🔍 DESIGN-KONSISTENZ-ANALYSE
## Restaurant Website - Alle Seiten
**Erstellt von Hans Hahn - Alle Rechte vorbehalten**
**Datum: 11.08.2025**

---

## 📊 ÜBERSICHT DER INKONSISTENZEN

### 1. **index.html** (Landing Page)
- **Header:** ✅ Verwendet `header` class mit eigener Struktur
- **Logo:** ✅ Hat Logo-Bild
- **Navigation:** ⚠️ Andere Klassen (`header__nav` statt `main-nav`)
- **Footer:** ⚠️ Andere Klassen (`footer` statt `main-footer`)
- **Problem:** Verwendet komplett andere CSS-Klassen

### 2. **speisekarte.html**
- **Header:** ✅ Wurde gerade angepasst
- **Logo:** ✅ Text statt Bild
- **Navigation:** ✅ Konsistent
- **Footer:** ✅ Konsistent
- **Problem:** Kein Logo-Bild, nur Text

### 3. **chefkoechin.html**
- **Header:** ⚠️ Andere Struktur
- **Logo:** ❌ Nur Text, kein Bild
- **Navigation:** ⚠️ Andere Klassen
- **Footer:** ⚠️ Andere Klassen
- **Problem:** Verwendet alte Header-Struktur

### 4. **reservierung.html**
- **Header:** ❓ Muss überprüft werden
- **Logo:** ❓ Muss überprüft werden
- **Navigation:** ❓ Muss überprüft werden
- **Footer:** ❓ Muss überprüft werden

### 5. **rezepte.html**
- **Header:** ❓ Muss überprüft werden
- **Logo:** ❓ Muss überprüft werden
- **Navigation:** ❓ Muss überprüft werden
- **Footer:** ❓ Muss überprüft werden

### 6. **signature-kollektionen.html**
- **Header:** ✅ Neu erstellt, sollte konsistent sein
- **Logo:** ⚠️ Text statt Bild
- **Navigation:** ✅ Konsistent
- **Footer:** ✅ Konsistent

---

## 🔧 HAUPTPROBLEME

### Problem 1: **Unterschiedliche CSS-Klassen**
- index.html: `header`, `header__nav`, `header__logo`
- Andere Seiten: `main-nav`, `nav-container`, `nav-logo`

### Problem 2: **Logo-Inkonsistenz**
- Manche Seiten: Logo-Bild (SVG)
- Andere Seiten: Nur Text

### Problem 3: **Footer-Struktur**
- Unterschiedliche Klassen
- Unterschiedliche Inhalte

### Problem 4: **Hero-Sections**
- Nicht alle Seiten haben Hero-Sections
- Unterschiedliche Styles

---

## ✅ LÖSUNG

### Schritt 1: **Einheitliche CSS-Klassen**
```html
<!-- Für ALLE Seiten -->
<nav class="main-nav">
    <div class="nav-container">
        <div class="nav-logo">
            <img src="images/restaurant/logo.svg" alt="Restaurant Goldener Löffel">
            <span>Goldener Löffel</span>
        </div>
        <!-- Navigation -->
    </div>
</nav>
```

### Schritt 2: **Einheitlicher Footer**
```html
<footer class="main-footer">
    <!-- Gleiche Struktur für alle -->
</footer>
```

### Schritt 3: **CSS-Import auf allen Seiten**
```html
<link rel="stylesheet" href="css/unified-layout.css">
```

---

## 📝 TODO-LISTE

1. ✅ unified-layout.css erstellt
2. ✅ Template-Datei erstellt
3. ⬜ index.html anpassen
4. ⬜ chefkoechin.html anpassen  
5. ⬜ reservierung.html anpassen
6. ⬜ rezepte.html anpassen
7. ⬜ signature-kollektionen.html Logo hinzufügen
8. ⬜ speisekarte.html Logo hinzufügen

---

**Status: ANALYSE ABGESCHLOSSEN - ANPASSUNGEN ERFORDERLICH**
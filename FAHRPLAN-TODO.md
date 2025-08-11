# 📋 FAHRPLAN - TODO LISTE
**Erstellt von Hans Hahn - Alle Rechte vorbehalten**
**Projekt: Restaurant Website "Gourmet Palast"**
**Stand: ${new Date().toLocaleDateString('de-DE')}**

## 🎯 PRIORISIERTE AUFGABEN

### 🔴 KRITISCH - Sofort erledigen (Prio 1)
- [ ] Hero-Bilder kopieren und umbenennen
- [ ] HTML-Dateien an vorhandene Bildnamen anpassen
- [ ] Fehlende Verlinkungen zwischen Seiten korrigieren
- [ ] Mobile Navigation testen und optimieren

### 🟡 WICHTIG - Heute erledigen (Prio 2)
- [ ] Speisekarte-Bilder zuordnen (dish-1 bis dish-6 verwenden)
- [ ] Reservierungsformular-Validierung vervollständigen
- [ ] Footer auf allen Seiten vereinheitlichen
- [ ] Meta-Tags und SEO-Optimierung

### 🟢 NICE-TO-HAVE - Diese Woche (Prio 3)
- [ ] Smooth-Scrolling implementieren
- [ ] Ladezeit-Optimierung der Bilder
- [ ] 404-Fehlerseite erstellen
- [ ] Impressum und Datenschutz-Seiten

## 📊 FORTSCHRITT

### ✅ BEREITS ERLEDIGT
- [x] Grundstruktur erstellt
- [x] CSS Framework aufgebaut
- [x] Responsive Design implementiert
- [x] 38 hochwertige Bilder eingefügt
- [x] Hauptseiten angelegt
- [x] Navigation erstellt

### 🔄 IN ARBEIT
- [ ] Hero-Bilder Optimierung
- [ ] Formular-Validierung
- [ ] Cross-Browser Testing

### 📝 OFFENE BUGS
1. **BUG-001**: Rezept-Seite zeigt falsche Bildnamen
   - Status: Identifiziert
   - Lösung: Bildpfade in HTML anpassen
   
2. **BUG-002**: Mobile Menu schließt nicht automatisch
   - Status: Zu testen
   - Lösung: JavaScript Event-Handler anpassen

## 🚀 NÄCHSTE SCHRITTE

### Schritt 1: Bilder finalisieren
```bash
# Hero-Bilder kopieren
copy images/restaurant/hero-restaurant.jpg images/hero/hero-main.jpg
copy images/restaurant/table-setting.jpg images/hero/hero-catering.jpg
copy images/restaurant/team-kitchen.jpg images/hero/hero-chef.jpg
copy images/restaurant/interior-1.jpg images/hero/hero-menu.jpg
copy images/restaurant/fresh-ingredients.jpg images/hero/hero-recipes.jpg
```

### Schritt 2: HTML-Anpassungen
- rezepte.html: Bildpfade korrigieren
- index.html: Hero-Bild-Pfad prüfen
- Alle Seiten: Alt-Texte ergänzen

### Schritt 3: Testing
- [ ] Desktop: Chrome, Firefox, Edge
- [ ] Tablet: iPad, Android Tablet
- [ ] Mobile: iPhone, Android Phone

## 📅 ZEITPLAN

| Aufgabe | Geschätzte Zeit | Deadline |
|---------|----------------|-----------|
| Hero-Bilder | 15 Min | Heute |
| HTML-Fixes | 30 Min | Heute |
| Testing | 1 Stunde | Morgen |
| Optimierung | 2 Stunden | Diese Woche |

## 💡 NOTIZEN
- Alle Änderungen in Git committen
- Nach jedem Schritt testen
- Error.log regelmäßig prüfen
- Chat.log für Dokumentation nutzen

---
**Letzte Aktualisierung:** ${new Date().toLocaleString('de-DE')}

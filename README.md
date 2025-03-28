# Healthtracker-v10

Healthtracker-v10 är en webbaserad applikation designad för att hjälpa användare att spåra och övervaka olika hälsoaspekter. Projektet utnyttjar moderna webbutvecklingsverktyg såsom Vite och Tailwind CSS för att erbjuda en snabb, responsiv och modulär utvecklingsmiljö. Sidan innehåller formulär för att fylla i profilinformation. Detta innefattar kön, ålder, längd, vikt, aktivitetsnivå samt viktmål för att räkna ut hur stort kaloriintag användaren behöver. Det finns även ett formulär för att logga matintaget. Där kan du skriva namnet på rätten, kalorimängd, proteinmängd, kolhydratsmängd, fettmängd och typ av måltid (frukost,lunch, middag, mellanmål). Sidan har även en darkmode-funktion. Det finns även en dashboard med flera olika komponenter. Den första komponenten är welcomeProfile som välkommnar användare, den komponenten har även en knapp som navigerar dig till ProfileForm sidan. Nästa komponent är TodaysMeals som visar måltiderna du loggat för dagens datum vid använding. Tredje komponenten är KcalStatus som visar hur mycket kalorier du har kvar att konsumera baserat på användarens kaloriebehov subtraherat med det kalorieintaget som användaren redan loggat för dagen. Den fjärde komponenten är CurrentWeight som visar din nuvarande vikt baserat på den senaste loggade vikten. Denna komponent har även en knapp som är synlign vid hover över komponenten som ger dig möjligheten att logga användarens nya vikt. Den femte komponenten är WeightProgressChart som visar din viktkurva baserat på alla loggade vikter. Den sista komponenten är EnergyPieChart som visar fördelningen av konsumerad näring baserad på kolhydrater, protein och fett. Denna komponent använder sig dock av mockdata.

## Funktioner

- **Hälsospårning:** Logga och övervaka vikt, blodtryck, sömn och andra hälsoindikatorer.
- **Dark Mode:** Stöd för mörkt tema för bättre användarupplevelse i lågbelysning
- **Viktkurva:** Visar historisk viktutveckling i form av en interaktiv graf
- **Responsiv design:** Använder Tailwind CSS för att säkerställa en mobilvänlig och responsiv layout.
- **Modern utvecklingsmiljö:** Bygger på Vite för snabba omstarter och en förbättrad utvecklingsupplevelse.
- **Modulär arkitektur:** Enkel att utöka och underhålla tack vare en tydlig mappstruktur.

## Installation

Följ dessa steg för att komma igång med projektet lokalt:

1. **Klona repot:**
   ```bash
   git clone https://github.com/BenjaminBerhane/Healthtracker-v10.git
   cd Healthtracker-v10
   ```

2. **Installera beroenden:**
   ```bash
   npm install
   ```

3. **Starta utvecklingsservern:**
   ```bash
   npm run dev
   ```
   Applikationen kommer att köras lokalt (ofta på [http://localhost:5173](http://localhost:5173) eller annan specificerad port).

## Vanliga fel

Vid eventuella postCSS-fel, prova följande lösning:

1. Installera nödvändigt postCSS-tillägg:
   ```bash
   npm install -D @tailwindcss/postcss
   ```
2. Starta om utvecklingsservern:
   ```bash
   npm run dev
   ```

## Bygg för produktion

För att skapa en produktionsklar version av applikationen, kör:
```bash
npm run build
```
Detta kommando genererar en optimerad version i mappen `dist`.

## Bidra

Alla bidrag är välkomna! Om du vill bidra, följ dessa steg:

1. **Forka** repot.
2. Skapa en **ny gren** för din feature eller buggfix.
3. Skicka in en **pull request** med en detaljerad beskrivning av dina ändringar.

## Licens

Observera att ingen licens har specificerats i detta repository. Vänligen kontakta repository-ägaren för mer information om licensiering.

## Support

Har du frågor eller behöver hjälp med projektet? Öppna gärna en issue i repot så hjälper vi dig.

## Viktiga tillägg:
1. La till "Viktkurva" under funktioner för att markera den nya komponenten.
2. La till "Dark Mode" som en ny funktion.



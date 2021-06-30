# Histamin-Suche

# Pre-Requisites

Nothing. No seriously: No build tool needed. It's just vanilla javascript and basic HTML plus CSS - all in one file (except for the manifest and service worker file).

# Features

- Easy & fast search
- Offline available
- PWA: Install as app
- Dark mode
- Embed mode: Embed histamine search in your website and enable with `?embed=1`. This works best for sizes up to 800px and uses fullscreen instead of app-like overlays. See [embed readme](/embed/README.md) for more information.

# Commands

- `:alle`, `:listealle`, `:listall`: list all. Lists all data in the database
- `:frei`: Lists all data without histamine, other amine, liberator or blocker marker
- `:unbedenklich`, `:gut`, `:ok`: Lists all data with digestability score `0` and without histamine, other amine, liberator or blocker markers
- `:d`: digestability. Lists all data with the given digestability score. Use numbers `0`, `1`, `2`, `3` for the corresponding digestability score from `very good` to `very bad`. Example: `:d 0` will list every substance with digestability score `0 - very good`. Chain digestabilities to include more scores, e.g. `:d 0,1,2` will list scores `0`, `1` and `2` but filters out `4 - very bad`.
- `:c`: category. Lists all data with the given category, e.g. `Tierisch`,`Pflanzlich`,`Getränke`,`Zusatzstoffe`,`Zubereitungen`,`Vitamine, Mineralstoffe, Spurenelemente, Stimulantien`. Chain categories to include more, e.g. `:c Pflanzlich, Getränke` will include both categories and filter out the others.
- `:sc`: subcategory. Lists all data with the given subcategory, e.g. `Zusatzstoffe`,`Zubereitungen`,`Milchersatz`,`alkoholhaltige`,`Tee`,`Würzen, Gewürze`,`Wasser`,`Pilze und Algen`,`Süssungsmittel`,`Früchte`,`Samen, Kerne`,`Gemüse`,`Küchenkräuter`,`Nüsse`,`Fette und Öle`,
  `Meeresfrüchte`,`Stärkelieferanten`,`Fleisch`,`Fisch`,`Eier`,`Milchprodukte`,`Fruchtsäfte, Nektare`,`Gemüsesäfte`,`Koffeingetränke`,`Süssgetränke, Limonaden`,`Vitamine, Mineralstoffe, Spurenelemente, Stimulantien`
- `:h`: histamine. Lists all data with histamine marker
- `:a`: other amine. Lists all data with other amine marker
- `:l`: liberator. Lists all data with liberator marker
- `:b`: blocker. Lists all data with blocker marker
- `:halb`: Any combination of histamine, other amine, liberator and blocker can be used. In this case it lists all data with histamine or other amine or liberator or blocker marker

# Data source

- https://www.mastzellaktivierung.info/de/downloads.html#lebensmittelliste
- https://www.mastzellaktivierung.info/downloads/foodlist/11_FoodList_DE_alphabetisch_mitKat.pdf

See [app readme](/app/README.md) for more information on how to scrape the PDF data.

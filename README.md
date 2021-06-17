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

- `:la`: list all. Lists all data in the database
- `:d`: digestability. List all data with the given digestability score. Use numbers `0`, `1`, `2`, `3` for the corresponding digestability score from `very good` to `very bad`. Example: `:d 0` will list every substance with digestability score `0 - very good`. Chain digestabilities to include for more scores, e.g. `:d 0,1,2` will list scores `0`, `1` and `2` but filters out `4 - very bad`.

# Data source

- https://www.mastzellaktivierung.info/de/downloads.html#lebensmittelliste
- https://www.mastzellaktivierung.info/downloads/foodlist/11_FoodList_DE_alphabetisch_mitKat.pdf

See [app readme](/app/README.md) for more information on how to scrape the PDF data.

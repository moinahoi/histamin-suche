# Histamin-Suche

# Pre-Requisites

Nothing. No seriously: No build tool needed. It's just vanilla javascript and basic HTML plus CSS.

# Some usefull features

- Easy & fast search
- Offline available
- PWA: Install as app
- Dark mode
- Embed mode: Embed histamine search in your website and enable with `?embed=1`. This works best for sizes up to 800px and uses fullscreen instead of app-like overlays. See [embed readme](/embed/README.md) for more information.

# How to get histamine data, convert from PDF to CSV and convert to JSON

## Source data

- https://www.mastzellaktivierung.info/de/downloads.html#lebensmittelliste
- https://www.mastzellaktivierung.info/downloads/foodlist/11_FoodList_DE_alphabetisch_mitKat.pdf

## Convert from PDF to CSV

- Select all relevant PDF table content. I used MacOS Preview (PDF) for that.
- Paste into spread sheet editor. I used Google Spreadsheet.
- Clean the data:
  - Some entries did not copy, so do it manually
  - Header or columns used:
    ```
    "Id", "Main Category", "Subcategory", "Digestibility", "Histamine", "Other Amine", "Liberator", "Blocker", "Substance", "Comment"
    ```
  - `"Main Category"` and `"Subcategory"` must be filled manually by transforming the corresponding headlines to their column
  - I added an `"Id"` column for easier substance identification with unique Ids (e.g. ascending numbers starting with 1)
  - Some entries my not comply to the header columns which have to be fixed manually
  - Delete empty rows or rows filled with PDF-exported overhead
- Optional: For me, umlauts were encoded with the wrong symbol. I don't exactly know where this is coming from, but I had to search and replace for each umlaut to make the final data work with the search box.
- Export/Download as CSV. Use any separator that suits your needs. With comma, the CSV ended up with exclamation-escaped values where a comma itself is used. Hence I used a semi-colon via "csv Exporter" Add-On for Google Sheets

## Convert to JSON

- Use a csv2json converter for this task or write your own script (regex?). I used https://csvjson.com/csv2json which did the job with default settings. I added a header line which defines the keys in the resulting JSON:
  ```
  "id","category";"subcategory";"digestibility";"histamine";"otherAmine";  "liberator";"blocker";"substance";"comment"
  ```
- Example:
  - Input:
    ```
    "id","category";"subcategory";"digestibility";"histamine";"otherAmine";  "liberator";"blocker";"substance";"comment"
    1,Tierisch;Eier;2;;;L;;Eiklar, Eiweiss, Eiweiß;Vor allem roh, aber   sogar
    ```
  - Output:
    ```
    [
      {
        "id": 1,
        "category": "Tierisch",
        "subcategory": "Eier",
        "digestibility": 2,
        "histamine": "",
        "otherAmine": "",
        "liberator": "L",
        "blocker": "",
        "substance": "Eiklar, Eiweiss, Eiweiß",
        "comment": "Vor allem roh, aber sogar"
      }
    ]
    ```

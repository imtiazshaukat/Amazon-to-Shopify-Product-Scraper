Amazon to Shopify Product Scraper
This project is a simple JavaScript snippet that scrapes product data from an Amazon product page and formats it for Shopify-compatible CSV import. It extracts product details like title, price, description, and images — then generates structured JSON entries that can be used to populate a Shopify store.

🚀 Features
Extracts:

Product title

Product description

Price

"About this item" bullet points

Key product details (like material, care instructions, etc.)

Product images

Formats data into Shopify import structure

Skips the first image and generates a separate row for each additional image

Outputs structured JSON for easy CSV conversion

🧠 Use Case
This is especially useful when you're:

Dropshipping from Amazon

Importing data for product research

Bulk uploading products into Shopify with media assets

Automating store data entry

📦 Output Format (Example)
Each image (except the first) generates a new product row:

[
  {
    "Handle": "levi-mens-559-relaxed-jeans",
    "Title": "",
    "Body (HTML)": "",
    ...
    "Image Src": "https://m.media-amazon.com/images/I/41gS9EkxXqL._AC_SX385_.jpg",
    "Image Position": "2"
  },
  {
    "Handle": "levi-mens-559-relaxed-jeans",
    "Title": "",
    "Body (HTML)": "",
    ...
    "Image Src": "https://m.media-amazon.com/images/I/51ZLGapIQkL._AC_SX385_.jpg",
    "Image Position": "3"
  }
]

🛠 How to Use
Go to any Amazon product page (e.g., jeans, gadgets, kitchenware, etc.).

Open Developer Tools (Right click → Inspect → Console tab).

Paste the script from scraper.js into the console and hit Enter.

Copy the generated JSON output.

Convert it to CSV using any online tool or script.

Import it into your Shopify store.

📁 Files
Product_Scrapping.js — The core scraping script.

README.md — This documentation.

⚙️ Shopify CSV Reference
This script outputs JSON in a format compatible with Shopify's CSV product import format.

📜 License
MIT License — feel free to use and modify.

🙌 Contributions
Got improvements or want to add auto-CSV export? Feel free to fork this repo and submit a pull request!
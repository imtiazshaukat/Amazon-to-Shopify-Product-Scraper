(function () {
    function getText(selector) {
        const el = document.querySelector(selector);
        return el ? el.innerText.trim() : null;
    }

    const aboutThisItem = Array.from(
        document.querySelectorAll(
            "#productFactsDesktop_feature_div ul.a-unordered-list li span"
        )
    ).map((item) => item.innerText.trim());

    // Get price
    let priceWhole = document.querySelector('.a-price-whole')?.innerText?.replace(/[^\d]/g, '') || '0';
    let priceFraction = document.querySelector('.a-price-fraction')?.innerText?.replace(/[^\d]/g, '') || '00';
    let price = `${priceWhole}.${priceFraction}`;

    const title = getText('#productTitle');
    const description = getText('#productDescription');
    const color = getText('#variation_color_name .selection') || getText('#variation_color_name .a-dropdown-prompt') || getText('#inline-twister-expanded-dimension-text-color_name') ;
    const product_detail = getText('.a-expander-content.a-expander-partial-collapse-content.a-expander-content-expanded');
    const images = Array.from(document.querySelectorAll('#main-image-container img'))
        .slice(1)
        .map(img => img.getAttribute('src') || img.getAttribute('data-src'))
        .filter(Boolean);

    const shopifyFormatted = images.map((imgSrc, index) => {
        return {
            "Handle": title + " " + color,
            "Title": index === 0 ? title : "",
            "Body (HTML)": index === 0 ? product_detail + description : "",
            "Vendor": "",
            "Product Category": "",
            "Type": "",
            "Tags": "shorts_men",
            "Published": index === 0 ? "true" : "",
            "Option1 Name": index === 0 ? "Color" : "",
            "Option1 Value": index === 0 ? color : "",
            "Option1 Linked To": "",
            "Option2 Name": "",
            "Option2 Value": "",
            "Option2 Linked To": "",
            "Option3 Name": "",
            "Option3 Value": "",
            "Option3 Linked To": "",
            "Variant SKU": "",
            "Variant Grams": "",
            "Variant Inventory Tracker": index === 0 ? "shopify" : "",
            "Variant Inventory Qty": index === 0 ? "30" : "",
            "Variant Inventory Policy": index === 0 ? "deny" : "",
            "Variant Fulfillment Service": index === 0 ? "manual" : "",
            "Variant Price": index === 0 ? (price*3)+4.99 : "",
            "Variant Compare At Price": "",
            "Variant Requires Shipping": "",
            "Variant Taxable": "",
            "Variant Barcode": "",
            "Image Alt Text": "",
            "Gift Card": "",
            "SEO Title": "",
            "SEO Description": "",
            "Google Shopping / Google Product Category": "",
            "Google Shopping / Gender": "",
            "Google Shopping / Age Group": "",
            "Google Shopping / MPN": "",
            "Google Shopping / Condition": "",
            "Google Shopping / Custom Product": "",
            "Google Shopping / Custom Label 0": "",
            "Google Shopping / Custom Label 1": "",
            "Google Shopping / Custom Label 2": "",
            "Google Shopping / Custom Label 3": "",
            "Google Shopping / Custom Label 4": "",
            "Variant Image": "",
            "Variant Weight Unit": "",
            "Variant Tax Code": "",
            "Cost per item": "",
            "Status": "active",
            "Image Src": imgSrc,
            "Image Position": (index + 1).toString()
        };
    });

    console.log(JSON.stringify(shopifyFormatted, null, 2));
})();

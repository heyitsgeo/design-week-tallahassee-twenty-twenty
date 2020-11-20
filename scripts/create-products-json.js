const fs = require('fs');
const path = require('path');
const frontmatter = require('front-matter');
require('dotenv').config({
  path: `.env.development`
});

const SNIPCART_PRODUCT_JSON_URL = process.env.GATSBY_SNIPCART_PRODUCT_JSON_URL;

if (!SNIPCART_PRODUCT_JSON_URL) {
  throw new Error('SNIPCART_PRODUCT_JSON_URL is required.');
}

const getAllFiles = (dir) => {
  return fs.readdirSync(dir)
    .reduce((files, file) => {
      const name = path.join(dir, file);
      const stat = fs.statSync(name);
      const isDirectory = stat.isDirectory();
      return isDirectory ? [...files, ...getAllFiles(name)] : [...files, { name, stat }];
    }, []);
}

const productsPath = path.join(__dirname, '..', 'content', 'posts', 'products');

const getProductDetails = (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const content = frontmatter(buffer.toString());

  const {
    attributes
  } = content;

  if (attributes) {
    const {
      itemId,
      itemPrice,
      itemSizes,
      itemName,
      stock,
      dimensions
    } = attributes;

    const productDef = {
      id: itemId,
      price: itemPrice,
      url: SNIPCART_PRODUCT_JSON_URL,
      name: itemName
    }

    if (itemSizes && itemSizes.length > 0) {
      const sizeOptions = itemSizes[0]
        .split('|')
        .map(sizeOption => sizeOption.trim());

      productDef.inventoryManagementMethod = 'Variant';
      productDef.variants = sizeOptions.map(size => {
        return {
          variation: [
            {
              name: 'Size',
              option: size,
            }]
        };
      });
      productDef.customFields = [
        {
          name: "Size",
          options: sizeOptions.join('|'),
          type: 'dropdown'
        }
      ]
    }

    if (dimensions && dimensions.length > 0) {
      productDef.dimensions = {};
      productDef.dimensions.weight = dimensions[0].weight;
    }

    if (stock) {
      productDef.stock = stock;
    }

    return productDef;
  }
}

const products = getAllFiles(productsPath)
  .filter(file => {
    const extension = path.extname(file.name).replace('.', '');
    return extension === 'md';
  })
  .map(file => getProductDetails(file.name));

const outputDir = path.join(__dirname, '..', 'static', 'products.json');

const productsJson = JSON.stringify(products, null, 2);

fs.writeFileSync(outputDir, productsJson);

const pool = require("./pool");

//keep in mind that SELECT queries are going to be expensive so instead limit them to a small number
//Also products are dependent upon the page that the user is on which is the offset variable

async function getProducts(limit, offset) {}

async function getProduct(index) {}

async function insertProduct() {}

async function searchProductByQuery(query) {}

async function searchProductByCategory(category) {}

async function updateProduct(id, fields) {}

async function deleteProduct(index) {}

module.exports = {
  getProducts,
  insertProduct,
  getProduct,
  updateProduct,
  searchProductByCategory,
  searchProductByQuery,
  deleteProduct,
};

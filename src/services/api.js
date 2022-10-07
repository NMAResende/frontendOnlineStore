export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(url);
  const response = await request.json();
  return response;
}

getCategories();

export async function getProductsFromCategoryAndQuery(QUERY) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
}

getProductsFromCategoryAndQuery();

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}

export function filterByPrice(product, min, max) {
  if ("price" in product && product.price > min && product.price < max) {
    return true;
  } else {
    return false;
  }
}

export function filterByCategory(product, category) {
  if ("category" in product === category) {
    return true;
  } else {
    return false;
  }
}

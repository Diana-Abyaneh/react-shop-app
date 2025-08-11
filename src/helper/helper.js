const createQueryObject = (currentQuery, newQuery) => {
  let updatedQuery = { ...currentQuery };

  if (newQuery.category !== undefined) {
    if (newQuery.category === "all") {
      delete updatedQuery.category;
    } else {
      updatedQuery.category = newQuery.category;
    }
  }

  if (newQuery.search !== undefined) {
    if (newQuery.search.trim() === "") {
      delete updatedQuery.search;
    } else {
      updatedQuery.search = newQuery.search;
    }
  }

  return updatedQuery;
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id == id);
  if (index === -1) return 0;
  else return state.selectedItems[index].quantity;
};

export { createQueryObject, getInitialQuery, sumProducts, productQuantity };

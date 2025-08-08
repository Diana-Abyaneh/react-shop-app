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

export { createQueryObject, getInitialQuery };

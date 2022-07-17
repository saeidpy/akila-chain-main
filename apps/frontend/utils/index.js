export const groupByCategory = (products,key) =>
  products?.reduce((group, product) => {
    const  type  = product?.[key];
    group[type] = group[type] ?? [];
    group[type].push(product);
    return group;
  }, {});

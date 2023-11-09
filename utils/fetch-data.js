export const getCategory = async () => {
  const response1 = await fetch("http://localhost:8000/api/v1/category/");
  const category = response1.json();
  return category;
};

export const getSubcat = async () => {
  const response1 = await fetch("http://localhost:8000/api/v1/subcategory/");
  const subcat = response1.json();
  return subcat;
};

export const getDua = async () => {
  const response1 = await fetch("http://localhost:8000/api/v1/dua/");
  const dua = response1.json();
  return dua;
};

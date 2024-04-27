

export const filteredCategory = (arrCategorys: any[]) => {
  return arrCategorys.filter(
    (collection) => collection.rules.length === 1 && collection.rules[0].condition !== "Accesorios"
  );
}


export const filteredSubCategory = (category: string, arrCategorys: any[]) => {
  return arrCategorys.filter(
    (collection) =>
      collection.rules.some((rule: { condition: string; }) => rule.condition === category) &&
      collection.rules.length > 1
  );
}
interface PropsCategory {
  categories: string[];
}

export const capitalizeFirstLetter = ({categories}:PropsCategory) => {
  return categories[0].charAt(0).toUpperCase() + categories[0].slice(1);
};

const search = (arr, searchString) => {
  return arr.filter((val) => val.name.toLowerCase().includes(searchString));
};

export default search;

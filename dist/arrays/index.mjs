// src/arrays/chunk.ts
function chunk(array, size) {
  if (!Array.isArray(array))
    throw new Error("First argument must be an array");
  if (size < 1)
    throw new Error("Size must be greater than 0");
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// src/arrays/unique.ts
function unique(array) {
  return [...new Set(array)];
}

// src/arrays/groupBy.ts
function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey])
      acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});
}
export {
  chunk,
  groupBy,
  unique
};
//# sourceMappingURL=index.mjs.map
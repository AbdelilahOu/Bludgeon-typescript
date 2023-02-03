<<<<<<< HEAD
export const serializeBigInt = (obj: { [key: string]: any }) => {
  const serialized = JSON.parse(
    JSON.stringify(obj, (_key, value) => {
      return typeof value === "bigint" ? Number(value.toString()) : value; // return everything else unchanged
    })
  );
  return serialized;
};
=======
export const serializeBigInt = (obj: { [key: string]: any }) => {
  const serialized = JSON.parse(
    JSON.stringify(obj, (_key, value) => {
      return typeof value === "bigint" ? Number(value.toString()) : value; // return everything else unchanged
    })
  );
  return serialized;
};
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834

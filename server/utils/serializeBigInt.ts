export const serializeBigInt = (obj: { [key: string]: any }) => {
  const serialized = JSON.parse(
    JSON.stringify(obj, (_key, value) => {
      return typeof value === "bigint" ? Number(value.toString()) : value; // return everything else unchanged
    })
  );
  return serialized;
};

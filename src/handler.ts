export const graphql = async (args: any) => {
  console.log(args);

  if (args.typeName === "Composite") {
    return {
      name: "dead end",
    };
  }
  return {
    name: new Date().toISOString(),
  };
};

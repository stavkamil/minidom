const createElement = (
  tagName: string,
  { attributes = {}, children = [] }: any = {}
) => {
  return {
    tagName,
    attributes,
    children,
  };
};

export default createElement;

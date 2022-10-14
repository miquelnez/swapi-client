export const getId = (url: string) => {
  const regex = /\d+/gm;
  const results = regex.exec(url); // url.match('\d+\');
  let id: number | undefined = undefined;
  if (results !== null) id = Number(results[0]);
  return id;
};

import { titleize } from "./strings";

const removeTrailingSlash = (s: string) => {
  const lastIndex = s.length - 1;
  if (lastIndex < 1) return s;
  if (s[lastIndex] === "/") return s.substring(0, lastIndex);
  return s;
};

const readableFileName = (fileName: string) => {
  let startIndex = fileName.lastIndexOf("/");
  let endIndex = fileName.lastIndexOf(".");
  if (endIndex === -1) endIndex = fileName.length - 1;
  let name = fileName.substring(startIndex + 1, endIndex + 1);

  name = name.replaceAll(/[_\.]/g, " ");

  const array = name.split("");
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] === "-" && array[i - 1] !== " " && array[i + 1] !== " ") {
      array[i] = " ";
    }
  }
  name = array.join("");

  name.replaceAll(/\s{2,}/g, " ");
  name = titleize(name);

  return name;
};

export { removeTrailingSlash, readableFileName };

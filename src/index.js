const fs = require("fs/promises"); // node's built-in package
const path = require("path"); // node's built-in package
const { variants } = require("@catppuccin/palette");
const renderCssStyles = require("./jssStyles");
const renderXmlStyles = require("./xmlStyles");

const writeToFile = (filename, data) => {
  fs.writeFile(path.resolve(__dirname, `../dist/${filename}`), data)
    .then(() => console.log(`${filename} build succeeded!`))
    .catch((e) => console.log(e));
};

for (let key in variants) {
  writeToFile(`${key}-chroma-style.css`, renderCssStyles(key));
  writeToFile(`${key}-chroma-style.xml`, renderXmlStyles(key, variants[key]));
}

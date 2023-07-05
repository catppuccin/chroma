const { Eta } = require("eta");

const eta = new Eta({ views: __dirname, useWith: true });

const renderXmlStyles = (variantName, variantObj) => {
  return eta.render("chroma-style.xml.eta", { variantName: variantName, variant: variantObj });
};

module.exports = renderXmlStyles;

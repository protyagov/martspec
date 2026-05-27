const HtmlWebpackPlugin = require("html-webpack-plugin");

const LANGUAGES = ["ar", "de", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh", "uk"];
//const LANGUAGES = ["en", "ru"];

const ROUTES = [
  { template: "main", output: "" },

  { template: "bodymass", output: "bodymass" },
  { template: "iron", output: "iron" },
  { template: "calcium", output: "calcium" },
  { template: "electrolyte", output: "electrolyte" },
  { template: "magnesium", output: "magnesium" },
  { template: "vitamin", output: "vitamin" },
  { template: "waistline", output: "waistline" },
  { template: "bodyzinc", output: "bodyzinc" },
  { template: "bodysize", output: "bodysize" },

  { template: "emotion", output: "emotion" },
  { template: "emotion/biorhythms", output: "emotion/biorhythms" },
  { template: "emotion/anxiety", output: "emotion/anxiety" },
  { template: "emotion/harmony", output: "emotion/harmony" },
  { template: "emotion/independence", output: "emotion/independence" },
  { template: "emotion/productivity", output: "emotion/productivity" },
  { template: "emotion/energy", output: "emotion/energy" },
  { template: "emotion/openness", output: "emotion/openness" },
  { template: "emotion/color-test", output: "emotion/color-test" },

  { template: "about", output: "about" },
  { template: "pp", output: "privacy-policy" },
  { template: "team", output: "team" },
  { template: "careers", output: "careers" },

  { template: "bodysize/adonis", output: "bodysize/adonis" },

  // Vitamins
  ...[
    "vitamin_a",
    "vitamin_d",
    "vitamin_e",
    "vitamin_k",
    "vitamin_b1",
    "vitamin_b2",
    "vitamin_b3",
    "vitamin_b5",
    "vitamin_b6",
    "vitamin_b7",
    "vitamin_b9",
    "vitamin_b12",
    "vitamin_c",
  ].map((x) => ({
    template: `vitamin/${x}`,
    output: `vitamin/${x}`,
  })),

  ...[
    "calcium",
    "chloride",
    "chrome",
    "copper",
    "iodine",
    "iron",
    "magnesium",
    "manganese",
    "molybdenum",
    "phosphorus",
    "potassium",
    "selenium",
    "sodium",
    "zinc",
    "acai",
    "turmeric",
    "lion",
    "ginko",
    "collagen",
  ].map((x) => ({
    template: `vitamin/${x}`,
    output: `vitamin/${x}`,
  })),

  // Careers
  ...[
    "business-analyst",
    "copywriter",
    "designer",
    "frontend-engineer",
    "ios-engineer",
    "qa-engineer",
    "marketologist",
  ].map((x) => ({
    template: `career/${x}`,
    output: `careers/${x}`,
  })),
];

function createHtmlPlugin(lang, route, flat = false) {
  const template = `./src/template/${lang}/${route.template}.ejs`;

  let filename;

  // Main page
  if (route.output === "") {
    if (flat) {
      filename = lang === "en" ? "index.html" : `${lang}.html`;
    } else {
      filename = lang === "en"
        ? "index.html"
        : `${lang}/index.html`;
    }
  } else {
    if (flat) {
      filename = `${lang}/${route.output}.html`;
    } else {
      filename = `${lang}/${route.output}/index.html`;
    }
  }

  return new HtmlWebpackPlugin({
    template,
    filename,
    inject: "body",
  });
}

const htmlPlugins = LANGUAGES.flatMap((lang) => [
  ...ROUTES.map((route) => createHtmlPlugin(lang, route, false)),
  ...ROUTES.map((route) => createHtmlPlugin(lang, route, true)),
]);

module.exports = htmlPlugins;
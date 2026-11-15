const HtmlWebpackPlugin = require("html-webpack-plugin");

const LANGUAGES = ["ar", "de", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh", "uk"];
//const LANGUAGES = ["en", "ru"];

const ROUTES = [
    { template: "main", output: "" },

    { template: "bodymass", output: "bodymass" },
    { template: "iron", output: "iron" },
    { template: "calcium", output: "calcium" },
    { template: "protein", output: "protein" },
    { template: "electrolyte", output: "electrolyte" },
    { template: "magnesium", output: "magnesium" },
    { template: "vitamin", output: "vitamin" },
    { template: "vitamin/capsules", output: "vitamin/capsules" },
    { template: "vitamin/bone-health", output: "vitamin/bone-health" },
    { template: "waistline", output: "waistline" },
    { template: "bodyzinc", output: "bodyzinc" },
    { template: "bodysize", output: "bodysize" },
    { template: "workout", output: "workout" },

    { template: "emotion", output: "emotion" },
    { template: "emotion/biorhythms", output: "emotion/biorhythms" },
    { template: "emotion/anxiety", output: "emotion/anxiety" },
    { template: "emotion/harmony", output: "emotion/harmony" },
    { template: "emotion/independence", output: "emotion/independence" },
    { template: "emotion/productivity", output: "emotion/productivity" },
    { template: "emotion/energy", output: "emotion/energy" },
    { template: "emotion/openness", output: "emotion/openness" },
    { template: "emotion/5-habits", output: "emotion/5-habits" },
    { template: "emotion/color-test", output: "emotion/color-test" },

    { template: "about", output: "about" },
    { template: "pp", output: "privacy-policy" },
    { template: "team", output: "team" },
    { template: "careers", output: "careers" },
    { template: "JobScamProtection", output: "careers/scam-protection" },

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
        "ashwagandha",
        "astragalus",
        "maca",
        "chaga",
        "fireweed",
        "tremella",
        "kombucha",
        "cocoa",
        "turkey_tail",
        "cordyceps",
        "reishi",
        "red-light-therapy",
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

function createHtmlPages(lang, route, flat = false) {
    // Both layouts use the same filenames for the English homepage.
    if (flat && lang === "en" && route.output === "") return [];

    const template = `./src/template/${lang}/${route.template}.ejs`;

    let targetPaths = [];

    // Main page
    if (route.output === "") {
        if (flat) {
            targetPaths.push(lang === "en" ? "index.html" : `${lang}.html`);
            if (lang === "en") targetPaths.push("en/index.html");
        } else {
            targetPaths.push(lang === "en" ? "index.html" : `${lang}/index.html`);
            if (lang === "en") targetPaths.push("en/index.html");
        }
    } else {
        if (flat) {
            targetPaths.push(lang === "en" ? `${route.output}.html` : `${lang}/${route.output}.html`);
            if (lang === "en") targetPaths.push(`en/${route.output}.html`);
        } else {
            targetPaths.push(lang === "en" ? `${route.output}/index.html` : `${lang}/${route.output}/index.html`);
            if (lang === "en") targetPaths.push(`en/${route.output}/index.html`);
        }
    }

    return targetPaths.map((filename) => ({ template, filename }));
}

const pages = LANGUAGES.flatMap((lang) => [
    ...ROUTES.flatMap((route) => createHtmlPages(lang, route, false)),
    ...ROUTES.flatMap((route) => createHtmlPages(lang, route, true)),
]);

// Each template produces identical HTML at several paths. Render it once and
// emit the other paths after HtmlWebpackPlugin has finished processing it.
const pagesByTemplate = new Map();
for (const { template, filename } of pages) {
    if (!pagesByTemplate.has(template)) pagesByTemplate.set(template, []);
    pagesByTemplate.get(template).push(filename);
}

class CopyHtmlPagesPlugin {
    apply(compiler) {
        compiler.hooks.thisCompilation.tap("CopyHtmlPagesPlugin", (compilation) => {
            compilation.hooks.processAssets.tap(
                {
                    name: "CopyHtmlPagesPlugin",
                    stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE + 1,
                },
                () => {
                    for (const filenames of pagesByTemplate.values()) {
                        const [original, ...copies] = filenames;
                        const asset = compilation.getAsset(original);
                        if (!asset) {
                            compilation.errors.push(new Error(`Missing generated HTML: ${original}`));
                            continue;
                        }
                        for (const filename of copies) {
                            compilation.emitAsset(filename, asset.source, asset.info);
                        }
                    }
                }
            );
        });
    }
}

module.exports = [
    ...Array.from(pagesByTemplate, ([template, [filename]]) =>
        new HtmlWebpackPlugin({ template, filename, inject: "body" })
    ),
    new CopyHtmlPagesPlugin(),
];

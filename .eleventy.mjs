export default function (eleventyConfig) {
    eleventyConfig.setLibrary("md", require("markdown-it")({
        html: true,
        linkify: true,
        typographer: false,
    }));

    return {
        dir: {
            input: "docs",
            output: "_site",
            includes: "../_includes",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};

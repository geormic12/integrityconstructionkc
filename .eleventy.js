const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("pathPrefix", pathPrefix);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

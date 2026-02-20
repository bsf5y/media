const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Cache-busting filter: appends content hash as query parameter
  eleventyConfig.addFilter("cacheBust", (url) => {
    const filePath = path.join(__dirname, "src", url);
    try {
      const content = fs.readFileSync(filePath);
      const hash = crypto.createHash("md5").update(content).digest("hex").slice(0, 8);
      return `${url}?v=${hash}`;
    } catch {
      return url;
    }
  });
  eleventyConfig.addPassthroughCopy("public");

  // Watch for CSS/JS changes
  eleventyConfig.addWatchTarget("src/assets/");

  // Add date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("date", (value, format) => {
    const date = value === "now" ? new Date() : new Date(value);
    if (format === "%Y") return date.getFullYear();
    return date.toISOString();
  });

  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Blog collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md").reverse();
  });

  // Markdown configuration
  const markdownIt = require("markdown-it");
  const md = markdownIt({ html: true, linkify: true });
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

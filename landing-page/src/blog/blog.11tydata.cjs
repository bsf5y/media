module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      if (data.draft && process.env.ELEVENTY_RUN_MODE !== "serve") return false;
      return data.permalink;
    }
  }
};

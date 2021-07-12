module.exports = {
  title: "Melissa Rasmussen",
  description: "Professional profile of physicist Melissa Rasmussen",
  head: [["link", { rel: "icon", href: `/profile.jpg` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Interests", link: "/interests/" },
      { text: "CV", link: "https://docs.google.com/document/d/1eK5UpCMqtFv12gf8gsUXQelQmPR29Zx78LEHnsLgJCA/edit?usp=sharing" },
    ],
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
}


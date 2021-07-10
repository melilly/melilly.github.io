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
      { text: "Experience", link: "/projects/" },
      { text: "Specialties", link: "/projects/" },
      { text: "More", link: "/guide/projects" },
      { text: "CV", link: "https://github.com/melilly/melilly.github.io" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig()
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig () {
  return [
    {
      collapsable: false,
      children: [
        'projects',
        'education',
        'awards',
      ]
    }
  ]
}


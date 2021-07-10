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
      { text: "Experience", link: "/experience/" },
      { text: "Specialties", link: "/specialties/" },
      { text: "More", link: "/more/projects" },
    ],
    sidebar: {
      '/more/': genSidebarConfig()
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


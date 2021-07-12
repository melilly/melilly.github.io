---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Melissa Rasmussen'
info: 'Physics Undergraduate at Utah State University'
interests: 'Interests: Quidditch and Wizard chess.'
socials:
- title: github
  link: https://github.com/melilly
- title: linkedin
  link: https://www.linkedin.com
- title: instagram
  link: https://www.instagram.com
- title: email
  link: 'mailto:melissa.rasmussen[at]aggiemail.usu.edu'
actions:
- text: Projects
  link: /experience/
- text: CV
  link: https://docs.google.com/document/d/1eK5UpCMqtFv12gf8gsUXQelQmPR29Zx78LEHnsLgJCA/edit?usp=sharing
footer: Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I attended [Hogwarts School of Witchcraft and Wizardry](https://en.wikipedia.org/wiki/Hogwarts) to study witchcraft, supervised by **Dumbledore** and other professors. I'm trying my best to battle with Lord Voldemort, the evil Wizard that we all fear. My research area includes Defence Against the Dark Arts and other magic. 

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>
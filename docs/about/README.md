---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Melissa Rasmussen'
info: 'Physics Undergraduate at Utah State University'
interests: 'Interests: Computational astrophysics, STEM outreach.'
socials:
- title: github
  link: https://github.com/melilly
- title: linkedin
  link: https://www.linkedin.com/in/melissa-ann-rasmussen
- title: email
  link: 'mailto:melissa.rasmussen@aggiemail.usu.edu'
actions:
- text: Projects
  link: /projects/
- text: CV
  link: https://docs.google.com/document/d/1eK5UpCMqtFv12gf8gsUXQelQmPR29Zx78LEHnsLgJCA/edit?usp=sharing
footer: Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

A senior in physics and computer science at USU, I enjoy computational physics research and am passionate about spreading the love of science to kids and young adults. I aim to matriculate in a physics PhD program in fall 2022, so I am looking for a place where my strong computer skills and fascination with the exoticism of space will be a boon.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>
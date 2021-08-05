---
pageClass: home-page
# some data for the components

name: Melissa Rasmussen
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/melilly
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/melissa-ann-rasmussen/

cv: https://docs.google.com/document/d/1eK5UpCMqtFv12gf8gsUXQelQmPR29Zx78LEHnsLgJCA/edit?usp=sharing
bio: Physics Undergraduate at Utah State University
email: melissa.rasmussen@aggiemail.usu.edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I'm a fourth-year undergraduate student, double majoring in [physics](https://catalog.usu.edu/preview_program.php?catoid=12&poid=9639) and [computer science](https://catalog.usu.edu/preview_program.php?catoid=12&poid=9373) at Utah State University.

I've contributed to a number of research projects, from computer science middle school curriculum to gamma-ray pulsars, to explore and expand my research capabilities. 

I plan to focus my expertise into computational physics research - simulations, visualizations, analysis of large datasets. I aim to begin a PhD in physics in fall 2022. 

My extra energies are put toward efforts of STEM outreach via fun and engaging puzzles for the analytical mind. I want to provide the opportunities to explore scientific problems that I would have enjoyed as a young child. 


## News

- [June 2021] [NSF/GPAP Summer School](https://www.gpapschool.com/) completed, on plasma physics for astrophysicists
- [June 2021] Tabletop Games paper accepted to Computer Science Education journal
- [May 2021] Internship begun at Stony Brook University
- [April 2021] Scholarships received from USU's College of Science, Department of Physics, and Department of Computer Science
- [February 2021] Requirements completed for Space Dynamics Laboratory's [Student Scholar Program](https://www.usu.edu/today/story/space-dynamics-laboratory-recognizes-student-scholars)
- [January 2021] Poster presented on gamma-ray pulsars at 237th American Astrophysical Society meeting


## Education

- **B.S. Physics, B.S. Computer Science** - Utah State University <br/>
Sept 2018 - May 2022


## Projects


[→ Full list](/projects/)

<ProjectCard>

  **Examining Reaction Networks used in Convection Models in Helium Shells of Sub-Chandrasehkar White Dwarfs**
  
  This project simulates the explosion of a dense white dwarf star. In the model, a helium layer surrounds the star. Initial ignition of the helium layer can cause the helium, then the star itself, to burn and explode as a type of supernova. Computer simulations of this phenomemon, by necessity, ignore elements or chemical reactions, in order to simplify the problem enough to be tractable. In this work, I explore the sensitivity of the explosion to such modifications by comparing complicated simulations with their simpler counterparts.

  [Simulation Code](https://github.com/AMReX-Astro/Castro)

</ProjectCard>


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>

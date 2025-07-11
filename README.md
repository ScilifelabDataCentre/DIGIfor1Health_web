The repository DIGIfor1Health_web is a customized version of the Type-on-Strap Jekyll theme. <br>
The website resulting from this repository is available on digifor1health.se and it is serving this project for higlighting their work, reporting, events etc.<br>
Below is a detailed comparison highlighting the modifications made to the original Type-on-Strap repository <br>
to develop the DIGIfor1Health_web project.

1. Content Modifications:

    * Main (Hem) Page:<br>
       in _config.yml - updated title, description and feature photo; replaced footer with a collection of icons of the flexible size adapting to page size (e.g. mobile)<br>
       index.html - contains the home page content devided in containers to alternate images and text.<br>

   * Posts and Pages:<br>
        The _pages directory in DIGIfor1Health_web contains items specific to the DIGIfor1Health project, replacing the placeholder content from Type-on-Strap.<br>
        _includes/header.html : Added new static pages such as about (Aktuellt), contact (Kontakt), and projects (Projekt) have been added or customized to reflect the project's information.<br>
        Removed all the other pages and tabs<br>

3. Configuration Changes:<br>

    * Site Settings (_config.yml):<br>
        Title and Description: Updated to "DIGIfor1Health" with a description provided by project leader.<br>
        URL and Base URL: Configured to match the deployment environment of DIGIfor1Health.<br>
        Social Media Links: temporary removed.<br>

   * Adaptation to mobile devices:<br>
       CSS flexbox added in _scss/_custom.scss, _layout.scss, index.html and _footer.scss, including flex-wrap (directing to column for narrow screen and side-by-side on wider screens)<br>
       in: _navigation.scss and _sass/includes - added flex display and fixed hamburger menu for smaller screens<br>

5. Design and Layout Adjustments:<br>

    * Branding:<br>
        Logos, color schemes, and fonts have been modified to align with DIGIfor1Health's (SciLifeLab) graphical guidelines.<br>
      favicon was changed to SciLifeLab icon (_config.yml)<br>

    * Layouts:<br>
      added _sass/_custom.scss file to overwite pages layouts:<br>
         added flex container to adjust the content to the ecreen width with responsive adjustment, both for text and images<br>
         as above for footer<br>
         defined hamburger menu<br>
         changed padding and background for pages<br>
         changed fonts<br>
         buttons styling<br>
       
      Modifications in the _layouts directory have been made to adjust the structure and appearance of pages, ensuring consistency with the project's design aesthetics.<br>


6. Assets and Media:<br>

    Images:<br>
        The assets/img directory has been populated with images, logos, and graphics relevant to DIGIfor1Health.<br>

    Scripts and Styles:<br>
        Custom JavaScript and CSS files have been added or modified to enhance functionality and styling specific to the project's needs.<br>

7. Plugins and Dependencies:<br>

    Gemfile:<br>
        The Gemfile has been updated to include Jekyll plugins and dependencies required for additional functionalities, such as SEO optimization and sitemap generation.<br>

8. Localization:<br>

    Language Support:<br>
        The repository includes directories like en to support multiple languages. However, this feature was not yet utilised. Instead, language icon leads to the static page announcing future English version.<br>

These modifications transform the generic Type-on-Strap theme into a customized website that effectively represents the DIGIfor1Health project's objectives and branding.<br>

Full list of modified files (A = Added, M = Modified, D = Deleted):<br>
A	.github/ISSUE_TEMPLATE/question.md<br>
M	.github/hooks/pre-commit<br>
M	.github/labeler.yml<br>
R100	.github/workflows/ruby-2.7.4/Gemfile	.github/workflows/Gemfile<br>
R098	.github/workflows/ruby-2.7.4/Gemfile.lock	.github/workflows/Gemfile.lock<br>
D	.github/workflows/build.yml
M	.github/workflows/gem-build.yml
D	.github/workflows/gem-github-page.yml
R070	.github/workflows/docker-build.yml	.github/workflows/jekyll-build.yml
M	.github/workflows/labeler.yml
M	.github/workflows/publish-build.yml
A	.github/workflows/workflow-test.yml
M	Gemfile
M	LICENSE
M	README.md
M	_config.yml
M	_data/menu.yml
M	_data/social.yml
M	_includes/aligner.html
R092	_includes/default/search_json.liquid	_includes/default/search_input.liquid
M	_layouts/categories.liquid
M	_layouts/default.html
M	_layouts/home.liquid
M	_layouts/page.liquid
D	_posts/2013-10-18-blogging-with-title.md
D	_posts/2014-08-08-Markup-Syntax-Highlighting.md
D	_posts/2014-11-26-lorem-ipsum.md
D	_posts/2014-11-27-whats-your-title.md
D	_posts/2014-11-28-markdown-and-html.md
D	_posts/2016-12-03-Mermaid.md
D	_posts/2017-09-17-Use-Bootstrap.md
M	_posts/2018-10-29-feature-images.md
D	_posts/2019-05-18-color-post.md
D	_posts/2019-06-30-sample-post.md
D	_posts/2019-11-02-Tech-stuff-example.md
D	_posts/2021-04-27-dark-mode.md
A	_posts/2024-04-16-project-update.md
A	_sass/_custom.scss
M	_sass/base/_global.scss
M	_sass/external/_katex.scss
D	_sass/includes/_aligner.scss
M	_sass/layouts/_page.scss
M	_sass/type-on-strap.scss
M	assets/Dockerfile
M	assets/data/search.liquid
A	assets/img/SciLifeLab.jpg
A	assets/img/feature-img/DIGIfor1Health_collab.png
A	assets/img/feature-img/lab_desk.jpeg
A	assets/img/header/human_D.jpeg
A	assets/img/pexels/connect_D_c1.jpeg
A	assets/img/pexels/digi_D_o.jpeg
A	assets/img/pexels/globe_R.jpeg
A	assets/img/pexels/project_R_p.jpeg
A	assets/img/thumbnails/feature-img/lab_desk.jpeg
M	index.html
M	pages/about.md
M	pages/categories.md
A	pages/contact.md
M	pages/gallery.md
A	pages/outputs.md
M	pages/portfolio.md
A	pages/projects.md
M	pages/tags.md
M	type-on-strap.gemspec

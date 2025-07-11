The repository DIGIfor1Health_web is a customized version of the Type-on-Strap Jekyll theme. <br>
The website resulting from this repository is available on digifor1health.se and it is serving this project for higlighting their work, reporting, events etc.<br>
Below is a comparison highlighting the main modifications made to the original Type-on-Strap repository <br>
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


List of modified files (A = Added, M = Modified, D = Deleted):<br>

A pages/projects.md<br>
A pages/contact.md<br>
A _data/language.yml<br>
A _sass/_custom.scss<br>
A assets/img/footer_logo_combined.png<br>
A assets/img/homepage_section1.jpg<br>
A assets/img/homepage_section2.jpg<br>
A assets/img/homepage_section3.jpg<br>
A assets/img/homepage_section4.jpg<br>
A assets/img/Digifor1Health_NyaBubblor20240408_2.jpg<br>
A assets/img/Digifor1Health_NyaBubblor20240408_3.jpg<br>
A assets/img/Picture_Om_Oss.jpg<br>
A assets/img/SciLifeLab.ico<br>
A assets/img/connections.jpeg<br>
A assets/img/Vinnova.png<br>
A assets/img/gms_logo.png<br>
A assets/img/ki_logo.png<br>
A assets/img/kth_logo.png<br>
A assets/img/scilifelab_logo.png<br>
A assets/img/umu_logo.png<br>
A assets/img/uu_logo.png<br>
A assets/img/vinnova_logo.png<br>
A assets/img/logo1.png<br>
A assets/img/logo2.png<br>
A assets/img/logo3.png<br>
A assets/img/logo4.png<br>
A assets/img/logo5.png<br>
A assets/img/logo6.png<br>
A assets/img/logoB.png<br>
A assets/img/SciLifeLab.jpg<br>
A assets/img/DIGIfor1Health_footers.png<br>
A assets/img/pexels/connect_D_c1.jpeg<br>
A assets/img/pexels/digi_D_o.jpeg<br>
A assets/img/pexels/dots.jpeg<br>
A assets/img/pexels/project_R_p.jpeg<br>
A assets/img/pexels/globe_R.jpeg<br>
A assets/img/contact-logos/EGDI logo_2.png<br>
A assets/img/contact-logos/GOE_logo_flat.jpg<br>
A assets/img/contact-logos/HDS logotype_landscape.jpg<br>
A assets/img/contact-logos/LOGO_EUCAI.png<br>
A assets/img/contact-logos/gms logo.png<br>
A assets/img/contact-logos/tefs-maybefinals_tef-image-black-horizontal.png<br>
A assets/img/feature-img/DIGIfor1Health_collab.png<br>
A assets/img/feature-img/Inhand_D1.jpeg<br>
A assets/img/feature-img/Inhand_Da.jpeg<br>
A assets/img/feature-img/Labview_Da.jpeg<br>
A assets/img/feature-img/skeleton_D.jpeg<br>
A assets/img/feature-img/tablet_Da.jpeg<br>
A assets/img/header/Bubblor_2-medium.jpg<br>
A assets/img/header/Bubblor_2-small.jpg<br>
A assets/img/header/Bubblor_2.jpg<br>
A assets/img/header/header_bubblor.jpg<br>
A assets/img/header/header_bubblor_T-medium.jpg<br>
A assets/img/header/header_bubblor_T-small.jpg<br>
A assets/img/header/header_bubblor_T.jpg<br>
A assets/img/header/human_D-medium.jpeg<br>
A assets/img/header/human_D-small.jpeg<br>
A assets/img/header/human_D.jpeg<br>
M _config.yml<br>
M index.html<br>
M _includes/default/footer.liquid<br>
M _includes/header.html<br>
M _layouts/home.liquid<br>
M _sass/includes/_footer.scss<br>
M _sass/includes/_layout.scss<br>
M _sass/includes/_navigation.scss<br>
M _sass/includes/_variables.scss<br>
M README.md<br>
D pages/gallery.md<br>
D pages/portfolio.md<br>
D pages/search.md<br>
D pages/tags.md<br>
D _data/authors.yml<br>
D _data/biblio.yml<br>
D _data/icons.yml<br>
D _data/social.yml<br>

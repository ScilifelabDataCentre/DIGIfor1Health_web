---
layout: page
title: Resultat
permalink: /outputs/
position: 3
feature-img: "assets/img/feature-img/lab_desk.jpeg"
bootstrap: true
---
<!-- Top navigation boxes -->
<div class="outputs-nav-boxes">
  <a href="#evenemang" class="outputs-nav-box">
    <span class="outputs-nav-box-title">Evenemang</span>
    <img src="{{ '/outputs/assets/img/Events_v2a.jpg' | relative_url }}" alt="Evenemang" class="outputs-nav-box-img">
  </a>
  <a href="#rapporter" class="outputs-nav-box">
    <span class="outputs-nav-box-title">Rapporter</span>
    <img src="{{ '/outputs/assets/img/Resultat_v1.jpg' | relative_url }}" alt="Rapporter" class="outputs-nav-box-img">
  </a>
  <a href="#ingående-projekt" class="outputs-nav-box">
    <span class="outputs-nav-box-title">Ingående projekt</span>
    <img src="{{ '/outputs/assets/img/Projects_v1.jpg' | relative_url }}" alt="Ingående projekt" class="outputs-nav-box-img">
  </a>
</div>

<!-- Four text boxes with centered image layout -->
<div class="outputs-top-layout">
  <!-- Left column: Two text boxes stacked -->
  <div class="outputs-text-box-column">
    <div class="outputs-text-box" onclick="showPopup('popup1')">
      <div>Overarching goals and strategic approach are needed for managing health data in Sweden, even towards the European Health Data Space (EHDS)</div>
    </div>
    <div class="outputs-text-box" onclick="showPopup('popup2')">
      <div>Practical steps and structures required to build a functional and unified health data system</div>
    </div>
  </div>
  
  <!-- Center: Image -->
  <div class="outputs-image-container">
    <img src="{{ '/outputs/assets/img/Puzzles_eng.png' | relative_url }}" alt="DIGIfor1Health Puzzle Pieces">
  </div>
  
  <!-- Right column: Two text boxes stacked -->
  <div class="outputs-text-box-column">
    <div class="outputs-text-box" onclick="showPopup('popup3')">
      <div>Need for collaboration, clear leadership, and stakeholder involvement</div>
    </div>
    <div class="outputs-text-box" onclick="showPopup('popup4')">
      <div>Resources and mindset shifts needed for the transformation of the health data landscape</div>
    </div>
  </div>
</div>

<!-- Popup Modal -->
<div id="outputs-popup-overlay" class="outputs-popup-overlay" onclick="closePopup()">
  <div class="outputs-popup-content" onclick="event.stopPropagation()">
    <span class="outputs-popup-close" onclick="closePopup()">&times;</span>
    <div id="outputs-popup-text"></div>
  </div>
</div>

<script>
function showPopup(text) {
    var popup = document.getElementById('outputs-popup-overlay');
    var popupText = document.getElementById('outputs-popup-text');
    
    // Set the popup text based on which box was clicked
    var popupContent = {
        'popup1': '<h3 style="color: #045C64; margin-top: 0; margin-bottom: 15px;">Vision & Strategy</h3><p style="margin-bottom: 15px;">The overarching goals and strategic approach for managing health data in Sweden towards the European Health Data Space (EHDS).</p><ul style="text-align: left; padding-left: 20px;"><li style="margin-bottom: 10px;">There is an urgent need for a coherent system that enables the use of health data to drive real-world evidence generation, foster innovation, and support the development of novel as well as advanced analytic methodologies. Such a system must also encourage national and international collaboration.</li><li style="margin-bottom: 10px;">A proactive and coordinated approach, grounded in a shared vision across all stakeholders, is needed rather than a reactive one.</li><li style="margin-bottom: 10px;">While EHDS provides a framework for harmonizing access to and use of health data, it does not yet cover all requirements for full utilization, especially concerning precision medicine, data harmonization, and integration of research and care. With implementing acts undergoing development opportunities occur to shape EHDS nationally.</li><li style="margin-bottom: 10px;">Driving development based on national goals while actively engaging in European implementation work is therefore crucial. Achieving sustainable change will take time and requires patience, persistence, and a shared understanding of the long-term vision.</li></ul>',
        'popup2': '<h3 style="color: #045C64; margin-top: 0; margin-bottom: 15px;">Implementation & Infrastructure</h3><p style="margin-bottom: 15px;">Practical steps and structures required to build a functional and unified health data system.</p><ul style="text-align: left; padding-left: 20px;"><li style="margin-bottom: 10px;">To develop a national digital infrastructure that serves Sweden\'s needs while aligning with EHDS principles and the holistic view of primary and secondary data use, stakeholders must work together.</li><li style="margin-bottom: 10px;">To achieve sustainable access and utilization of health data, unified standards are essential. This standardization includes not only terminologies and concepts, but also metadata down to the variable level. Working methods, processes, and documentation routines must be adapted accordingly.</li><li style="margin-bottom: 10px;">High-quality, structured health data with uniform standards and definitions must be captured already at the point of primary documentation. This ensures data can later support advanced applications such as AI systems, machine learning, federated analyses and precision medicine — for training, validation, and deployment.</li><li style="margin-bottom: 10px;">In a European context, the health data ecosystem should enable cutting-edge research through federated analysis and machine learning, allowing knowledge generation from distributed real-world data sources across Europe while keeping sensitive data secure at its source.</li></ul>',
        'popup3': '<h3 style="color: #045C64; margin-top: 0; margin-bottom: 15px;">Collaboration & Governance</h3><p style="margin-bottom: 15px;">Need for collaboration, clear leadership, and stakeholder involvement.</p><ul style="text-align: left; padding-left: 20px;"><li style="margin-bottom: 10px;">A clear government directive is recommended to ensure that all relevant authorities take a holistic view of data use, beyond the boundaries of their individual mandates.</li><li style="margin-bottom: 10px;">True collaboration requires designated forums and cross-sectoral structures that bring together stakeholders from healthcare, research, policy, and technology to jointly drive development forward.</li><li style="margin-bottom: 10px;">Building trust is essential. This demands transparent handling of ethical and social issues, as well as the active inclusion of patient and user perspectives in all processes.</li><li style="margin-bottom: 10px;">Today, fragmented legislation and varying interpretations pose major challenges. A unified national approach to legal, ethical, and governance frameworks — consistent with European developments — is therefore urgently needed. Sweden can play a leading role in shaping these models through pilot projects, regulatory sandboxes and participation in standardization initiatives, both within the Nordics and EU.</li></ul>',
        'popup4': '<h3 style="color: #045C64; margin-top: 0; margin-bottom: 15px;">Systemic Change & Resources</h3><p style="margin-bottom: 15px;">Resources and mindset shifts needed for the transformation of the health data landscape.</p><ul style="text-align: left; padding-left: 20px;"><li style="margin-bottom: 10px;">Transforming the Swedish health data ecosystem requires a clear overview of ongoing initiatives and the actors driving them. Systemic change depends on dedicated funding, new skills, and updated organizational structures, including targeted training for existing staff in new workflows and digital processes.</li><li style="margin-bottom: 10px;">Because healthcare and research are evolving in parallel, primary and secondary use of health data are increasingly intertwined and are not relevant to differentiate. Data circulates in a continuous loop, serving multiple purposes — for example, research data feeding into clinical decision support in precision medicine, or clinical data being reused for research and quality improvement.</li><li style="margin-bottom: 10px;">Consequently, governance models, data stewardship principles, and consent frameworks must evolve to create this circular data reality.</li><li style="margin-bottom: 10px;">Sustainable progress will require both political commitment and long-term investment in people, technology, and governance mechanisms to ensure that Sweden\'s implementation of the EHDS delivers tangible benefits for patients, clinicians, and society at large.</li></ul>'
    };
    
    popupText.innerHTML = popupContent[text] || '';
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePopup() {
    var popup = document.getElementById('outputs-popup-overlay');
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close popup when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});
</script>

<h2 id="evenemang" style="text-align: center; font-weight: bold; font-size: calc(1.2em + 8pt); font-family: 'Lato', sans-serif; color: #491F53;">Evenemang:</h2>


  <!-- Page Content -->
<div class="container">

  <div class="row">
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64;">
            Vägen mot EHDS- Hur möta behov för hållbar tillgång och nyttiggörande av hälsodata i Sverige?
          </h4>
          <p class="card-text">
  <p style="font-size: calc(1em + 2pt);">
    Datum: 3 september 2025<br>
    Plats: Life City; Stockholm
    </p>
    <br>

Eventet syftade till att tillsammans diskutera lösningar för hur vi kan möta behoven för en hållbar tillgång och nyttiggörande av hälsodata i Sverige för utveckling av en nationell digital infrastruktur inför implementeringen av EHDS, utifrån helhetsbilden för
primär- och sekundäranvändning. Under eventet genomfördes även tre patientfallsbaserade workshops för att komma vidare kring interoperabilitetsaspekter och datasäkerhet samt etiska och sociala frågeställningar.

<br>
<br>
Deltagande aktörer var regering, myndigheter, institutioner, regioner/klinik, patientorganisationer, nationella kvalitetsregister, industri/systemleverantörer, akademi/forskare, innovatörer och hälsodataprojekt.

<br>
<br>
<a href="https://www.scilifelab.se/news/on-the-path-to-the-european-health-data-space-ehds/">Klicka här</a> för för mer information. </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64;">
            DIGIfor1healthSE - en hållbar tillgång till hälsodata
          </h4>
          <p class="card-text">

   <p style="font-size: calc(1em + 2pt);">
    Datum: 26 maj 2025<br>
    Plats: Life City; Stockholm
    </p>
    <br>

Eventet syftade till att öka deltagarnas kunskaper om DIGIfor1healthSE, dess samarbete och aktörerna bakom. Eventet gav möjlighet att lyssna in, träffas och bidra till tankar kring hur vi kan skapa en långsiktig tillgång av hälsodata för Sverige och Europa. <br>
<br>
<br>

Inbjudna aktörer var projekt som DIGIfor1healthSE haft dialog med, referensgruppens medlemmar, berörda myndigheter inom hälso- och sjukvård och digitalisering, samt representanter från olika departement vid Regeringskansliet i Sverige. 

<br>
<br>
<a href="https://www.scilifelab.se/news/digifor1healthse-highlights-need-for-coordinated-health-data-infrastructure-in-sweden/">Klicka här</a> för för mer information.

</p>
        </div>
      </div>
    </div>
   
  </div>
  <!-- /.row -->

</div>
<!-- /.container --> 
<p style="text-align: center;">
<h2 id="rapporter" style="text-align: center; font-weight: bold; font-size: calc(1.2em + 8pt); font-family: 'Lato', sans-serif; color: #491F53;">Rapporter:</h2>

</p>

<div class="container">

  <div class="row">
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64;">
            Lägesanalys april 2025
          </h4>
          <p class="card-text">

   DIGIfor1healthSE - ett samarbete för hållbar tillgång och nyttjande av hälsodata: <a href="https://doi.org/10.17044/scilifelab.28882028" target="_blank">https://doi.org/10.17044/scilifelab.28882028</a> <br> <br>

Lägesanalysen lyfter fram att det är av stor vikt att Sverige utvecklar en nationell digital infrastruktur för hälsodata med helhetssyn kring primär- och sekundäranvändning inför implementeringen av det europeiska hälsodataområdet EHDS, i samarbete med berörda aktörer. För att möjliggöra en integritetssäker och effektiv tillgång till hälsodata måste data frigöras från de olika systemen i Sverige och ändamålsenliga samt harmoniserade lösningar tas fram. Detta för att uppnå interoperabilitet inom alla områden; semantisk, teknisk, organisatorisk och juridisk där även etiska och sociala aspekter integreras.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64;">
            Förstudie september 2023
          </h4>
          <p class="card-text">
    För effektivt och hållbart nyttjande av hälsodata genom integrering av DIGITAL-projekten i Sverige: <a href="https://doi.org/10.17044/scilifelab.24199164" target="_blank">https://doi.org/10.17044/scilifelab.24199164</a> <br><br>

Rapporten var framtagen som ett underlag för redovisning till finansiären samt vägledning vid planeringen och genomförandet av aktuella samarbeten inom hälsodata framöver. Den innehåller sammanställning kring våra gemensamma expertisområden inom rättsfrågor, semantiskt interoperabilitet, teknisk infrastruktur och datasäkerhet. Den innehåller även riskanalyser och diskussion kring design av lösningar för datadelning och förslag på fortsatt arbete med hälsodata inför införandet av det europeiska hälsodataområdet EHDS.</p>
        </div>
      </div>
    </div>
   
  </div>
  <!-- /.row -->

</div>
<!-- /.container --> 
<p style="text-align: center;">
<h2 id="ingående-projekt" style="text-align: center; font-weight: bold; font-size: calc(1.2em + 8pt); font-family: 'Lato', sans-serif; color: #491F53;">Ingående projekt:</h2>

</p>




   

  <!-- /.row -->
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 mb-4">  <!-- Changed from col-lg-6 to col-lg-12 for full width -->
      <div class="card h-100" style="max-width: 800px; margin: 0 auto;">  <!-- Added max-width and margin auto for centering -->
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64; font-size: calc(1.5em + 1pt);">
            GDI
          </h4>
          <p class="card-text">
           <a href="https://gdi.onemilliongenomes.eu/news/gdi-technical-infrastructure">Demonstration av 1+MG tekniska infrastruktur (våren 2025)</a><br>
           <a href="https://www.youtube.com/watch?v=YDCvy6ixUdw&t=46s">GDI Technical Demonstrator: Distributed analysis and federated learning</a><br>
           <a href="https://www.youtube.com/watch?v=uCjlFXSvFAs">1+ Million Genomes infrastructure - the benefits of federated analysis</a><br>
           
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 mb-4">  <!-- Changed from col-lg-6 to col-lg-12 for full width -->
      <div class="card h-100" style="max-width: 800px; margin: 0 auto;">  <!-- Added max-width and margin auto for centering -->
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64; font-size: calc(1.5em + 1pt);">
            EUCAIM
          </h4>
          <p class="card-text">
            <a href="https://cancerimage.eu/achievements/">EUCAIM:s senaste produktsammanställning</a><br>
            <a href="https://www.youtube.com/watch?v=bH_NiEWFMAA">EUCAIM:s webinarium om EUCAIM och användarfall (mars 2024)</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 mb-4">  <!-- Changed from col-lg-6 to col-lg-12 for full width -->
      <div class="card h-100" style="max-width: 800px; margin: 0 auto;">  <!-- Added max-width and margin auto for centering -->
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64; font-size: calc(1.5em + 1pt);">
            HDS
          </h4>
          <p class="card-text">
            <h4 class="card-title" style="font-weight: 900; text-align: left; color: #3F3F3F; font-size: calc(1em + 0.5pt);">
            • HDS exempel på kundresetjänster:
          </h4>
            <a href="https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/guidance-city-improvement-through-demand-acceleration-methodology">https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/guidance-city-improvement-through-demand-acceleration-methodology</a><br>
            <a href="https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/new-era-blood-sampling-transforming-future-diagnostics">https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/new-era-blood-sampling-transforming-future-diagnostics</a><br>
            <a href="https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/field-testing-methodology-healthcare">https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/field-testing-methodology-healthcare</a><br><br>
             <h4 class="card-title" style="font-weight: 900; text-align: left; color: #3F3F3F; font-size: calc(1em + 0.5pt);">
            • HDS rapport (augusti 2024):
          </h4>
            <a href="https://lnu.se/mot-linneuniversitetet/aktuellt/nyheter/2024/ny-rapport-hur-hanterar-sveriges-regioner-sin-halsodata/">Hur hanterar Sveriges regioner sin hälsodata?</a><br>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 mb-4">  <!-- Changed from col-lg-6 to col-lg-12 for full width -->
      <div class="card h-100" style="max-width: 800px; margin: 0 auto;">  <!-- Added max-width and margin auto for centering -->
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64; font-size: calc(1.5em + 1pt);">
            TEF-Health
          </h4>
          <p class="card-text">
           <a href="https://tefhealth.se/">TEF-Health Sweden</a><br>
           
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 mb-4">  <!-- Changed from col-lg-6 to col-lg-12 for full width -->
      <div class="card h-100" style="max-width: 800px; margin: 0 auto;">  <!-- Added max-width and margin auto for centering -->
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64; font-size: calc(1.5em + 1pt);">
            GENOME OF EUROPE
          </h4>
          <p class="card-text">
           <a href="https://digital-strategy.ec.europa.eu/en/news/genome-europe-project-launched-first-step-towards-european-reference-genome">Genome of Europe project </a><br>
           
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 mb-4">  <!-- Changed from col-lg-6 to col-lg-12 for full width -->
      <div class="card h-100" style="max-width: 800px; margin: 0 auto;">  <!-- Added max-width and margin auto for centering -->
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold; text-align: center; color: #045C64; font-size: calc(1.5em + 1pt);">
            GMS
          </h4>
          <p class="card-text">
           <a href="https://genomicmedicine.se">Genomic Medicine Sweden</a><br>
           
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

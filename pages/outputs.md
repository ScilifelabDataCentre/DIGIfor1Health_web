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
  <a href="{{ '/outputs/events/' | relative_url }}" class="outputs-nav-box">
    <span class="outputs-nav-box-title">Evenemang</span>
    <img src="{{ '/outputs/assets/img/Events_v2a.jpg' | relative_url }}" alt="Evenemang" class="outputs-nav-box-img">
  </a>
  <a href="{{ '/outputs/raports/' | relative_url }}" class="outputs-nav-box">
    <span class="outputs-nav-box-title">Rapporter</span>
    <img src="{{ '/outputs/assets/img/Resultat_v1.jpg' | relative_url }}" alt="Rapporter" class="outputs-nav-box-img">
  </a>
  <a href="{{ '/outputs/ongoing/' | relative_url }}" class="outputs-nav-box">
    <span class="outputs-nav-box-title">Ingående projekt</span>
    <img src="{{ '/outputs/assets/img/Projects_v1.jpg' | relative_url }}" alt="Ingående projekt" class="outputs-nav-box-img">
  </a>
</div>

<div class="outputs-intro-text">
  <h2 class="outputs-intro-title">How to achieve sustainable access and utilization of health data in Sweden</h2>
  <p><strong>DIGIfor1healthSE</strong> presents the following <strong>four categories</strong> with <strong>key messages</strong> that captures the <strong>work needed</strong> in order to achieve sustainable access and utilization of health data in Sweden. These key messages have been <strong>summarized</strong> from the event arranged and report published by <strong>DIGIfor1healthSE</strong>:</p>
  <ul>
    <li><strong>Event</strong> (September 3rd 2025): <em>“The road to EHDS – How to meet the need for sustainable access and utilization of health data in Sweden?”</em>, and</li>
    <li><strong>Report</strong> <em>“Situation Analysis (April 2025): DIGIfor1healthSE – a collaboration for sustainable access and use of health data.”</em></li>
  </ul>
</div>

<!-- Puzzle image (clickable pieces) -->
<div class="outputs-top-layout">
  <div class="outputs-image-container">
    <div class="outputs-puzzle-image-wrap">
      <img src="{{ '/outputs/assets/img/Puzzles_eng.png' | relative_url }}" alt="DIGIfor1Health Puzzle Pieces">
      <div class="outputs-puzzle-piece outputs-puzzle-piece--tl" onclick="showPopup('popup1')" title="Vision & Strategy" aria-label="Vision & Strategy"></div>
      <div class="outputs-puzzle-piece outputs-puzzle-piece--bl" onclick="showPopup('popup2')" title="Implementation & Infrastructure" aria-label="Implementation & Infrastructure"></div>
      <div class="outputs-puzzle-piece outputs-puzzle-piece--tr" onclick="showPopup('popup3')" title="Collaboration & Governance" aria-label="Collaboration & Governance"></div>
      <div class="outputs-puzzle-piece outputs-puzzle-piece--br" onclick="showPopup('popup4')" title="Systemic Change & Resources" aria-label="Systemic Change & Resources"></div>
    </div>
  </div>
</div>

<!-- Popup Modal (shown when clicking a puzzle piece) -->
<div id="outputs-popup-overlay" class="outputs-popup-overlay" onclick="closePopup()">
  <div class="outputs-popup-content" onclick="event.stopPropagation()">
    <span class="outputs-popup-close" onclick="closePopup()">&times;</span>
    <div id="outputs-popup-text"></div>
  </div>
</div>

<script>
function showPopup(id) {
  var popup = document.getElementById('outputs-popup-overlay');
  var popupText = document.getElementById('outputs-popup-text');
  var content = {
    'popup1': '<p style="margin: 0;">Overarching <strong>goals</strong> and <strong>strategic approach</strong> are needed for managing health data in Sweden, even towards the European Health Data Space (<strong>EHDS</strong>).</p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-vision" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>',
    'popup2': '<p style="margin: 0;">Practical <strong>steps</strong> and <strong>structures</strong> required to build a functional and unified health data system.</p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-impl" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>',
    'popup3': '<p style="margin: 0;">Need for <strong>collaboration</strong>, <strong>clear leadership</strong>, and <strong>stakeholder involvement</strong>.</p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-collab" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>',
    'popup4': '<p style="margin: 0;"><strong>Resources</strong> and <strong>mindset shifts</strong> needed for the transformation of the health data landscape.</p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-systemic" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>'
  };
  var popupContent = document.querySelector('.outputs-popup-content');
  popupContent.classList.remove('outputs-popup-content--vision', 'outputs-popup-content--impl', 'outputs-popup-content--collab', 'outputs-popup-content--systemic');
  if (id === 'popup1') popupContent.classList.add('outputs-popup-content--vision');
  else if (id === 'popup2') popupContent.classList.add('outputs-popup-content--impl');
  else if (id === 'popup3') popupContent.classList.add('outputs-popup-content--collab');
  else if (id === 'popup4') popupContent.classList.add('outputs-popup-content--systemic');
  popupText.innerHTML = content[id] || '';
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closePopup() {
  var popup = document.getElementById('outputs-popup-overlay');
  popup.classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePopup(); });
</script>

<!-- Puzzle themes: full text below in 2x2 layout (same as puzzle: Vision top-left, Impl bottom-left, Collab top-right, Systemic bottom-right) -->
<div class="outputs-puzzle-detail">
  <div class="outputs-puzzle-detail-row">
    <div id="outputs-detail-vision" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--vision">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Vision & Strategy</h3>
      <p style="margin-bottom: 15px;">Overarching <strong>goals</strong> and <strong>strategic approach</strong> are needed for managing health data in Sweden, even towards the European Health Data Space (<strong>EHDS</strong>).</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">There is an urgent need for a <strong>coherent system</strong> that enables the use of health data to drive real-world evidence generation, foster innovation, and support the development of novel as well as advanced analytic methodologies. Such a system must also encourage national and international collaboration.</li>
        <li style="margin-bottom: 10px;">A <strong>proactive</strong> and <strong>coordinated approach</strong>, grounded in a shared vision across all stakeholders, is needed <strong>rather than a reactive one</strong>.</li>
        <li style="margin-bottom: 10px;">While <strong>EHDS</strong> provides a framework for harmonizing access to and use of health data, it <strong>does not yet cover all requirements for full utilization</strong>, especially concerning precision medicine, data harmonization, and integration of research and care. With <strong>implementing acts</strong> undergoing development opportunities occur to shape <strong>EHDS nationally</strong>.</li>
        <li style="margin-bottom: 10px;">Driving <strong>development</strong> based on <strong>national goals</strong> while actively engaging in European implementation work is therefore crucial. Achieving sustainable change will <strong>take time</strong> and requires patience, persistence, and a <strong>shared understanding of the long-term vision</strong>.</li>
      </ul>
    </div>
    <div id="outputs-detail-collab" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--collab">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Collaboration & Governance</h3>
      <p style="margin-bottom: 15px;">Need for <strong>collaboration</strong>, <strong>clear leadership</strong>, and <strong>stakeholder involvement</strong>.</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">A <strong>clear government directive</strong> is recommended to ensure that all relevant <strong>authorities take a holistic view of data use</strong>, beyond the boundaries of their individual mandates.</li>
        <li style="margin-bottom: 10px;">True <strong>collaboration requires designated forums</strong> and cross-sectoral structures that bring together stakeholders from healthcare, research, policy, and technology to jointly drive development forward.</li>
        <li style="margin-bottom: 10px;">Building <strong>trust is essential</strong>. This demands transparent handling of ethical and social issues, as well as the active <strong>inclusion of patient and user perspectives in all processes</strong>.</li>
        <li style="margin-bottom: 10px;">Today, fragmented legislation and varying interpretations pose major challenges. A <strong>unified national approach to legal, ethical, and governance frameworks</strong> — consistent with European developments — is therefore urgently needed. Sweden can play a leading role in shaping these models through pilot projects, regulatory sandboxes and participation in standardization initiatives, both within the Nordics and EU.</li>
      </ul>
    </div>
  </div>
  <div class="outputs-puzzle-detail-row">
    <div id="outputs-detail-impl" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--impl">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Implementation & Infrastructure</h3>
      <p style="margin-bottom: 15px;">Practical <strong>steps</strong> and <strong>structures</strong> required to build a functional and unified health data system.</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">To develop a <strong>national digital infrastructure</strong> that serves Sweden's needs while aligning with EHDS principles and <strong>the holistic view of primary and secondary data use</strong>, stakeholders must work together.</li>
        <li style="margin-bottom: 10px;">To achieve sustainable access and utilization of health data, <strong>unified standards</strong> are essential. This standardization includes not only <strong>terminologies and concepts</strong>, but also <strong>metadata</strong> down to the <strong>variable level</strong>. Working <strong>methods</strong>, <strong>processes</strong>, and documentation <strong>routines must be adapted</strong> accordingly.</li>
        <li style="margin-bottom: 10px;"><strong>High-quality, structured health data</strong> with uniform standards and definitions must be captured already at the <strong>point of primary documentation</strong>. This ensures data can later <strong>support advanced applications</strong> such as AI systems, machine learning, federated analyses and precision medicine — for training, validation, and deployment.</li>
        <li style="margin-bottom: 10px;">In a European context, the health data ecosystem should enable cutting-edge research through <strong>federated analysis and machine learning</strong>, allowing knowledge generation from distributed real-world data sources across Europe while keeping sensitive <strong>data secure at its source</strong>.</li>
      </ul>
    </div>
    <div id="outputs-detail-systemic" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--systemic">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Systemic Change & Resources</h3>
      <p style="margin-bottom: 15px;"><strong>Resources</strong> and <strong>mindset shifts</strong> needed for the transformation of the health data landscape.</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Transforming the Swedish health data ecosystem requires a clear overview of ongoing initiatives and the actors driving them. Systemic change depends on <strong>dedicated funding</strong>, <strong>new skills</strong>, and <strong>updated organizational structures</strong>, including <strong>targeted training for existing staff</strong> in new workflows and digital processes.</li>
        <li style="margin-bottom: 10px;">Because healthcare and research are evolving in parallel, <strong>primary and secondary use of health data</strong> are increasingly <strong>intertwined</strong> and <strong>are not relevant to differentiate</strong>. Data circulates in a <strong>continuous loop</strong>, serving multiple purposes — for example, <strong>research data feeding into clinical decision support</strong> in precision medicine, or clinical data being reused for research and quality improvement.</li>
        <li style="margin-bottom: 10px;">Consequently, governance models, data stewardship principles, and consent frameworks must evolve to create this circular data reality.</li>
        <li style="margin-bottom: 10px;">Sustainable progress will require both <strong>political commitment</strong> and <strong>long-term investment in people</strong>, <strong>technology</strong>, and <strong>governance mechanisms</strong> to ensure that Sweden's implementation of the EHDS delivers tangible benefits for patients, clinicians, and society at large.</li>
      </ul>
    </div>
  </div>
</div>

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
    'popup1': '<p style="margin: 0;">Overarching <strong>goals</strong> and <strong>strategic approach</strong> are needed for managing health data in Sweden, even towards the European Health Data Space (<strong>EHDS</strong>).</p>',
    'popup2': '<p style="margin: 0;">Practical <strong>steps</strong> and <strong>structures</strong> required to build a functional and unified health data system.</p>',
    'popup3': '<p style="margin: 0;">Need for <strong>collaboration</strong>, <strong>clear leadership</strong>, and <strong>stakeholder involvement</strong>.</p>',
    'popup4': '<p style="margin: 0;"><strong>Resources</strong> and <strong>mindset shifts</strong> needed for the transformation of the health data landscape.</p>'
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

<!-- Puzzle themes: full text below in 2x2 layout (same as puzzle: left col 1,2 / right col 3,4) -->
<div class="outputs-puzzle-detail">
  <div class="outputs-puzzle-detail-row">
    <div class="outputs-puzzle-detail-box outputs-puzzle-detail-box--vision">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Vision & Strategy</h3>
      <p style="margin-bottom: 15px;">Overarching <strong>goals</strong> and <strong>strategic approach</strong> are needed for managing health data in Sweden, even towards the European Health Data Space (<strong>EHDS</strong>).</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">There is an urgent need for a coherent system that enables the use of health data to drive real-world evidence generation, foster innovation, and support the development of novel as well as advanced analytic methodologies. Such a system must also encourage national and international collaboration.</li>
        <li style="margin-bottom: 10px;">A proactive and coordinated approach, grounded in a shared vision across all stakeholders, is needed rather than a reactive one.</li>
        <li style="margin-bottom: 10px;">While EHDS provides a framework for harmonizing access to and use of health data, it does not yet cover all requirements for full utilization, especially concerning precision medicine, data harmonization, and integration of research and care. With implementing acts undergoing development opportunities occur to shape EHDS nationally.</li>
        <li style="margin-bottom: 10px;">Driving development based on national goals while actively engaging in European implementation work is therefore crucial. Achieving sustainable change will take time and requires patience, persistence, and a shared understanding of the long-term vision.</li>
      </ul>
    </div>
    <div class="outputs-puzzle-detail-box outputs-puzzle-detail-box--collab">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Collaboration & Governance</h3>
      <p style="margin-bottom: 15px;">Need for <strong>collaboration</strong>, <strong>clear leadership</strong>, and <strong>stakeholder involvement</strong>.</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">A clear government directive is recommended to ensure that all relevant authorities take a holistic view of data use, beyond the boundaries of their individual mandates.</li>
        <li style="margin-bottom: 10px;">True collaboration requires designated forums and cross-sectoral structures that bring together stakeholders from healthcare, research, policy, and technology to jointly drive development forward.</li>
        <li style="margin-bottom: 10px;">Building trust is essential. This demands transparent handling of ethical and social issues, as well as the active inclusion of patient and user perspectives in all processes.</li>
        <li style="margin-bottom: 10px;">Today, fragmented legislation and varying interpretations pose major challenges. A unified national approach to legal, ethical, and governance frameworks — consistent with European developments — is therefore urgently needed. Sweden can play a leading role in shaping these models through pilot projects, regulatory sandboxes and participation in standardization initiatives, both within the Nordics and EU.</li>
      </ul>
    </div>
  </div>
  <div class="outputs-puzzle-detail-row">
    <div class="outputs-puzzle-detail-box outputs-puzzle-detail-box--impl">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Implementation & Infrastructure</h3>
      <p style="margin-bottom: 15px;">Practical <strong>steps</strong> and <strong>structures</strong> required to build a functional and unified health data system.</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">To develop a national digital infrastructure that serves Sweden's needs while aligning with EHDS principles and the holistic view of primary and secondary data use, stakeholders must work together.</li>
        <li style="margin-bottom: 10px;">To achieve sustainable access and utilization of health data, unified standards are essential. This standardization includes not only terminologies and concepts, but also metadata down to the variable level. Working methods, processes, and documentation routines must be adapted accordingly.</li>
        <li style="margin-bottom: 10px;">High-quality, structured health data with uniform standards and definitions must be captured already at the point of primary documentation. This ensures data can later support advanced applications such as AI systems, machine learning, federated analyses and precision medicine — for training, validation, and deployment.</li>
        <li style="margin-bottom: 10px;">In a European context, the health data ecosystem should enable cutting-edge research through federated analysis and machine learning, allowing knowledge generation from distributed real-world data sources across Europe while keeping sensitive data secure at its source.</li>
      </ul>
    </div>
    <div class="outputs-puzzle-detail-box outputs-puzzle-detail-box--systemic">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Systemic Change & Resources</h3>
      <p style="margin-bottom: 15px;"><strong>Resources</strong> and <strong>mindset shifts</strong> needed for the transformation of the health data landscape.</p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Transforming the Swedish health data ecosystem requires a clear overview of ongoing initiatives and the actors driving them. Systemic change depends on dedicated funding, new skills, and updated organizational structures, including targeted training for existing staff in new workflows and digital processes.</li>
        <li style="margin-bottom: 10px;">Because healthcare and research are evolving in parallel, primary and secondary use of health data are increasingly intertwined and are not relevant to differentiate. Data circulates in a continuous loop, serving multiple purposes — for example, research data feeding into clinical decision support in precision medicine, or clinical data being reused for research and quality improvement.</li>
        <li style="margin-bottom: 10px;">Consequently, governance models, data stewardship principles, and consent frameworks must evolve to create this circular data reality.</li>
        <li style="margin-bottom: 10px;">Sustainable progress will require both political commitment and long-term investment in people, technology, and governance mechanisms to ensure that Sweden's implementation of the EHDS delivers tangible benefits for patients, clinicians, and society at large.</li>
      </ul>
    </div>
  </div>
</div>

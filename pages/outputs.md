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
  <h2 class="outputs-intro-title">Hur uppnår vi en hållbar tillgång och nyttiggörande av hälsodata i Sverige?</h2>
  <p>DIGIfor1healthSE presenterar följande fyra kategorier med huvudbudskap som fångar det arbete som krävs för att uppnå en hållbar tillgång och nyttiggörande hälsodata i Sverige. Dessa budskap har sammanställts från det nationella evenemanget och rapporten som genomfördes 2025 av DIGIfor1healthSE.</p>
</div>

<!-- Puzzle image (clickable pieces) -->
<div class="outputs-top-layout">
  <div class="outputs-image-container">
    <div class="outputs-puzzle-image-wrap">
      <img src="{{ '/outputs/assets/img/Puzzles_SE.png' | relative_url }}" alt="Pussel: Vision & strategi, Samarbete & styrning, Implementering & infrastruktur, Systemförändring & resurser">
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
    'popup1': '<p style="margin: 0;"><em>De övergripande målen och det strategiska tillvägagångsättet för hantering av hälsodata i Sverige inför det europeiska hälsodataområdet (<strong>EHDS</strong>).</em></p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-vision" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>',
    'popup2': '<p style="margin: 0;"><em>Praktiska steg och strukturer som krävs för att bygga ett fungerande och enhetligt system för hälsodata.</em></p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-impl" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>',
    'popup3': '<p style="margin: 0;"><em>Behov av samarbete, tydligt ledarskap och involvering av intressenter.</em></p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-collab" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>',
    'popup4': '<p style="margin: 0;"><em>Resurser och attitydförändringar som krävs för transformationen av hälsodatalandskapet.</em></p><p style="margin: 15px 0 0 0;"><a href="#outputs-detail-systemic" onclick="closePopup()" class="outputs-popup-readmore">Read more...</a></p>'
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
      <h3 style="margin-top: 0; margin-bottom: 15px;">Vision & Strategi</h3>
      <p style="margin-bottom: 15px;"><em>De övergripande målen och det strategiska tillvägagångsättet för hantering av hälsodata i Sverige inför det europeiska hälsodataområdet (<strong>EHDS</strong>).</em></p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Det finns ett brådskande behov av ett <strong>sammanhängande system</strong> som möjliggör användning av hälsodata för att generera verklighetsbaserad evidens, främja innovation och stödja utvecklingen av både nya och avancerade analysmetoder. Ett sådant system måste också uppmuntra till nationell och internationell samverkan.</li>
        <li style="margin-bottom: 10px;">Ett <strong>proaktivt</strong> och <strong>samordnat tillvägagångssätt</strong>, förankrat i en gemensam vision hos alla intressenter, krävs <strong>snarare än ett reaktivt</strong>.</li>
        <li style="margin-bottom: 10px;">Även om <strong>EHDS</strong> utgör ett ramverk för att harmonisera tillgång till och användning av hälsodata, <strong>täcker det ännu inte alla krav för fullt utnyttjande</strong> – särskilt gällande precisionsmedicin, dataharmonisering samt integrering av forskning och vård. I takt med att <strong>genomförandeakter</strong> utvecklas, uppstår möjligheter att forma <strong>EHDS nationellt</strong>.</li>
        <li style="margin-bottom: 10px;">Att driva <strong>utvecklingen</strong> baserat på <strong>nationella mål</strong> samtidigt som man aktivt engagerar sig i det europeiska implementeringsarbetet är därför avgörande. Att uppnå hållbar förändring <strong>tar tid</strong> och kräver tålamod, uthållighet och en <strong>gemensam förståelse för den långsiktiga visionen</strong>.</li>
      </ul>
    </div>
    <div id="outputs-detail-collab" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--collab">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Samarbete & Styrning</h3>
      <p style="margin-bottom: 15px;"><em>Behov av samarbete, tydligt ledarskap och involvering av intressenter.</em></p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Ett <strong>tydligt statligt direktiv</strong> rekommenderas för att säkerställa att alla relevanta <strong>myndigheter antar ett helhetsperspektiv på dataanvändning</strong>, bortom gränserna för deras enskilda uppdrag.</li>
        <li style="margin-bottom: 10px;"><strong>Samarbete kräver utsedda forum</strong> och sektorsövergripande strukturer som sammanför intressenter från hälso- och sjukvård, forskning, politik och teknik för att gemensamt driva utvecklingen framåt.</li>
        <li style="margin-bottom: 10px;">Att <strong>bygga tillit är nödvändigt</strong>. Detta kräver en transparent hantering av etiska och sociala frågor, samt att <strong>patient- och användarperspektiv inkluderas aktivt i alla processer</strong>.</li>
        <li style="margin-bottom: 10px;">Idag skapar fragmenterad lagstiftning och varierande tolkningar stora utmaningar. Ett <strong>enhetligt nationellt tillvägagångsätt till legala, etiska och styrningsrelaterade ramverk</strong> – i linje med den europeiska utvecklingen – är därför brådskande. Sverige kan spela en ledande roll i att utforma dessa modeller genom pilotprojekt, regulatoriska sandlådor och deltagande i standardiseringsinitiativ, både inom Norden och EU.</li>
      </ul>
    </div>
  </div>
  <div class="outputs-puzzle-detail-row">
    <div id="outputs-detail-impl" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--impl">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Implementering & Infrastruktur</h3>
      <p style="margin-bottom: 15px;"><em>Praktiska steg och strukturer som krävs för att bygga ett fungerande och enhetligt system för hälsodata.</em></p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">För att utveckla en <strong>nationell digital infrastruktur</strong> som tjänar Sveriges behov och samtidigt ligger i linje med EHDS-principerna, och en <strong>helhetssyn på primär- och sekundärdataanvändning</strong>, måste intressenter arbeta tillsammans.</li>
        <li style="margin-bottom: 10px;">För att uppnå hållbar tillgång och nyttjande av hälsodata är <strong>enhetliga standarder</strong> väsentliga. Denna standardisering omfattar inte bara <strong>terminologier och begrepp</strong>, utan även <strong>metadata</strong> ner på <strong>variabelnivå</strong>. <strong>Arbetsmetoder</strong>, <strong>processer</strong> och dokumentations<strong>rutiner måste anpassas</strong> därefter.</li>
        <li style="margin-bottom: 10px;"><strong>Strukturerade hälsodata av hög kvalitet</strong> med enhetliga standarder och definitioner måste fångas redan vid <strong>den primära dokumentationen</strong>. Detta säkerställer att data senare kan <strong>stödja avancerade tillämpningar</strong> som AI-system, maskininlärning, federerade analyser och precisionsmedicin – för testning, träning, validering och driftsättning.</li>
        <li style="margin-bottom: 10px;">I ett europeiskt sammanhang bör ekosystemet för hälsodata möjliggöra spetsforskning genom <strong>federerad analys och maskininlärning</strong>, vilket tillåter kunskapsgenerering från distribuerade datakällor över hela Europa samtidigt som känsliga <strong>data förblir säkra vid sin källa</strong>.</li>
      </ul>
    </div>
    <div id="outputs-detail-systemic" class="outputs-puzzle-detail-box outputs-puzzle-detail-box--systemic">
      <h3 style="margin-top: 0; margin-bottom: 15px;">Systemförändring & Resurser</h3>
      <p style="margin-bottom: 15px;"><em>Resurser och attitydförändringar som krävs för transformationen av hälsodatalandskapet.</em></p>
      <ul style="text-align: left; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Att förändra det svenska ekosystemet för hälsodata kräver en tydlig överblick över pågående initiativ och de aktörer som driver dem. Systemförändring är beroende av <strong>dedikerad finansiering</strong>, <strong>ny kompetens</strong> och <strong>uppdaterade organisationsstrukturer</strong>, inklusive <strong>riktad utbildning för befintlig personal</strong> i nya arbetsflöden och digitala processer.</li>
        <li style="margin-bottom: 10px;">Eftersom hälso- och sjukvård och forskning utvecklas parallellt, blir <strong>primär och sekundär användning av hälsodata</strong> alltmer <strong>sammanflätade</strong> och <strong>är inte längre relevanta att skilja på</strong>. Data cirkulerar i ett <strong>kontinuerligt kretslopp</strong> och tjänar flera syften – till exempel <strong>forskningsdata som matas in i kliniskt beslutsstöd</strong> inom precisionsmedicin, eller kliniska data som återanvänds för forskning och kvalitetsförbättring.</li>
        <li style="margin-bottom: 10px;">Följaktligen måste styrningsmodeller, principer för dataförvaltning och ramverk för samtycke utvecklas för att skapa denna cirkulära dataverklighet.</li>
        <li style="margin-bottom: 10px;">Hållbara framsteg kommer att kräva både <strong>politiskt engagemang</strong> och <strong>långsiktiga investeringar i människor</strong>, <strong>teknik</strong> och <strong>styrningsmekanismer</strong> för att säkerställa att Sveriges implementering av EHDS levererar konkreta fördelar för patienter, kliniker och samhället i stort.</li>
      </ul>
    </div>
  </div>
</div>

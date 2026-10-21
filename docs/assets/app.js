(() => {
  'use strict';
  const c = window.PORTFOLIO;
  const p = c.profile;
  const page = document.body.dataset.page || 'home';
  const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const href = value => {
    if (!value) return '';
    try { const u = new URL(value, location.href); return ['http:', 'https:', 'mailto:'].includes(u.protocol) ? e(value) : ''; } catch { return ''; }
  };
  const dateLabel = item => {
    if (!item.date) return item.dateLabel || '';
    const date = new Date(item.date + 'T12:00:00');
    return Number.isNaN(date.getTime()) ? item.dateLabel || '' : date.toLocaleDateString('en-US', {month:'short', year:'numeric'});
  };
  const textLink = (text,url,external=false) => href(url) ? `<a class="text-link" href="${href(url)}"${external?' target="_blank" rel="noopener noreferrer"':''}>${e(text)} <span aria-hidden="true">${external?'↗':'→'}</span></a>` : '';
  const heading = (label,title,description='') => `<header class="page-head">${label?`<p class="eyebrow">${e(label)}</p>`:''}<h1>${e(title)}</h1>${description?`<p>${e(description)}</p>`:''}</header>`;
  const researchMedia = (caption=false) => `<figure class="research-figure"><img src="${href(c.research.image)}" alt="${e(c.research.imageAlt)}" width="1280" height="720" loading="lazy">${caption?`<figcaption>${e(c.research.imageCaption)}</figcaption>`:''}</figure>`;
  const nav = [['home','Home','index.html'],['work','All work','work.html'],['publications','Publications','publications.html'],['talks','Talks & activities','talks.html'],['news','News & updates','news.html'],['about','About','about.html']];
  document.getElementById('site-header').innerHTML = `<div class="wrap header-inner"><button class="menu-button" aria-expanded="false" aria-controls="site-nav">Menu +</button><nav class="site-nav" id="site-nav" aria-label="Main navigation">${nav.map(([key,label,url])=>`<a class="nav-link" href="${url}"${page===key||(page==='research'&&key==='work')?' aria-current="page"':''}>${label}</a>`).join('')}<a class="resume-link" href="${href(p.cv||'about.html#contact')}"${p.cv?' download':''}>${p.cv?'CV ↓':'Contact ↗'}</a></nav></div>`;
  const social = [p.email?['Email','mailto:'+p.email]:null,p.links.linkedin?['LinkedIn',p.links.linkedin]:null,p.links.github?['GitHub',p.links.github]:null,p.links.scholar?['Google Scholar',p.links.scholar]:null].filter(Boolean);
  document.getElementById('site-footer').innerHTML = `<div class="wrap footer-inner"><div><strong>${e(p.name)}</strong><p>${e(p.affiliation)}</p></div><div class="footer-links">${social.map(([name,url])=>`<a href="${href(url)}"${url.startsWith('http')?' target="_blank" rel="noopener noreferrer"':''}>${e(name)} ↗</a>`).join('')}<a href="news.html">News archive →</a></div></div>`;

  function newsRow(n,archive=false) {
    const title = archive && href(n.href) ? `<a class="news-title" href="${href(n.href)}">${e(n.title)}</a>` : `<span class="news-title">${e(n.title)}</span>`;
    return `<article class="news-row"><span class="news-date">${e(dateLabel(n))}</span><div>${title}${archive&&n.date?`<time class="news-full-date" datetime="${e(n.date)}">${e(dateLabel(n))}</time>`:''}${archive&&n.description?`<p>${e(n.description)}</p>`:''}</div><span class="news-category">${e(n.category)}</span></article>`;
  }
  function eventFigure(event) {
    const photos=event.photos||[];
    const label=[event.title,dateLabel(event)].filter(Boolean).join(', ');
    const position=/^\d{1,3}% \d{1,3}%$/.test(photos[0]?.position||'')?photos[0].position:'50% 50%';
    const placeholder=event.placeholderLabel?`<strong class="program-name">${e(event.placeholderLabel)}</strong><span class="program-detail">${e(event.placeholderDetail||'')}</span>`:`<svg viewBox="0 0 40 32" aria-hidden="true"><rect x="1" y="1" width="38" height="30" rx="2"/><circle cx="28" cy="10" r="3"/><path d="m2 25 11-12 10 10 5-5 11 10"/></svg><span>Photograph to add</span>`;
    const media=photos.length?`<button class="photo-open" data-event-id="${e(event.id)}" aria-label="Enlarge photographs from ${e(label)}"><img class="event-photo" src="${href(photos[0].src)}" alt="${e(photos[0].alt||label)}" style="object-position:${position}" loading="lazy">${photos.length>1?`<span class="photo-count">${photos.length} photos</span>`:''}</button>`:`<div class="event-placeholder${event.placeholderLabel?' program-placeholder':''}" role="img" aria-label="Photo placeholder for ${e(label)}">${placeholder}</div>`;
    return `<figure class="event" id="${e(event.id)}">${media}<figcaption><p class="event-caption">${e(event.description||event.title)}${dateLabel(event)?` <span class="caption-year">· ${e(dateLabel(event))}</span>`:''}</p><div class="event-links">${textLink('Slides',event.slides,true)}${textLink('Recording',event.recording,true)}</div></figcaption></figure>`;
  }
  function home() {
    const activities=(c.homeActivities||[]).map(id=>c.events.find(event=>event.id===id)).filter(Boolean);
    return `<section class="hero"><div><p class="eyebrow">Computational mechanics & composite fracture</p><h1>${e(p.name)}</h1><p class="hero-role">${e(p.role)}</p><p class="hero-affiliation">${e(p.affiliation)}</p><p class="hero-copy">${e(p.intro)}</p><dl class="expertise"><div><dt>Research focus</dt><dd>Finite element analysis · Composite failure · Fracture mechanics</dd></div><div><dt>Technical tools</dt><dd>Abaqus UEL / UMAT · Fortran · Python · MATLAB</dd></div></dl><div class="actions"><a class="button" href="research.html">Explore the research <span aria-hidden="true">→</span></a>${textLink('About me','about.html')}</div></div><figure class="hero-photo"><img src="${href(p.portrait)}" alt="${e(p.name)}" width="650" height="650" fetchpriority="high"></figure></section>
    <section class="section home-research"><div class="section-heading"><h2>Current research</h2>${textLink('All work','work.html')}</div><div class="feature">${researchMedia()}<div><h3>${e(c.research.title)}</h3><p>${e(c.research.summary)}</p>${textLink('Explore the research','research.html')}</div></div></section>
    <section class="section"><div class="section-heading"><h2>News & updates</h2>${textLink('View all updates','news.html')}</div><div class="news-list">${c.news.slice(0,4).map(n=>newsRow(n)).join('')}</div></section>
    ${activities.length?`<section class="section activities-section"><div class="section-heading"><h2>Activities & involvement</h2>${textLink('View gallery','talks.html')}</div><div class="home-gallery">${activities.map(eventFigure).join('')}</div></section>`:''}`;
  }
  function work() {
    return `${heading('','Research & engineering','Computational modeling and selected engineering projects.')}
    <section class="work-current" id="current-research"><p class="eyebrow">Current research</p><h2>${e(c.research.title)}</h2><p>${e(c.research.summary)}</p>${textLink('Explore the research','research.html')}</section>
    <section class="section"><div class="section-heading"><h2>Earlier research</h2></div><div class="earlier-list">${c.earlierResearch.map(w=>`<article class="earlier-row" id="${e(w.id)}"><span class="work-year">${e(w.year)}</span><p><strong>${e(w.title)}.</strong> ${e(w.summary)}</p>${textLink('Article',w.url,true)}</article>`).join('')}</div></section>
    <section class="section"><div class="section-heading"><h2>Engineering projects</h2></div><div class="engineering-grid">${c.engineering.map(w=>`<article><img src="${href(w.image)}" alt="${e(w.alt)}" loading="lazy"><h3>${e(w.title)}</h3><p>${e(w.summary)}</p></article>`).join('')}</div></section>`;
  }
  function research() {
    const r=c.research;
    return `<div class="breadcrumb">${textLink('All work','work.html')}</div>${heading('Current research',r.title,r.summary)}
    <div class="research-intro"><div><h2>The research problem</h2><p>${e(r.overview)}</p><p class="research-affiliation">Michigan Technological University<br>Advisor: Dr. Trisha Sain</p></div>${researchMedia(true)}</div>
    <section class="section"><div class="section-heading"><h2>Model & implementation</h2></div><div class="method-grid"><div><h3>Mixed-mode fracture formulation</h3><p>${e(r.approach)}</p></div><div><h3>Custom finite element implementation</h3><p>${e(r.implementation)}</p></div></div></section>
    <section class="section"><div class="section-heading"><h2>Selected findings</h2></div><div class="finding-list">${r.findings.map(f=>`<article><h3>${e(f.title)}</h3><p>${e(f.text)}</p></article>`).join('')}</div></section>
    <section class="section"><div class="section-heading"><h2>Related publications</h2>${textLink('Full publication list','publications.html')}</div><div class="related-list">${r.related.map(id=>c.publications.find(w=>w.id===id)).filter(Boolean).map(w=>`<article><span class="related-status">${e(w.status)}</span><span class="related-title">${e(w.title)}</span></article>`).join('')}</div></section>`;
  }
  function publicationRow(w,index) {
    const authors=w.authors.map(a=>a==='M. A. A. Morshed'?`<strong>${e(a)}</strong>`:e(a)).join(', ');
    return `<article class="pub-row" id="${e(w.id)}"><div class="pub-index">${String(index+1).padStart(2,'0')}<span>${e(w.year)}</span></div><div class="pub-content"><p class="pub-type">${e(w.type)}</p><h3>${e(w.title)}</h3><p class="pub-authors">${authors}.</p><p class="pub-venue"><cite>${e(w.venue)}</cite>${w.detail?`. ${e(w.detail)}`:''}${w.detail.endsWith('.')?'':'.'} ${e(w.year)}.</p>${w.status==='Accepted'?'<p class="pub-state">Accepted for publication</p>':w.status==='Under review'?'<p class="pub-state review">Manuscript under review</p>':''}${w.doi?`<div class="pub-links">${textLink('Read article',w.doi,true)}<span class="doi">DOI: ${e(w.doi.replace('https://doi.org/',''))}</span></div>`:''}</div></article>`;
  }
  function publications() {
    const groups=[['Published','published'],['Accepted','accepted'],['Under review','under-review']];
    return `${heading('','Publications','Journal articles, conference proceedings, and a book chapter.')}<nav class="section-nav" aria-label="Publication sections">${groups.map(([label,id])=>`<a href="#${id}">${e(label)} <span>${c.publications.filter(w=>w.status===label).length}</span></a>`).join('')}</nav>
    ${groups.map(([label,id])=>`<section class="pub-group" id="${id}"><h2>${e(label)}</h2>${c.publications.filter(w=>w.status===label).map((w,i)=>publicationRow(w,i)).join('')}</section>`).join('')}
    <div class="page-bottom-link">${textLink('News & updates','news.html')}</div>`;
  }
  const bioRows=entries=>entries.map(x=>`<div class="bio-row"><div class="bio-top"><h3>${e(x.title)}</h3><span>${e(x.dates||'')}</span></div>${x.institution?`<p class="institution">${e(x.institution)}</p>`:''}${x.description?`<p>${e(x.description)}</p>`:''}</div>`).join('');
  function talks() {
    return `${heading('','Research communication & involvement')}<div class="gallery-grid">${c.events.map(eventFigure).join('')}</div>
    <section class="section involvement" id="involvement"><div class="section-heading"><h2>Outreach & engagement</h2></div><div class="gallery-grid service-gallery">${c.involvement.map(eventFigure).join('')}</div></section>`;
  }
  function about() {
    return `${heading('Background & experience','About me')}<div class="about-grid"><div class="about-copy"><p>I am a PhD candidate in Mechanical and Aerospace Engineering at Michigan Technological University. My research focuses on computational fracture mechanics and the failure of composite materials.</p><p>I develop numerical models and custom Abaqus implementations. I am interested in internship opportunities in CAE, structural mechanics, and mechanical engineering R&amp;D.</p><section class="about-section"><h2>Experience</h2>${bioRows(c.experience)}</section><section class="about-section"><h2>Education</h2>${bioRows(c.education)}</section><section class="about-section" id="honors"><h2>Honors</h2>${bioRows(c.honors)}</section></div><aside class="about-aside"><section id="documents"><h2>Curriculum vitae</h2>${p.cv?`<a class="button" href="${href(p.cv)}" download>Download my CV <span aria-hidden="true">↓</span></a>`:textLink('Request my CV','mailto:'+p.email)}</section><section class="about-section" id="contact"><h2>Contact</h2><a class="email-link" href="mailto:${e(p.email)}">${e(p.email)}</a><div class="contact-list">${social.filter(([label])=>label!=='Email').map(([label,url])=>textLink(label,url,true)).join('')}</div></section><section class="about-section"><h2>Involvement</h2><p>Conference presentations, research mentoring, and community activities.</p>${textLink('Talks & activities','talks.html')}</section></aside></div>`;
  }
  function news() {
    const groups=new Map();
    c.news.forEach(n=>{const group=n.date?n.date.slice(0,4):(n.group||'Earlier');if(!groups.has(group))groups.set(group,[]);groups.get(group).push(n);});
    return `${heading('Research & professional milestones','News & updates')}<div>${Array.from(groups,([group,items])=>`<section class="archive-group"><h2>${e(group)}</h2><div class="news-list">${items.map(n=>newsRow(n,true)).join('')}</div></section>`).join('')}</div>`;
  }
  const renderers={home,work,research,publications,talks,about,news};
  document.getElementById('main').innerHTML=(renderers[page]||home)();
  const menu=document.querySelector('.menu-button');
  const menuNav=document.getElementById('site-nav');
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menuNav.classList.toggle('is-open',!open);menu.textContent=open?'Menu +':'Close −';});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.click();menu.focus();}});

  const dialog=document.getElementById('photo-dialog');
  let album=[],albumIndex=0,albumTitle='';
  function paintPhoto(){const photo=album[albumIndex];document.getElementById('lightbox-image').src=photo.src;document.getElementById('lightbox-image').alt=photo.alt||albumTitle;document.getElementById('lightbox-caption').textContent=photo.caption||albumTitle;document.getElementById('lightbox-counter').textContent=`${albumIndex+1} / ${album.length}`;document.getElementById('lightbox-controls').hidden=album.length<2;}
  document.addEventListener('click',event=>{const trigger=event.target.closest('[data-event-id]');if(!trigger)return;const entry=[...c.events,...c.involvement].find(x=>x.id===trigger.dataset.eventId);if(!entry||!entry.photos.length)return;album=entry.photos;albumTitle=[entry.title,dateLabel(entry)].filter(Boolean).join(' · ');albumIndex=0;paintPhoto();dialog.showModal();});
  document.getElementById('lightbox-close').addEventListener('click',()=>dialog.close());
  document.getElementById('lightbox-previous').addEventListener('click',()=>{albumIndex=(albumIndex-1+album.length)%album.length;paintPhoto();});
  document.getElementById('lightbox-next').addEventListener('click',()=>{albumIndex=(albumIndex+1)%album.length;paintPhoto();});
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'&&album.length>1){event.preventDefault();document.getElementById('lightbox-next').click();}if(event.key==='ArrowLeft'&&album.length>1){event.preventDefault();document.getElementById('lightbox-previous').click();}});
  if(location.hash){requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());}
})();

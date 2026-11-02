const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.8 2.3h7l4.8 6.4 5.6-6.4zm-1.2 17.9h1.9L7 4.2H5l12 16z"/></svg>',
  medium: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 12a6.8 6.8 0 1 1-13.5 0 6.8 6.8 0 0 1 13.5 0zm7.4 0c0 3.5-1.5 6.4-3.4 6.4s-3.4-2.9-3.4-6.4 1.5-6.4 3.4-6.4 3.4 2.9 3.4 6.4zM24 12c0 3.2-.5 5.7-1.2 5.7s-1.2-2.6-1.2-5.7.5-5.7 1.2-5.7S24 8.8 24 12z"/></svg>',
  kaggle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.8 23.6c0 .3-.1.4-.4.4h-3c-.2 0-.4-.1-.5-.3l-4.8-6.1-1.4 1.3v4.7c0 .3-.1.4-.4.4H6c-.3 0-.4-.1-.4-.4V.4c0-.3.1-.4.4-.4h2.3c.3 0 .4.1.4.4v14.3l6.2-6.3c.2-.2.4-.3.6-.3h3.1c.2 0 .3.1.3.2.1.1 0 .3-.1.4l-6.5 6.3 6.8 8.4c.1.1.1.2.1.2z"/></svg>',
  zindi: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v3.2L9.4 17.8H20V21H4v-3.2L14.6 6.2H4z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
};

const $ = (sel) => document.querySelector(sel);

const escapeHtml = (str = "") =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const formatDate = (value, opts = { month: "short", year: "numeric" }) => {
  if (!value) return "";
  const parts = value.split("-").map(Number);
  if (parts.length === 1) return String(parts[0]);
  const date = new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
  return date.toLocaleDateString("en-US", opts);
};

const byDateDesc = (a, b) => (b.date || "").localeCompare(a.date || "");

const listOrEmpty = (items, render, message) =>
  items && items.length ? items.map(render).join("") : `<p class="empty">${message}</p>`;

const extLink = (url, label) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label}</a>`;

function renderSocials(target) {
  const links = SITE.socials
    .map((s) => `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(s.name)}" title="${escapeHtml(s.name)}">${ICONS[s.icon] || s.name}</a>`)
    .join("");
  $(target).innerHTML = links + `<a href="mailto:${escapeHtml(SITE.email)}" aria-label="Email" title="Email">${ICONS.email}</a>`;
}

function renderHero() {
  const [first, ...rest] = SITE.name.split(" ");
  $("#logo").innerHTML = `${escapeHtml(first)} <span>${escapeHtml(rest.join(" "))}</span>`;
  $("#hero-name").textContent = SITE.name;
  $("#hero-open").textContent = SITE.openTo;
  $("#hero-tagline").textContent = SITE.tagline;
  $("#hero-avatar").src = SITE.avatar;
  $("#hero-badges").innerHTML = (SITE.highlights || [])
    .map((h) => `<div class="badge"><strong>${escapeHtml(h.value)}</strong><span>${escapeHtml(h.label)}</span></div>`)
    .join("");
  const venues = (SITE.venues || []).map((v) => `<span>${escapeHtml(v)}</span>`).join("");
  $("#marquee").innerHTML = venues + venues;
  renderSocials("#hero-socials");
  typeRoles();
}

function typeRoles() {
  const el = $("#typed");
  const roles = SITE.roles || [SITE.title];
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = roles.join(" · ");
    return;
  }
  let role = 0, char = 0, deleting = false;
  const tick = () => {
    const word = roles[role];
    char += deleting ? -1 : 1;
    el.textContent = word.slice(0, char);
    let delay = deleting ? 40 : 85;
    if (!deleting && char === word.length) { deleting = true; delay = 1800; }
    else if (deleting && char === 0) { deleting = false; role = (role + 1) % roles.length; delay = 300; }
    setTimeout(tick, delay);
  };
  tick();
}

function renderAbout() {
  $("#about-text").innerHTML = SITE.about.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  $("#stats").innerHTML = SITE.stats
    .map((s) => {
      const match = String(s.value).match(/^(\d+)(.*)$/);
      const attrs = match ? ` data-count="${match[1]}" data-suffix="${escapeHtml(match[2])}"` : "";
      return `<div class="stat"><strong${attrs}>${escapeHtml(s.value)}</strong><span>${escapeHtml(s.label)}</span></div>`;
    })
    .join("");
  $("#skills").innerHTML = (SITE.skills || [])
    .map((g) => `
      <div class="skill-group">
        <h4>${escapeHtml(g.group)}</h4>
        <div class="tags">${g.items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join("")}</div>
      </div>`)
    .join("");
}

function renderResearch() {
  $("#research-statement").textContent = SITE.researchStatement || "";
  $("#interests").innerHTML = (SITE.researchInterests || [])
    .map((r, i) => `
      <div class="interest reveal">
        <div class="num">0${i + 1}</div>
        <h4>${escapeHtml(r.title)}</h4>
        <p>${escapeHtml(r.description)}</p>
        <span class="tag gold">${escapeHtml(r.evidence)}</span>
      </div>`)
    .join("");
  $("#pubs-list").innerHTML = listOrEmpty(
    SITE.publications,
    (p) => `
      <article class="pub reveal">
        <div class="pub-year">${escapeHtml(p.year)}</div>
        <div>
          <h3>${escapeHtml(p.title)}</h3>
          <p class="pub-authors">${escapeHtml(p.authors)}</p>
          <p class="pub-venue">${escapeHtml(p.venue)}</p>
          <p class="pub-summary">${escapeHtml(p.summary)}</p>
          <div class="card-links">${(p.links || []).map((l) => extLink(l.url, `${escapeHtml(l.label)} →`)).join("")}</div>
        </div>
      </article>`,
    "Publications coming soon."
  );
}

function renderWins() {
  $("#wins-list").innerHTML = listOrEmpty(
    [...SITE.wins].sort(byDateDesc),
    (w) => `
      <div class="timeline-item reveal">
        <span class="when">${formatDate(w.date)}</span>${w.tag ? `<span class="tag${w.tag === "Award" ? " gold" : ""}">${escapeHtml(w.tag)}</span>` : ""}
        <h4>${escapeHtml(w.title)}</h4>
        <p>${escapeHtml(w.description)}</p>
        ${w.link ? extLink(w.link, "Read more →") : ""}
      </div>`,
    "News coming soon."
  );
}

function projectCard(p) {
  const links = [p.repo && extLink(p.repo, "Code →"), p.demo && extLink(p.demo, "Live demo →")].filter(Boolean).join("");
  return `
    <article class="card reveal">
      <span class="card-meta">${escapeHtml(p.category || "")}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
      <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
      ${links ? `<div class="card-links">${links}</div>` : ""}
    </article>`;
}

function renderProjects(filter = "All") {
  const categories = ["All", ...new Set(SITE.projects.map((p) => p.category).filter(Boolean))];
  $("#project-filters").innerHTML = categories
    .map((c) => `<button class="filter-btn ${c === filter ? "active" : ""}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");
  const items = filter === "All" ? SITE.projects : SITE.projects.filter((p) => p.category === filter);
  $("#projects-list").innerHTML = listOrEmpty(items, projectCard, "Projects coming soon.");
  observeReveals();
}

function renderTalks() {
  const today = new Date().toISOString().slice(0, 10);
  $("#talks-list").innerHTML = listOrEmpty(
    [...SITE.speaking].sort(byDateDesc),
    (t) => {
      const [year, month, day] = t.date.split("-");
      const label = month ? formatDate(t.date, day ? { month: "short", day: "numeric" } : { month: "short" }) : "";
      const title = t.link ? extLink(t.link, `${escapeHtml(t.title)} ↗`) : escapeHtml(t.title);
      return `
        <div class="talk reveal">
          <div class="talk-date">${label}<small>${year}</small></div>
          <div><h4>${title}</h4><p>${escapeHtml(t.event)} · ${escapeHtml(t.location)}</p></div>
          <div class="talk-tags">${t.date > today ? '<span class="tag upcoming">Upcoming</span>' : ""}<span class="tag">${escapeHtml(t.type)}</span></div>
        </div>`;
    },
    "Upcoming talks will be listed here."
  );
  $("#talks-note").textContent = SITE.speakingNote || "";
}

function renderPress() {
  $("#press-list").innerHTML = (SITE.press || [])
    .map((p) => `
      <a class="press-card reveal" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">
        <span class="outlet">${escapeHtml(p.outlet)}</span>
        <h4>${escapeHtml(p.title)}</h4>
        <small>${formatDate(p.date, { month: "long", day: "numeric", year: "numeric" })} ${p.date ? "· " : ""}Read →</small>
      </a>`)
    .join("");
  $("#testimonials").innerHTML = (SITE.testimonials || [])
    .map((t) => `
      <figure class="quote reveal">
        <p>${escapeHtml(t.quote)}</p>
        <cite>${t.url ? extLink(t.url, escapeHtml(t.author)) : escapeHtml(t.author)}<span>${escapeHtml(t.role)}</span></cite>
      </figure>`)
    .join("");
}

function renderBlog() {
  $("#blog-list").innerHTML = listOrEmpty(
    [...SITE.blog].sort(byDateDesc),
    (b) => `
      <article class="card reveal">
        <span class="card-meta">${formatDate(b.date, { month: "long", day: "numeric", year: "numeric" })}${b.readTime ? " · " + escapeHtml(b.readTime) + " read" : ""}</span>
        <h3>${escapeHtml(b.title)}</h3>
        <p>${b.excerpt ? escapeHtml(b.excerpt) : ""}</p>
        <div class="card-links">${extLink(b.url, "Read article →")}</div>
      </article>`,
    "Articles coming soon."
  );
}

function renderJourney() {
  const item = (e) => `
    <div class="timeline-item reveal">
      <span class="when">${escapeHtml(e.period)}</span>
      <h4>${escapeHtml(e.title)}</h4>
      <div class="org">${escapeHtml(e.org)}</div>
      ${e.details ? `<p>${escapeHtml(e.details)}</p>` : ""}
    </div>`;
  const bullets = (items) => (items || []).map((c) => `<li>${escapeHtml(c)}</li>`).join("");
  $("#education-list").innerHTML = listOrEmpty(SITE.education, item, "");
  $("#experience-list").innerHTML = listOrEmpty(SITE.experience, item, "");
  $("#cert-list").innerHTML = bullets(SITE.certifications);
  $("#community-list").innerHTML = bullets(SITE.community);
}

function renderMentoring() {
  $("#mentoring-intro").textContent = SITE.mentoring.intro;
  $("#mentoring-topics").innerHTML = SITE.mentoring.topics.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  if (SITE.bookingLink) {
    const btn = $("#booking-btn");
    btn.href = SITE.bookingLink;
    btn.hidden = false;
  }
}

function renderContact() {
  const link = $("#contact-email");
  link.href = `mailto:${SITE.email}`;
  link.textContent = SITE.email;
  renderSocials("#contact-socials");
  $("#footer-name").textContent = SITE.fullName || SITE.name;
  $("#year").textContent = new Date().getFullYear();
}

function setupForms() {
  document.querySelectorAll("form.form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const button = form.querySelector("button[type=submit]");
      const data = Object.fromEntries(new FormData(form));
      if (data._honey) return;
      delete data._honey;

      status.className = "form-status";
      status.textContent = "Sending...";
      button.disabled = true;
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE.formEmail || SITE.email)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `${form.dataset.subject}: ${data.name || ""}`.trim(),
            _template: "table",
            _replyto: data.email,
            form: form.dataset.subject,
            ...data,
          }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || String(json.success) === "false") throw new Error(json.message);
        form.reset();
        status.classList.add("ok");
        status.textContent = "Thank you! Your message is on its way. I'll reply by email soon.";
      } catch {
        status.classList.add("err");
        status.innerHTML = `Couldn't send right now. Please email <a href="mailto:${escapeHtml(SITE.email)}">${escapeHtml(SITE.email)}</a>.`;
      } finally {
        button.disabled = false;
      }
    });
  });
}

function setupTheme() {
  $("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

function setupNav() {
  const nav = $("#nav-links");
  $("#menu-btn").addEventListener("click", () => nav.classList.toggle("open"));
  nav.addEventListener("click", (e) => e.target.tagName === "A" && nav.classList.remove("open"));

  const progress = $("#scroll-progress");
  const onScroll = () => {
    $("#navbar").classList.toggle("scrolled", window.scrollY > 10);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = [...nav.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  $("#project-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (btn) renderProjects(btn.dataset.filter);
  });
}

function animateCount(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))).toLocaleString() + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll("[data-count]").forEach(animateCount);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

renderHero();
renderAbout();
renderResearch();
renderWins();
renderProjects();
renderTalks();
renderPress();
renderBlog();
renderJourney();
renderMentoring();
renderContact();
setupForms();
setupTheme();
setupNav();
observeReveals();

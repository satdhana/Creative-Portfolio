/* ==========================================================
   EDIT YOUR CONTENT HERE
   - Put images in assets/projects/<slug>/ named 1.jpg, 2.jpg, ...
   - Set `count` to how many images you added for that project.
   - Optional `trimX` / `trimY` (0 to 0.2): crop blank margins baked into a project's screenshots, per side.
   - Optional `sameShapeAs: "<slug>"`: fit every image into the same shape as that project's first image.
   ========================================================== */

const FILTERS = [
  "Visual Design",
  "Content Direction",
  "On-camera Talent",
  "Social Media Management",
  "Brand & Product",
];

const PROJECTS = [
  {
    slug: "batagor-aneka-jaya",
    name: "Batagor Aneka Jaya",
    handle: "batagoranekajaya",
    type: "Food & beverage, outlets in Jabodetabek and Malang",
    followers: "25.2K",
    band: "#00a06e",
    note: "#c9f7dc",
    roles: ["Visual Designer"],
    filters: ["Visual Design"],
    desc: "I designed the feed content requested by the marketing team, using Adobe Illustrator.",
    bullets: [
      "Promo, menu and soft-opening posts",
      "Playful posts such as guess-the-picture, this-or-that and word search",
    ],
    count: 6,
  },
  {
    slug: "krawulah-satu-satunya",
    name: "Krawulah Satu-Satunya",
    handle: "krawulahsatusatunya",
    type: "Nasi krawu, Duren Sawit, East Jakarta",
    followers: "4.3K",
    band: "#1e9ac9",
    note: "#ff9a9a",
    roles: ["Visual Designer", "Product Photography"],
    filters: ["Visual Design"],
    desc: "I created content in Adobe Illustrator and Canva, and shot the product photos used as assets.",
    bullets: [
      "Quiz, riddle and greeting posts in the brand's red and green",
      "Product photoshoots for the feed",
    ],
    count: 6,
  },
  {
    slug: "bank-nusumma",
    name: "Bank Nusumma",
    handle: "bank.nusumma",
    type: "Rural bank serving MSMEs",
    followers: "6.6K",
    band: "#ff9524",
    note: "#ffdd8a",
    roles: ["Content Director", "Talent"],
    filters: ["Content Direction", "On-camera Talent"],
    trimX: 0.06,   // crops 6% off the left and right of each image to remove blank margins in the screenshot
    desc: "As Content Director and on-camera talent, I worked to raise engagement, product knowledge and new followers.",
    bullets: [
      "Product explainers such as Tabitri, KPGB and deposits",
      "Festive, national-day and anniversary content with the bank's team",
    ],
    count: 6,
  },
  {
    slug: "nba-holding",
    name: "NBA Holding",
    handle: "nbaholding",
    type: "Nusantara Bina Artha, holding company of Bank Nusumma",
    followers: "1.4K",
    band: "#00a06e",
    note: "#f5b318",
    roles: ["Talent", "Content Ideation"],
    filters: ["On-camera Talent"],
    trimX: 0.06,   // same margin trimming as Bank Nusumma
    desc: "I supported content ideation and appeared as talent to increase awareness and engagement.",
    bullets: [
      "NBA Sharing sessions and employee POV videos",
      "Career tips, internship posts and holiday greetings",
    ],
    count: 6,
  },
  {
    slug: "kaluna",
    name: "Kaluna Coffee",
    handle: "kaluna_coffee",
    type: "Coffee shop, Bintaro",
    followers: "1.1K",
    band: "#1e9ac9",
    note: "#bdebf5",
    roles: ["Visual Designer", "Content Director", "Talent"],
    filters: ["Visual Design", "Content Direction", "On-camera Talent"],
    sameShapeAs: "krawulah-satu-satunya",   // gallery images use the same shape as Krawulah
    desc: "I created content to increase brand awareness, engagement and purchases, from design to direction to being on camera.",
    bullets: [
      "Coffee capsule launch and pre-order posts",
      "Lifestyle shots and Ramadan drink tips",
    ],
    count: 6,
  },
  {
    slug: "kiosery",
    name: "Kiosery",
    handle: "kioserycoid",
    type: "Supply chain for fresh chicken and kitchen staples",
    followers: "966",
    band: "#ff9524",
    note: "#f5d90a",
    roles: ["Product Manager"],
    filters: ["Brand & Product", "On-camera Talent"],
    sameShapeAs: "krawulah-satu-satunya",   // gallery images use the same shape as Krawulah
    desc: "I created the brand logo, came up with content ideas, appeared as talent and managed the account to increase brand awareness, engagement and purchases.",
    bullets: [
      "Brand logo",
      "Recipe, promo and customer-story content",
    ],
    count: 6,
  },
  {
    slug: "jamilos",
    name: "Jamilos",
    handle: "jamilos.id",
    type: "Nasi goreng and sate, Bendungan Hilir, Jakarta",
    followers: "15.9K",
    band: "#00a06e",
    note: "#bde8f5",
    roles: ["Social Media Manager", "Talent"],
    filters: ["Social Media Management", "On-camera Talent"],
    trimX: 0.06,   // same margin trimming as Bank Nusumma
    desc: "I created content, managed the Instagram and TikTok accounts, and appeared as talent to increase brand awareness, engagement and purchases.",
    bullets: [
      "Reels and short videos on location",
      "New menu and promo posts",
    ],
    count: 6,
  },
];

/* Your own channels. Fill in `followers` and `topics` for each one.
   Leave `followers` as "" to show a reminder box instead. */
const SOCIALS = [
  {
    platform: "Instagram",
    handle: "satdhana",
    url: "https://www.instagram.com/satdhana/",
    domain: "instagram.com/satdhana",
    posts: 2,                 // number of screenshots in assets/socials/instagram-1, -2 ...
    followers: "7.6K",        // e.g. "2.4K"
    topics: ["Tech", "Fashion", "Creative", "Gym"],   // e.g. ["Food reviews", "Daily life", "Brand collabs"]
    tint: "#f4a6d7",
  },
  {
    platform: "TikTok",
    handle: "stdhn4",
    url: "https://www.tiktok.com/@stdhn4",
    domain: "tiktok.com/@stdhn4",
    posts: 2,                 // number of screenshots in assets/socials/tiktok-1, -2 ...
    followers: "6.7K",            // e.g. "10.5K"
    topics: ["Fashion", "Creative", "Gym"],               // e.g. ["Short videos", "POV skits"]
    tint: "#bdebf5",
  },
  {
    platform: "X",
    handle: "dari4bersodara",
    url: "https://x.com/dari4bersodara",
    domain: "x.com/dari4bersodara",
    stack: "text",            // cards with the same `stack` value share one column, top to bottom
    posts: 0,                 // no screenshots for this one
    followers: "11.4K",
    topics: ["Fashion", "Daily Life", "Gym"],               // e.g. ["Threads", "Daily thoughts"]
    tint: "#c9c3f0",
  },
  {
    platform: "Threads",
    handle: "satdhana",
    url: "https://www.threads.com/@satdhana",
    domain: "threads.com/@satdhana",
    stack: "text",
    posts: 0,                 // no screenshots for this one (set 2 and add assets/socials/threads-1, -2 to show them)
    followers: "955",
    topics: [ "Daily Life", "Gym"],               // e.g. ["Tech", "Fashion"]
    tint: "#ffe27a",
  },
];

/* ==========================================================
   Rendering code (no need to edit below)
   ========================================================== */

const el = (tag, attrs = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  });
  [].concat(children).forEach((c) => c && node.appendChild(c));
  return node;
};

/* Hero name as ransom-note tiles */
(function buildRansom() {
  const target = document.getElementById("ransom");
  if (!target) return;
  const styles = [
    { bg: "#ffb300", fg: "#4b0f82", ff: "var(--font-serif)", r: "-5deg" },
    { bg: "#ffcd00", fg: "#1b1b1b", ff: "var(--font-display)", r: "3deg" },
    { bg: "#b7bdf0", fg: "#1b1b1b", ff: "var(--font-serif)", r: "-2deg" },
    { bg: "#f4a6d7", fg: "#7a0f4d", ff: "var(--font-display)", r: "5deg" },
  ];
  "Daph".split("").forEach((ch, i) => {
    const s = styles[i % styles.length];
    const span = el("span", { text: ch, "aria-hidden": "true" });
    span.style.setProperty("--bg", s.bg);
    span.style.setProperty("--fg", s.fg);
    span.style.setProperty("--ff", s.ff);
    span.style.setProperty("--r", s.r);
    target.appendChild(span);
  });
})();

/* Hero photo fallback */
(function heroPhoto() {
  const img = document.getElementById("heroPhoto");
  if (!img) return;
  img.addEventListener("error", () => {
    img.src = "assets/photo-placeholder.svg";
  }, { once: true });
})();

/* Ticker */
(function buildTicker() {
  const track = document.getElementById("ticker");
  if (!track) return;
  const makeSet = () => {
    const frag = document.createDocumentFragment();
    PROJECTS.forEach((p) => {
      const span = el("span", { text: p.name });
      span.insertAdjacentHTML("beforeend", '<svg viewBox="0 0 100 100"><use href="#sparkle"/></svg>');
      frag.appendChild(span);
    });
    return frag;
  };
  track.appendChild(makeSet());
  track.appendChild(makeSet()); // duplicated for a seamless loop
})();

/* Shape (width / height) of another project's first image, used by `sameShapeAs` */
const shapeCache = {};
function probeRatio(slug) {
  if (!shapeCache[slug]) {
    shapeCache[slug] = new Promise((resolve) => {
      const exts = ["jpg", "png", "webp"];
      let attempt = 0;
      const img = new Image();
      img.onload = () => resolve(img.naturalWidth / img.naturalHeight);
      img.onerror = () => {
        attempt += 1;
        if (attempt < exts.length) img.src = `assets/projects/${slug}/1.${exts[attempt]}`;
        else resolve(null);
      };
      img.src = `assets/projects/${slug}/1.${exts[0]}`;
    });
  }
  return shapeCache[slug];
}

/* Gallery: show whichever numbered images exist */
function loadGallery(project, container) {
  const results = new Array(project.count).fill(null);
  let pending = project.count;
  const finish = () => {
    const found = results.filter(Boolean);
    if (!found.length) {
      container.appendChild(
        el("div", {
          class: "gallery__empty",
          text: `Add screenshots to assets/projects/${project.slug}/ as 1.jpg (or .png), 2.jpg, ... and they will appear here.`,
        })
      );
      return;
    }
    // Optional per-project trimming of blank margins baked into the screenshots (0 to 0.2, per side)
    const tx = Math.min(Math.max(project.trimX || 0, 0), 0.2);
    const ty = Math.min(Math.max(project.trimY || 0, 0), 0.2);
    const place = (fixedRatio) => {
      found.forEach((img) => {
        const ratio = img.naturalWidth / img.naturalHeight;
        const cell = el("div", { class: "gallery__cell" });
        if (fixedRatio) {
          // same shape as another project: every image is fitted into that shape
          cell.classList.add("gallery__cell--fixed");
          cell.style.setProperty("--cr", fixedRatio.toFixed(4));
        } else {
          cell.style.setProperty("--cr", ((ratio * (1 - 2 * tx)) / (1 - 2 * ty)).toFixed(4));
          cell.style.setProperty("--tx", tx);
          cell.style.setProperty("--ty", ty);
        }
        cell.appendChild(img);
        container.appendChild(cell);
      });
    };
    if (project.sameShapeAs) probeRatio(project.sameShapeAs).then(place);
    else place(null);
  };
  if (!pending) return finish();
  for (let i = 1; i <= project.count; i++) {
    const img = new Image();
    img.alt = `${project.name} content sample ${i}`;
    const exts = ["jpg", "png", "webp"];
    let attempt = 0;
    img.onload = () => { results[i - 1] = img; if (--pending === 0) finish(); };
    img.onerror = () => {
      attempt += 1;
      if (attempt < exts.length) { img.src = `assets/projects/${project.slug}/${i}.${exts[attempt]}`; return; }
      if (--pending === 0) finish();
    };
    img.src = `assets/projects/${project.slug}/${i}.${exts[0]}`;
  }
}

function renderProject(p) {
  const section = el("section", { class: "project" });
  section.style.setProperty("--band", p.band);
  section.style.setProperty("--note", p.note);
  section.dataset.filters = p.filters.join("|");

  /* Browser window with gallery */
  const toggle = el("button", {
    class: "win__toggle",
    type: "button",
    "aria-expanded": "true",
    "aria-label": `Collapse ${p.name} window`,
    text: "–",
  });
  const win = el("div", { class: "win" }, [
    el("div", { class: "win__bar" }, [
      el("span", { class: "win__nav", "aria-hidden": "true", text: "← → ⟳" }),
      el("span", { class: "win__addr", text: `instagram.com/${p.handle}` }),
      toggle,
    ]),
    el("div", { class: "win__tab" }, [el("span", { text: p.name })]),
    el("div", { class: "win__body" }, [el("div", { class: "gallery" })]),
  ]);
  toggle.addEventListener("click", () => {
    const collapsed = win.classList.toggle("is-collapsed");
    toggle.textContent = collapsed ? "+" : "–";
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.setAttribute("aria-label", `${collapsed ? "Expand" : "Collapse"} ${p.name} window`);
  });

  /* Note */
  const note = el("aside", { class: "note" }, [
    el("h3", { text: p.name }),
    el("p", { class: "note__type", text: p.type }),
    el("ul", { class: "note__roles" }, p.roles.map((r) => el("li", { text: r }))),
    el("p", { class: "note__desc", text: p.desc }),
    el("ul", { class: "note__list" }, p.bullets.map((b) => el("li", { text: b }))),
    el("div", { class: "note__foot" }, [
      el("a", {
        class: "btn btn--yellow",
        href: `https://www.instagram.com/${p.handle}/`,
        target: "_blank",
        rel: "noopener",
        text: `Visit @${p.handle}`,
      }),
      el("p", { class: "stat", title: "Total followers of the account, not a measured result" }, [
        el("strong", { text: p.followers }),
        document.createTextNode("account followers"),
      ]),
    ]),
  ]);

  section.appendChild(el("div", { class: "project__inner" }, [win, note]));
  loadGallery(p, win.querySelector(".gallery"));
  return section;
}

(function init() {
  const list = document.getElementById("projects");
  const filterBox = document.getElementById("filters");
  const sections = PROJECTS.map((p) => {
    const s = renderProject(p);
    list.appendChild(s);
    return s;
  });

  const buttons = ["All", ...FILTERS].map((label) => {
    const b = el("button", { class: "chip", type: "button", "aria-pressed": label === "All" ? "true" : "false", text: label });
    b.addEventListener("click", () => {
      buttons.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      sections.forEach((s) => {
        s.hidden = label !== "All" && !s.dataset.filters.split("|").includes(label);
      });
    });
    filterBox.appendChild(b);
    return b;
  });
})();

/* Post screenshots for own channels: assets/socials/<platform>-1.png (or .jpg), -2, ... */
function loadPosts(social, container) {
  const total = social.posts || 0;
  const results = new Array(total).fill(null);
  let pending = total;
  const finish = () => {
    const found = results.filter(Boolean);
    if (!found.length) {
      container.appendChild(
        el("p", {
          class: "social__hint",
          text: `Add post screenshots to assets/socials/ as ${social.platform.toLowerCase()}-1.png and ${social.platform.toLowerCase()}-2.png.`,
        })
      );
      return;
    }
    found.forEach((img) => {
      const link = el("a", {
        href: social.url,
        target: "_blank",
        rel: "noopener",
        "aria-label": `Open ${social.platform} profile @${social.handle}`,
      });
      link.appendChild(img);
      container.appendChild(link);
    });
  };
  if (!total) return finish();
  for (let i = 1; i <= total; i++) {
    const img = new Image();
    img.alt = `${social.platform} post ${i} by @${social.handle}`;
    const base = `assets/socials/${social.platform.toLowerCase()}-${i}`;
    let triedJpg = false;
    img.onload = () => { results[i - 1] = img; if (--pending === 0) finish(); };
    img.onerror = () => {
      if (!triedJpg) { triedJpg = true; img.src = base + ".jpg"; return; }
      if (--pending === 0) finish();
    };
    img.src = base + ".png";
  }
}

/* Own channels */
(function renderSocials() {
  const box = document.getElementById("socialCards");
  if (!box) return;
  const stacks = {};
  SOCIALS.forEach((s) => {
    const body = el("div", { class: "win__body" }, [
      el("div", { class: "social__top" }, [
        el("div", {}, [
          el("h3", { text: s.platform }),
          el("p", { class: "social__handle", text: `@${s.handle}` }),
        ]),
        el("a", { class: "btn btn--yellow", href: s.url, target: "_blank", rel: "noopener", text: `Visit @${s.handle}` }),
      ]),
      el("div", { class: "social__stats" }, [
        s.followers
          ? el("p", { class: "social__count" }, [el("strong", { text: s.followers }), document.createTextNode("followers")])
          : el("p", { class: "social__hint", text: `Add your follower count for ${s.platform} in js/main.js (SOCIALS).` }),
        s.topics.length
          ? el("div", { class: "social__topics-wrap" }, [
              el("p", { class: "social__label", text: "What I post" }),
              el("ul", { class: "social__topics" }, s.topics.map((t) => el("li", { text: t }))),
            ])
          : el("p", { class: "social__hint", text: `Add the kinds of content you post on ${s.platform} in js/main.js (SOCIALS).` }),
      ]),
      s.posts > 0
        ? el("div", {}, [
            el("p", { class: "social__label", text: "Recent posts" }),
            el("div", { class: "social__posts" }),
          ])
        : null,
    ]);
    const postsBox = body.querySelector(".social__posts");
    if (postsBox) loadPosts(s, postsBox);
    const card = el("article", { class: "win social" }, [
      el("div", { class: "win__bar" }, [
        el("span", { class: "win__nav", "aria-hidden": "true", text: "← → ⟳" }),
        el("span", { class: "win__addr", text: s.domain }),
      ]),
      body,
    ]);
    card.style.setProperty("--tint", s.tint);
    if (s.stack) {
      if (!stacks[s.stack]) {
        stacks[s.stack] = el("div", { class: "social-stack" });
        box.appendChild(stacks[s.stack]);
      }
      stacks[s.stack].appendChild(card);
    } else {
      box.appendChild(card);
    }
  });
})();

/* Background ornaments: a few quiet shapes per section, kept behind the content */
(function addOrnaments() {
  const ASPECT = { sparkle: "0 0 100 100", burst: "0 0 100 100", bolt: "0 0 100 100", flower: "0 0 100 100", dots: "0 0 60 60", zigzag: "0 0 100 40", cloud: "0 0 22 7", "pixel-heart": "0 0 7 6" };
  const NS = "http://www.w3.org/2000/svg";

  // item: [shape, color, size(px), position, rotation(deg), opacity, hideOnMobile]
  function decorate(host, items, extraClass) {
    if (!host) return;
    host.classList.add("has-deco");
    const layer = el("div", { class: "deco" + (extraClass ? " " + extraClass : ""), "aria-hidden": "true" });
    items.forEach(([shape, color, size, pos, rot = 0, opacity = 1, hide = false]) => {
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", ASPECT[shape]);
      const use = document.createElementNS(NS, "use");
      use.setAttribute("href", "#" + shape);
      svg.appendChild(use);
      svg.style.color = color;
      svg.style.setProperty("--s", size + "px");
      svg.style.setProperty("--r", rot + "deg");
      svg.style.setProperty("--o", opacity);
      Object.assign(svg.style, pos);
      if (hide) svg.classList.add("sm-hide");
      layer.appendChild(svg);
    });
    host.prepend(layer);
  }

  // Hero already has stickers; add two quiet extras
  decorate(document.querySelector(".hero"), [
    ["cloud", "#ffffff", 170, { bottom: "-4px", left: "2%" }, 0, 0.95],
    ["dots", "#ffffff", 70, { top: "38%", left: "47%" }, 0, 0.55, true],
  ]);

  // My own channels (green)
  decorate(document.getElementById("socials"), [
    ["zigzag", "#f5d90a", 150, { top: "2rem", right: "5%" }, -4],
    ["flower", "#f4a6d7", 110, { top: "42%", right: "10%" }, 12, 1, true],
    ["cloud", "#ffffff", 150, { bottom: "1rem", right: "30%" }, 0, 0.9, true],
  ]);

  // Work heading (blue, top of the section only)
  decorate(document.querySelector(".work"), [
    ["cloud", "#ffffff", 180, { top: "2.5rem", right: "6%" }, 0, 0.95, true],
    ["sparkle", "#f5d90a", 64, { top: "11rem", right: "24%" }, 10],
    ["zigzag", "#00a06e", 120, { top: "3rem", right: "32%" }, 6, 1, true],
  ], "deco--top");

  // Each project band
  const palettes = {
    "#00a06e": ["#f5d90a", "#f4a6d7", "#c9f7dc"],
    "#1e9ac9": ["#f5d90a", "#ffffff", "#ff9524"],
    "#ff9524": ["#f5d90a", "#ffffff", "#c81ec8"],
  };
  const layouts = [
    (c) => [["zigzag", c[0], 120, { top: "1rem", left: "3%" }, -6, 1, true], ["sparkle", c[1], 70, { bottom: "1.2rem", right: "4%" }, 12], ["dots", c[2], 70, { bottom: "1.5rem", left: "34%" }, 0, 0.7, true]],
    (c) => [["cloud", c[1] === "#ffffff" ? "#ffffff" : c[2], 140, { top: "1rem", right: "5%" }, 0, 0.9, true], ["flower", c[0], 90, { bottom: "1rem", left: "3%" }, 10]],
    (c) => [["burst", c[0], 100, { top: "-28px", left: "-24px" }, 0], ["zigzag", c[1], 110, { bottom: "1rem", right: "3%" }, 5, 1, true]],
  ];
  document.querySelectorAll(".project").forEach((sec, i) => {
    const band = getComputedStyle(sec).getPropertyValue("--band").trim().toLowerCase();
    const c = palettes[band] || palettes["#1e9ac9"];
    decorate(sec, layouts[i % layouts.length](c));
  });

  // About (blue)
  decorate(document.getElementById("about"), [
    ["burst", "#f4a6d7", 150, { top: "-34px", right: "-24px" }, 0],
    ["zigzag", "#f5d90a", 130, { top: "2.2rem", right: "24%" }, -5, 1, true],
    ["cloud", "#ffffff", 160, { bottom: "1rem", right: "6%" }, 0, 0.9, true],
  ]);

  // Contact (orange): already has two stickers, add two quiet ones
  decorate(document.getElementById("contact"), [
    ["cloud", "#ffffff", 150, { bottom: "1rem", left: "3%" }, 0, 0.9, true],
    ["zigzag", "#00a06e", 120, { top: "1.5rem", right: "14%" }, 4, 1, true],
  ]);
})();
// Mobile nav toggle
(() => {
  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('navMobilePanel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Project case study modal
(() => {
  const PROJECTS = {
    'pm-buddy': {
      eyebrow: 'Building now',
      category: 'AI / Productivity',
      title: 'PM Buddy',
      subtitle: 'AI Thinking Partner for Feature Validation',
      role: 'Solo Builder',
      timeline: 'In progress',
      status: 'Prototype',
      context: "Built for a real, recurring need: before scoping any feature, I want to know who it's for, whether it's worth building, how to validate it cheaply, and what would prove it worked. PM Buddy structures that thinking into a repeatable tool instead of a mental checklist I redo by hand each time.",
      problem: "Build a portfolio showcase, or a tool I'd actually reuse. Those optimize for different things — one for polish, one for volume and pattern recall — so I had to choose the tradeoff rather than default to whichever was easier.",
      myRole: "Owned the product decisions: scope, the questioning-before-generating flow, the output schema, the tagging taxonomy, the interface. Used Claude to generate code; the calls on what to build and cut were mine.",
      process: [
        { heading: 'Narrowing to one repeatable job', body: 'Cut an open-ended "analyze any product" idea after realizing it would sprawl with shallow output. Narrowed to a single repeatable job: validate one feature idea at a time.' },
        { heading: 'Making the tool ask questions first — on purpose', body: 'The tool asks 3 clarifying questions before analyzing. Forces the same rigor as a real scoping conversation, and doubles as interview rehearsal.' },
        { heading: 'Shipping, then fixing from real use', body: 'Added an optional live-research toggle so I control when depth is worth the wait. Added pattern tags post-launch (e.g. "brand mismatch," "vanity metric") so repeated use builds pattern recognition across cases. Then found the UX broke my own workflow — form buried, no way back without scrolling — and fixed both from actual use, not speculation.' },
      ],
      outcome: 'Working prototype, not yet public. Runs client-side on the Claude API; I use it for my own feature validation and interview prep. No backend or persistent storage yet — that\'s the gap before a real deployed link.',
      learning: "Two things, named honestly. First: I defaulted toward the impressive-demo version before deliberately choosing the reusable-tool version. Right call, but it means this stays a living entry, not a fixed case study. Second: shipping needs two unsolved pieces — a backend to hold the API key securely, and real storage to replace the sandbox-only layer it runs on now.",
      screenshot: null,
      link: null,
    },
    'ironcore': {
      eyebrow: 'Selected Best Proposal',
      category: 'Digital Transformation',
      title: 'IronCore Fitness',
      subtitle: 'Digital Transformation Strategy for a Regional Gym Chain',
      role: 'Lead PM, Team CTRL+TRANSFORM',
      timeline: 'Class Project · Best Proposal',
      status: 'Shipped',
      context: 'IronCore Fitness is a 12-location regional gym chain with 18,500 members, facing 26% annual churn — well above the 18–20% industry benchmark — and zero digital infrastructure: no app, no CRM, no cross-location visibility. Our team was brought in as digital transformation consultants to design a strategy addressing both member experience and operations, within a $600K–$900K budget.',
      problem: 'Leadership wanted a mobile app and digital infrastructure to cut churn and grow revenue per member from $65 to $85/month — but needed a defensible business case: which features to prioritize, in what sequence, and how to justify the ROI to a skeptical board and six distinct internal stakeholders resistant to change for different reasons.',
      myRole: 'Lead PM for a 4-person team. I owned the business case and ROI model, led user story writing and feature prioritization (MoSCoW), and drove prototype development — building the core prompts in Claude and iterating on design with teammate input. I also ran team meetings, delegated workstreams, and reviewed all deliverables before submission.',
      process: [
        { heading: 'Rebuilding the business case after feedback', body: 'After our first presentation, we got direct feedback that our financial projections were too optimistic and our user stories lacked specificity. For the final, I rebuilt the business case with per-solution cost/benefit breakdowns and explicit derivation math — exactly how churn reduction and premium-tier adoption reached the $85 ARPU target.' },
        { heading: 'Prioritization with a 4-factor scoring model', body: 'I prioritized features using a 4-factor scoring model (churn impact, member demand, revenue contribution, dependencies) to separate must-have launch features from later phases. All 20 user stories were rewritten with measurable acceptance criteria.' },
        { heading: 'Interactive prototype over static mockups', body: 'I made the call to build a working interactive prototype covering 3 core flows — booking, check-in, and premium upgrade — rather than static mockups. The goal was to defend real design decisions in Q&A, not just present slides.' },
      ],
      outcome: "Our final proposal projected 306% 3-year ROI, churn reduction from 26% to 18%, and ARPU growth from $65 to $85. It was selected as the class's best proposal, earning the team full marks.",
      learning: 'The biggest thing I\'d change: talk to stakeholders more directly about what "success" actually means to them before building the model. This was a simulated brief, so we inferred goals from the case materials — in a real transformation, I\'d validate upfront whether the priority is revenue, engagement, or a different customer segment, since that changes which numbers matter most.',
      screenshot: 'assets/img/case-ironcore.jpg',
      link: 'https://nsafarova.github.io/ironcore-mobileapp/',
    },
    'docpeak': {
      eyebrow: 'Paused pre-launch',
      category: 'Healthtech',
      title: 'DocPeak',
      subtitle: 'Queue & Patient Management for Small Clinics',
      role: 'Co-Founder, Technical PM',
      timeline: '2020 · Baku, Azerbaijan',
      status: 'Paused pre-launch',
      context: 'DocPeak was a queue and patient management platform I co-founded in Azerbaijan during COVID, when hectic clinic queues became even harder to manage. We originally targeted all hospitals and clinics — a wide net that felt natural given how widespread the problem was.',
      problem: 'Early discovery interviews revealed a harder truth: hospitals and public clinics ran on entrenched, long-standing systems, and staff were resistant to switching. That segment was too broad and too slow to reach product-market fit with. We needed to find a more reachable beachhead.',
      myRole: "Co-founder and technical PM. I led discovery and market research alongside my team — a designer, developer, and marketing lead, each conducting interviews with doctors in their own networks. I worked directly with the designer and developer on the admin panel, appointment system, and patient portal, and made final prioritization calls with my co-founder.",
      process: [
        { heading: 'Shifting the segment', body: "After 10–15 clinic interviews, we shifted focus to small clinics and private practitioners — dentists, beauty clinics — who were more open to adopting new workflows and gave us a more testable MVP path. This wasn't just a pivot for its own sake; the evidence pointed clearly at who would actually try something new." },
        { heading: 'Holding the MVP line', body: "During design, my team pushed for a complex analytics dashboard and extra appointment features. I pushed back in team meetings, arguing these were beyond MVP scope and would cost us time better spent validating the core workflow. We agreed to defer them to a later phase — the kind of call that's easy to second-guess but necessary to make." },
      ],
      outcome: "We completed the segment shift and designed both the admin and patient portal experiences, along with a landing page. The product wasn't shipped — we paused development due to funding constraints before going live.",
      learning: "The biggest gap was empathy in early discovery. We moved from idea to build quickly without testing a low-cost prototype first. If I ran this again, I'd validate the concept with a lightweight prototype before committing to full design — it's a far cheaper way to confirm real user value before investing team time.",
      screenshot: null,
      link: null,
    },
    'grocery': {
      eyebrow: 'Shipped · Grade: A',
      category: 'Consumer App',
      title: 'Smart Grocery & Meal Planner',
      subtitle: 'AI-Assisted MVP from Scratch',
      role: 'Solo Product Owner & Builder',
      timeline: "Master's course · Grade: A",
      status: 'Shipped',
      context: 'A personal problem sparked this: as a busy grad student, I often had groceries at home but couldn\'t decide what to cook, leading to waste and last-minute takeout. I built the Smart Grocery & Meal Planner as a full-semester systems analysis and design project using a waterfall process — weekly deliverables including a system request, feasibility study, ERDs, and prototype.',
      problem: 'Existing apps like PlateJoy and Yummly had shut down, and eMeals only handled meal plans without full pantry-to-grocery-list integration. The challenge was designing and shipping a working MVP solo, in one semester, using AI-assisted development tools the way a real product team would.',
      myRole: 'I owned the entire project end to end: wrote the system request and business case, ran a 5-person survey to validate the problem, built the economic feasibility model, designed the MVP in Figma, and built the working prototype using Cursor, ChatGPT, and OpenAI\'s API for meal suggestions.',
      process: [
        { heading: 'Validating before building', body: 'I surveyed 5 people on their current grocery and meal-planning habits to confirm the core pain point before building anything. The responses made it clear the problem was real and consistent across different living situations.' },
        { heading: 'Cutting scope to one clean flow', body: 'Early on, I scoped the idea far too broadly — barcode scanning, multi-user households, detailed nutrition tracking. I realized a single semester couldn\'t support that. I cut down to one core flow: pantry → AI meal ideas → grocery list, and pushed everything else to a "should-have/nice-to-have" backlog.' },
        { heading: 'Building with AI tools as a product decision', body: 'I built the MVP on Next.js, Node/Express, and PostgreSQL (Prisma on Neon), using Cursor for code generation and ChatGPT for architecture and planning. When Cursor-generated APIs failed to fetch data reliably in production, I made the call to demo locally rather than ship a broken live URL.' },
      ],
      outcome: 'I shipped a working, live-demoable MVP: login, pantry inventory with expiration and low-stock badges, AI-generated meal ideas with a rule-based fallback, and a one-tap grocery list. My economic feasibility model projected 178% 3-year ROI with breakeven around 1.9 years. The project earned a full grade (A), with direct feedback that my technical background strengthened the analysis and that the working demo stood out.',
      learning: 'Two things. First, I over-scoped at the start — once I simplified to one clean flow instead of five ambitious ones, the prototype got noticeably better. Second, AI tools are fast at building what you ask for, but they don\'t make the judgment calls. I was still the one deciding what to cut, what mattered to users, and how to recover when the generated code broke in production.',
      screenshot: null,
      link: null,
    },
  };

  const overlay = document.getElementById('caseStudyOverlay');
  const scroll = document.getElementById('modalScroll');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !scroll || !closeBtn) return;

  let lastFocused = null;

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function render(project) {
    const processHtml = project.process.map((step) => `
      <div class="modal-process-step">
        ${step.heading ? `<p class="step-heading">${escapeHtml(step.heading)}</p>` : ''}
        <p>${escapeHtml(step.body)}</p>
      </div>
    `).join('');

    scroll.innerHTML = `
      <div class="modal-eyebrow">${escapeHtml(project.eyebrow)}</div>
      <div class="modal-category">${escapeHtml(project.category)}</div>
      <h2 class="modal-title" id="modalTitle">${escapeHtml(project.title)}</h2>
      <div class="modal-subtitle">${escapeHtml(project.subtitle)}</div>
      <div class="modal-meta">
        <span class="modal-pill">${escapeHtml(project.role)}</span>
        <span class="modal-pill">${escapeHtml(project.timeline)}</span>
        <span class="modal-pill">${escapeHtml(project.status)}</span>
      </div>
      ${project.screenshot ? `
        <div class="modal-screenshot">
          <img src="${project.screenshot}" alt="${escapeHtml(project.title)} screenshot" loading="lazy">
        </div>
      ` : ''}
      <div class="modal-grid-2">
        <div class="modal-section">
          <h4>Context</h4>
          <p>${escapeHtml(project.context)}</p>
        </div>
        <div class="modal-section">
          <h4>Problem</h4>
          <p>${escapeHtml(project.problem)}</p>
        </div>
      </div>
      <div class="modal-section">
        <h4>My Role</h4>
        <p>${escapeHtml(project.myRole)}</p>
      </div>
      <div class="modal-section">
        <h4>Process</h4>
        ${processHtml}
      </div>
      <div class="modal-section modal-outcome">
        <h4>Outcome</h4>
        <p>${escapeHtml(project.outcome)}</p>
      </div>
      <div class="modal-section modal-learning">
        <h4>Learning</h4>
        <p>${escapeHtml(project.learning)}</p>
      </div>
      ${project.link ? `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">View project / prototype →</a>
      ` : ''}
    `;
  }

  function openModal(id) {
    const project = PROJECTS[id];
    if (!project) return;
    render(project);
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.project-card[data-project]').forEach((card) => {
    card.addEventListener('click', () => openModal(card.getAttribute('data-project')));
  });

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });
})();

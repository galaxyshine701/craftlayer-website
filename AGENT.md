AGENT.md: CraftLayer — Digital Systems & Creative Work

Project Goal

Build a high-performance, dark-mode service-based agency website for CraftLayer using semantic HTML5, plain CSS, and vanilla JavaScript only.

The website must present exactly 6 approved digital services, clearly labeled demonstration/sample work, dedicated service-detail pages, and a structured service-request flow with automatic service pre-selection, client-side validation, and simulated submission feedback.

The project is a static front-end website intended for GitHub Pages. Do not introduce backend dependencies, databases, authentication, payment systems, package managers, build tools, or JavaScript/CSS frameworks.

Target Users

Tech Founders & Startups: Need brand identity, custom web experiences, UI/UX systems, clear milestones, and professional digital foundations.

Small Business Owners & Brands: Need conversion-focused marketing support, content strategy, social media services, design, and a clean web presence.

Creators & Growth Operators: Need short-form video editing, campaign-ready creative assets, content systems, and consistent digital execution.

Brand Identity & Visual Direction

3.1 Brand

Brand Name: CraftLayer

Tagline: Digital Systems & Creative Work

CraftLayer should feel like a modern multidisciplinary digital studio combining technology, design, creative systems, digital marketing, and execution.

The brand should feel modern, premium, futuristic, creative, structured, professional, and multidisciplinary.

Avoid generic AI-template aesthetics, gaming-site aesthetics, cyberpunk overload, excessive glow, excessive gradients, glassmorphism-heavy interfaces, decorative clutter, generic AI sparkles, circuit-brain symbols, globes, or copied brand marks.

3.2 Procedural Inline SVG Logo

Build the CraftLayer logo directly as inline SVG. Do not depend on an external logo image.

The mark should use 2–3 offset angular/geometric layer planes that communicate layers, structure, craft, forward movement, and digital systems.

The symbol should not look like a shield, blob, sparkle, brain, globe, or generic technology icon.

Logo color behavior

Use the approved neutral system for the logo:

Cool White #EAF2F1

Primary Surface #10171C

Elevated Surface #151F24

Cyber Lime #A7FF3F may be used only as a thin accent border/stroke where needed.

Do not use Cyber Lime as a solid logo fill, text color, glow, large decorative shape, or large background area.

3.3 Kinetic Logo Entrance

On initial page load, the logo mark and brand name may use a subtle micro-reveal:

approximately 400–700ms

scale from approximately 0.95 to 1

very gentle rotational settle

Do not use a full-screen preloader.

Respect prefers-reduced-motion and disable or substantially reduce the animation for users who prefer reduced motion.

3.4 Real Visual Media & Imagery

Use high-quality, service-relevant visual media so the website does not feel like a fully black text-only interface.

Real photographic imagery, interface mockups, design-system visuals, campaign creative, editing frames, and other relevant media may retain their natural colors. The locked CraftLayer palette applies to the website UI, typography, controls, borders, and brand surfaces; it does not require photographic media to be monochrome.

Visuals must clearly support the service or project being presented. Avoid generic office-team stock photos, unrelated decorative images, fake client logos, or imagery that implies unverified client work.

Use responsive images with appropriate object-fit behavior and lightweight loading. Prefer optimized local assets. Lightweight video loops may be used selectively where they add clear value, especially for Video Editing. Every such video must use autoplay, loop, muted, playsinline, and a local high-contrast poster image so a meaningful visual remains visible if the video cannot load. Video must remain performance-conscious on mobile and must never create an empty black box.

Technical Stack & Implementation Constraints

Use the following stack across the entire project:

Semantic HTML5

Plain CSS

Vanilla JavaScript

Strict constraints:

Do not use Tailwind CSS, Bootstrap, React, Vue, Angular, jQuery, or any other CSS/JavaScript framework or UI library.

Do not introduce npm, Node.js, bundlers, build tools, or framework routing.

Do not introduce a backend, database, authentication, live payment processing, or server-side form processing.

Use relative/local project paths so the website works as a GitHub Pages project site.

Google Fonts may be loaded for Space Grotesk and Inter. Provide sensible system sans-serif fallbacks.

Keep JavaScript modular and centralized where practical. Avoid duplicating service data or social URLs across multiple scripts.

Scope of Services — Strict Closed Set

The website must include exactly these 6 services. Do not invent, extrapolate, rename into additional offerings, or introduce outside services.

5.1 Brand Identity & Graphic Design

Deliverables: Primary and secondary logo marks, dynamic vector brand assets, cohesive design tokens, typography scale, and social launch kits.

Target Fit: New ventures and businesses undergoing brand evolution.

5.2 Custom Web Development

Deliverables: High-performance responsive websites, semantic front-end experiences, fluid UI interactions, and speed-optimized layouts.

Target Fit: Businesses needing modern mobile-first web platforms.

5.3 UI/UX Interface Design

Deliverables: High-fidelity wireframes, component design systems, intuitive user flows, and production-ready prototypes.

Target Fit: Digital products, web platforms, and mobile apps.

5.4 AI Agents & Workflow Automation

Deliverables: AI-assisted operational systems, workflow automation logic, task orchestration, and process optimization across repeated business actions.

Target Fit: Teams needing operational leverage, faster execution, and repeatable internal workflows.

5.5 Short-Form & Commercial Video Editing

Deliverables: High-retention Reels/Shorts cutdowns, kinetic subtitles, precise pacing, sound-design integration, and dynamic color grading.

Target Fit: Content creators, personal brands, and performance-marketing campaigns.

5.6 Social Media & Digital Marketing

Deliverables: Content planning, platform strategy, campaign creative direction, audience growth support, and integrated digital marketing execution.

Target Fit: Brands looking to improve visibility, engagement, and conversion across digital channels.

Page Architecture & Navigation

The project contains 6 page types:

Home

Services Catalog

Service Detail

Service Request

About

Contact

The Service Detail page type is reused as 6 dedicated static HTML pages, one for each approved service.

Service details must not be implemented as modals or popups.

6.1 Static File Structure

Service-website/
├── AGENT.md
├── index.html
├── services.html
├── service-brand-identity.html
├── service-web-development.html
├── service-ui-ux.html
├── service-ai-agents.html
├── service-video-editing.html
├── service-social-media-marketing.html
├── request.html
├── about.html
├── contact.html
└── assets/
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   └── main.js
└── media/

The 6 dedicated service-detail HTML files are implemented sequentially during Phase 4 and are deferred only from Phases 1–3.

6.2 Navbar Behavior

Logo / CraftLayer → index.html

Services → services.html

Work → index.html#work

Process → index.html#process

Contact → contact.html

Start a Project → request.html

Work and Process are Home-page section anchors, not separate pages.

Home Page

The completed Home page must include:

Navbar

Bold Hero

Visual Services Marquee

Bento Services Grid

Agency Process

Selected Work

Project CTA Banner

Footer

7.1 Hero

Use confident Space Grotesk display typography with clear hierarchy and negative space.

Include exactly two primary Hero CTAs:

Explore Services

Initiate Brief

The Hero should feel active on page load through restrained layered motion: logo/brand reveal, masked or staggered headline entrance, and subtle supporting-content motion.

Use one strong service-relevant visual composition, image, interface mockup, or lightweight muted loop where it improves the presentation. Keep the Hero readable and performance-conscious.

Do not overload the Hero with decorative effects.

7.2 Visual Services Marquee

Replace a text-only news-ticker treatment with a premium visual service marquee using only the 6 approved services.

The marquee should use colorful service-relevant imagery in primarily circular visual tiles, with short clear service labels. Limited softly rounded variation is allowed only when it improves composition. Tile sizes and vertical positions may vary to create an editorial, layered rhythm rather than a rigid straight strip.

The marquee must move slowly and continuously on its own. On capable desktop/tablet viewports, scrolling must add a subtle depth/focus response so the active or nearest tile comes slightly forward through scale, opacity, and depth while neighboring tiles recede. On smaller or lower-performance mobile devices, simplify or disable only the scroll-depth effect if necessary to preserve smooth scrolling; the continuous marquee itself must remain functional.

Do not use a headline-news-strip aesthetic, identical text pills, excessive speed, or distracting 3D effects.

The marquee must loop smoothly, avoid layout shift, work on mobile, and respect reduced-motion preferences. On the Home page, the full set of 6 services must appear only in this visual marquee and the main services/Bento section; do not add a third full service listing.

7.3 Bento Services Grid

Create a responsive asymmetrical Bento-style services grid representing all 6 services.

Each service card should include the service name, concise deliverable tags, a working View Details link, and where appropriate a service-relevant image or visual treatment that helps communicate the work.

Cards must remain readable on mobile. The Services page must provide clear and functional service-category filtering using the approved categories in Section 8.

7.4 Agency Process

Use id="process".

Use exactly this 3-stage workflow:

Context Blueprint → Rapid Production → Deployment & Handoff

Do not replace or rename these stages.

7.5 Selected Work

Use id="work".

Use case-study-style demonstration/sample cards containing project title, service/deliverable tags, concise overview, strong project-relevant visual media, and subtle interaction treatment.

Selected Work should visually break up the dark interface through high-quality imagery or interface mockups while keeping the surrounding CraftLayer UI consistent.

All unverified work must be clearly labeled Demo Concept, Sample Project, or equivalent.

Do not imply that a demo project was commissioned by a real client.

7.6 Project CTA Banner

Create a strong CTA linking to request.html.

7.7 Footer

Include brand/logo, site navigation, social/contact links, copyright notice, and consistent SLA wording:

within 1 business day

Services Catalog Page

Display all and only the 6 approved services.

Provide client-side filters:

All

Design & UI

Code & Web

Media & Growth

Filtering must not create new services or incorrectly remove valid services.

Every service card must link to its matching dedicated service-detail HTML page.

Dedicated Service Detail Pages

Create one dedicated static page for each of the 6 services.

Each page must include:

Service name

Concise objective

Full deliverables

Target fit / ideal audience

Clear turnaround guidance or milestone expectations

Working Request This Service CTA

Each CTA must navigate to request.html with a valid service query parameter.

9.1 Stable Service IDs

Use exactly:

brand-identity

web-development

ui-ux

ai-agents

video-editing

social-media-marketing

Example:

request.html?service=brand-identity

Do not use service-detail modals.

Service Request Page

When the Request page loads, vanilla JavaScript must read the service query parameter.

If the value matches one of the 6 approved identifiers, pre-select that service.

If the query value is missing or invalid, leave the service selector unselected, allow the user to choose only from the 6 approved services, and do not create an unapproved service option.

10.1 Form Fields

Client Full Name — required

Professional Email — required, valid email pattern

Selected Service — required, only the approved 6 services

Organization / Brand Name — optional

Budget Bracket — required:

Under $500

$500–$1,500

$1,500–$3,000

$3,000+

Delivery Timeline — required:

Urgent (< 1 week)

Standard (2–3 weeks)

Flexible

Project Vision & Scope Brief — required, minimum 30 characters after trimming whitespace

Project References — optional

Submit Button: Transmit Brief

10.2 Validation Behavior

Validate on submission and show clear inline error messages near invalid fields.

Do not submit while required fields are invalid.

Do not accept an unapproved service value.

Preserve entered values when validation fails.

On valid submission, simulate a short loading state without a network/backend request.

Generate a mock reference ID in the format #REQ-XXXXX, where XXXXX is a five-character uppercase alphanumeric value.

Show an accessible confirmation containing the reference ID and the message that CraftLayer will review the brief within 1 business day.

Make it clear in implementation/comments that this is a front-end simulation.

About Page

Present CraftLayer’s operating philosophy around:

Architectural discipline

High design craft

Clear scope and milestones

Reliable communication and handoff

Do not make unverifiable claims about years in business, company size, awards, clients, performance, or market leadership.

Contact Page & Verified Social Channels

Use only these exact destinations:

WhatsApp: https://wa.me/923138024532

Facebook: https://www.facebook.com/share/1Xy78kUYDh/

LinkedIn: https://www.linkedin.com/in/anam-zubair-bb1638282

Requirements:

Add a persistent WhatsApp floating action button on every page.

Pin it bottom-right without covering important content.

WhatsApp must open the supplied direct-chat destination.

Facebook and LinkedIn must open the exact supplied URLs.

External links should use target="_blank" and rel="noopener noreferrer" where appropriate.

Social links/icons must have meaningful accessible labels.

Do not invent any additional social profiles.

General contact messaging may be front-end-only.

Do not falsely imply that a message was delivered through a backend.

Final Design System

13.1 Locked Color Palette

This is the final approved CraftLayer palette:

Main Canvas / Deep Background: #070B0D

Primary Surface: #10171C

Elevated Surface / Cards: #151F24

Standard Borders / Dividers: #223038

Accent Border / Focus Outline Only: #A7FF3F

Primary Text / Cool White: #EAF2F1

Body / Muted Text: #91A2A6

13.2 Cyber Lime Usage — Strict

Cyber Lime #A7FF3F is not a general fill color.

It may be used only for restrained border-level emphasis such as:

selected/active card border

CTA outline

focus-visible outline

small divider edge

tiny border accent

thin SVG outline/stroke where necessary

Do not use Cyber Lime for:

large backgrounds

large card fills

button fills

large icons

body text

headings

logo solid fills

glow

shadows

gradients

large decorative illustrations

Standard non-accent borders should use #223038.

13.3 Visual Balance

For UI surfaces and brand chrome, target approximately:

80–85% deep dark foundation

10–15% cool neutral text and surface contrast

approximately 5% or less Cyber Lime border-level accent

These proportions apply to the interface system, not to photographic or project media, which may retain natural colors. The interface should remain elegant and restrained.

13.4 Typography

Use:

Display / Headings: Space Grotesk

Body / Interface: Inter

Recommended weights:

Major Hero / display: Space Grotesk 700

Section headings: Space Grotesk 600

CraftLayer wordmark text: Space Grotesk 600

Navigation/buttons: Inter 500

Body copy: Inter 400

Labels/supporting UI: Inter 500

Provide system sans-serif fallbacks.

Avoid making every heading excessively bold. Use line-height, spacing, and letter-spacing to create a clean editorial hierarchy.

13.5 Multidisciplinary Visual Language

Different service disciplines should feel distinct through visual motifs, not competing accent colors.

AI / Web / UI

May use system grids, nodes, interface lines, structured geometry, and wireframe-style details.

Graphic Design / Branding

May use crop marks, typography specimens, layered shapes, design-tool-inspired nodes, and controlled composition marks.

Digital Marketing / Social

May use directional movement, campaign blocks, structured content labels, flow lines, and modular publishing patterns.

Video

May use frame motifs, timeline references, and sequence markers.

These motifs should remain subtle and consistent with the CraftLayer brand.

Use real visual media alongside these motifs where useful. Natural image colors are allowed and encouraged when they make each discipline easier to understand; the surrounding UI remains within the locked CraftLayer palette.

Layout & Responsiveness

Use a consistent 8px spacing rhythm where practical.

Keep primary content within a sensible centered maximum width.

Design mobile-first.

Explicitly verify approximately 375px, 768px, and 1200px+.

Avoid unintended horizontal overflow.

Maintain readable typography and usable navigation.

Keep comfortable touch targets.

Ensure Bento layouts collapse cleanly on mobile.

Micro-Interactions & Motion

Use restrained, premium interactions across the website:

subtle card lift around translateY(-2px) on hover-capable devices

subtle border feedback

standard UI hover transitions around 150–250ms ease

logo/brand entrance around 400–700ms

headline and section reveals using masked, staggered, fade, or small translate motion

scroll-triggered section/card reveals using lightweight vanilla JavaScript such as IntersectionObserver

slow visual-marquee motion with subtle scroll-reactive depth/focus on capable viewports and a simplified mobile fallback

subtle image scale or mask reveals for service and work visuals

Use smooth easing and avoid bounce-heavy, flashy, or constant motion on every element. Continuous motion should be limited to selected visual elements such as the marquee or lightweight ambient media.

Do not rely on hover alone to communicate essential information.

Respect @media (prefers-reduced-motion: reduce) and disable or substantially reduce non-essential motion including marquee animation, logo reveal, scroll reveals, and decorative transitions.

Do not use heavy neon glow.

Authenticity & Content Safeguards

Never invent fake client reviews, star ratings, awards, partner logos, client logos, performance statistics, or endorsements.

All unverified portfolio/project examples must be clearly labeled Demo Concept, Sample Project, or equivalent.

Do not imply that demonstration work was commissioned by a real client.

Use only the supplied WhatsApp, Facebook, and LinkedIn destinations.

Use one consistent response commitment:

within 1 business day

Accessibility & Usability

Use semantic landmarks appropriately: header, nav, main, section, and footer.

Requirements:

logical heading hierarchy

keyboard-accessible navigation

keyboard-accessible links, filters, controls, and CTAs

visible focus states

every form input associated with a visible label

meaningful labels/text alternatives for icons and SVG controls

readable text contrast

accessible mobile-menu expanded/collapsed state

touch-friendly controls

accessible status/live region for form submission feedback where practical

Focus styling

Cyber Lime #A7FF3F may be used for a thin visible focus outline/border only.

Do not use a lime background fill for focus.

Sequential Execution Scaffold — AI Agent Instructions

The AI Agent must treat this file as the project’s source of truth.

If implementation conflicts with this file, AGENT.md takes precedence.

Do not silently add features or change the stack, services, brand system, routes, social links, submission behavior, locked palette, typography, or phase boundaries.

Phase 1 — Project Structure, Data, Logo & Global Shell

Create the static HTML/CSS/JavaScript project structure.

Use no framework or build tool.

Create shared plain CSS and vanilla JavaScript files.

Create one centralized JavaScript data source/object for the 6 service definitions and supplied social links where practical.

Build the CraftLayer inline SVG logo.

Implement reduced-motion-aware logo entrance.

Build the global navbar.

Build accessible mobile navigation.

Build the footer.

Build the persistent WhatsApp button.

Confirm relative paths are safe for GitHub Pages.

Establish the locked typography and color foundation.

Do not implement later-phase page content.

Phase 2 — Home Hero, Visual Marquee & Process

Implement the Hero with the approved CTA destinations and restrained entrance motion.

Implement the visual services marquee with exactly the 6 approved services, service-relevant colorful imagery, clear labels, slow continuous movement, and subtle scroll-reactive depth/focus on capable viewports. Simplify only the depth effect on mobile if required for smooth performance.

Implement the exact process:
Context Blueprint → Rapid Production → Deployment & Handoff

Add stable #process and #work anchors.

Phase 3 — Services, Bento Grid & Sample Work

Build the responsive Home Bento grid for all 6 services.

Build services.html.

Add the approved filter categories.

Add working dedicated-detail links.

Use service-relevant visual media where it improves clarity and presentation.

Build Selected Work using clearly labeled demo/sample concepts with strong project-relevant visuals.

Do not invent testimonials, ratings, clients, or performance metrics.

Phase 4 — Dedicated Service Pages & Request Flow

Build the 6 dedicated static service-detail HTML pages.

Do not use service-detail modals.

Ensure each Request This Service CTA sends the correct approved service identifier.

Build the Request Form using vanilla JavaScript.

Implement query-parameter service pre-selection.

Enforce required fields, valid email, approved-service selection, and a trimmed 30+ character brief.

Implement front-end-only loading.

Generate mock #REQ-XXXXX.

Show the consistent within 1 business day SLA message.

Do not make a real backend request.

Phase 5 — Social Verification, Accessibility & QA

Verify exact social URLs, all navigation, Home anchors, CTA links, 6 service-detail pages, service query parameters, filters, form validation states, confirmation behavior, approximately 375px/768px/1200px+ layouts, keyboard navigation, visible focus, mobile menu state, form labels/errors, readable contrast, reduced-motion behavior, broken relative paths, horizontal overflow, and static GitHub Pages suitability.

Final Acceptance Criteria — Definition of Done

Stack Locked: Semantic HTML5, plain CSS, and vanilla JavaScript only.

No Frameworks: No Tailwind, Bootstrap, React, Vue, Angular, jQuery, npm/build tooling, or backend.

Brand Identity Locked: CraftLayer name and “Digital Systems & Creative Work” tagline are consistent.

Logo Correct: Inline SVG uses layered geometric planes and does not resemble a shield/blob or generic AI symbol.

Final UI Palette Locked: #070B0D, #10171C, #151F24, #223038, #A7FF3F, #EAF2F1, and #91A2A6 are the only approved UI/brand colors. Photographic, video, interface-mockup, and project media may retain natural colors as defined in Section 3.4.

Cyber Lime Restricted: #A7FF3F is used only for thin accent borders/strokes/focus outlines, never large fills, text, glow, or dominant areas.

Typography Match: Space Grotesk is used for headings and Inter for body/UI with appropriate fallbacks.

Motion Quality: Hero, brand, headings, selected sections, and visual media use restrained premium entrance/scroll motion without excessive animation or mobile performance issues.

Service Scope Locked: Exactly 6 approved services are represented.

Page Architecture Correct: Home, Services, Request, About, Contact, plus 6 dedicated static service-detail pages.

No Service Modals: Service detail content is not implemented as modal-only UI.

Navbar Destinations Correct: Services, Work, Process, Contact, and Start a Project route correctly.

Visual Marquee Operational: Contains only the 6 approved services, uses service-relevant colorful visual media with clear labels, loops smoothly, uses subtle scroll-reactive depth/focus on capable viewports with a simplified mobile fallback where needed, and respects reduced-motion preferences.

Visual Media Appropriate: Service and work imagery is relevant, high-quality, performance-conscious, and does not imply fake client relationships. Natural media colors are allowed while the surrounding UI follows the locked CraftLayer palette.

Bento Grid Responsive: All 6 services remain readable and usable across supported viewports.

Service Detail Links Correct: Every service card opens the matching service page.

Form Pre-Selection Correct: Valid service identifiers pre-select the appropriate service.

Invalid Query Safe: Invalid or missing service query does not create an unapproved option.

Validation Rigor: Required fields, valid email, approved service, and trimmed 30+ character brief are enforced.

Simulation Active: Valid form submission uses mock loading and generates a mock #REQ-XXXXX without backend submission.

SLA Consistent: “within 1 business day” is used consistently.

Verified Socials Active: Exact WhatsApp, Facebook, and LinkedIn URLs are used.

Persistent WhatsApp: Floating action remains accessible and does not obstruct essential content.

Authenticity Guardrail: No fake reviews, ratings, awards, client/partner logos, performance claims, or unlabeled fictional work.

Accessibility Baseline: Semantic structure, logical headings, visible focus, labels, keyboard navigation, accessible mobile menu, readable contrast, and reduced motion.

Responsive QA: Tested at approximately 375px, 768px, and 1200px+ with no unintended horizontal overflow.

GitHub Pages Ready: Navigation and asset paths work as static files with no build step.

Phased Delivery: Implementation follows Phases 1–5 and is audited before submission.

Agent Discipline

The AI Agent must:

Read this file completely before making changes.

Treat this file as the source of truth.

Work phase by phase.

Stop at the end of each requested phase.

Do not silently continue into later phases.

Do not invent services, social links, technology, claims, pages, or functionality.

Do not change the locked UI palette without explicit approval. Natural media colors remain allowed under Section 3.4.

Preserve already-compliant working functionality and avoid replacing it without a specification-driven reason.

Do not use Cyber Lime beyond its permitted border/stroke/focus role.

Do not overwrite intentional user edits without explicit instruction.

Report files changed and verification performed after each phase.
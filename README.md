# Seurausten talo – House of Observations

Seurausten talo (*House of Observations*) is an experimental institutional memory framework for decisions and their long-term consequences.  
It models the lifecycle of a decision as a circular process and extends it into a 30×30 grid of observation slots.

The site is built as a static HTML/JS prototype and published via GitHub Pages.

---

## What this project does

- Models a **decision lifecycle** in six main phases:
  1. Päätös (Decision)  
  2. Vaikutus (Impact)  
  3. Seuraukset (Consequences)  
  4. Sopeutuminen (Adaptation)  
  5. Kertautuminen (Repetition)  
  6. Muutos normiksi (Change to norm)

- Provides an **interactive flow view** where you can cycle through the six phases and see their descriptions.

- Implements a **30×30 structure**:
  - 6 main phases × 30 sub‑slots each (P1–P30, V1–V30, S1–S30, SO1–SO30, K1–K30, M1–M30).
  - Each slot is a potential place for a case, observation, or indicator.

- Includes a first **example case** (“Esimerkki A – X-lain uudistus”) wired into some of the slots.

---

## Files in this repository

- `index.html`  
  Landing page and conceptual introduction (“Se instituutio, jota ei ollut olemassa”).  
  Links to all other views.

- `ympyra-kaavio.html`  
  Static SVG circle diagram with the 6 decision phases placed around a ring.

- `toggle-lista.html`  
  Textual “toggle list” representation of the institution’s core ideas using HTML `<details>` blocks.

- `ascii-kaavio.html`  
  Original ASCII diagram of the decision lifecycle preserved as a `<pre>` block.

- `valmis-pohja.html`  
  Template for documenting a single decision case across the 6 phases.

- `ympyra-virtaus.html`  
  Interactive flow view:
  - “Previous/Next” navigation through the 6 phases.  
  - Timeline indicator.  
  - 30×30 grid of clickable slots for each phase.

- `main.js`  
  All JavaScript logic:
  - Phase definitions for the flow view.  
  - 30×30 naming scheme (P1–P30, V1–V30, …).  
  - Example case data (`exampleCaseA`).  
  - Rendering of the flow view and the 30×30 grid + detail panel.

---

## How to use via GitHub Pages

1. **Repository setup**
   - This repository should be public.
   - Ensure at least `index.html` is present at the repository root.

2. **Enable GitHub Pages**
   - Go to: *Settings → Pages*.  
   - Under *Source*, choose:  
     - *Deploy from a branch*  
     - Branch: `main`  
     - Folder: `/ (root)`  
   - Save.

3. **Access the site**
   - After a short delay, GitHub Pages will show a URL like:  
     `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
   - Open that URL in your browser.  
   - `index.html` will load as the front page; navigation links lead to all other views.

---

## Development notes

- No build step is required: the project is pure HTML + CSS + vanilla JavaScript.
- To extend the system:
  - Add more example cases to `main.js` (e.g. `exampleCaseB`, `exampleCaseC`).  
  - Wire them into the UI by adding a case selector and using the 30×30 slot naming scheme.  
  - Localise text by introducing a simple i18n keyset and switching labels in HTML/JS.

---
name: Calculator app roadmap
overview: "A phased roadmap for building a web-based calculator: set up the project and UI shell, then implement basic arithmetic, standard operations, and optional enhancements (keyboard support, history, scientific functions)."
todos:
  - id: phase1-html
    content: Create index.html with display area and button grid (0–9, +, −, ×, ÷, C, =)
    status: pending
  - id: phase1-css
    content: Add styles.css with layout and responsive button grid
    status: pending
  - id: phase1-state
    content: Implement calculator state in script.js (current value, previous value, operator)
    status: pending
  - id: phase1-handlers
    content: Wire button click handlers and evaluate on = with chained operations
    status: pending
  - id: phase1-divzero
    content: Handle division by zero (show error and reset on next input)
    status: pending
  - id: phase1-test
    content: Manually test single op, chained ops, clear, and divide by zero
    status: pending
  - id: phase2-decimal
    content: Add decimal (.) input and parsing
    status: pending
  - id: phase2-percent
    content: Add percent (%) button and behavior
    status: pending
  - id: phase2-sign
    content: Add sign toggle (±) button
    status: pending
  - id: phase2-backspace
    content: Add backspace button
    status: pending
  - id: phase2-errors
    content: Add basic error handling and optional display length/decimals
    status: pending
  - id: phase3-keyboard
    content: Add keyboard support (digits, operators, Enter, Escape, Backspace, .)
    status: pending
  - id: phase3-history
    content: "(Optional) Add calculation history and optional localStorage"
    status: pending
  - id: phase3-scientific
    content: "(Optional) Add scientific mode (trig, log, powers, π, e, parentheses) and parser"
    status: pending
  - id: phase3-polish
    content: "(Optional) Add visual polish (theme, typography, accessibility)"
    status: pending
isProject: false
---

# Calculator app roadmap

## Tech approach

- **Stack:** Vanilla HTML/CSS/JavaScript (no framework) so the app is simple to run and easy to extend. You can switch to React/Vue later if you want.
- **Structure:** Single HTML entry, one main JS file for logic, one CSS file for layout and styling. Optional: separate module for expression parsing if you add scientific functions.

---

## Phase 1: Basic calculator

**Goal:** Working four-function calculator with a clear display and equals.

- **UI**
  - Display area (read-only, shows current value or expression).
  - Buttons: digits `0–9`, operators `+`, `-`, `×`, `÷`, `C` (clear), `=` (equals).
  - Simple, responsive layout (e.g. grid of buttons, readable on mobile and desktop).
- **Logic**
  - Store current value and pending operator; on `=`, apply operator to previous and current value.
  - Handle “chained” operations (e.g. `3 + 4 =` then `× 2 =` uses 7 as first operand).
  - Clear (`C`) resets state and display.
  - Avoid division by zero (show “Error” or “∞” and reset on next input).
- **Deliverable:** One HTML file, one CSS file, one JS file; run by opening the HTML in a browser or with a minimal static server.

---

## Phase 2: Standard calculator

**Goal:** Behave like a typical phone/desktop calculator.

- **New buttons/behavior**
  - **Decimal (`.`):** Allow one decimal point per number; support input like `3.14`.
  - **Percent (`%`):** Interpret in a standard way (e.g. `200%` → 2, or “percent of” depending on UX choice).
  - **Sign toggle (`±`):** Negate the current number.
  - **Backspace:** Remove last digit (or clear to 0 if one digit).
- **Logic**
  - Parse and evaluate decimal numbers correctly (use `parseFloat` and careful string handling).
  - Keep state consistent for percent and sign (whether they apply to displayed number only or to the pending expression).
- **Polish**
  - Basic error handling (overflow, invalid input) and optional max length for display.
  - Optional: limit display to a sensible number of decimal places.

---

## Phase 3: Enhancements (pick what you want)

**Goal:** Improve UX and optionally add scientific features.

- **Keyboard support**
  - Map number keys, `+`, `-`, `*`, `/`, `Enter` (=), `Escape` (clear), `.`, `Backspace`.
  - Ensure focus and button styling work well with keyboard (e.g. visible focus, no double-trigger with mouse).
- **History (optional)**
  - Show last N calculations above or below the display (e.g. “3 + 4 = 7”).
  - Store in memory or `localStorage`; optional “reuse result” by clicking a history line.
- **Scientific (optional)**
  - Buttons: `sin`, `cos`, `tan`, `log`, `ln`, `x²`, `√`, `x^y`, `π`, `e`, `(`, `)`.
  - Parser: either build a small expression parser (tokenize then evaluate) or use a safe eval strategy (e.g. parse into a tree, no raw `eval` of user input).
  - Display: second row or toggle (e.g. “Scientific” mode) so the UI doesn’t get crowded.
- **Visual polish**
  - Theming (e.g. light/dark), better typography, subtle animations on button press.
  - Accessibility: ARIA labels, focus order, and high-contrast support.

---

## Suggested file layout

```
calculator app/
  index.html      # Structure: display + button grid
  styles.css      # Layout, theming, responsive
  script.js       # State, input handling, evaluation
  (optional) history.js or parser.js in Phase 3
```

---

## Order of work

1. **Phase 1:** Create `index.html` (display + buttons), `styles.css` (grid + display), `script.js` (state machine: current value, previous value, operator; button handlers; evaluate on `=`). Test with chained ops and division by zero.
2. **Phase 2:** Add decimal, `%`, `±`, backspace; refine number parsing and display formatting.
3. **Phase 3:** Add keyboard support first, then choose among history, scientific, and visual polish based on priority.

This gives you a clear path from “basic working calculator” to “standard” to “enhanced” without overbuilding at the start.
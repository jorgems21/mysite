# Jorge Montoya — personal site

Quarto website, deployed from the `docs/` folder on `main` via GitHub Pages
(https://jorgems21.github.io/mysite/). Render locally and commit `docs/`.

## Tooling

- **Quarto 1.11.9.** Use the same version locally so `docs/` (especially `docs/site_libs/`)
  doesn't change back and forth between versions. Check with `quarto --version`.
- `quarto render` should finish with no errors and no warnings.
- `_archive/` holds retired pages (underscore-prefixed, so Quarto ignores it).

## Munay Works architecture diagram

The diagram is pre-rendered to a static SVG so the page doesn't load the Mermaid JS library.
Edit `projects/munay-works/architecture.mmd`, then regenerate the SVG:

```bash
npx -p @mermaid-js/mermaid-cli mmdc -i projects/munay-works/architecture.mmd -o projects/munay-works/architecture.svg -b transparent
```

(For the teal styling, pass a config with `{"theme":"base","htmlLabels":false,"themeVariables":{"primaryColor":"#e6f1f0","primaryBorderColor":"#0f6b6b","primaryTextColor":"#0b3b3b","lineColor":"#0f6b6b"}}` via `-c`.)
Then run `quarto render`.

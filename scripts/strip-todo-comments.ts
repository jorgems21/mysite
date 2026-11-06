// Post-render step: remove authoring notes (HTML comments containing "TODO(Jorge)")
// from the rendered pages and feed so they never ship in the published HTML source.
// Runs automatically after `quarto render` (see `post-render` in _quarto.yml); uses Quarto's bundled Deno.
const outDir = Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR") ?? "docs";
const todoComment = /<!--(?:(?!-->)[\s\S])*TODO\(Jorge\)(?:(?!-->)[\s\S])*-->/g;
// The RSS feed (projects.xml) carries the same page content with the markup escaped.
const todoCommentEscaped = /&lt;!--(?:(?!--&gt;)[\s\S])*TODO\(Jorge\)(?:(?!--&gt;)[\s\S])*--&gt;/g;

async function walk(dir: string): Promise<void> {
  for await (const entry of Deno.readDir(dir)) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory) {
      if (entry.name !== "site_libs") await walk(path);
    } else if (entry.name.endsWith(".html") || entry.name.endsWith(".xml")) {
      const html = await Deno.readTextFile(path);
      const cleaned = html.replace(todoComment, "").replace(todoCommentEscaped, "");
      if (cleaned !== html) await Deno.writeTextFile(path, cleaned);
    }
  }
}
await walk(outDir);

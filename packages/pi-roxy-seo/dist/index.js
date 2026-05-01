export default function roxySeoExtension(pi) {
    pi.setLabel("Roxy SEO");
    pi.registerCommand("roxy-seo-about", {
        description: "Show a short status note about the Roxy SEO extension scaffold",
        handler: async (_args, ctx) => {
            ctx.ui.notify("Roxy SEO extension loaded. Install the public skill from the GitHub repo for the full SEO prompt pack.", "info");
        },
    });
}

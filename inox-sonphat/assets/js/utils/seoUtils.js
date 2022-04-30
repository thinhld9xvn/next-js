export function getSeoExtrasPage(page) {
    return {...page.edges[0].node.seo};
}
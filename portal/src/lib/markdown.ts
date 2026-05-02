import { rewriteMarkdownLink } from './links';

export function rewriteRenderedHtml(html: string): string {
  return html.replace(/<a([^>]*?)href="([^"]+)"([^>]*)>/gi, (_m, pre, href, post) => {
    const { href: out, portal } = rewriteMarkdownLink(href);
    if (out === href) return `<a${pre}href="${href}"${post}>`;
    if (!portal) return `<a${pre}href="${out}"${post}>`;
    return `<a${pre}href="${out}"${post} data-portal="1">`;
  });
}

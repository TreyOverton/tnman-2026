export const PORTAL_GUIDE_SLUGS = new Set<string>([
  'README',
  'air-ops-director',
  'asst-ops',
  'caltopo',
  'chaplain',
  'common',
  'comms-unit',
  'deputy-ic',
  'documentation-unit',
  'foot-patrol-member',
  'glossary',
  'ic',
  'liaison-officer',
  'logistics-chief',
  'logistics-deputy',
  'medical-unit',
  'ops-chief',
  'ops-deputy',
  'part-107-pilot',
  'pio',
  'planning-chief',
  'planning-deputy',
  'rcsm-advisor',
  'resources-unit-leader',
  'safety-officer',
  'screen-division-leader',
  'sdff-representative',
  'secfor-deputy',
  'secfor-director',
  'service-branch-director',
  'situation-unit-leader',
  'staging-area-manager',
  'technical-specialist',
]);

export function isPortalGuide(slug: string): boolean {
  return PORTAL_GUIDE_SLUGS.has(slug);
}

export function rewriteMarkdownLink(href: string): { href: string; portal: boolean } {
  if (!href) return { href, portal: false };
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return { href, portal: false };
  }

  let path = href.split('#')[0] ?? '';
  const hash = href.includes('#') ? '#' + (href.split('#')[1] ?? '') : '';

  path = path.replace(/^\.\//, '');
  path = path.replace(/^\//, '');

  const guidePrefixes = ['participant-guides/participant-guides/', 'participant-guides/'];
  for (const p of guidePrefixes) {
    if (path.startsWith(p)) path = path.slice(p.length);
  }

  if (path.endsWith('.md')) path = path.slice(0, -3);
  if (path === '' || path === 'README') {
    return { href: '/guides' + hash, portal: true };
  }

  if (PORTAL_GUIDE_SLUGS.has(path)) {
    return { href: `/guides/${path}` + hash, portal: true };
  }

  return { href, portal: false };
}

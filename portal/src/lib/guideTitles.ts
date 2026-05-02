export type GuideMeta = {
  slug: string;
  title: string;
  blurb?: string;
  group: 'common' | 'command' | 'operations' | 'planning' | 'logistics' | 'agency';
};

export const GUIDE_META: Record<string, GuideMeta> = {
  'README': { slug: 'README', title: 'Overview', blurb: 'Index of role guides and how to use this section.', group: 'common' },
  'common': { slug: 'common', title: 'Common Expectations', blurb: 'Applies to every participant — ICS-214, AAR, CalTopo, ROE, conduct.', group: 'common' },
  'glossary': { slug: 'glossary', title: 'Glossary / Abbreviations', blurb: 'Every acronym and term used across the planning portal.', group: 'common' },
  'caltopo': { slug: 'caltopo', title: 'CalTopo Guide', blurb: 'Install, setup, and exercise-day team-tracking app every participant runs.', group: 'common' },

  'ic': { slug: 'ic', title: 'Incident Commander / TF Commander', blurb: 'COL Roark', group: 'command' },
  'deputy-ic': { slug: 'deputy-ic', title: 'Deputy Incident Commander', blurb: 'LTC Smith', group: 'command' },
  'rcsm-advisor': { slug: 'rcsm-advisor', title: 'RCSM (Command-Staff advisor)', blurb: 'CSM Seals', group: 'command' },
  'chaplain': { slug: 'chaplain', title: 'Chaplain', blurb: 'MAJ Bennett', group: 'command' },
  'safety-officer': { slug: 'safety-officer', title: 'Safety Officer', blurb: 'SFC Sturgill', group: 'command' },
  'pio': { slug: 'pio', title: 'Public Information Officer', blurb: 'Open', group: 'command' },
  'liaison-officer': { slug: 'liaison-officer', title: 'Liaison Officer', blurb: 'Open + incoming 2 RGT / 4 RGT / DIV LNOs', group: 'command' },

  'ops-chief': { slug: 'ops-chief', title: 'Operations Section Chief', blurb: 'LTC Sheaf', group: 'operations' },
  'ops-deputy': { slug: 'ops-deputy', title: 'Operations Section Deputy', blurb: '1SG Collins', group: 'operations' },
  'asst-ops': { slug: 'asst-ops', title: 'Assistant Ops Specialist', blurb: 'SGT Malone', group: 'operations' },
  'staging-area-manager': { slug: 'staging-area-manager', title: 'Staging Area Manager', blurb: 'MAJ Rookard', group: 'operations' },
  'secfor-director': { slug: 'secfor-director', title: 'SECFOR Branch Director', blurb: 'MAJ Crosby', group: 'operations' },
  'secfor-deputy': { slug: 'secfor-deputy', title: 'SECFOR Branch Deputy', blurb: 'SFC Ferguson', group: 'operations' },
  'screen-division-leader': { slug: 'screen-division-leader', title: 'Screen Division/Group Leader', blurb: '2LT Garrison', group: 'operations' },
  'foot-patrol-member': { slug: 'foot-patrol-member', title: 'Foot Patrol Member', blurb: 'SSG Whalen / PFC Human / PV2 Elrod', group: 'operations' },
  'air-ops-director': { slug: 'air-ops-director', title: 'Air Ops Branch Director', blurb: 'CPT Borrilez', group: 'operations' },
  'part-107-pilot': { slug: 'part-107-pilot', title: 'Part 107 Pilot', blurb: 'CPT Widner / 1LT Riley / SFC Acosta (SDFF)', group: 'operations' },

  'planning-chief': { slug: 'planning-chief', title: 'Planning Section Chief', blurb: '1LT Overton', group: 'planning' },
  'planning-deputy': { slug: 'planning-deputy', title: 'Planning Section Deputy', blurb: '2LT Sobel', group: 'planning' },
  'resources-unit-leader': { slug: 'resources-unit-leader', title: 'Resources Unit Leader', blurb: '1LT Fielitz-Scarbrough', group: 'planning' },
  'situation-unit-leader': { slug: 'situation-unit-leader', title: 'Situation Unit Leader', blurb: '1SG Snow', group: 'planning' },
  'documentation-unit': { slug: 'documentation-unit', title: 'Documentation Unit', blurb: 'CPT McCroskey', group: 'planning' },
  'technical-specialist': { slug: 'technical-specialist', title: 'Technical Specialist', blurb: 'SSG Miles / WO1 Hendon', group: 'planning' },

  'logistics-chief': { slug: 'logistics-chief', title: 'Logistics Section Chief', blurb: 'CPT Haddix', group: 'logistics' },
  'logistics-deputy': { slug: 'logistics-deputy', title: 'Logistics Section Deputy', blurb: 'SFC Bradley', group: 'logistics' },
  'service-branch-director': { slug: 'service-branch-director', title: 'Service Branch Director', blurb: '2LT Neisler', group: 'logistics' },
  'comms-unit': { slug: 'comms-unit', title: 'Communications Unit', blurb: 'CSM Rutherford / SSG Singh', group: 'logistics' },
  'medical-unit': { slug: 'medical-unit', title: 'Medical Unit', blurb: 'MAJ Gampe (61st MED Co attachment)', group: 'logistics' },

  'sdff-representative': { slug: 'sdff-representative', title: 'SDFF Representative', blurb: 'SFC Acosta', group: 'agency' },
};

export const GROUP_LABEL: Record<GuideMeta['group'], string> = {
  common: 'Common to All Participants',
  command: 'Command Staff',
  operations: 'Operations Section',
  planning: 'Planning Section',
  logistics: 'Logistics Section',
  agency: 'Agency / Organization Representative',
};

export const GROUP_ORDER: GuideMeta['group'][] = [
  'common', 'command', 'operations', 'planning', 'logistics', 'agency',
];

export function getGuideMeta(slug: string): GuideMeta {
  return GUIDE_META[slug] ?? { slug, title: slug, group: 'common' };
}

import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Romain De Page',
    photoBackEmoji: '🧪',
    title: {
      fr: 'Ingénieur Test Qualité | Expert Support & Formation | Certifié ISTQB',
      en: 'Quality Test Engineer | Support & Training Expert | ISTQB Certified',
    },
    subtitle: {
      fr: 'Plus de 10 ans d\'expérience',
      en: 'Over 10 years of experience',
    },
    location: 'Bouaye, Pays de la Loire, France',
  },
  
  seo: {
    title: 'Romain De Page — Ingénieur Test Qualité',
    description: 'CV interactif de Romain De Page, Ingénieur Test Qualité certifié ISTQB.',
    },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'phone', label: '06 87 11 87 77' },
    { type: 'email', label: 'romaindepage@gmail.com' },
    { type: 'linkedin', label: 'Romain De Page', href: 'https://www.linkedin.com/in/romain-d-040b8953' },
    { type: 'location', label: 'Bouaye, Pays de la Loire, France' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Professionnel', en: 'Professional' } },
      ],
    },
    {
      title: { fr: 'Backend & Data', en: 'Backend & Data' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'MySQL' },
      ],
    },
    {
      title: { fr: 'Web', en: 'Web' },
      type: 'badges',
      items: [
        { name: 'HTML5' },
      ],
    },
    {
      title: { fr: 'Qualité logicielle', en: 'Software Quality' },
      type: 'text',
      items: [
        { name: { fr: 'Tests fonctionnels, tests de non-régression, plans de tests' } },
        { name: { fr: 'Analyse et suivi des anomalies' } },
        { name: { fr: 'Qualification logicielle et validation des User Stories' } },
      ],
    },
    {
      title: { fr: 'Support & CRM', en: 'Support & CRM' },
      type: 'text',
      items: [
        { name: { fr: 'Support technique niveaux 1 et 2' } },
        { name: { fr: 'CRM Eudonet, GLPI' } },
        { name: { fr: 'Documentation fonctionnelle et formation utilisateurs' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Sens du service client, organisation, pédagogie' } },
        { name: { fr: 'Collaboration, amélioration continue' } },
      ],
    },
    {
      title: { fr: 'Certifications', en: 'Certifications' },
      type: 'text',
      items: [
        { name: { fr: 'ISTQB® Certified Tester Foundation Level v4.0' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'vif',
      company: { fr: 'VIF', en: 'VIF' },
      role: { fr: 'Ingénieur tests qualité', en: 'Quality Test Engineer' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Mars 2025 - Présent', en: 'March 2025 - Present' },
      techs: [
        'Tests manuels',
        'Tests fonctionnels',
        'Tests de non-régression',
        'Plans de tests',
        'User Stories',
      ],
      description: {
        fr: 'Participation active à la stratégie de tests et à la qualification logicielle.',
        en: 'Active contribution to test strategy and software qualification.',
      },
      details: {
        context: {
          fr: 'Produit logiciel métier, équipe agile pluridisciplinaire.',
          en: 'Business software product, agile cross-functional team.',
        },
        tasks: {
          fr: [
            'Analyse et relecture des User Stories',
            'Définition et exécution des plans de tests',
            'Tests manuels et maintenance du patrimoine de tests',
            'Analyse et suivi des anomalies',
            'Collaboration avec PO et développeurs',
            'Mise en place et suivi des indicateurs qualité',
          ],
          en: [
            'User Stories analysis and review',
            'Test plan definition and execution',
            'Manual testing and test asset maintenance',
            'Defect analysis and tracking',
            'Close collaboration with PO and developers',
            'Quality metrics monitoring',
          ],
        },
        env: {
          fr: 'Tests manuels / Qualification logicielle / Méthodes agiles',
          en: 'Manual testing / Software qualification / Agile methods',
        },
      },
    },
    {
      id: 'makeitsafe',
      company: { fr: 'Make IT Safe', en: 'Make IT Safe' },
      role: { fr: 'Customer Success Manager', en: 'Customer Success Manager' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Novembre 2023 - Mars 2025', en: 'November 2023 - March 2025' },
      techs: [
        'Support client',
        'Formation utilisateurs',
        'Documentation',
        'Relation client',
      ],
      description: {
        fr: 'Accompagnement client, support et formation.',
        en: 'Customer support, onboarding and training.',
      },
      details: {
        context: {
          fr: 'Entreprise spécialisée en cybersécurité.',
          en: 'Cybersecurity-focused company.',
        },
        env: {
          fr: 'Support client / Formation / Documentation',
          en: 'Customer support / Training / Documentation',
        },
      },
    },
    {
      id: 'eudonet-manager',
      company: { fr: 'Eudonet CRM', en: 'Eudonet CRM' },
      role: { fr: 'Responsable du Service Support Clients', en: 'Customer Support Manager' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Septembre 2019 - Décembre 2023', en: 'September 2019 - December 2023' },
      techs: [
        'CRM',
        'Support N1/N2',
        'Management',
        'Tests de non-régression',
        'Documentation',
      ],
      description: {
        fr: 'Pilotage du support clients et coordination avec les équipes internes.',
        en: 'Customer support management and coordination with internal teams.',
      },
      details: {
        context: {
          fr: 'Éditeur de logiciel CRM.',
          en: 'CRM software publisher.',
        },
        env: {
          fr: 'Management / Support N1-N2 / Tests avec la R&D',
          en: 'Management / Level 1-2 support / Testing with R&D',
        },
      },
    },
    {
      id: 'eudonet-consultant',
      company: { fr: 'Eudonet CRM', en: 'Eudonet CRM' },
      role: { fr: 'Consultant Support', en: 'Support Consultant' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Juin 2018 - Décembre 2023', en: 'June 2018 - December 2023' },
      techs: [
        'CRM',
        'Support N1/N2',
        'Analyse fonctionnelle',
        'Tests',
      ],
      description: {
        fr: 'Support fonctionnel et technique auprès des clients CRM.',
        en: 'Functional and technical support for CRM customers.',
      },
      details: {
        context: {
          fr: 'Support client sur solution CRM.',
          en: 'Customer support on CRM solution.',
        },
        env: {
          fr: 'Support N1-N2 / Formation / Tests',
          en: 'Level 1-2 support / Training / Testing',
        },
      },
    },
    {
      id: 'eudonet-trainer',
      company: { fr: 'Eudonet CRM', en: 'Eudonet CRM' },
      role: { fr: 'Support logiciel / Formateur', en: 'Software Support / Trainer' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Mars 2016 - Décembre 2023', en: 'March 2016 - December 2023' },
      techs: [
        'CRM',
        'Formation clients',
        'Support utilisateur',
        'HTML',
        'Publipostage',
      ],
      description: {
        fr: 'Formation et assistance des utilisateurs sur la solution CRM.',
        en: 'User training and assistance on the CRM solution.',
      },
      details: {
        context: {
          fr: 'Formation et assistance utilisateurs sur CRM.',
          en: 'User training and assistance on CRM.',
        },
        env: {
          fr: 'CRM / Formation / Support utilisateur',
          en: 'CRM / Training / User support',
        },
      },
    },
    {
      id: 'cinematheque',
      company: { fr: 'Cinémathèque française', en: 'French Cinematheque' },
      role: { fr: 'Apprenti technicien', en: 'IT Technician Apprentice' },
      period: { fr: 'Septembre 2013 - Mars 2016', en: 'September 2013 - March 2016' },
      techs: [
        'GLPI',
        'Support utilisateurs',
        'Déploiement postes',
        'Maintenance',
      ],
      description: {
        fr: 'Support informatique interne et maintenance du parc informatique.',
        en: 'Internal IT support and workstation maintenance.',
      },
      details: {
        context: {
          fr: 'Environnement informatique interne.',
          en: 'Internal IT environment.',
        },
        env: {
          fr: 'GLPI / Déploiement postes / Support utilisateurs',
          en: 'GLPI / Workstation deployment / User support',
        },
      },
    },
    {
      id: 'bij',
      company: { fr: 'Bureau Information Jeunesse', en: 'Youth Information Office' },
      role: { fr: 'Formateur', en: 'Trainer' },
      period: { fr: 'Octobre 2013 - Juin 2015', en: 'October 2013 - June 2015' },
      techs: [
        'Bureautique',
        'Formation',
        'Assistance utilisateurs',
      ],
      description: {
        fr: 'Formation du public aux outils bureautiques et numériques.',
        en: 'Training sessions on office and digital tools.',
      },
      details: {
        context: {
          fr: 'Structure publique d\'accompagnement.',
          en: 'Public support organization.',
        },
        env: {
          fr: 'Bureautique / Formation / Assistance',
          en: 'Office tools / Training / Assistance',
        },
      },
    },
    {
      id: 'gibert',
      company: { fr: 'Gibert Joseph', en: 'Gibert Joseph' },
      role: { fr: 'Préparateur & formateur', en: 'Order Picker & Trainer' },
      period: { fr: 'Janvier 2008 - Janvier 2012', en: 'January 2008 - January 2012' },
      techs: [
        'Logistique',
        'Gestion commandes',
        'Formation',
      ],
      description: {
        fr: 'Préparation des commandes et accompagnement des nouveaux arrivants.',
        en: 'Order preparation and onboarding of new team members.',
      },
      details: {
        context: {
          fr: 'Commerce et logistique.',
          en: 'Retail and logistics.',
        },
        env: {
          fr: 'Préparation commandes / Formation',
          en: 'Order preparation / Training',
        },
      },
    },
  ],

  education: [
    {
      school: { fr: 'Infosup', en: 'Infosup' },
      degree: { fr: 'BTS SIO', en: 'BTS SIO' },
      specialty: { fr: 'Option SLAM', en: 'SLAM specialization' },
      period: '2013 - 2015',
    },
    {
      school: { fr: 'Université Paris-Est Créteil', en: 'Paris-Est Creteil University' },
      degree: { fr: 'Première année de médecine', en: 'First year of Medicine' },
      period: '2007 - 2008',
    },
    {
      school: { fr: 'Lycée Eugène Delacroix', en: 'Eugene Delacroix High School' },
      degree: { fr: 'Baccalauréat Scientifique', en: 'Scientific Baccalaureate' },
      period: '2004 - 2007',
    },
  ],

  hobbies: [
    {
      title: { fr: 'Sport', en: 'Sport' },
      details: [
        { fr: '18 ans de handball', en: '18 years of handball' },
      ],
    },
    {
      title: { fr: 'Musique', en: 'Music' },
    },
    {
      title: { fr: 'Cinéma', en: 'Cinema' },
    },
    {
      title: { fr: 'Nouvelles technologies', en: 'New technologies' },
    },
  ],

  theme: { preset: 'forest' },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Technical environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
  },
    actions: {
      clickHint: { fr: 'Cliquez pour voir le détail', en: 'Click to see details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}

import { 
  fanzineImages, 
  lookbookShinjiImages, 
  arthurImages,  
  fleursGrisesImages, 
  studioHarcourtImages, 
  lookbookAnthonyImages, 
  campagneKleinodImages, 
  lampeEmailImages,
  ekaterinaImages,
  polaShinjiImages,
  gaetanImages,
  lookbookLeaImages,
  vallaurisImages,
  placeholders,

} from './projectImages'

/** Shown on `/` when no `:projectId` is in the URL. */
export const defaultProjectId = 'fanzine'

/**
 * @typedef {{
 *   src: string;
 *   mobileSrc?: string;
 *   text?: string;
 *   hoverPosition?: 'top' | 'bottom';
 *   hoverShowIndex?: boolean;
 *   color?: string;
 *   height?: string;
 * }} ProjectImage
 * @type {Record<string, { title: string; images: Array<string | ProjectImage>; description?: string; credits?: string | Array<string | Record<string, string[]>> }>}
 */
export const projectsById = {
  fanzine: {
    title: 'Fanzine',
    images: [
      { src: fanzineImages.shinji.desktop, mobileSrc: fanzineImages.shinji.mobile, text: 'Shinji', hoverPosition: 'bottom', color: '#000', height: '70vh', width: '100%', link: '/shinji' },
      { src: fanzineImages.arthur.desktop, mobileSrc: fanzineImages.arthur.mobile, text: 'Arthur', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/arthur' },
      { src: fanzineImages.fleursGrises.desktop, mobileSrc: fanzineImages.fleursGrises.mobile, text: 'Fleurs grises', hoverPosition: 'bottom', color: '#fff', height: '100vh', width: '80%', link: '/fleurs-grises' },
      { src: fanzineImages.studioHarcourt.desktop, mobileSrc: fanzineImages.studioHarcourt.mobile, text: 'Studio Harcourt', hoverPosition: 'top', color: '#fff', height: '70vh', width: '80%', link: '/studio-harcourt' },
      { src: fanzineImages.anthony.desktop, mobileSrc: fanzineImages.anthony.mobile, text: 'Anthony', hoverPosition: 'top', color: '#fff', height: '70vh', width: '100%', link: '/anthony' },
      { src: fanzineImages.campagneKleinod06.desktop, mobileSrc: fanzineImages.campagneKleinod06.mobile, text: 'Atelier Kleinod', hoverPosition: 'bottom', color: '#fff', height: '100vh', width: '80%', link: '/atelier-kleinod' },
      { src: fanzineImages.email.desktop, mobileSrc: fanzineImages.email.mobile, text: 'ÉMAUX SUR CUIVRE', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/emaux-sur-cuivre' },
      { src: fanzineImages.campagneKleinod08.desktop, mobileSrc: fanzineImages.campagneKleinod08.mobile, text: 'Atelier Kleinod', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/atelier-kleinod' },
      { src: fanzineImages.ekaterina09.desktop, mobileSrc: fanzineImages.ekaterina09.mobile, text: 'Ekaterina', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/ekaterina' },
      { src: fanzineImages.polaShinji.desktop, mobileSrc: fanzineImages.polaShinji.mobile, text: 'Pola Shinji', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '80%', link: '/pola-shinji' },
      { src: fanzineImages.lookbookAnthony11.desktop, mobileSrc: fanzineImages.lookbookAnthony11.mobile, text: 'Anthony', hoverPosition: 'top', color: '#fff', height: '100vh', width: '80%', link: '/anthony' },
      { src: fanzineImages.gaetan12.desktop, mobileSrc: fanzineImages.gaetan12.mobile, text: 'Gaetan', hoverPosition: 'bottom', color: '#fff', height: '55vh', width: '80%', link: '/gaetan' },
      { src: fanzineImages.gaetan13.desktop, mobileSrc: fanzineImages.gaetan13.mobile, text: 'Gaetan', hoverPosition: 'top', color: '#fff', height: '55vh', width: '80%', link: '/gaetan' },
      { src: fanzineImages.lea.desktop, mobileSrc: fanzineImages.lea.mobile, text: 'Léa', hoverPosition: 'bottom', color: '#000', height: '70vh', width: '100%', link: '/lea' },
      { src: fanzineImages.vallauris.desktop, mobileSrc: fanzineImages.vallauris.mobile, text: 'Vallauris', hoverPosition: 'top', color: '#fff', height: '55vh', width: '80%', link: '/vallauris' },
      { src: fanzineImages.exaterina16.desktop, mobileSrc: fanzineImages.exaterina16.mobile, text: 'Exaterina', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/ekaterina' },
      { src: fanzineImages.campagneKleinod17.desktop, mobileSrc: fanzineImages.campagneKleinod17.mobile, text: 'Atelier Kleinod', hoverPosition: 'bottom', color: '#fff', height: '70vh', width: '100%', link: '/atelier-kleinod' },
    ],
  },
  'shinji': {
    title: 'Shinji',
    images: [
      { src: lookbookShinjiImages.shinji01.desktop, mobileSrc: lookbookShinjiImages.shinji01.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji02.desktop, mobileSrc: lookbookShinjiImages.shinji02.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji03.desktop, mobileSrc: lookbookShinjiImages.shinji03.mobile, height: '100vh', width: '100%' },
      { src: lookbookShinjiImages.shinji04.desktop, mobileSrc: lookbookShinjiImages.shinji04.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji05.desktop, mobileSrc: lookbookShinjiImages.shinji05.mobile, height: '100vh', width: '100%' },
      { src: lookbookShinjiImages.shinji06.desktop, mobileSrc: lookbookShinjiImages.shinji06.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji07.desktop, mobileSrc: lookbookShinjiImages.shinji07.mobile, height: '70vh', width: '100%' },
      { src: lookbookShinjiImages.shinji08.desktop, mobileSrc: lookbookShinjiImages.shinji08.mobile, height: '100vh', width: '100%' },
      { src: lookbookShinjiImages.shinji09.desktop, mobileSrc: lookbookShinjiImages.shinji09.mobile, height: '70vh', width: '100%' },
    ],
    description: 'Étude de poses',
    credits: [{paragraph_1: ['Edito Shinji'], paragraph_2: ['Modele','Shinji Tsukiyama']}]
  },
  'arthur': {
    title: 'Arthur',
    images: [
      { src: arthurImages.arthur01.desktop, mobileSrc: arthurImages.arthur01.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur02.desktop, mobileSrc: arthurImages.arthur02.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur03.desktop, mobileSrc: arthurImages.arthur03.mobile, height: '100vh', width: '100%' },
      { src: arthurImages.arthur04.desktop, mobileSrc: arthurImages.arthur04.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur05.desktop, mobileSrc: arthurImages.arthur05.mobile, height: '70vh', width: '100%' },
      { src: arthurImages.arthur06.desktop, mobileSrc: arthurImages.arthur06.mobile, height: '100vh', width: '100%' },
    ],
    description: 'Portrait de Comédien',
    credits: [{paragraph_1: ['ARTHUR ÉLÈVE AUX COURS FLORENT']}]
  },
  'fleurs-grises': {
    title: 'Fleurs grises',
    images: [
      { src: fleursGrisesImages.fleursGrises01.desktop, mobileSrc: fleursGrisesImages.fleursGrises01.mobile, height: '70vh', width: '100%' },
      { src: fleursGrisesImages.fleursGrises02.desktop, mobileSrc: fleursGrisesImages.fleursGrises02.mobile, height: '70vh', width: '100%' },
      { src: fleursGrisesImages.fleursGrises03.desktop, mobileSrc: fleursGrisesImages.fleursGrises03.mobile, height: '70vh', width: '100%' },
      { src: fleursGrisesImages.fleursGrises04.desktop, mobileSrc: fleursGrisesImages.fleursGrises04.mobile, height: '70vh', width: '100%' },
    ],
    description: 'Nature morte',
  },
  'studio-harcourt': {
    title: 'Studio Harcourt',
    images: [
      {
        src: studioHarcourtImages.studioHarcourt01.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt01.mobile,
        text: 'Manet Andranic',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt02.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt02.mobile,
        text: 'De Baecque Suzanne',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt03.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt03.mobile,
        text: 'Desagnat Vincent',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt04.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt04.mobile,
        text: 'Gollut Jeanne',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt05.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt05.mobile,
        text: 'Milstein Rudy',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt06.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt06.mobile,
        text: 'VILLIERS Salomé',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt07.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt07.mobile,
        text: 'GALLAIS Xavier',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
      {
        src: studioHarcourtImages.studioHarcourt08.desktop,
        mobileSrc: studioHarcourtImages.studioHarcourt08.mobile,
        text: 'BOUCHEDE Guillaume',
        hoverPosition: 'top',
        hoverShowIndex: false,
        color: '#fff',
        height: '70vh',
        width: '100%',
      },
    ],
    description: 'Portraits',
  },
  'anthony': {
    title: 'Anthony',
    images: [
      { src: lookbookAnthonyImages.lookbookAnthony01.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony01.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony02.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony02.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony03.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony03.mobile, height: '100vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony04.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony04.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony05.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony05.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony06.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony06.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony07.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony07.mobile, height: '70vh', width: '100%' },
      { src: lookbookAnthonyImages.lookbookAnthony08.desktop, mobileSrc: lookbookAnthonyImages.lookbookAnthony08.mobile, height: '70vh', width: '100%' },
    ],
    description: 'LOOKBOOK DE COMÉDIEN',
    credits: [{paragraph_1: ['LOOKBOOK DE COMÉDIEN'], paragraph_2: ['AVEC ANTHONY CLAMARAN'], paragraph_3: ['ACTEUR ET CASCADEUR']}]
  },
  'atelier-kleinod': {
    title: 'Atelier Kleinod',
    images: [
      { src: campagneKleinodImages.campagneKleinod01.desktop, mobileSrc: campagneKleinodImages.campagneKleinod01.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod02.desktop, mobileSrc: campagneKleinodImages.campagneKleinod02.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod03.desktop, mobileSrc: campagneKleinodImages.campagneKleinod03.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod04.desktop, mobileSrc: campagneKleinodImages.campagneKleinod04.mobile, height: '100vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod05.desktop, mobileSrc: campagneKleinodImages.campagneKleinod05.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod06.desktop, mobileSrc: campagneKleinodImages.campagneKleinod06.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod07.desktop, mobileSrc: campagneKleinodImages.campagneKleinod07.mobile, height: '100vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod08.desktop, mobileSrc: campagneKleinodImages.campagneKleinod08.mobile, height: '70vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod09.desktop, mobileSrc: campagneKleinodImages.campagneKleinod09.mobile, height: '100vh', width: '100%' },
      { src: campagneKleinodImages.campagneKleinod10.desktop, mobileSrc: campagneKleinodImages.campagneKleinod10.mobile, height: '70vh', width: '100%' },
    ],
    description: 'JOAILLERIE CONTEMPORAINE',
    credits: [{paragraph_1: ['CAMPAGNE EDITORIALE','POUR L’ATELIER KLEINOD'], paragraph_2: ['MODÈLES','MASSIEL MENDI','SHINJI TSUKIYAMA'], paragraph_3: ['BIJOUX','KLEINOD'], paragraph_4: ['MAKEUP','LOLA HECKENAUER']}]
  },
  'emaux-sur-cuivre': {
    title: 'ÉMAUX SUR CUIVRE',
    images: [
      { src: lampeEmailImages.lampeEmail01.desktop, mobileSrc: lampeEmailImages.lampeEmail01.mobile, height: '70vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail02.desktop, mobileSrc: lampeEmailImages.lampeEmail02.mobile, height: '70vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail03.desktop, mobileSrc: lampeEmailImages.lampeEmail03.mobile, height: '100vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail04.desktop, mobileSrc: lampeEmailImages.lampeEmail04.mobile, height: '100vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail05.desktop, mobileSrc: lampeEmailImages.lampeEmail05.mobile, height: '55vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail06.desktop, mobileSrc: lampeEmailImages.lampeEmail06.mobile, height: '70vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail07.desktop, mobileSrc: lampeEmailImages.lampeEmail07.mobile, height: '55vh', width: '100%' },
      { src: lampeEmailImages.lampeEmail08.desktop, mobileSrc: lampeEmailImages.lampeEmail08.mobile, height: '70vh', width: '100%' },
    ],
    description: 'DESIGN ARTISANAL',
    credits: [{paragraph_1: ['CREATION'], paragraph_2: ['©️Anne de La Forge émailleur d\'art']}]
  },
  'ekaterina': {
    title: 'Ekaterina',
    images: [
      { src: ekaterinaImages.ekaterina01.desktop, mobileSrc: ekaterinaImages.ekaterina01.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina02.desktop, mobileSrc: ekaterinaImages.ekaterina02.mobile, height: '100vh', width: '100%' },
      { src: ekaterinaImages.ekaterina03.desktop, mobileSrc: ekaterinaImages.ekaterina03.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina04.desktop, mobileSrc: ekaterinaImages.ekaterina04.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina05.desktop, mobileSrc: ekaterinaImages.ekaterina05.mobile, height: '70vh', width: '100%' },
      { src: ekaterinaImages.ekaterina06.desktop, mobileSrc: ekaterinaImages.ekaterina06.mobile, height: '100vh', width: '100%' },
      { src: ekaterinaImages.ekaterina07.desktop, mobileSrc: ekaterinaImages.ekaterina07.mobile, height: '70vh', width: '100%' },
    ],
    description: 'EDITORIAL DE MODE',
    credits: [{paragraph_1: ['EDITORIAL AU CHATEAU SANTENY '], paragraph_2: ['MODÈLES','EKATERINA RUSNAK']}]
  },
  'pola-shinji': {
    title: 'Pola Shinji',
    images: [
      { src: polaShinjiImages.polaShinji01.desktop, mobileSrc: polaShinjiImages.polaShinji01.mobile, height: '55vh', width: '100%' },
      { src: polaShinjiImages.polaShinji02.desktop, mobileSrc: polaShinjiImages.polaShinji02.mobile, height: '70vh', width: '100%' },
      { src: polaShinjiImages.polaShinji03.desktop, mobileSrc: polaShinjiImages.polaShinji03.mobile, height: '55vh', width: '100%' },
      { src: polaShinjiImages.polaShinji04.desktop, mobileSrc: polaShinjiImages.polaShinji04.mobile, height: '100vh', width: '100%' },
      { src: polaShinjiImages.polaShinji05.desktop, mobileSrc: polaShinjiImages.polaShinji05.mobile, height: '70vh', width: '100%' },
      { src: polaShinjiImages.polaShinji06.desktop, mobileSrc: polaShinjiImages.polaShinji06.mobile, height: '70vh', width: '100%' },
      { src: polaShinjiImages.polaShinji07.desktop, mobileSrc: polaShinjiImages.polaShinji07.mobile, height: '70vh', width: '100%' },
    ],
    description: 'PORTRAIT MANNEQUIN',
    credits: [{paragraph_1: ['MODÈLE','SHINJI TSUKIYAMA']}]
  },
  'gaetan': {
    title: 'Gaetan',
    images: [
      { src: gaetanImages.gaetan01.desktop, mobileSrc: gaetanImages.gaetan01.mobile, height: '70vh', width: '100%' },
      { src: gaetanImages.gaetan02.desktop, mobileSrc: gaetanImages.gaetan02.mobile, height: '70vh', width: '100%' },
      { src: gaetanImages.gaetan03.desktop, mobileSrc: gaetanImages.gaetan03.mobile, height: '100vh', width: '100%' },
      { src: gaetanImages.gaetan04.desktop, mobileSrc: gaetanImages.gaetan04.mobile, height: '55vh', width: '100%' },
      { src: gaetanImages.gaetan05.desktop, mobileSrc: gaetanImages.gaetan05.mobile, height: '55vh', width: '100%' },
      { src: gaetanImages.gaetan06.desktop, mobileSrc: gaetanImages.gaetan06.mobile, height: '55vh', width: '100%' },
    ],
    description: 'PORTRAIT CORPORATE',
    credits: [{paragraph_1: ['PORTRAITS DE GAETAN BERTAUD']}]
  },
  'lea': {
    title: 'Léa',
    images: [
      { src: lookbookLeaImages.lookbookLea01.desktop, mobileSrc: lookbookLeaImages.lookbookLea01.mobile, height: '55vh', width: '100%' },
      { src: lookbookLeaImages.lookbookLea02.desktop, mobileSrc: lookbookLeaImages.lookbookLea02.mobile, height: '100vh', width: '100%' },
      { src: lookbookLeaImages.lookbookLea03.desktop, mobileSrc: lookbookLeaImages.lookbookLea03.mobile, height: '70vh', width: '100%' },
      { src: lookbookLeaImages.lookbookLea04.desktop, mobileSrc: lookbookLeaImages.lookbookLea04.mobile, height: '55vh', width: '100%' },
      { src: lookbookLeaImages.lookbookLea05.desktop, mobileSrc: lookbookLeaImages.lookbookLea05.mobile, height: '100vh', width: '100%' },
      { src: lookbookLeaImages.lookbookLea06.desktop, mobileSrc: lookbookLeaImages.lookbookLea06.mobile, height: '70vh', width: '100%' },
    ],
    description: 'ÉDITORIAL DE MODE',
    credits: [{paragraph_1: ['EDITO AVEC LÉA']}]
  },
  'vallauris': {
    title: 'Valauris',
    images: [
      { src: vallaurisImages.vallauris01.desktop, mobileSrc: vallaurisImages.vallauris01.mobile, height: '70vh', width: '100%' },
      { src: vallaurisImages.vallauris02.desktop, mobileSrc: vallaurisImages.vallauris02.mobile, height: '70vh', width: '100%' },
      { src: vallaurisImages.vallauris03.desktop, mobileSrc: vallaurisImages.vallauris03.mobile, height: '70vh', width: '100%' },
      { src: vallaurisImages.vallauris04.desktop, mobileSrc: vallaurisImages.vallauris04.mobile, height: '70vh', width: '100%' },
    ],
    description: 'NATURE MORTE',
    credits: [{paragraph_1: ['LAMPES VALLAURIS CHINÉS PAR À L\'IMPARFAIT PARIS']}]
  }
}

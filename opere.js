/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  OLISIGN — ARCHIVIO OPERE                                        ║
 * ║  Questo è l'unico file che devi modificare per gestire           ║
 * ║  le opere in galleria.                                           ║
 * ║                                                                  ║
 * ║  Per aggiungere un'opera: copia un blocco { ... } e incollalo   ║
 * ║  dopo l'ultimo, separato da una virgola.                         ║
 * ║                                                                  ║
 * ║  Campi disponibili:                                              ║
 * ║    titolo      → nome dell'opera (obbligatorio)                  ║
 * ║    categoria   → usata per i filtri (obbligatorio)               ║
 * ║                  valori: "Lampada" | "Scultura" | "Mobile"       ║
 * ║                          "Centrotavola" | "Oggetto" | "Arredo"   ║
 * ║                          "Soprammobile" (o qualsiasi altra)      ║
 * ║    tipo        → testo descrittivo sotto il titolo               ║
 * ║    status      → "disponibile" oppure "non disponibile"          ║
 * ║    copertina   → percorso della foto copertina (obbligatorio)    ║
 * ║    foto        → array di foto per il lightbox                   ║
 * ║    instagram   → link al post Instagram (opzionale, togli se     ║
 * ║                  non ce l'hai — il bottone non apparirà)         ║
 * ║    facebook    → link al post Facebook Marketplace (opzionale)   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const OPERE = [

  {
    titolo:     "Tizzoni",
    categoria:  "Arredo",
    tipo:       "Arredo · Legno d'ulivo",
    status:     "disponibile",
    copertina:  "foto/opera01_tizzoni/opera01_copertina.jpg",
    foto: [
      "foto/opera01_tizzoni/opera01_a.jpg",
      "foto/opera01_tizzoni/opera01_b.jpg"
    ],
    instagram:  "https://www.instagram.com/p/XXXXXXXXX/",
    facebook:   "https://www.facebook.com/marketplace/item/XXXXXXXXX/"
  },


  {
    titolo:     "Tea time",
    categoria:  "Scultura",
    tipo:       "Scultura · Legno d'ulivo",
    status:     "disponibile",
    copertina:  "foto/opera02_tea-time/opera02_copertina.jpg",
    foto: [
      "foto/opera02_tea-time/opera02_a.jpg",
      "foto/opera02_tea-time/opera02_b.jpg",
      "foto/opera02_tea-time/opera02_c.jpg"
    ]
    // nessun link social — nessun bottone apparirà
  },

  {
    titolo:     "Aroma del legno",
    categoria:  "Mobile",
    tipo:       "Mobile · Legno d'ulivo",
    status:     "non disponibile",
    copertina:  "foto/opera03_aroma-del-legno/opera03_copertina.jpg",
    foto: [
      "foto/opera03_aroma-del-legno/opera03_a.jpg",
      "foto/opera03_aroma-del-legno/opera03_b.jpg",
      "foto/opera03_aroma-del-legno/opera03_c.jpg"
    ],
    facebook:   "https://www.facebook.com/marketplace/item/XXXXXXXXX/"
  },

  {
    titolo:     "Focolare",
    categoria:  "Oggetto",
    tipo:       "Oggetto · Legno d'ulivo",
    status:     "disponibile",
    copertina:  "foto/opera04_focolare/opera04_copertina.jpg",
    foto: [
      "foto/opera04_focolare/opera04_a.jpg",
      "foto/opera04_focolare/opera04_b.jpg",
      "foto/opera04_focolare/opera04_c.jpg"
    ],
    instagram:  "https://www.instagram.com/p/XXXXXXXXX/",
    facebook:   "https://www.facebook.com/marketplace/item/XXXXXXXXX/"
  },

  {
    titolo:     "Piccole fiamme",
    categoria:  "Lampada",
    tipo:       "Lampada · Legno d'ulivo",
    status:     "disponibile",
    copertina:  "foto/opera05_piccole-fiamme/opera05_copertina.jpg",
    foto: [
      "foto/opera05_piccole-fiamme/opera05_a.jpg",
      "foto/opera05_piccole-fiamme/opera05_b.jpg",
      "foto/opera05_piccole-fiamme/opera05_c.jpg"
    ],
    instagram:  "https://www.instagram.com/p/XXXXXXXXX/"
  },

  {
    titolo:     "Scintille e Intrecci",
    categoria:  "Arredo",
    tipo:       "Arredo · Legno d'ulivo",
    status:     "non disponibile",
    copertina:  "foto/opera06_scintille-e-intrecci/opera06_copertina.jpg",
    foto: [
      "foto/opera06_scintille-e-intrecci/opera06_a.jpg",
      "foto/opera06_scintille-e-intrecci/opera06_b.jpg"
    ]
  },

  {
    titolo:     "Gocce di Sabbia",
    categoria:  "Soprammobile",
    tipo:       "Soprammobile · Legno d'ulivo",
    status:     "disponibile",
    copertina:  "foto/opera07_gocce-di-sabbia/opera07_copertina.jpg",
    foto: [
      "foto/opera07_gocce-di-sabbia/opera07_a.jpg",
      "foto/opera07_gocce-di-sabbia/opera07_b.jpg",
      "foto/opera07_gocce-di-sabbia/opera07_c.jpg"
    ],
    instagram:  "https://www.instagram.com/p/XXXXXXXXX/"
  },

  {
    titolo:     "Natale",
    categoria:  "Lampada",
    tipo:       "Lampada · Legno d'ulivo",
    status:     "non disponibile",
    copertina:  "foto/opera08_natale/opera08_copertina.jpg",
    foto: [
      "foto/opera08_natale/opera08_a.jpg",
      "foto/opera08_natale/opera08_b.jpg",
      "foto/opera08_natale/opera08_c.jpg"
    ]
  },

  {
    titolo:     "Centrotavola naturale",
    categoria:  "Centrotavola",
    tipo:       "Centrotavola · Legno d'ulivo",
    status:     "disponibile",
    copertina:  "foto/opera10-centrotavola/copertina.jpg",
    foto: [
      "foto/opera10-centrotavola/copertina.jpg",
      "foto/opera10-centrotavola/ambientazione1.jpg"
    ],
    instagram:  "https://www.instagram.com/p/XXXXXXXXX/",
    facebook:   "https://www.facebook.com/marketplace/item/XXXXXXXXX/"
  }

];

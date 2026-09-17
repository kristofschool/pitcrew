/* =========================================================
   ICT PITSTOP — data.
   Dit is het ENIGE bestand dat je aanpast om een stappenplan
   toe te voegen, te wijzigen of te verwijderen. index.html en
   app.js blijven onaangeroerd.

   Elke tegel: id, icon (zie ICONS in app.js), title, sub, en stappen.
   - Platte lijst:  steps:[ {title, note} ]
   - Met delen:     sections:[ {title, steps:[...]} ]
   - Prijslijst:    type:"prices", groups:[ {title, items:[{name,price,note}]} ]
   - Optioneel info-kaartje bovenaan: info:"tekst"
   ========================================================= */
const PLANS = [
  {
    id:"papierjammer",
    icon:"printer",
    title:"PapierJammer",
    sub:"Print- en kopieerproblemen",
    info:"Print- of kopieerprobleem? Doorloop deze stappen voor je het ICT-team contacteert.",
    sections:[
      {
        title:"1 — Scannen & doorsturen",
        steps:[
          {title:"Open de KyoceraApp en kies de juiste printer"},
          {title:"Kies 'Scannen' en vul de juiste AccountID in"},
          {title:"Laat je gsm of iPad open staan tot het scannen afgelopen is"},
          {title:"Sla het bestand op"},
          {title:"Gebruik geen 'Scannen en mailen'", note:"Dat gebruiken we eigenlijk niet meer — dit werkt meestal niet."}
        ]
      },
      {
        title:"2 — Ongeldig taakID?",
        steps:[
          {title:"Vul altijd de juiste code in", note:"Zo komt de factuur bij de juiste persoon terecht."},
          {title:"Klascodes enkel in zwart/wit"},
          {title:"In kleur printen kan via je eigen code"},
          {title:"Grote aantallen in kleur? Meld dit aan ICT via de helpdesk", note:"Zo kunnen we dit doorrekenen aan de leerlingen."}
        ]
      },
      {
        title:"3 — Vlekken bij kleur",
        steps:[
          {title:"Dit is een gekend aandachtspunt", note:"Volgens de hersteller printen we te weinig in kleur, dus het mag gerust wat meer. Via de instellingen kan je het wel proper krijgen (instructies volgen nog)."}
        ]
      },
      {
        title:"4 — Papier vastgelopen?",
        steps:[
          {title:"Open de kleppen van het toestel volgens de aanwijzingen op het scherm"},
          {title:"Verwijder het vastzittend papier voorzichtig", note:"Trek in de richting waarin het papier normaal doorloopt, niet tegendraads."},
          {title:"Sluit alle kleppen goed", note:"Het toestel start pas opnieuw als alles goed dicht zit."},
          {title:"Probeer opnieuw af te drukken of te kopiëren"}
        ]
      }
    ]
  },
  {
    id:"isterierwifi",
    icon:"wifi",
    title:"IsterierWifi?",
    sub:"Wifi, netwerk en projectieproblemen",
    info:"Geen verbinding, trage wifi of geen beeld op het scherm? Werk deze lijst van boven naar onder af.",
    sections:[
      {
        title:"1 — Geen wifi of internet?",
        steps:[
          {title:"Controleer of wifi aan staat op je toestel"},
          {title:"Herstart je toestel"},
          {title:"Test in een ander lokaal of op een ander toestel", note:"Zo weet je of het probleem bij jouw toestel ligt of bij het netwerk zelf."}
        ]
      },
      {
        title:"2 — Geen beeld op het scherm of de projector?",
        steps:[
          {title:"Controleer de kabel- of AirPlay-verbinding met je toestel"},
          {title:"Controleer of het scherm op de juiste bron/ingang staat"},
          {title:"Herstart de projector of het scherm"},
          {title:"Herstart daarna ook je eigen toestel"}
        ]
      },
      {
        title:"3 — Nog steeds problemen?",
        steps:[
          {title:"Maak een helpdeskticket aan via Smartschool"},
          {title:"Dringend voor een les? Ga langs het ICT-lokaal of bel het ICT-team"}
        ]
      }
    ]
  },
  {
    id:"kabelcrisis",
    icon:"cable",
    title:"Kabelcrisis",
    sub:"(Laad)kabel vergeten?",
    info:"Kies hieronder de situatie die bij jou past.",
    sections:[
      {
        title:"1 — Kabel of lader vergeten?",
        steps:[
          {title:"Ga langs het ICT-lokaal", note:"Daar kan je tijdelijk een kabel lenen of je toestel opladen."},
          {title:"Geef de geleende kabel na gebruik meteen terug", note:"Zo kan een collega die ook nodig hebben."}
        ]
      },
      {
        title:"2 — Kabel stuk of niet meer bruikbaar?",
        steps:[
          {title:"Meld dit bij het ICT-team", note:"Zij bekijken of vervanging via de school nodig is."}
        ]
      }
    ]
  }
];

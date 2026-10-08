export type Person = { name: string; role?: string };

export type Session = {
  id: string;
  start: string;
  end: string;
  title: string;
  kind?: string;
  room?: string;
  lang?: "ENG";
  isBreak?: boolean;
  description?: string[];
  speakers?: Person[];
  moderators?: Person[];
  exhibitors?: string[];
};

export const event = {
  name: "Transilvania Digital Innovation Summit",
  travelInfo: "https://heyzine.com/flip-book/15511769a6.html",
  edition: "Ediția a II-a",
  date: "2026-10-08",
  dateLabel: "Joi, 8 octombrie 2026",
  venue: "Elitis Events Center, Cluj-Napoca",
  timeZone: "Europe/Bucharest",
};

const MAIN = "ERRA Ballroom";

const bianca: Person = {
  name: "Bianca Muntean",
  role: "Coordonator TEDIHT & director executiv Transilvania IT Cluster",
};
const morcan: Person = { name: "Ciprian Morcan", role: "Fondator & CEO Hygia SA" };
const raita: Person = { name: "Oana Raita", role: "Cercetător științific grad II INCDTIM" };
const stan: Person = {
  name: "Ovidiu Stan",
  role: "Director Compartimentul pentru relația cu mediul socio-economic, UTCN",
};
const roja: Person = { name: "Alexandru Roja", role: "Expert inovare TEDIHT" };
const tanase: Person = {
  name: "Andra Tănase",
  role: "Expert TEDIHT & manager strategie Transilvania IT Cluster",
};

export const allDay: Session[] = [
  {
    id: "spatiu-expozitional",
    start: "10:00",
    end: "18:00",
    title: "Spațiu expozițional",
    room: "ENEA Ballroom",
    exhibitors: [
      "AROBS",
      "Wolfpack Digital",
      "Bolt Services",
      "Transilvania IT Cluster",
      "Nicelium",
      "Brinel | IQANTO",
      "Hygia SA",
      "RehabXVR",
    ],
  },
  { id: "matchmaking", start: "10:00", end: "18:00", title: "Matchmaking", room: "ENEA Ballroom" },
];

export const sessions: Session[] = [
  {
    id: "inregistrare",
    start: "09:00",
    end: "10:00",
    title: "Bun venit și înregistrarea participanților",
    room: MAIN,
    isBreak: true,
  },
  {
    id: "deschidere",
    start: "10:00",
    end: "10:20",
    title: "Deschiderea evenimentului",
    kind: "Organizatori și parteneri TEDIHT",
    room: MAIN,
    description: [
      "Transilvania Digital Innovation Summit este un concept creat în jurul unui parteneriat: Transilvania IT Cluster, Hygia SA, Universitatea Babeș-Bolyai, Universitatea Tehnică din Cluj-Napoca, RODIH și INCDTIM - șase organizații care au ales să construiască împreună The European Digital Innovation Hub in Transilvania. Partenerii urcă pe scenă și povestesc despre drumul parcurs, despre ce a însemnat colaborarea dintre mediul academic, cercetare, business și inovare, și despre de ce un ecosistem se construiește doar împreună.",
    ],
    speakers: [
      bianca,
      morcan,
      { name: "Daniela Popescu", role: "Prorector Universitatea Tehnică din Cluj-Napoca" },
      raita,
      { name: "Christian Săcărea", role: "Prorector Universitatea Babeș-Bolyai" },
    ],
  },
  {
    id: "digital-bloom",
    start: "10:20",
    end: "10:30",
    title: "Digital Bloom",
    kind: "Spectacol de deschidere",
    room: MAIN,
    description: [
      "Spectacolul digital creat de Wink Public Media, partener GOLD al TDI Summit, reprezintă o metaforă vizuală a drumului parcurs de ecosistemul digital din România: de la primele semințe puse de TEDIHT, la rezultate care prind rădăcini și încep să dea roade. Lumină, sunet și tehnologie care spun, fără cuvinte, tema acestei ediții: tehnologia nu mai este o promisiune, ci un ecosistem viu, în plină creștere.",
    ],
  },
  {
    id: "keynote-1",
    start: "10:30",
    end: "11:00",
    title: "Building Europe’s Connected Innovation Ecosystems",
    kind: "Keynote 1",
    room: MAIN,
    lang: "ENG",
    description: [
      "Viitorul digital al Europei depinde de capacitatea de a conecta tehnologia, cercetarea, industria și oamenii în ecosisteme de inovare mai puternice și mai bine integrate. Tema explorează modul în care colaborarea între sectoare, transferul cercetării către piață și utilizarea tehnologiilor emergente pot accelera transformarea digitală, susține tranziția către Industry 5.0 și genera impact economic și social real.",
      "În centrul discuției se află construirea unei Europe mai competitive, reziliente și conectate, în care inovația devine rezultatul colaborării dintre ecosisteme, nu al inițiativelor izolate.",
    ],
    speakers: [
      {
        name: "Michela Magas",
        role: "Chair and Director of Research & Innovation, Industry Commons Foundation",
      },
    ],
  },
  {
    id: "keynote-2",
    start: "11:00",
    end: "11:20",
    title: "Antreprenoriatul românesc între provocări și oportunități",
    kind: "Keynote 2",
    room: MAIN,
    description: [
      "Antreprenoriatul românesc traversează o perioadă în care presiunile economice, schimbările tehnologice, accesul la competențe și nevoia de adaptare rapidă schimbă modul în care companiile cresc și iau decizii. Pornind de la experiența sa în reprezentarea mediului antreprenorial și a IMM-urilor din România, Florin Jianu va vorbi despre principalele provocări cu care se confruntă astăzi antreprenorii, dar și despre oportunitățile care pot accelera dezvoltarea companiilor românești.",
      "Discuția va aduce în prim-plan competitivitatea, investițiile, oamenii și capacitatea organizațiilor de a se adapta într-un context economic tot mai complex.",
    ],
    speakers: [
      { name: "Florin Jianu", role: "Președinte al Consiliului Național al IMM-urilor din România" },
    ],
  },
  {
    id: "panel-1",
    start: "11:20",
    end: "12:10",
    title: "Cum Construim Companii și Organizații AI-Ready?",
    kind: "Panel 1",
    room: MAIN,
    description: [
      "Diferența dintre companiile care transformă AI în avantaj competitiv și cele care rămân blocate în faza de pilot ține de organizație: de calitatea datelor, de procese, de competențele oamenilor și de curajul deciziilor.",
      "Panelul reunește lideri din mediul de business, asociații profesionale și companii de tehnologie care au trecut prin acest proces sau îl ghidează zi de zi. Discuția pornește de la întrebări concrete: de unde începe o companie care nu a lucrat niciodată cu AI? Ce investiții au sens în primul an? Cum eviți capcana proiectelor-pilot care nu ajung niciodată în producție? Ce rol joacă managementul de top și cum pregătești echipele pentru schimbare?",
      "Participanții pleacă cu o imagine realistă a drumului către o organizație AI-ready - cu pași aplicabili și lecții din companii care au făcut deja tranziția.",
    ],
    speakers: [
      {
        name: "Petru Alboi",
        role: "Șef al Autorității de Management pentru Programul Regional Nord-Vest 2021-2027, ADR Nord-Vest",
      },
      { name: "Ana Maria Bușoniu", role: "Director general OIPSI în cadrul ADR și director general NCC RO" },
      {
        name: "Adrian Groza",
        role: "Prorector - Infrastructură Informatică și Digitalizare, UTCN & Cercetător științific - Artificial Intelligence Research Institute (AIRi)",
      },
      roja,
      { name: "Dr. ing. Adrian Victor Vevera", role: "Director general ICI București" },
    ],
    moderators: [bianca],
  },
  {
    id: "investment-readiness",
    start: "11:30",
    end: "12:20",
    title: "Investment Readiness & International Growth",
    kind: "Sesiune paralelă",
    room: "Sala Essens",
    lang: "ENG",
    description: [
      "O sesiune dedicată companiilor care își pregătesc organizația pentru următoarea etapă de creștere. Reprezentanți ai unor fonduri de investiții din România și din străinătate vorbesc despre ce înseamnă, concret, ca o companie să fie „investment ready”: ce urmăresc investitorii într-o echipă și într-un model de business, ce criterii cântăresc cel mai mult în decizia de finanțare și care sunt cele mai frecvente motive pentru care o companie bună ratează o rundă. Discutăm și despre scalarea internațională: cum arată drumul de la piața locală la piețele externe și ce trebuie construit din timp pentru ca acest salt să fie posibil. O oportunitate de a înțelege perspectiva investitorului direct de la sursă și de a intra în contact cu oamenii care finanțează creșterea.",
    ],
    speakers: [
      { name: "Alexandru Chifu", role: "Investor, Nucleo Ventures" },
      {
        name: "Shajjad Hadier Rizvi MBE",
        role: "CEO Resysten, Member of the Board of Directors Cluj International Committee",
      },
      { name: "Adina Simionescu", role: "Director executiv ROStartup" },
      { name: "Gelu Vac", role: "Co-Founder Defense X & CTO Medical Pilot" },
      { name: "Mircea Vădan", role: "Fondator Activize Tech" },
    ],
    moderators: [tanase],
  },
  {
    id: "mesaj-video",
    start: "12:10",
    end: "12:20",
    title: "Mesaj video",
    room: MAIN,
    description: [
      "Intervenția va oferi o perspectivă europeană asupra rolului pe care tehnologia, inovarea și transformarea digitală îl au în dezvoltarea economiei și a societății, evidențiind importanța inițiativelor europene și a ecosistemelor de inovare, inclusiv contribuția EDIH-urilor la susținerea proceselor de digitalizare.",
    ],
    speakers: [{ name: "Victor Negrescu", role: "Vicepreședinte al Parlamentului European" }],
  },
  {
    id: "keynote-3",
    start: "12:20",
    end: "12:40",
    title: "Administrația publică în era digitală",
    kind: "Keynote 3",
    room: MAIN,
    description: [
      "Un keynote despre stadiul și ritmul transformării digitale în administrația publică din România și din Europa. Ce funcționează, ce blochează și care sunt factorii care fac diferența atunci când vorbim despre scalarea digitalizării la nivelul instituțiilor publice. Discutăm despre cum arată o administrație „digital-ready” în era inteligenței artificiale și despre politicile, inițiativele și bunele practici europene care pot inspira transformarea digitală la nivel local și regional.",
    ],
    speakers: [{ name: "Mirela Mărcuț", role: "Scientific Project Officer - Joint Research Centre" }],
  },
  {
    id: "panel-2",
    start: "12:40",
    end: "13:30",
    title: "Digitalizarea serviciilor publice: Instituții pregătite pentru viitor",
    kind: "Panel 2",
    room: MAIN,
    description: [
      "România are strategii, finanțare europeană și cadru legislativ pentru digitalizarea administrației publice. Ce lipsește adesea este puntea dintre documentele de politică publică și serviciile digitale pe care cetățenii și companiile le folosesc efectiv. Acest panel abordează exact această punte.",
      "La discuție participă decidenți din administrația centrală și locală, reprezentanți ai instituțiilor europene și ai organizațiilor internaționale, alături de exemple din regiune - inclusiv experiența Republicii Moldova, unul dintre cele mai dinamice modele de guvernare digitală din Europa de Est. Teme centrale: interoperabilitatea sistemelor publice, absorbția fondurilor destinate digitalizării, competențele digitale din instituții și colaborarea dintre administrație și sectorul privat.",
    ],
    speakers: [
      { name: "Doru Chirica", role: "CEO TRANZY.AI" },
      { name: "Gabriel Crețu", role: "CEO Evozon" },
      {
        name: "Delia Herghea",
        role: "Medic primar epidemiolog la Institutul Oncologic „Prof. Dr. Ion Chiricuță” din Cluj-Napoca",
      },
      { name: "Mihai Horea", role: "Head of IT, NTT DATA Romania" },
      { name: "Sorin Pop", role: "CEO Creative Space" },
      { name: "Claudiu Salanță", role: "Arhitect-șef Consiliul Județean Cluj" },
    ],
    moderators: [
      {
        name: "Marcel Pîrvu",
        role: "Lec. univ. dr. Departamentul de Economie Politică, Facultatea de Științe Economice și Gestiunea Afacerilor, Universitatea Babeș-Bolyai Cluj-Napoca",
      },
    ],
  },
  { id: "pranz", start: "13:30", end: "14:30", title: "Masă de prânz", room: MAIN, isBreak: true },
  {
    id: "bune-practici",
    start: "14:30",
    end: "14:50",
    title: "Exemple de bune practici",
    room: MAIN,
    description: [
      "O serie de prezentări individuale de câte 10 minute, susținute de companii cu experiență în implementarea tehnologiilor digitale. Fiecare vorbitor aduce în față un caz concret din propria organizație - ce au construit, cum au făcut-o, ce a mers și ce au învățat pe parcurs. Un format rapid, aplicat, gândit pentru a oferi în scurt timp o imagine variată asupra transformării digitale, așa cum arată ea în practică, pe subiecte și industrii diferite.",
    ],
    speakers: [
      { name: "Patrik Rojan", role: "CEO Mixtazure" },
      { name: "TBA" },
    ],
  },
  {
    id: "rodih",
    start: "14:30",
    end: "15:30",
    title: "RODIH: Colaborare interregională pentru transformarea digitală a industriei și administrației publice",
    kind: "Sesiune paralelă",
    room: "Sala Eureka",
    description: [
      "O sesiune utilă pentru companiile care caută sprijin real în procesul de inovare și pentru organizațiile care vor să înțeleagă cum funcționează, în practică, infrastructura europeană de inovare din România.",
    ],
    speakers: [
      {
        name: "Dragoș Barbu",
        role: "Head of Cloud Computing and a Recognised Researcher (R2) at ICI Bucharest",
      },
      { name: "Petrică Ciupitu-Istrate", role: "Director Monitorizare OIPSI" },
      { name: "Adina Cristea", role: "Manager proiect TEDIHT" },
      { name: "Irina Florea-Saghin", role: "Coordonator FIT EDIH" },
      { name: "Lidia Mocanu", role: "Director Strategic EDIH-DIZ" },
      {
        name: "Marius Niculae",
        role: "Coordonator EDIH DIGIVEST & Director al departamentului pentru Afaceri Internaționale și Sprijin IMM - ADR Vest",
      },
    ],
    moderators: [stan],
  },
  {
    id: "keynote-4",
    start: "14:50",
    end: "15:10",
    title: "Cum se construiesc companiile care rămân relevante",
    kind: "Keynote 4",
    room: MAIN,
    description: [
      "Cum poate o companie să folosească digitalizarea pentru a crește, a lucra mai eficient și a rămâne competitivă?",
      "Pornind de la propria experiență în construirea și scalarea unei companii de tehnologie, Voicu Oprean, CEO AROBS, va vorbi despre ce înseamnă digitalizarea în practică pentru un business: de la procese și oameni, până la decizii, automatizare și inteligență artificială. Un keynote despre cum transformi tehnologia într-un instrument real de dezvoltare a companiei dar și despre capacitatea companiilor românești de a livra servicii și soluții de digitalizare.",
    ],
    speakers: [{ name: "Voicu Oprean", role: "CEO AROBS" }],
  },
  {
    id: "fireside-1",
    start: "15:10",
    end: "16:00",
    title: "Leadership în Era Inteligenței Artificiale",
    kind: "Fireside Chat",
    room: MAIN,
    description: [
      "Cum tranzitează firmele de IT românești perioada ascensiunii inteligenței artificiale și a dezvoltării de soft cu tool-uri AI? Când o parte din analiză, execuție și creativitate e delegată tehnologiei, ce rămâne uman în conducerea unei organizații? Cum se schimbă structura echipelor, criteriile de recrutare și felul în care se iau deciziile? Lideri ai unora dintre cele mai importante companii de tehnologie din România împărtășesc experiențe directe: cum și-au adaptat organizațiile, ce greșeli au făcut pe parcurs și ce competențe caută acum la oamenii-cheie.",
    ],
    speakers: [
      { name: "Ana-Maria Icătoiu", role: "Prim-vicepreședintă OFA & vicepreședintă FICSIMM" },
      { name: "Gina Lupu", role: "Co-CEO & founder Wolfpack Digital" },
      {
        name: "Cristina Mudura",
        role: "Infrastructure & Cybersecurity Director - Transilvania, BRINEL | IQANTO",
      },
      { name: "Darius Popîrțac", role: "Managing Partner GetFrankly" },
      { name: "Andrei Roth", role: "Director de prețuri comerciale, UiPath" },
      { name: "Corina Vasile", role: "Director executiv ANIS" },
    ],
    moderators: [{ name: "Diana Roșca", role: "Marketing Manager SOFTECH" }],
  },
  {
    id: "panel-3",
    start: "16:00",
    end: "17:00",
    title: "EDIH-urile: Instrumentele europene pentru accelerarea digitalizării",
    kind: "Panel 3",
    room: MAIN,
    description: [
      "Hub-urile Europene de Inovare Digitală (EDIH) sunt instrumentul principal prin care Uniunea Europeană sprijină IMM-urile și instituțiile publice în adoptarea tehnologiilor digitale - de la testare înainte de investiție, la formare, consultanță și acces la finanțare.",
      "Panelul aduce la aceeași masă coordonatorii TEDIHT, reprezentanți ai mediului academic și ai institutelor de cercetare partenere, alături de beneficiari reali ai programelor. Companiile care au parcurs procesul povestesc din interior: cu ce provocare au venit, ce servicii au accesat, cum a decurs colaborarea și ce s-a schimbat măsurabil în activitatea lor.",
    ],
    speakers: [
      { name: "Prof. dr. Laura Dioșan", role: "Universitatea Babeș-Bolyai" },
      { name: "Laura Hizo", role: "Fondator Maximilian Chocolat" },
      { name: "Cosmin Ioaneș", role: "CEO InnoRobotics" },
      morcan,
      { name: "Bianca Muntean", role: "Coord. TEDIHT & director executiv Transilvania IT Cluster" },
      { name: "Raul Pal", role: "Director general PSC Automatizări și Instalații" },
      stan,
      raita,
    ],
    moderators: [{ name: "Laura Lămurean", role: "PR & Marketing Manager Transilvania IT Cluster" }],
  },
  { id: "cafea", start: "17:00", end: "17:30", title: "Pauză de cafea", room: MAIN, isBreak: true },
  {
    id: "fireside-2",
    start: "17:30",
    end: "18:25",
    title: "AI ca resursă strategică în managementul afacerilor",
    kind: "Fireside Chat",
    room: MAIN,
    description: [
      "Există un moment în evoluția fiecărei companii în care inteligența artificială încetează să fie „un proiect al departamentului IT” și devine o resursă strategică - la fel de importantă ca oamenii sau capitalul. Din acel moment se schimbă totul: modelul de business, structura costurilor, profilul angajaților, ritmul deciziilor și chiar felul în care se măsoară performanța.",
      "Această conversație explorează exact acea tranziție. Antreprenori și lideri de business care o trăiesc acum discută deschis despre cum se administrează o companie în care AI lucrează alături de oameni: ce funcții se transformă, ce roluri noi apar, cum se recalibrează bugetele și ce înseamnă avantaj competitiv într-o piață în care tehnologia devine accesibilă tuturor. O sesiune pentru decidenții care vor să înțeleagă ce înseamnă AI pentru felul în care își conduc afacerea.",
    ],
    speakers: [
      { name: "Mihai Cărăbaș", role: "Fondator Legal Accelerators" },
      { name: "Emil Petru", role: "CEO & Director, BMW TechWorks Romania" },
      { name: "Ana Maria Stancu", role: "CEO Bucharest Robots" },
      tanase,
      { name: "Ovidiu Vilceanu", role: "General Manager Know! Training for a better life" },
    ],
    moderators: [roja],
  },
  {
    id: "inchidere",
    start: "18:25",
    end: "18:35",
    title: "De la concluzii la următorul pas: TEDIHT 2.0",
    room: MAIN,
  },
  { id: "cina", start: "18:35", end: "21:00", title: "Cină și networking", room: MAIN, isBreak: true },
];

export const allSessions = [...allDay, ...sessions];

export const hasDetails = (s: Session) =>
  Boolean(s.description || s.speakers || s.exhibitors);

export const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

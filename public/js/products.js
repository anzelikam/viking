export var korpa = []

if (localStorage.korpa) {
  korpa = JSON.parse(localStorage.korpa)
}

export function getKorpa() {
  return korpa
}

export function dodajUkorpu(id, kolicina) {
  const najdenElement = korpa.find(e => e.id === id)

  if (najdenElement) {
    najdenElement.kolicina += kolicina
  } else {
    korpa.push({
      id,
      kolicina
    })
  }

  saveKorpa()
  setVelicinuKorpe(korpa.length)
}

export function obrisiIzKorpe(index) {
  korpa.splice(index, 1)
  saveKorpa()
  setVelicinuKorpe(korpa.length)
}

export function obrisiKorpu() {
  korpa = []
  saveKorpa()
  setVelicinuKorpe(0)
}

export function saveKorpa() {
  localStorage.korpa = JSON.stringify(korpa)
}

function setVelicinuKorpe(velicina) {
  const document = $(this)
  const element = document.find('cartLenght')
  element.innerHTML = velicina
}





export const products = [{
  active: false,
  id: "001",
  kategorija: "plastika",
  ime: "VIKING Premium Knitted Wool Pad 85mm",
  slika: "01.jpg",
  opis: "Povećana seča korištenjem 100% prirodne vune.Niska radna temperatura. Dug rok trajanja. Spoljašnji konusni oblik.Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom.Mere: Spoljašnji prečnik: 85 mm,  Unutrašnji prečnik: 75 mm, Visina: 25 mm, Težina: 13 grama, Količina vune: 16 mm",
  cena: 600,
  staraCena: 650,
  stanje: "na lageru",
  kolicina: 1
},
{
  active: false,
  id: "002",
  kategorija: "plastika",
  ime: "VIKING Premium Knitted Wool Pad 140mm",
  slika: "02.jpg",
  opis: "Povećana seča korištenjem 100% prirodne vune.Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 140 mm, Unutrašnji prečnik: 130 mm, Težina: 37 grama, Količina vune: 16 mm",
  cena: 800,
  staraCena: 850,
  stanje: "na lageru"
},
{
  active: false,
  id: "003",
  kategorija: "poliranje",
  ime: "VIKING FINISHING PAD 100 x 25mm",
  slika: "03.jpg",
  opis: "Spoljašnji konusni oblik. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 100 mm, Unutrašnji prečnik: 85 mm, Visina: 25 mm",
  cena: 450,
  staraCena: 500,
  stanje: "na lageru"
},
{
  active: false,
  id: "004",
  kategorija: "poliranje",
  ime: "VIKING FINISHING PAD 140 x 25mm",
  slika: "04.jpg",
  opis: "Spoljašnji konusni oblik. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom.",
  cena: 650,
  staraCena: 750,
  stanje: "na lageru"
},
{
  active: false,
  id: "005",
  kategorija: "poliranje",
  ime: "VIKING Blue Medium Polishing 85 x 18mm",
  slika: "05.jpg",
  opis: "Spoljašnji konusni oblik. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 85 mm, Unutrašnji prečnik: 80 mm, Visina: 18 mm, Težina: 6 grama",
  cena: 420,
  staraCena: 480,
  stanje: "na lageru"
},
{
  active: false,
  id: "006",
  kategorija: "poliranje",
  ime: "VIKING Blue Medium Polishing 135 x 18mm",
  slika: "06.jpg",
  opis: "Spoljašnji konusni oblik. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom.",
  cena: 600,
  staraCena: 650,
  stanje: "na lageru"
},
{
  active: false,
  id: "007",
  kategorija: "poliranje",
  ime: "VIKING Green Heavy Cut Pad 127 x 142 x 25mm",
  slika: "07.jpg",
  opis: "Poboljšana ivica od velura i zakošena na spoljašnjem rubu. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 142 mm, Unutrašnji prečnik: 127 mm, Središnji otvor: 20 mm, Visina: 25 mm, Težina: 22 grama",
  cena: 650,
  staraCena: 700,
  stanje: "na lageru"
},
{
  active: false,
  id: "008",
  kategorija: "poliranje",
  ime: "VIKING Heavy Cut Pad 90 x 25mm",
  slika: "08.jpg",
  opis: "Jastučić za tvrdo poliranje s vrlo visokim konusnim padom. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 90 mm, Unutrašnji prečnik: 75 mm, Središnji otvor: 20 mm, Visina: 25 mm, Težina: 22 grama",
  cena: 450,
  staraCena: 550,
  stanje: "na lageru"
},
{
  active: false,
  id: "009",
  kategorija: "poliranje",
  ime: "VIKING Ultra Cut Pad 90 x 25mm",
  slika: "09.jpg",
  opis: "Jastučić za tvrdo poliranje s vrlo visokim konusnim padom. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 90 mm, Unutrašnji prečnik: 75 mm, Središnji otvor: 20 mm, Visina: 25 mm, Težina: 8 grama ",
  cena: 450,
  staraCena: 500,
  stanje: "na lageru"
},
{
  active: false,
  id: "010",
  kategorija: "poliranje",
  ime: "VIKING Heavy Cut Pad 35x50 x 25mm 2st",
  slika: "10.jpg",
  opis: "Jastučić za tvrdo poliranje s vrlo visokim konusnim padom. Niska radna temperatura. Dug rok trajanja.Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 50 mm, Unutrašnji prečnik: 35 mm, Visina: 25 mm, Težina: 8 grama",
  cena: 340,
  staraCena: 400,
  stanje: "na lageru"
},
{
  active: false,
  id: "011",
  kategorija: "poliranje",
  ime: "VIKING Fine Polishing Pad 35x50 x 25mm 2st",
  slika: "11.jpg",
  opis: "Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 50 mm, Unutrašnji prečnik: 35 mm, Visina: 25 mm ",
  cena: 340,
  staraCena: 400,
  stanje: "na lageru"
},
{
  active: false,
  id: "012",
  kategorija: "protiv rdje",
  ime: "VIKING Finishing Pad 35x50 x 25mm 2st",
  slika: "12.jpg",
  opis: "Mekani jastučić za završnu obradu. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 50 mm, Unutrašnji prečnik: 35 mm, Visina: 25 mm",
  cena: 340,
  staraCena: 400,
  stanje: "na lageru"
},
{
  active: false,
  id: "0130",
  kategorija: "zaštita boje",
  ime: "Moonlight 250ml",
  slika: "13.jpg",
  opis: "Uputstvo: Proverite da li je površina čista i bez prljavštine.Važna napomena: pre nanošenja Moonlight 250ml upotrebite  Tacsystems Oil Zero ili slično sredstvo za uklanjanje voska i ostataka ulja. Radi sigurnosti ponovite ovaj postupak 2-3 puta. Proizvod se može primeniti na dva različita načina: 1. Raspršite  Moonlight 250ml direktno  na ploču i ravnomerno je rasporedite krpom od mikrovlakana. Višak odmah obrišite novom krpom. 2. Nanesite sadržaj krpom od mikrovlakana ravnomerno i tanko po ploči. Za uklanjanje viška proizvoda upotrebite visokokvalitetnu krpu od mikrovlakana. Ne sme se dozvoliti da dođe do stvrdnjavanja proizvoda, mora se brisati ploču po ploču. Prilikom nanošenja površina mora biti hladna. Budući da je proizvod na bazi ulja, za stvrdnjavanje je potrebno oko 12 sati, posle čega može da podnese vlagu. Ako postoji opasnost da se vozilo pokvasi pre potpunog stvrdnjavanja, preporučujemo upotrebu  Tac Systems Quartz Max nakon jednog sata kako bi se sprečile mrlje od vode / kamenca. Prvo pranje automobila može se obaviti nakon 4-5 dana. Moonlight 250ml ima rok trajanja do 9 meseci. Napomena: nakon upotrebe morate isprazniti glavu za raspršivanje (ili isperite ili držite bočicu naopako i prskajte nekoliko puta). Ako ne očistite glavu raspršivača, brzo će se slomiti",
  cena: 6000,
  staraCena: 6800,
  stanje: "na lageru"
},
{
  active: false,
  id: "014",
  kategorija: "zaštita boje",
  ime: "Quartz Shine 70% 30ml",
  slika: "14.jpg",
  opis: "Komplet sadrži: 30 ml Quartz Shine, Aplikator, 5 kom antilop krpe 10x10cm, 1 kom antilop krpa 40x40cm. Operite automobil auto-šamponom i temeljno ga osušite, po potrebi ga pripremite i ispolirajte.Obrišite sva ulja sa Tacsystems Oil Zero. Nanesite proizvod mikrofiber tkaninom.Dobro rasporedite Quartz Shine u poprečnom smeru jednu po jednu ploču.Obrišite nakon 2-4 min.Dodatni slojevi mogu se nanositi nakon 30-45 minuta.Drugi sloj će stvoriti dodatni sjaj i debljinu zaštiti boje. Obrišite vodu s površine prva 24 sata nakon nanošenja.Izbjegavajte pranje automobila prvih 7 dana. Rok trajanja: do 2 godine. Preporučene radne temperature: 10C do 32C. Pre nanošenja Quartz Shine 70% 30ml upotrebite Total One Essential kao temeljni premaz za povećanje sjaja",
  cena: 8400,
  staraCena: 9000,
  stanje: "na lageru"
},
{
  active: false,
  id: "015",
  ime: "Scholl Concepts S2 Black 500g",
  slika: "15.jpg",
  kategorija: "zaštita boje",
  opis: "S2 BLACK, mešavina izuzetno visokih performansi, specijalno je razvijena za kondenzatore za upotrebu na pohabanim i na vremenske prilike otpornim farbanim površinama! S2 BLACK prevazilazi čak i najdublje i najozbiljnije nesavršenosti u boji za nekoliko sekundi. S2 BLACK masa za sečenje visokih performansi može se koristiti sa rotirajućim i oscilirajućim mašinama za poliranje dugog hoda.Za najbolje rezultate preporučujemo da koristite naše nove inovativne Ninja jastučiće, plave i crvene, alternativno Sandwich-SpiderPad, SpiderPad tamnoplave i Premium Pad narandžaste.",
  cena: 3400,
  staraCena: 3600,
  stanje:"nema na stanju" 
},
{
  active: false,
  id: "016",
  ime: "S30+ Nano Compound 500g",
  slika: "16.jpg",
  kategorija: "staklo",
  opis: "Zahvaljujući jedinstvenoj formulaciji, koja se zasniva na mikrofinoj, visokoj čistoći praha glinice,  umereni defekti i habanje bezbojnog laka, kao i tragovi vrtloga i hologrami od prethodnih lakova, mogu se lako i efikasno eliminisati u samo jednom koraku. Naša formula, koja čini površinu lakom za čišćenje nakon poliranja, pruža najbolja svojstva mašinske obrade na konvencionalnim površinama boje koje su otporne na ogrebotine. Briljantan sjaj ovog vrhunskog sastava poput ogledala će vas uveriti. S30 + se u većini slučajeva može koristiti sa svim SCHOLL aparatima za poliranje. Za najbolje rezultate preporučujemo da koristite univerzalnu narandžastu podlogu za poliranje ili NEO SpiderPad. Ne preporučuje se upotreba ekstra mekog crnog jastuka! S30 + se može koristiti i sa rotirajućim i sa oscilirajućim mašinama za poliranje.",
  cena: 2500,
  staraCena: 2750,
  stanje: "nema na stanju"
},
{
  active: false,
  id: "017",
  ime: "PURPLE Interior Shine Liquid 500ml",
  slika: "17.jpg",
  kategorija: "staklo",
  opis: "Visokoaktivni polimeri osiguravaju postojan polumat sjaj.Brzo se suši bez mrlja.Ne ostavlja mastan ili sklizak film.Proizvod na bazi vode, koji pruža dobar učinak čišćenja, potpuno je bez silikona.Dugi rok trajanja na svim podlogama, odličan na kožnim sedištima svežeg mirisa.Dobar učinak čišćenja.Nanesite proizvod sundjerom i ostavite da se osuši.",
  cena: 1650,
  staraCena: 1800,
  stanje: "nema na stanju"
},
{
  active: false,
  id: "018",
  ime: "W6 Black COATWAX 500ml",
  slika: "18.jpg",
  kategorija: "protiv rdje",
  opis: "W6 Black COATWAX 500ml je nova generacija voska visokih performansi sa izuzetno dugim zaštitnim efektom i veoma dobrom otpornošću na alkalna sredstva za čišćenje i uticaje životne sredine.Do sada je ova visoka otpornost bila poznata samo iz trajne Sio2 zaštite boje (keramičke prevlake).Zbog svoje jedinstvene formulacije, zasnovane na visokokvalitetnim sintetičkim i prirodnim sastojcima, sа W6 Black  se postižu izuzetni hidrofobni efekti, što obezbeđuje savršen efekat odbijanja prljavštine.Briljantan dubok sjaj i lako rukovanje - i ručno i mašinski - karakterišu ovaj proizvod.",
  cena: 1900,
  staraCena: 2000,
  stanje: "nema na stanju"
},
{
  active: false,
  id: "019",
  ime: "Refresh 500ml",
  slika: "19.jpg",
  kategorija: "mikrofiber",
  opis: "Prednosti proizvoda: Refresh 500ml je veoma efikasan u uklanjanju dugotrajnih mirisa kao što su cigarete, kućni ljubimci i isparenja. Refresh 500ml je bezbojan i potpuno je netoksičan, tako da je bezbedan za osobe sa alergijama ili osetljivošću na hemikalije.Uputstva:1] Dobro protresite pre upotrebe i ravnomerno prskajte u unutrašnjost (preporučuju se tepih i prostirke)2] Zatvorite vrata i pustite Refresh da radi3] Ponovite 1 i 2 koraka ako miris i dalje postoji.Saveti: Pre upotrebe osvežavanja locirajte izvor svih jakih mirisa, a zatim duboko očistite područje pre procesa dezodoracije. Ovo osigurava da se miris potpuno eliminiše.Za optimalne rezultate: Za jake mirise i za tretiranje ventilacionih otvora: Obilno poprskajte Refresh i uključite vozilo. Prebacite A / C na MAX i cirkulišite vazduh. Dozvolite sistemu da cirkuliše vazduh 5-15 minuta, u zavisnosti od intenziteta mirisa koji treba ukloniti.:",
  cena: 1750,
  staraCena: 1850,
  stanje: "nema na stanju"
},
{
  active: false,
  id: "020",
  ime: "DETAILING BRUSH",
  slika: "20.jpg",
  kategorija: "mikrofiber",
  opis: "Četka za uklanjanje nečistoća u unutrašnjosti vašeg automobila.",
  cena: 1800,
  staraCena: 2000,
  stanje: "nema na stanju"
},
{
  active: false,
  id: "021",
  ime: "C-Rock Permanent Ceramic Coating 30ml",
  slika: "21.jpg",
  kategorija: "mikrofiber",
  opis: "Komplet sadrži:",
  cena: 15000,
  staraCena: 16000,
  stanje: "nema na stanju"
},
]

export const topProducts = ['001', '003', '005', '006', '008', '010', '014']

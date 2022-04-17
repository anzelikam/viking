import { uid } from 'quasar'


const state = {
  dialogTopProizvodi: false,

  topProizvodi: {
    'ID1': {
        active: false,
        kategorija: "poliranje",
        ime: "VIKING Heavy Cut Pad 90 x 25mm",
        slika: "08.jpg",
        opis: "Jastučić za tvrdo poliranje s vrlo visokim konusnim padom. Niska radna temperatura. Dug rok trajanja. Namenjeno za upotrebu sa oscilirajućim mašinama za poliranje. Uputstvo za negu: ostaci od jastučića za poliranje se lako čiste duvanjem komprimovanog vazduha ili četkom. Mere: Spoljašnji prečnik: 90 mm, Unutrašnji prečnik: 75 mm, Središnji otvor: 20 mm, Visina: 25 mm, Težina: 22 grama",
        cena: 450,
        staraCena: 550,
        stanje: "na lageru"
    },
    'ID2': {
      active: false,
      kategorija: "zaštita boje",
      ime: "Moonlight 250ml",
      slika: "13.jpg",
      opis: "Uputstvo: Proverite da li je površina čista i bez prljavštine.Važna napomena: pre nanošenja Moonlight 250ml upotrebite  Tacsystems Oil Zero ili slično sredstvo za uklanjanje voska i ostataka ulja. Radi sigurnosti ponovite ovaj postupak 2-3 puta. Proizvod se može primeniti na dva različita načina: 1. Raspršite  Moonlight 250ml direktno  na ploču i ravnomerno je rasporedite krpom od mikrovlakana. Višak odmah obrišite novom krpom. 2. Nanesite sadržaj krpom od mikrovlakana ravnomerno i tanko po ploči. Za uklanjanje viška proizvoda upotrebite visokokvalitetnu krpu od mikrovlakana. Ne sme se dozvoliti da dođe do stvrdnjavanja proizvoda, mora se brisati ploču po ploču. Prilikom nanošenja površina mora biti hladna. Budući da je proizvod na bazi ulja, za stvrdnjavanje je potrebno oko 12 sati, posle čega može da podnese vlagu. Ako postoji opasnost da se vozilo pokvasi pre potpunog stvrdnjavanja, preporučujemo upotrebu  Tac Systems Quartz Max nakon jednog sata kako bi se sprečile mrlje od vode / kamenca. Prvo pranje automobila može se obaviti nakon 4-5 dana. Moonlight 250ml ima rok trajanja do 9 meseci. Napomena: nakon upotrebe morate isprazniti glavu za raspršivanje (ili isperite ili držite bočicu naopako i prskajte nekoliko puta). Ako ne očistite glavu raspršivača, brzo će se slomiti",
      cena: 6000,
      staraCena: 6800,
      stanje: "na lageru"
    },
    'ID3': {
      active: false,
      ime: "Scholl Concepts S2 Black 500g",
      slika: "15.jpg",
      kategorija: "zaštita boje",
      opis: "S2 BLACK, mešavina izuzetno visokih performansi, specijalno je razvijena za kondenzatore za upotrebu na pohabanim i na vremenske prilike otpornim farbanim površinama! S2 BLACK prevazilazi čak i najdublje i najozbiljnije nesavršenosti u boji za nekoliko sekundi. S2 BLACK masa za sečenje visokih performansi može se koristiti sa rotirajućim i oscilirajućim mašinama za poliranje dugog hoda.Za najbolje rezultate preporučujemo da koristite naše nove inovativne Ninja jastučiće, plave i crvene, alternativno Sandwich-SpiderPad, SpiderPad tamnoplave i Premium Pad narandžaste.",
      cena: 3400,
      staraCena: 3600,
      stanje:"nema na stanju"
    },
  }
}

const mutations = {

}

const actions = {



}

const getters = {
  topProizvodi: (state) => {
    return state.topProizvodi
  }
}

export default {
   namespaced: true,
   state,
   mutations,
   actions,
   getters

}

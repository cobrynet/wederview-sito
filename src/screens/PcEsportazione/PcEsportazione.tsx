import React from "react";
import { Carousel } from "../../components/Carousel";

const navigationItems = [
  { label: "CHI SIAMO", href: "#chi-siamo" },
  { label: "I NOSTRI SERVIZI", href: "#nostri-servizi" },
  { label: "DOVE SIAMO", href: "#dove-siamo" },
  { label: "CONTATTACI", href: "#contattaci" },
];

const services = [
  {
    title: "WEDDING IDENTITY",
    description:
      "Diamo forma e stile al vostro giorno speciale: dalla creazione delle partecipazioni, ai menù, ai segnaposto, fino alla realizzazione di tableau mariage personalizzati.",
    italicText:
      "La Wedding Identity è ciò che renderà ogni dettaglio del vostro matrimonio unico e coordinato.",
    additionalText:
      "Ogni progetto è completamente su misura e costruito insieme a voi, in base ai materiali, alla tipologia di carte, alle finiture e alla complessità grafica. Il prezzo verrà definito con un preventivo personalizzato in base alle vostre scelte e alle esigenze di lavorazione.",
  },
  {
    title: "PRODUZIONE VIDEO CINEMATOGRAFICA",
    italicText: "Realizzeremo per voi un vero film d'amore.",
    description:
      "Due operatori professionisti vi accompagneranno dalla preparazione fino al gran finale della giornata, cogliendo ogni emozione, ogni sorriso e ogni dettaglio con uno stile narrativo cinematografico. Ogni ripresa sarà studiata per raccontare con eleganza e autenticità la vostra storia.",
  },
  {
    title: "SERVIZIO FOTOGRAFICO",
    description:
      "Il nostro team di due fotografi professionisti sarà al vostro fianco per tutta la giornata, dalla preparazione agli ultimi balli.",
    italicText:
      "Discreti ma presenti, immortaleremo sguardi, abbracci e ogni piccolo grande momento che rende unico il vostro matrimonio.",
    additionalText: "Ogni scatto sarà naturale, autentico e pieno di vita.",
  },
];

const additionalServices = [
  {
    title: "FOTO BOOTH PERSONALIZZATO",
    description:
      "Dal termine della cerimonia, realizzeremo scatti fotografici di gruppo e individuali che verranno stampati, allestiremo una zona dove gli invitati potranno divertirsi a cercare la loro foto.",
    italicText:
      "Ogni foto sarà inserita in un cartoncino personalizzato con il logo e i dettagli grafici del vostro evento, diventando un ricordo immediato e speciale della giornata.",
  },
  {
    title: "VIDEO TRAILER SUL MOMENTO",
    description:
      "Uno dei nostri operatori sarà incaricato di riprendere i momenti più belli della giornata e di montare in tempo reale un video trailer emozionale che verrà proiettato direttamente durante la serata, prima del taglio della torta.",
    italicText: "Un regalo indimenticabile per voi e per i vostri ospiti.",
  },
  {
    title: "OPERATORE DRONE",
    description:
      "Per chi vuole dare un tocco ancora più spettacolare al proprio film matrimoniale, offriamo riprese aeree professionali con drone.",
    italicText:
      "Dall'uscita della cerimonia fino al taglio della torta, realizzeremo immagini dall'alto mozzafiato che arricchiranno il racconto della vostra giornata.",
  },
];

const servicesList = [
  "WEDDING IDENTITY",
  "PRODUZIONE VIDEO CINEMATOGRAFICA",
  "SERVIZIO FOTOGRAFICO",
  "FOTO BOOTH PERSONALIZZATO",
  "VIDEO TRAILER SUL MOMENTO",
  "OPERATORE DRONE",
  "SOCIAL MEDIA WEDDING",
];

const footerServices = [
  { name: "Wedding Identity", href: "#wedding-identity" },
  { name: "Produzione video cinematografica", href: "#video-cinematografica" },
  { name: "Servizio fotografico", href: "#servizio-fotografico" },
  { name: "Foto Booth personalizzato", href: "#foto-booth" },
  { name: "Video trailer sul momento", href: "#video-trailer" },
  { name: "Operatore drone", href: "#operatore-drone" },
  { name: "Social media wedding", href: "#social-media-wedding" },
];

export const PcEsportazione = (): JSX.Element => {
  return (
    <div className="aspect-16-9">
      <div className="relative">
        <div className="bg-white w-full h-full">
        {/* Header */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-[60px] py-[25px] bg-[#C8B094] bg-opacity-50 backdrop-blur-md transition-all duration-300">
          <a 
            href="#"
            className="w-[114px] h-[50px] bg-[url(/vector.svg)] bg-cover cursor-pointer hover:brightness-0 hover:invert transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <nav className="flex gap-12">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Baskervville',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal] hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
        
        {/* Header Section */}
        <section className="relative h-[947px] bg-[#777777]">
          <div className="absolute inset-0 bg-[url(/frame-4.svg)] bg-cover">
          </div>
          <div className="absolute bottom-[49px] right-[450px]">
            <h1 className="[font-family:'Ballet',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
              View your forever.
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section id="chi-siamo" className="px-4 md:px-8 lg:px-[267px] py-24 pt-32">
        <div className="flex gap-12">
          <div className="flex-1" style={{ marginLeft: '92px' }}>
            <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] mb-8">
              Chi siamo
            </h2>
          </div>
          <div className="flex-1">
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              <span>
                Wederview è uno studio specializzato nella produzione visiva per
                il settore wedding.
                <br />
                <br />
                Offriamo servizi integrati di fotografia, videografia e wedding
                identity, con un approccio curato, coerente e su misura.
                <br />
                <br />
                Dall'immagine coordinata agli elementi stampati, dalle riprese
                al montaggio, progettiamo ogni contenuto visivo in linea con lo
                stile e l'identità dell'evento.
                <br />
              </span>
              <br />
              <span className="[font-family:'Baskervville',Helvetica] italic text-xl">
                Lavoriamo con precisione, senso estetico e attenzione al
                dettaglio, per garantire un risultato di qualità e perfettamente
                armonico.
              </span>
            </div>
          </div>
        </div>

        {/* Image below Chi siamo section */}
        <div className="mt-16 flex justify-center relative">
          <img
            className="w-[1194px] h-[796px] object-cover"
            alt="Pexels mlkbnl"
            src="https://images.pexels.com/photos/10074149/pexels-photo-10074149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            className="absolute top-0 left-0 w-auto h-auto"
            alt="Livello 1"
            src="/Livello_1.png"
            style={{ marginTop: '-25px', marginLeft: '72px' }}
          />
        </div>

      </section>

      {/* Services Section */}
      <section id="nostri-servizi" className="px-4 md:px-8 lg:px-[267px] py-16">
        <div className="flex gap-8 mb-16">
          <div className="flex-1" style={{ marginLeft: '92px' }}>
            <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] mb-8">
              I nostri servizi
            </h2>
          </div>
          <div className="flex-1 space-y-4">
            {servicesList.map((service, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 bg-black rounded-md flex-shrink-0" />
                <span className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services with Images */}
      <section className="relative">
        {/* Wedding Identity */}
        <div id="wedding-identity" className="relative h-[994px] bg-cover pr-0">
          <img
            className="absolute inset-0 w-full h-[994px] object-cover"
            alt="Pexels vikkirillova 9551812"
            src="https://images.pexels.com/photos/9551812/pexels-photo-9551812.jpeg?auto=compress&cs=tinysrgb&w=1766&h=994&dpr=2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="absolute inset-0 flex">
            <div className="flex-1 pl-[267px] pr-0 py-[153px]">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] mb-6">
                WEDDING IDENTITY
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-base tracking-[0] leading-[normal] max-w-[510px]">
                <span className="text-white">
                  Diamo forma e stile al vostro giorno speciale: dalla creazione
                  delle partecipazioni, ai menù, ai segnaposto, fino alla
                  realizzazione di tableau mariage personalizzati.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-white text-xl">
                  La Wedding Identity è ciò che renderà ogni dettaglio del
                  vostro matrimonio unico e coordinato.
                  <br />
                </span>
                <span className="text-white">
                  Ogni progetto è completamente su misura e costruito insieme a
                  voi, in base ai materiali, alla tipologia di carte, alle
                  finiture e alla complessità grafica.
                  <br />
                  <br />
                  Il prezzo verrà definito con un preventivo personalizzato in
                  base alle vostre scelte e alle esigenze di lavorazione.
                </span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                className="w-[581px] h-[727px] object-cover"
                alt="Pexels jeremy wong"
                src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>

        {/* Video Production */}
        <div id="video-cinematografica" className="relative bg-white flex items-center justify-center" style={{ width: '1754px', height: '987px' }}>
          {/* Gray rectangle background */}
          <div className="absolute bg-[#777777]" style={{ width: '1194px', height: '672px', marginLeft: '100px' }}></div>
          
          {/* Frame 1 overlaid on gray rectangle */}
          <div className="relative z-10" style={{ marginLeft: '-500px' }}>
            <img
              className="w-[546px] h-[390px]"
              alt="Frame 1"
              src="/frame-1.svg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal] mb-4 text-center">
                PRODUZIONE VIDEO CINEMATOGRAFICA
              </h3>
              <div className="[font-family:'Baskervville',Helvetica] font-normal text-base tracking-[0] leading-[normal] text-center max-w-[400px]">
                <span className="italic text-white">
                  Realizzeremo per voi un vero film d'amore.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Montserrat',Helvetica] text-white text-xs">
                  Due operatori professionisti vi accompagneranno dalla
                  preparazione fino al gran finale della giornata, cogliendo
                  ogni emozione, ogni sorriso e ogni dettaglio con uno stile
                  narrativo cinematografico.
                  <br />
                  Ogni ripresa sarà studiata per raccontare con eleganza e
                  autenticità la vostra storia.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Service */}
        <div id="servizio-fotografico" className="bg-white px-[267px] py-16">
          <div className="flex gap-12">
            <div className="flex-1" style={{ marginTop: '140px' }}>
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] mb-6">
                SERVIZIO FOTOGRAFICO
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] max-w-[510px]">
                <span>
                  Il nostro team di due fotografi professionisti sarà al vostro
                  fianco per tutta la giornata, dalla preparazione agli ultimi
                  balli.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-xl">
                  Discreti ma presenti, immortaleremo sguardi, abbracci e ogni
                  piccolo grande momento che rende unico il vostro matrimonio.
                  <br />
                </span>
                <br />
                <span>
                  Ogni scatto sarà naturale, autentico e pieno di vita.
                </span>
              </div>
            </div>
            <div className="flex-1">
              {/* Component 1 - Carousel */}
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative">
        {/* Photo Booth */}
        <div id="foto-booth" className="relative h-[1088px]">
          <img
            className="absolute inset-0 w-full h-[1088px] object-cover"
            alt="Pexels olena dm"
            src="https://images.pexels.com/photos/29601972/pexels-photo-29601972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="absolute inset-0 flex gap-[30px]">
            <div className="flex-1 pl-[303px] pt-[365px]">
              <div className="relative inline-block">
                <img
                  className="w-[546px] h-[357px]"
                  alt="Frame"
                  src="/frame-4.svg"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal] mb-4 text-center">
                    FOTO BOOTH PERSONALIZZATO
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs tracking-[0] leading-[normal] text-center max-w-[400px]">
                    <span className="text-white">
                      Dal termine della cerimonia, realizzeremo scatti fotografici
                      di gruppo e individuali che verranno stampati, allestiremo una
                      zona dove gli invitati potranno divertirsi a cercare la loro
                      foto.
                      <br />
                    </span>
                    <br />
                    <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm">
                      Ogni foto sarà inserita in un cartoncino personalizzato con il
                      logo e i dettagli grafici del vostro evento, diventando un
                      ricordo immediato e speciale della giornata.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-start">
              <img
                className="w-[581px] h-[727px] object-cover"
                alt="Pexels anastasia nagibina"
                src="https://images.pexels.com/photos/27687900/pexels-photo-27687900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>

        {/* Video Trailer */}
        <div id="video-trailer" className="relative bg-white flex items-center justify-center" style={{ width: '1730px', height: '1088px' }}>
          {/* Gray rectangle background */}
          <div className="absolute bg-[#777777]" style={{ width: '1194px', height: '672px', marginLeft: '100px' }}></div>
          
          <div className="relative" style={{ marginLeft: '-560px' }}>
            <img
             className="w-[546px] h-[390px]"
             style={{ marginLeft: '50px' }}
              alt="Frame 3"
              src="/frame-3.svg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal] mb-4 text-center">
                VIDEO TRAILER SUL MOMENTO
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs tracking-[0] leading-[normal] text-center max-w-[400px]">
                <span className="text-white">
                  Uno dei nostri operatori sarà incaricato di riprendere i momenti più belli della giornata e di montare in tempo reale un video trailer emozionale che verrà proiettato direttamente durante la serata, prima del taglio della torta.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm">
                  Un regalo indimenticabile per voi e per i vostri ospiti.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Drone Service */}
        <div id="operatore-drone" className="relative h-[995px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-[995px] object-cover"
            alt="Pexels masoodaslami"
            src="https://images.pexels.com/photos/18980082/pexels-photo-18980082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ filter: 'grayscale(100%)', transform: 'scale(1.2) translateX(-100px)', transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="flex-1 flex items-center justify-center" style={{ marginLeft: '177px' }}>
              <div className="text-center max-w-[600px] px-8">
                <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] mb-6 max-w-[506px]">
                  OPERATORE DRONE
                </h3>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-base tracking-[0] leading-[normal]">
                  <span className="text-white">
                    Per chi vuole dare un tocco ancora più spettacolare al proprio
                    film matrimoniale, offriamo riprese aeree professionali con
                    drone.
                    <br />
                  </span>
                  <br />
                  <span className="[font-family:'Baskervville',Helvetica] italic text-white text-xl">
                    Dall'uscita della cerimonia fino al taglio della torta,
                    realizzeremo immagini dall'alto mozzafiato che arricchiranno
                    il racconto della vostra giornata.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center pr-[267px]">
              <img
                className="w-[408px] h-[511px] object-cover"
                alt="Pexels ufuk akyuz"
                src="https://images.pexels.com/photos/14480061/pexels-photo-14480061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Wedding */}
      <section id="social-media-wedding" className="bg-white px-[267px] py-16">
        <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] mb-6 max-w-[506px]">
          SOCIAL MEDIA WEDDING
        </h3>
        <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] max-w-[510px] mb-16">
          <span>
            Un nostro operatore si occuperà di gestire in diretta i vostri
            social, pubblicando post, storie e contenuti esclusivi sul profilo
            Instagram o Facebook di uno degli sposi.
            <br />
          </span>
          <br />
          <span className="[font-family:'Baskervville',Helvetica] italic text-xl">
            Sarà un vero Wedding Reporter Social, permettendo ad amici e parenti
            lontani di vivere ogni momento del vostro matrimonio in tempo reale.
            <br />
          </span>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <img
            className="w-[378px] h-[473px] object-cover"
            alt="Pexels seljansalim"
            src="https://images.pexels.com/photos/26646531/pexels-photo-26646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            className="w-[378px] h-[473px] object-cover"
            alt="Pexels yusuf rendecioglu"
            src="https://images.pexels.com/photos/17966674/pexels-photo-17966674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            className="w-[378px] h-[473px] object-cover"
            alt="Pexels andreas schnabl"
            src="https://images.pexels.com/photos/19125401/pexels-photo-19125401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </section>

      {/* Contact Sections */}
      <section className="bg-white px-[267px] py-16 space-y-16">
        <div>
          {/* Dove siamo section with pexels-esrannuur image */}
          <div id="dove-siamo" className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1" style={{ marginTop: '50px' }}>
              <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] mb-8">
                Dove siamo
              </h2>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
                Via Pietro Mascagni 15C,
                <br />
                Pieve a Nievole
                <br />
                PT (51100)
              </div>
            </div>
            <div className="flex-1">
              <img
                className="w-[582px] h-[727px] object-cover rounded-lg"
                alt="Pexels esrannuur location"
                src="https://images.pexels.com/photos/29613060/pexels-photo-29613060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>

        <div>
          <div style={{ marginTop: '-350px' }}>
            <h2 id="contattaci" className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-[normal] mb-8">
              Contattaci
            </h2>
            <div className="space-y-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
                www.wederview.com
              </div>
              <a
                className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] block"
                href="mailto:info@wederview.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@wederview.com
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
                +39 366 718 4741
              </div>
            </div>
          </div>
          <div className="space-y-2" style={{ marginTop: '50px' }}>
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
              Assistenza:
            </div>
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
              +39 351 663 8114
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#c8b094] px-4 md:px-8 lg:px-[267px] py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Logo Column */}
          <div className="flex flex-col items-start">
            <a 
              href="#"
              className="w-[114px] h-[50px] bg-[url(/vector.svg)] bg-cover mb-8 cursor-pointer hover:brightness-0 hover:invert transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* WEDERVIEW Column */}
          <div>
            <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] mb-4">
              WEDERVIEW
            </div>
            <div className="space-y-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                di Cobrynet
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Pietro+Mascagni+15C,+Pieve+a+Nievole,+51018+PT,+Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
              >
                Via Pietro Mascagni 15C
                <br />
                Pieve a Nievole, 51018 (PT)
              </a>
              <a
                href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/privacy-policy-per-siti-web-o-e-commerce-it"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
              >
                Informativa Privacy
              </a>
              <a
                href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/cookie-policy-it"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
              >
                Informativa Cookies
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                P.IVA: 02100690474
              </div>
            </div>
          </div>

          {/* I NOSTRI SERVIZI Column */}
          <div>
            <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] mb-4">
              I NOSTRI SERVIZI
            </div>
            <div className="space-y-2">
              {footerServices.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(service.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTATTACI Column */}
          <div>
            <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] mb-4">
              CONTATTACI
            </div>
            <div className="space-y-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                www.wederview.com
              </div>
              <a
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] block"
                href="mailto:info@wederview.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@wederview.com
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                +39 366 718 4741
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                Assistenza: +39 351 663 8114
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16 lg:mt-20 space-y-2 md:space-y-4">
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
            2025 COBRYNET. All rights reserved.
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-light text-white text-xs md:text-sm tracking-[0] leading-[normal] px-4">
            Camera di Commercio Industria Artigianato e Agricoltura di
            PISTOIA-PRATO | Forma giuridica società in nome collettivo
            <br />
            <span className="block md:inline">Socio Amministratore ORSINI NICCOLÒ | </span>Socio Amministratore
            PISCITELLI PATRIZIO
          </div>
        </div>
        </footer>
    </div>
    </div>
    </div>
  );
};
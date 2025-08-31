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
    <div className="min-h-screen bg-white w-full flex flex-col items-center">
      <div className="w-full max-w-[1920px]">
        {/* Header */}
        <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-[60px] py-4 md:py-[25px] bg-[#C8B094] bg-opacity-50 backdrop-blur-md transition-all duration-300">
          <a 
            href="#"
            className="w-[114px] h-[50px] bg-[url(/vector.svg)] bg-cover cursor-pointer hover:opacity-80 transition-opacity duration-200 mb-4 md:mb-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 text-center md:text-left">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Baskervville',Helvetica] font-normal text-black text-xs md:text-sm tracking-[0] leading-[normal] hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 md:after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2 md:after:translate-x-0 cursor-pointer"
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
        <section className="relative h-[50vh] md:h-[70vh] lg:h-[947px] bg-[#777777]">
          <div className="absolute inset-0 bg-[url(/frame-4.svg)] bg-cover">
          </div>
          <div className="absolute bottom-4 md:bottom-8 lg:bottom-[49px] right-4 md:right-8 lg:right-[450px] text-center lg:text-left">
            <h1 className="[font-family:'Ballet',Helvetica] font-normal text-white text-2xl md:text-4xl lg:text-[64px] tracking-[0] leading-[normal]">
              View your forever.
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section id="chi-siamo" className="w-full px-4 md:px-8 lg:px-[267px] py-12 md:py-16 lg:py-24 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 lg:ml-[92px]">
            <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-[normal] mb-6 md:mb-8">
              Chi siamo
            </h2>
          </div>
          <div className="flex-1">
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-[normal]">
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
              <span className="[font-family:'Baskervville',Helvetica] italic text-lg md:text-xl">
                Lavoriamo con precisione, senso estetico e attenzione al
                dettaglio, per garantire un risultato di qualità e perfettamente
                armonico.
              </span>
            </div>
          </div>
        </div>

        {/* Image below Chi siamo section */}
        <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center relative max-w-7xl mx-auto px-4">
          <img
            className="w-full max-w-[1194px] h-auto object-cover rounded-lg"
            alt="Pexels mlkbnl"
            src="https://images.pexels.com/photos/10074149/pexels-photo-10074149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            className="absolute top-0 left-0 w-auto h-auto hidden lg:block"
            alt="Livello 1"
            src="/Livello_1.png"
            style={{ marginTop: '-25px', marginLeft: '76px' }}
          />
        </div>

      </section>

      {/* Services Section */}
      <section id="nostri-servizi" className="w-full px-4 md:px-8 lg:px-[267px] py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mb-12 md:mb-16">
          <div className="flex-1 lg:ml-[92px]">
            <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-[normal] mb-6 md:mb-8">
              I nostri servizi
            </h2>
          </div>
          <div className="flex-1 space-y-3 md:space-y-4">
            {servicesList.map((service, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-md flex-shrink-0" />
                <span className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-lg md:text-xl lg:text-2xl tracking-[0] leading-[normal]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services with Images */}
      <section className="w-full">
        {/* Wedding Identity */}
        <div id="wedding-identity" className="relative min-h-[60vh] md:min-h-[80vh] lg:h-[994px] bg-cover">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Pexels vikkirillova 9551812"
            src="https://images.pexels.com/photos/9551812/pexels-photo-9551812.jpeg?auto=compress&cs=tinysrgb&w=1766&h=994&dpr=2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 md:bg-opacity-70"></div>
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex-1 px-4 md:px-8 lg:pl-[267px] lg:pr-0 py-8 md:py-16 lg:py-[153px] text-center lg:text-left">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal] mb-4 md:mb-6">
                WEDDING IDENTITY
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-sm md:text-base tracking-[0] leading-[normal] max-w-full lg:max-w-[510px] mx-auto lg:mx-0">
                <span className="text-white">
                  Diamo forma e stile al vostro giorno speciale: dalla creazione
                  delle partecipazioni, ai menù, ai segnaposto, fino alla
                  realizzazione di tableau mariage personalizzati.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-white text-lg md:text-xl">
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
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-0 mt-8 lg:mt-0">
              <img
                className="w-full max-w-[400px] lg:max-w-[581px] h-auto lg:h-[727px] object-cover rounded-lg lg:rounded-none"
                alt="Pexels jeremy wong"
                src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>

        {/* Video Production */}
        <div id="video-cinematografica" className="relative bg-white w-full min-h-[60vh] md:min-h-[80vh] lg:h-[987px] flex items-center justify-center py-8 md:py-16 lg:py-0">
          {/* Gray rectangle background */}
          <div className="absolute bg-[#777777] w-[90%] md:w-[80%] lg:w-[1194px] h-[60%] md:h-[70%] lg:h-[672px] left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[100px]"></div>
          
          {/* Frame 1 overlaid on gray rectangle */}
          <div className="relative z-10 px-4 md:px-8 lg:ml-[-500px]">
            <img
              className="w-full max-w-[400px] md:max-w-[500px] lg:w-[546px] h-auto lg:h-[390px]"
              alt="Frame 1"
              src="/frame-1.svg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[24px] tracking-[0] leading-[normal] mb-3 md:mb-4 text-center">
                PRODUZIONE VIDEO CINEMATOGRAFICA
              </h3>
              <div className="[font-family:'Baskervville',Helvetica] font-normal text-sm md:text-base tracking-[0] leading-[normal] text-center max-w-[300px] md:max-w-[400px]">
                <span className="italic text-white">
                  Realizzeremo per voi un vero film d'amore.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Montserrat',Helvetica] text-white text-xs md:text-sm">
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
        <div id="servizio-fotografico" className="bg-white w-full px-4 md:px-8 lg:px-[267px] py-12 md:py-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 lg:mt-[140px] text-center lg:text-left">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal] mb-4 md:mb-6">
                SERVIZIO FOTOGRAFICO
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-[normal] max-w-full lg:max-w-[510px] mx-auto lg:mx-0">
                <span>
                  Il nostro team di due fotografi professionisti sarà al vostro
                  fianco per tutta la giornata, dalla preparazione agli ultimi
                  balli.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-lg md:text-xl">
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
            <div className="flex-1 mt-8 lg:mt-0">
              {/* Component 1 - Carousel */}
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full">
        {/* Photo Booth */}
        <div id="foto-booth" className="relative min-h-[80vh] lg:h-[1088px]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Pexels olena dm"
            src="https://images.pexels.com/photos/29601972/pexels-photo-29601972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="absolute inset-0 flex flex-col lg:flex-row gap-8 lg:gap-[30px] items-center lg:items-start">
            <div className="flex-1 px-4 md:px-8 lg:pl-[303px] pt-8 md:pt-16 lg:pt-[365px] text-center lg:text-left">
              <div className="relative inline-block">
                <img
                  className="w-full max-w-[400px] md:max-w-[500px] lg:w-[546px] h-auto lg:h-[357px]"
                  alt="Frame"
                  src="/frame-4.svg"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-8 lg:p-12">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[24px] tracking-[0] leading-[normal] mb-3 md:mb-4 text-center">
                    FOTO BOOTH PERSONALIZZATO
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs md:text-sm tracking-[0] leading-[normal] text-center max-w-[280px] md:max-w-[350px] lg:max-w-[400px]">
                    <span className="text-white">
                      Dal termine della cerimonia, realizzeremo scatti fotografici
                      di gruppo e individuali che verranno stampati, allestiremo una
                      zona dove gli invitati potranno divertirsi a cercare la loro
                      foto.
                      <br />
                    </span>
                    <br />
                    <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm md:text-base">
                      Ogni foto sarà inserita in un cartoncino personalizzato con il
                      logo e i dettagli grafici del vostro evento, diventando un
                      ricordo immediato e speciale della giornata.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center lg:justify-start px-4 md:px-8 lg:px-0 mt-8 lg:mt-0">
              <img
                className="w-full max-w-[400px] lg:max-w-[581px] h-auto lg:h-[727px] object-cover rounded-lg lg:rounded-none"
                alt="Pexels anastasia nagibina"
                src="https://images.pexels.com/photos/27687900/pexels-photo-27687900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>

        {/* Video Trailer */}
        <div id="video-trailer" className="relative bg-white w-full min-h-[60vh] md:min-h-[80vh] lg:h-[1088px] flex items-center justify-center py-8 md:py-16 lg:py-0">
          {/* Gray rectangle background */}
          <div className="absolute bg-[#777777] w-[90%] md:w-[80%] lg:w-[1194px] h-[60%] md:h-[70%] lg:h-[672px] left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[100px]"></div>
          
          <div className="relative z-10 px-4 md:px-8 lg:ml-[-560px]">
            <img
             className="w-full max-w-[400px] md:max-w-[500px] lg:w-[546px] h-auto lg:h-[390px] mx-auto lg:mx-0 lg:ml-[50px]"
              alt="Frame 3"
              src="/frame-3.svg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 z-10">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[24px] tracking-[0] leading-[normal] mb-3 md:mb-4 text-center">
                VIDEO TRAILER SUL MOMENTO
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs md:text-sm tracking-[0] leading-[normal] text-center max-w-[280px] md:max-w-[350px] lg:max-w-[400px]">
                <span className="text-white">
                  Uno dei nostri operatori sarà incaricato di riprendere i momenti più belli della giornata e di montare in tempo reale un video trailer emozionale che verrà proiettato direttamente durante la serata, prima del taglio della torta.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm md:text-base">
                  Un regalo indimenticabile per voi e per i vostri ospiti.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Drone Service */}
        <div id="operatore-drone" className="relative min-h-[70vh] lg:h-[995px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Pexels masoodaslami"
            src="https://images.pexels.com/photos/18980082/pexels-photo-18980082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ filter: 'grayscale(100%)', transform: 'scale(1.1) translateX(-50px)', transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center">
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:ml-[177px]">
              <div className="text-center max-w-[500px] lg:max-w-[600px] px-4 md:px-8">
                <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal] mb-4 md:mb-6 max-w-full lg:max-w-[506px] mx-auto lg:mx-0">
                  OPERATORE DRONE
                </h3>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-sm md:text-base tracking-[0] leading-[normal]">
                  <span className="text-white">
                    Per chi vuole dare un tocco ancora più spettacolare al proprio
                    film matrimoniale, offriamo riprese aeree professionali con
                    drone.
                    <br />
                  </span>
                  <br />
                  <span className="[font-family:'Baskervville',Helvetica] italic text-white text-lg md:text-xl">
                    Dall'uscita della cerimonia fino al taglio della torta,
                    realizzeremo immagini dall'alto mozzafiato che arricchiranno
                    il racconto della vostra giornata.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pr-[267px] mt-8 lg:mt-0">
              <img
                className="w-full max-w-[300px] md:max-w-[350px] lg:w-[408px] h-auto lg:h-[511px] object-cover rounded-lg lg:rounded-none"
                alt="Pexels ufuk akyuz"
                src="https://images.pexels.com/photos/14480061/pexels-photo-14480061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Wedding */}
      <section id="social-media-wedding" className="bg-white w-full px-4 md:px-8 lg:px-[267px] py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
        <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal] mb-4 md:mb-6 max-w-full lg:max-w-[506px] mx-auto lg:mx-0">
          SOCIAL MEDIA WEDDING
        </h3>
        <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-[normal] max-w-full lg:max-w-[510px] mb-8 md:mb-12 lg:mb-16 mx-auto lg:mx-0">
          <span>
            Un nostro operatore si occuperà di gestire in diretta i vostri
            social, pubblicando post, storie e contenuti esclusivi sul profilo
            Instagram o Facebook di uno degli sposi.
            <br />
          </span>
          <br />
          <span className="[font-family:'Baskervville',Helvetica] italic text-lg md:text-xl">
            Sarà un vero Wedding Reporter Social, permettendo ad amici e parenti
            lontani di vivere ogni momento del vostro matrimonio in tempo reale.
            <br />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[473px] object-cover rounded-lg"
            alt="Pexels seljansalim"
            src="https://images.pexels.com/photos/26646531/pexels-photo-26646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[473px] object-cover rounded-lg"
            alt="Pexels yusuf rendecioglu"
            src="https://images.pexels.com/photos/17966674/pexels-photo-17966674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[473px] object-cover rounded-lg md:col-span-2 lg:col-span-1"
            alt="Pexels andreas schnabl"
            src="https://images.pexels.com/photos/19125401/pexels-photo-19125401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        </div>
      </section>

      {/* Contact Sections */}
      <section className="bg-white w-full px-4 md:px-8 lg:px-[267px] py-12 md:py-16 space-y-12 md:space-y-16">
        <div className="max-w-7xl mx-auto">
        <div>
          {/* Dove siamo section with pexels-esrannuur image */}
          <div id="dove-siamo" className="flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
            <div className="flex-1 lg:mt-[50px]">
              <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-[normal] mb-6 md:mb-8">
                Dove siamo
              </h2>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal]">
                Via Pietro Mascagni 15C,
                <br />
                Pieve a Nievole
                <br />
                PT (51100)
              </div>
            </div>
            <div className="flex-1">
              <img
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[582px] h-auto lg:h-[727px] object-cover rounded-lg mx-auto"
                alt="Pexels esrannuur location"
                src="https://images.pexels.com/photos/29613060/pexels-photo-29613060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="lg:-mt-[350px] text-center lg:text-left">
            <h2 id="contattaci" className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-[normal] mb-6 md:mb-8">
              Contattaci
            </h2>
            <div className="space-y-1 md:space-y-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal]">
                www.wederview.com
              </div>
              <a
                className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal] block hover:text-[#C8B094] transition-colors duration-200"
                href="mailto:info@wederview.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@wederview.com
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal]">
                +39 366 718 4741
              </div>
            </div>
          </div>
          <div className="space-y-1 md:space-y-2 mt-6 md:mt-8 lg:mt-[50px] text-center lg:text-left">
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal]">
              Assistenza:
            </div>
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal]">
              +39 351 663 8114
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#c8b094] w-full px-4 md:px-8 lg:px-[267px] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
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
          <div className="text-center md:text-left">
            <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] mb-3 md:mb-4">
              WEDERVIEW
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal]">
                di Cobrynet
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Pietro+Mascagni+15C,+Pieve+a+Nievole,+51018+PT,+Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
              >
                Via Pietro Mascagni 15C
                <br />
                Pieve a Nievole, 51018 (PT)
              </a>
              <a
                href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/privacy-policy-per-siti-web-o-e-commerce-it"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
              >
                Informativa Privacy
              </a>
              <a
                href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/cookie-policy-it"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
              >
                Informativa Cookies
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal]">
                P.IVA: 02100690474
              </div>
            </div>
          </div>

          {/* I NOSTRI SERVIZI Column */}
          <div className="text-center md:text-left">
            <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] mb-3 md:mb-4">
              I NOSTRI SERVIZI
            </div>
            <div className="space-y-1 md:space-y-2">
              {footerServices.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block"
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
          <div className="text-center md:text-left">
            <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] mb-3 md:mb-4">
              CONTATTACI
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal]">
                www.wederview.com
              </div>
              <a
                className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal] block hover:text-[#C8B094] transition-colors duration-200"
                href="mailto:info@wederview.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@wederview.com
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal]">
                +39 366 718 4741
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal]">
                Assistenza: +39 351 663 8114
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12 lg:mt-20 space-y-2 md:space-y-4">
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-[normal]">
            2025 COBRYNET. All rights reserved.
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-light text-white text-xs tracking-[0] leading-[normal] px-4">
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
  );
};
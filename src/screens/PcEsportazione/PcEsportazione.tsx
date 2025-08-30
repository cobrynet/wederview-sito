import React from "react";
import { Carousel } from "../../components/Carousel";

const navigationItems = [
  { label: "CHI SIAMO", href: "#chi-siamo" },
  { label: "I NOSTRI SERVIZI", href: "#nostri-servizi" },
  { label: "DOVE SIAMO", href: "#dove-siamo" },
  { label: "CONTATTACI", href: "#contattaci" },
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
    <div className="main-container">
      <div className="content-wrapper">
        <div className="bg-white w-full min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 bg-[#C8B094] bg-opacity-50 backdrop-blur-md transition-all duration-300">
              <a 
                href="#"
                className="w-[80px] h-[35px] sm:w-[100px] sm:h-[44px] md:w-[114px] md:h-[50px] lg:w-[120px] lg:h-[52px] bg-[url(/vector.svg)] bg-cover bg-center cursor-pointer hover:brightness-0 hover:invert transition-all duration-200 mb-4 sm:mb-0 flex-shrink-0"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              <nav className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="[font-family:'Baskervville',Helvetica] font-normal text-black text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer text-center whitespace-nowrap"
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
            
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[947px] bg-[#777777] overflow-hidden">
              <div className="absolute inset-0 bg-[url(/frame-4.svg)] bg-cover bg-center"></div>
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 xl:right-16 2xl:right-[450px] lg:transform-none text-center lg:text-left w-full lg:w-auto px-4 lg:px-0">
                <h1 className="[font-family:'Ballet',Helvetica] font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] tracking-[0] leading-[normal] max-w-full">
                  View your forever.
                </h1>
              </div>
            </section>

            {/* About Section */}
            <section id="chi-siamo" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                <div className="flex-1 lg:max-w-md xl:max-w-lg">
                  <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] tracking-[0] leading-[normal] mb-6 lg:mb-8 text-center lg:text-left">
                    Chi siamo
                  </h2>
                </div>
                <div className="flex-1 lg:max-w-2xl">
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed text-center lg:text-left">
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
                    <span className="[font-family:'Baskervville',Helvetica] italic text-lg sm:text-xl md:text-2xl">
                      Lavoriamo con precisione, senso estetico e attenzione al
                      dettaglio, per garantire un risultato di qualità e perfettamente
                      armonico.
                    </span>
                  </div>
                </div>
              </div>

              {/* Image below Chi siamo section */}
              <div className="mt-12 lg:mt-16 xl:mt-20 flex justify-center relative w-full">
                <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1194px]">
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    alt="Pexels mlkbnl"
                    src="https://images.pexels.com/photos/10074149/pexels-photo-10074149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                  <img
                    className="absolute top-0 left-0 w-auto h-auto max-w-[20%] sm:max-w-[15%] md:max-w-[10%]"
                    alt="Livello 1"
                    src="/Livello_1.png"
                    style={{ marginTop: '-15px', marginLeft: '32px' }}
                  />
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="nostri-servizi" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-12 sm:py-16 md:py-20">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-12 lg:mb-16">
                <div className="flex-1 lg:max-w-md xl:max-w-lg">
                  <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] tracking-[0] leading-[normal] mb-6 lg:mb-8 text-center lg:text-left">
                    I nostri servizi
                  </h2>
                </div>
                <div className="flex-1 lg:max-w-2xl space-y-3 sm:space-y-4 md:space-y-5">
                  {servicesList.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-black rounded-md flex-shrink-0" />
                      <span className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-[normal] text-center lg:text-left">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Services with Images */}
            <section className="relative w-full">
              {/* Wedding Identity */}
              <div id="wedding-identity" className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[994px] bg-cover overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Pexels vikkirillova 9551812"
                  src="https://images.pexels.com/photos/9551812/pexels-photo-9551812.jpeg?auto=compress&cs=tinysrgb&w=1766&h=994&dpr=2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute inset-0 flex flex-col lg:flex-row">
                  <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[153px] flex items-center justify-center lg:justify-start">
                    <div className="text-center lg:text-left max-w-2xl lg:max-w-none">
                      <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] tracking-[0] leading-[normal] mb-4 lg:mb-6">
                        WEDDING IDENTITY
                      </h3>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed max-w-[510px] mx-auto lg:mx-0">
                        <span className="text-white">
                          Diamo forma e stile al vostro giorno speciale: dalla creazione
                          delle partecipazioni, ai menù, ai segnaposto, fino alla
                          realizzazione di tableau mariage personalizzati.
                          <br />
                        </span>
                        <br />
                        <span className="[font-family:'Baskervville',Helvetica] italic text-white text-lg sm:text-xl md:text-2xl">
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
                  </div>
                  <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                    <img
                      className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:w-[581px] h-auto xl:h-[727px] object-cover rounded-lg lg:rounded-none shadow-2xl lg:shadow-none"
                      alt="Pexels jeremy wong"
                      src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                </div>
              </div>

              {/* Video Production */}
              <div id="video-cinematografica" className="relative w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0 min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                {/* Gray rectangle background - hidden on mobile */}
                <div className="absolute bg-[#777777] hidden xl:block w-[90%] max-w-[1194px] h-[60%] max-h-[672px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                  <div className="bg-[#777777] xl:bg-transparent p-6 sm:p-8 md:p-10 lg:p-12 xl:p-0 rounded-lg xl:rounded-none">
                    <img
                      className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:w-[546px] h-auto xl:h-[390px] mx-auto"
                      alt="Frame 3"
                      src="/frame-3.svg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 z-10">
                      <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[24px] tracking-[0] leading-[normal] mb-3 lg:mb-4 text-center">
                        PRODUZIONE VIDEO CINEMATOGRAFICA
                      </h3>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs tracking-[0] leading-relaxed text-center max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
                        <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm sm:text-base md:text-lg lg:text-base xl:text-sm">
                          Realizzeremo per voi un vero film d'amore.
                          <br />
                        </span>
                        <br />
                        <span className="text-white">
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
              </div>

              {/* Photography Service */}
              <div id="servizio-fotografico" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                  <div className="flex-1 order-2 lg:order-1 lg:max-w-2xl">
                    <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] tracking-[0] leading-[normal] mb-4 lg:mb-6 text-center lg:text-left">
                      SERVIZIO FOTOGRAFICO
                    </h3>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed max-w-[510px] mx-auto lg:mx-0 text-center lg:text-left">
                      <span>
                        Il nostro team di due fotografi professionisti sarà al vostro
                        fianco per tutta la giornata, dalla preparazione agli ultimi
                        balli.
                        <br />
                      </span>
                      <br />
                      <span className="[font-family:'Baskervville',Helvetica] italic text-lg sm:text-xl md:text-2xl">
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
                  <div className="flex-1 order-1 lg:order-2 flex justify-center">
                    <Carousel />
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Services */}
            <section className="relative w-full">
              {/* Photo Booth */}
              <div id="foto-booth" className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] xl:h-[1088px] overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Pexels olena dm"
                  src="https://images.pexels.com/photos/29601972/pexels-photo-29601972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="absolute inset-0 flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-[30px] p-4 sm:p-6 md:p-8">
                  <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-8 xl:pl-16 2xl:pl-[303px] lg:pt-8 xl:pt-16 2xl:pt-[365px]">
                    <div className="relative inline-block">
                      <div className="bg-[#777777] lg:bg-transparent p-6 sm:p-8 md:p-10 lg:p-0 rounded-lg lg:rounded-none">
                        <img
                          className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:w-[546px] h-auto xl:h-[357px] mx-auto lg:mx-0"
                          alt="Frame"
                          src="/frame-4.svg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                          <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] tracking-[0] leading-[normal] mb-3 lg:mb-4 text-center">
                            FOTO BOOTH PERSONALIZZATO
                          </h3>
                          <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs tracking-[0] leading-relaxed text-center max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px]">
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
                  </div>
                  <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-16 2xl:pr-[267px]">
                    <img
                      className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:w-[581px] h-auto xl:h-[727px] object-cover rounded-lg lg:rounded-none shadow-2xl lg:shadow-none"
                      alt="Pexels anastasia nagibina"
                      src="https://images.pexels.com/photos/27687900/pexels-photo-27687900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                </div>
              </div>

              {/* Video Trailer */}
              <div id="video-trailer" className="relative w-full bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0 min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                {/* Gray rectangle background - hidden on mobile */}
                <div className="absolute bg-[#777777] hidden xl:block w-[90%] max-w-[1194px] h-[60%] max-h-[672px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                  <div className="bg-[#777777] xl:bg-transparent p-6 sm:p-8 md:p-10 lg:p-12 xl:p-0 rounded-lg xl:rounded-none">
                    <img
                      className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:w-[546px] h-auto xl:h-[390px] mx-auto"
                      alt="Frame 3"
                      src="/frame-3.svg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-8 z-10">
                      <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] tracking-[0] leading-[normal] mb-3 lg:mb-4 text-center">
                        VIDEO TRAILER SUL MOMENTO
                      </h3>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs tracking-[0] leading-relaxed text-center max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px]">
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
              </div>

              {/* Drone Service */}
              <div id="operatore-drone" className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[995px] overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Pexels masoodaslami"
                  src="https://images.pexels.com/photos/18980082/pexels-photo-18980082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  style={{ filter: 'grayscale(100%)', transform: 'scale(1.1)', transformOrigin: 'center' }}
                />
                <div className="absolute inset-0 flex flex-col lg:flex-row items-center p-4 sm:p-6 md:p-8">
                  <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-8 xl:pl-16 2xl:pl-[177px] lg:pt-8 xl:pt-16 2xl:pt-[365px]">
                    <div className="text-center lg:text-left max-w-[500px] lg:max-w-[600px] px-4 sm:px-6 md:px-8 lg:px-0">
                      <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] tracking-[0] leading-[normal] mb-4 lg:mb-6 max-w-[506px] mx-auto lg:mx-0">
                        OPERATORE DRONE
                      </h3>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed">
                        <span className="text-white">
                          Per chi vuole dare un tocco ancora più spettacolare al proprio
                          film matrimoniale, offriamo riprese aeree professionali con
                          drone.
                          <br />
                        </span>
                        <br />
                        <span className="[font-family:'Baskervville',Helvetica] italic text-white text-lg sm:text-xl md:text-2xl">
                          Dall'uscita della cerimonia fino al taglio della torta,
                          realizzeremo immagini dall'alto mozzafiato che arricchiranno
                          il racconto della vostra giornata.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-16 2xl:pr-[267px] mt-8 lg:mt-0">
                    <img
                      className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:w-[408px] h-auto xl:h-[511px] object-cover rounded-lg lg:rounded-none shadow-2xl lg:shadow-none"
                      alt="Pexels ufuk akyuz"
                      src="https://images.pexels.com/photos/14480061/pexels-photo-14480061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Social Media Wedding */}
            <section id="social-media-wedding" className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-12 sm:py-16 md:py-20">
              <div className="max-w-7xl mx-auto">
                <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] tracking-[0] leading-[normal] mb-4 lg:mb-6 max-w-[506px] mx-auto lg:mx-0 text-center lg:text-left">
                SOCIAL MEDIA WEDDING
                </h3>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed max-w-[510px] mx-auto lg:mx-0 mb-12 lg:mb-16 text-center lg:text-left">
                <span>
                  Un nostro operatore si occuperà di gestire in diretta i vostri
                  social, pubblicando post, storie e contenuti esclusivi sul profilo
                  Instagram o Facebook di uno degli sposi.
                  <br />
                </span>
                <br />
                <span className="[font-family:'Baskervville',Helvetica] italic text-lg sm:text-xl md:text-2xl">
                  Sarà un vero Wedding Reporter Social, permettendo ad amici e parenti
                  lontani di vivere ogni momento del vostro matrimonio in tempo reale.
                  <br />
                </span>
              </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 lg:mb-16">
                <img
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[473px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  alt="Pexels seljansalim"
                  src="https://images.pexels.com/photos/26646531/pexels-photo-26646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <img
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[473px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  alt="Pexels yusuf rendecioglu"
                  src="https://images.pexels.com/photos/17966674/pexels-photo-17966674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <img
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[473px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1"
                  alt="Pexels andreas schnabl"
                  src="https://images.pexels.com/photos/19125401/pexels-photo-19125401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              </div>
            </section>

            {/* Contact Sections */}
            <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-12 sm:py-16 md:py-20 space-y-12 lg:space-y-16">
              <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
              <div>
                {/* Dove siamo section */}
                  <div id="dove-siamo" className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start">
                    <div className="flex-1 order-2 lg:order-1 text-center lg:text-left lg:max-w-2xl">
                      <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] tracking-[0] leading-[normal] mb-6 lg:mb-8">
                      Dove siamo
                      </h2>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-relaxed">
                      Via Pietro Mascagni 15C,
                      <br />
                      Pieve a Nievole
                      <br />
                      PT (51100)
                      </div>
                    </div>
                    <div className="flex-1 order-1 lg:order-2 flex justify-center">
                      <img
                        className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:w-[582px] h-auto xl:h-[727px] object-cover rounded-lg shadow-lg mx-auto lg:mx-0"
                        alt="Pexels esrannuur location"
                        src="https://images.pexels.com/photos/29613060/pexels-photo-29613060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      />
                    </div>
                  </div>
              </div>

              <div>
                  <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
                    <h2 id="contattaci" className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] tracking-[0] leading-[normal] mb-6 lg:mb-8">
                    Contattaci
                    </h2>
                    <div className="space-y-2 md:space-y-3">
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-[normal]">
                      www.wederview.com
                      </div>
                    <a
                        className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-[normal] block hover:text-[#C8B094] transition-colors duration-200"
                      href="mailto:info@wederview.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      info@wederview.com
                    </a>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-[normal]">
                      +39 366 718 4741
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3 mt-8 lg:mt-12 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-[normal]">
                    Assistenza:
                    </div>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-[normal]">
                    +39 351 663 8114
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-[#c8b094] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[267px] py-8 sm:py-12 md:py-16 lg:py-20">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {/* Logo Column */}
                <div className="flex flex-col items-center sm:items-start">
                  <a 
                    href="#"
                    className="w-[80px] h-[35px] sm:w-[100px] sm:h-[44px] md:w-[114px] md:h-[50px] lg:w-[120px] lg:h-[52px] bg-[url(/vector.svg)] bg-cover bg-center mb-6 lg:mb-8 cursor-pointer hover:brightness-0 hover:invert transition-all duration-200 flex-shrink-0"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </div>

                {/* WEDERVIEW Column */}
                <div className="text-center sm:text-left">
                  <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl tracking-[0] leading-[normal] mb-3 lg:mb-4">
                    WEDERVIEW
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      di Cobrynet
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Via+Pietro+Mascagni+15C,+Pieve+a+Nievole,+51018+PT,+Italy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal] hover:text-white hover:opacity-80 transition-all duration-200 cursor-pointer block"
                    >
                      Via Pietro Mascagni 15C
                      <br />
                      Pieve a Nievole, 51018 (PT)
                    </a>
                    <a
                      href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/privacy-policy-per-siti-web-o-e-commerce-it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal] hover:text-white hover:opacity-80 transition-all duration-200 cursor-pointer block"
                    >
                      Informativa Privacy
                    </a>
                    <a
                      href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/cookie-policy-it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal] hover:text-white hover:opacity-80 transition-all duration-200 cursor-pointer block"
                    >
                      Informativa Cookies
                    </a>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      P.IVA: 02100690474
                    </div>
                  </div>
                </div>

                {/* I NOSTRI SERVIZI Column */}
                <div className="text-center sm:text-left">
                  <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl tracking-[0] leading-[normal] mb-3 lg:mb-4">
                    I NOSTRI SERVIZI
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    {footerServices.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal] hover:text-white hover:opacity-80 transition-all duration-200 cursor-pointer block"
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
                <div className="text-center sm:text-left">
                  <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl tracking-[0] leading-[normal] mb-3 lg:mb-4">
                    CONTATTACI
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      www.wederview.com
                    </div>
                    <a
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal] block hover:text-white hover:opacity-80 transition-all duration-200"
                      href="mailto:info@wederview.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      info@wederview.com
                    </a>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      +39 366 718 4741
                    </div>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                      Assistenza: +39 351 663 8114
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 space-y-2 md:space-y-4 max-w-4xl mx-auto">
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-[normal]">
                  2025 COBRYNET. All rights reserved.
                </div>
                <div className="[font-family:'Montserrat',Helvetica] font-light text-white text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] px-4 sm:px-6">
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
    </div>
  );
};
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
    <div className="min-h-screen-safe bg-white w-full overflow-x-hidden">
      {/* Header - Fully Responsive */}
      <header className="sticky top-0 z-50 w-full bg-[#C8B094] bg-opacity-90 backdrop-blur-md transition-all duration-300">
        <div className="responsive-container">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 gap-4 sm:gap-0">
            <a 
              href="#"
              className="w-[100px] h-[44px] sm:w-[114px] sm:h-[50px] bg-[url(/vector.svg)] bg-contain bg-no-repeat bg-center cursor-pointer hover:opacity-80 transition-opacity duration-200 touch-target"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-12 text-center">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Baskervville',Helvetica] font-normal text-black text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2 cursor-pointer touch-target px-2 py-1"
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
          </div>
        </div>
      </header>
      
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen-safe bg-[#777777] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/frame-4.svg)] bg-cover bg-center">
        </div>
        <div className="absolute inset-0 flex items-end justify-center sm:justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:pr-[20%] 2xl:pr-[25%]">
          <h1 className="[font-family:'Ballet',Helvetica] font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0] leading-[normal] text-center sm:text-right">
            View your forever.
          </h1>
        </div>
      </section>

      {/* About Section - Chi Siamo */}
      <section id="chi-siamo" className="w-full section-spacing">
        <div className="responsive-container">
          <div className="responsive-grid-2 items-start">
            <div className="order-2 md:order-1">
              <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black heading-secondary tracking-[0] leading-[normal] mb-6 md:mb-8 text-center md:text-left">
                Chi siamo
              </h2>
            </div>
            <div className="order-1 md:order-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-relaxed text-center md:text-left">
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
          <div className="mt-8 md:mt-12 lg:mt-16 relative">
            <img
              className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover rounded-lg"
              alt="Pexels mlkbnl"
              src="https://images.pexels.com/photos/10074149/pexels-photo-10074149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <img
              className="absolute top-0 left-0 w-auto h-auto hidden xl:block opacity-80"
              alt="Livello 1"
              src="/Livello_1.png"
              style={{ marginTop: '-25px', marginLeft: '76px' }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="nostri-servizi" className="w-full section-spacing">
        <div className="responsive-container">
          <div className="responsive-grid-2 gap-8 lg:gap-16">
            <div className="order-2 md:order-1">
              <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black heading-secondary tracking-[0] leading-[normal] mb-6 md:mb-8 text-center md:text-left">
                I nostri servizi
              </h2>
            </div>
            <div className="order-1 md:order-2 space-y-3 sm:space-y-4 md:space-y-6">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-md flex-shrink-0" />
                  <span className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-[normal] text-center md:text-left">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Identity Service */}
      <section id="wedding-identity" className="relative min-h-screen-safe overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Pexels vikkirillova 9551812"
          src="https://images.pexels.com/photos/9551812/pexels-photo-9551812.jpeg?auto=compress&cs=tinysrgb&w=1766&h=994&dpr=2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-60"></div>
        <div className="relative z-10 min-h-screen-safe flex flex-col lg:flex-row">
          <div className="flex-1 responsive-container py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white heading-tertiary tracking-[0] leading-[normal] mb-4 sm:mb-6">
                WEDDING IDENTITY
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal body-text tracking-[0] leading-relaxed">
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
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
            <img
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-cover rounded-lg"
              alt="Pexels jeremy wong"
              src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Video Production Service */}
      <section id="video-cinematografica" className="relative min-h-screen-safe overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Video production background"
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-60"></div>
        {/* Background gray rectangle - responsive */}
        <div className="absolute bg-[#777777] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[60%] sm:h-[65%] md:h-[70%] lg:h-[75%] left-1/2 transform -translate-x-1/2 z-10"></div>
        
        <div className="relative z-20 responsive-container py-8 sm:py-12 md:py-16">
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="relative max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
                <img
                  className="w-full h-auto"
                  alt="Frame 3"
                  src="/frame-3.svg"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0] leading-[normal] mb-3 sm:mb-4 text-center">
                    PRODUZIONE VIDEO CINEMATOGRAFICA
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal small-text tracking-[0] leading-relaxed text-center max-w-[90%]">
                    <span className="italic text-white text-base sm:text-lg md:text-xl">
                      Due operatori professionisti vi accompagneranno dalla preparazione fino al gran finale della giornata.
                      <br />
                    </span>
                    <br />
                    <span className="[font-family:'Montserrat',Helvetica] text-white text-xs sm:text-sm md:text-base">
                      Cogliendo ogni emozione, ogni sorriso e ogni dettaglio con uno stile narrativo cinematografico. Ogni ripresa sarà studiata per raccontare con eleganza e autenticità la vostra storia.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Service */}
      <section id="servizio-fotografico" className="bg-white w-full section-spacing">
        <div className="responsive-container">
          <div className="responsive-grid-2 items-center gap-8 lg:gap-16">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black heading-tertiary tracking-[0] leading-[normal] mb-4 sm:mb-6">
                SERVIZIO FOTOGRAFICO
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
            <div className="order-1 lg:order-2">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Booth Service */}
      <section id="foto-booth" className="relative min-h-screen-safe overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Pexels olena dm"
          src="https://images.pexels.com/photos/29601972/pexels-photo-29601972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="relative z-10 min-h-screen-safe flex flex-col lg:flex-row">
          <div className="flex-1 responsive-container py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="relative inline-block w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0">
                <img
                  className="w-full h-auto"
                  alt="Frame"
                  src="/frame-4.svg"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
                  <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0] leading-[normal] mb-3 sm:mb-4 text-center">
                    FOTO BOOTH PERSONALIZZATO
                  </h3>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal small-text tracking-[0] leading-relaxed text-center max-w-[90%]">
                    <span className="text-white">
                      Dal termine della cerimonia, realizzeremo scatti fotografici
                      di gruppo e individuali che verranno stampati, allestiremo una
                      zona dove gli invitati potranno divertirsi a cercare la loro
                      foto.
                      <br />
                    </span>
                    <br />
                    <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm sm:text-base md:text-lg">
                      Ogni foto sarà inserita in un cartoncino personalizzato con il
                      logo e i dettagli grafici del vostro evento, diventando un
                      ricordo immediato e speciale della giornata.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
            <img
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-cover rounded-lg"
              alt="Pexels anastasia nagibina"
              src="https://images.pexels.com/photos/27687900/pexels-photo-27687900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Video Trailer Service */}
      <section id="video-trailer" className="relative bg-white min-h-screen-safe flex items-center justify-center overflow-hidden">
        {/* Background gray rectangle - responsive */}
        <div className="absolute bg-[#777777] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[60%] sm:h-[65%] md:h-[70%] lg:h-[75%] left-1/2 transform -translate-x-1/2"></div>
        
        <div className="relative z-10 responsive-container py-8 sm:py-12 md:py-16">
          <div className="flex justify-center">
            <div className="relative max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
              <img
                className="w-full h-auto"
                alt="Frame 3"
                src="/frame-3.svg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0] leading-[normal] mb-3 sm:mb-4 text-center">
                  VIDEO TRAILER SUL MOMENTO
                </h3>
                <div className="[font-family:'Montserrat',Helvetica] font-normal small-text tracking-[0] leading-relaxed text-center max-w-[90%]">
                  <span className="text-white">
                    Uno dei nostri operatori sarà incaricato di riprendere i momenti più belli della giornata e di montare in tempo reale un video trailer emozionale che verrà proiettato direttamente durante la serata, prima del taglio della torta.
                    <br />
                  </span>
                  <br />
                  <span className="[font-family:'Baskervville',Helvetica] italic text-white text-sm sm:text-base md:text-lg">
                    Un regalo indimenticabile per voi e per i vostri ospiti.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drone Service */}
      <section id="operatore-drone" className="relative min-h-screen-safe overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Pexels masoodaslami"
          src="https://images.pexels.com/photos/18980082/pexels-photo-18980082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          style={{ filter: 'grayscale(100%)', transform: 'scale(1.05)' }}
        />
        <div className="relative z-10 min-h-screen-safe flex flex-col lg:flex-row">
          <div className="flex-1 responsive-container py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-white heading-tertiary tracking-[0] leading-[normal] mb-4 sm:mb-6">
                OPERATORE DRONE
              </h3>
              <div className="[font-family:'Montserrat',Helvetica] font-normal body-text tracking-[0] leading-relaxed">
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
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto object-cover rounded-lg"
              alt="Pexels ufuk akyuz"
              src="https://images.pexels.com/photos/14480061/pexels-photo-14480061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Social Media Wedding */}
      <section id="social-media-wedding" className="bg-white w-full section-spacing">
        <div className="responsive-container">
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <h3 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black heading-tertiary tracking-[0] leading-[normal] mb-4 sm:mb-6">
              SOCIAL MEDIA WEDDING
            </h3>
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-relaxed mb-8 sm:mb-12 md:mb-16">
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

            <div className="responsive-grid-3 mb-8 sm:mb-12 md:mb-16">
              <img
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
                alt="Pexels seljansalim"
                src="https://images.pexels.com/photos/26646531/pexels-photo-26646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
                alt="Pexels yusuf rendecioglu"
                src="https://images.pexels.com/photos/17966674/pexels-photo-17966674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg sm:col-span-2 lg:col-span-1"
                alt="Pexels andreas schnabl"
                src="https://images.pexels.com/photos/19125401/pexels-photo-19125401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sections */}
      <section className="bg-white w-full section-spacing">
        <div className="responsive-container space-y-12 sm:space-y-16 md:space-y-20">
          {/* Dove siamo */}
          <div id="dove-siamo" className="responsive-grid-2 items-center gap-8 lg:gap-16">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black heading-secondary tracking-[0] leading-[normal] mb-6 sm:mb-8">
                Dove siamo
              </h2>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-relaxed">
                Via Pietro Mascagni 15C,
                <br />
                Pieve a Nievole
                <br />
                PT (51100)
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover rounded-lg mx-auto"
                alt="Pexels esrannuur location"
                src="https://images.pexels.com/photos/29613060/pexels-photo-29613060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>

          {/* Contattaci */}
          <div id="contattaci" className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h2 className="[font-family:'Baskervville_SC',Helvetica] font-normal text-black heading-secondary tracking-[0] leading-[normal] mb-6 sm:mb-8">
              Contattaci
            </h2>
            <div className="space-y-2 sm:space-y-3">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-[normal]">
                www.wederview.com
              </div>
              <a
                className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-[normal] block hover:text-[#C8B094] transition-colors duration-200 touch-target"
                href="mailto:info@wederview.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@wederview.com
              </a>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-[normal]">
                +39 366 718 4741
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-6 sm:mt-8">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-[normal]">
                Assistenza:
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black body-text tracking-[0] leading-[normal]">
                +39 351 663 8114
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#c8b094] w-full section-spacing">
        <div className="responsive-container">
          <div className="responsive-grid-4 gap-8 md:gap-12">
            {/* Logo Column */}
            <div className="flex flex-col items-center md:items-start">
              <a 
                href="#"
                className="w-[100px] h-[44px] sm:w-[114px] sm:h-[50px] bg-[url(/vector.svg)] bg-contain bg-no-repeat bg-center mb-6 sm:mb-8 cursor-pointer hover:brightness-0 hover:invert transition-all duration-200 touch-target"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            {/* WEDERVIEW Column */}
            <div className="text-center md:text-left">
              <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-[normal] mb-3 sm:mb-4">
                WEDERVIEW
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal]">
                  di Cobrynet
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Via+Pietro+Mascagni+15C,+Pieve+a+Nievole,+51018+PT,+Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block touch-target"
                >
                  Via Pietro Mascagni 15C
                  <br />
                  Pieve a Nievole, 51018 (PT)
                </a>
                <a
                  href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/privacy-policy-per-siti-web-o-e-commerce-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block touch-target"
                >
                  Informativa Privacy
                </a>
                <a
                  href="https://app.legalblink.it/api/documents/67d49eda117e0a002358d716/cookie-policy-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block touch-target"
                >
                  Informativa Cookies
                </a>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal]">
                  P.IVA: 02100690474
                </div>
              </div>
            </div>

            {/* I NOSTRI SERVIZI Column */}
            <div className="text-center md:text-left">
              <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-[normal] mb-3 sm:mb-4">
                I NOSTRI SERVIZI
              </div>
              <div className="space-y-1 sm:space-y-2">
                {footerServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal] hover:text-[#C8B094] transition-colors duration-200 cursor-pointer block touch-target"
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
              <div className="[font-family:'Baskervville',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-[normal] mb-3 sm:mb-4">
                CONTATTACI
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal]">
                  www.wederview.com
                </div>
                <a
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal] block hover:text-[#C8B094] transition-colors duration-200 touch-target"
                  href="mailto:info@wederview.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  info@wederview.com
                </a>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal]">
                  +39 366 718 4741
                </div>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal]">
                  Assistenza: +39 351 663 8114
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 space-y-2 sm:space-y-4">
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-white small-text tracking-[0] leading-[normal]">
              2025 COBRYNET. All rights reserved.
            </div>
            <div className="[font-family:'Montserrat',Helvetica] font-light text-white text-xs sm:text-sm tracking-[0] leading-relaxed px-4 max-w-4xl mx-auto">
              Camera di Commercio Industria Artigianato e Agricoltura di
              PISTOIA-PRATO | Forma giuridica società in nome collettivo
              <br />
              <span className="block sm:inline">Socio Amministratore ORSINI NICCOLÒ | </span>Socio Amministratore
              PISCITELLI PATRIZIO
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
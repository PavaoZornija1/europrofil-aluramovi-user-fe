export const messages = {
  en: {
    //app\work-order-summary\[id]\components\workOrder\personsInCharge\page.jsx

    personInCharge: {
      issuedBy: "Order issued by:",
      createdBy: "Order created by:",
      controlledBy: "Order controlled by:",
    },
    //app\work-order-summary\[id]\components\pdf\pdf.jsx
    pdf: {
      basicSpec: "Basic specifications",
      ramType: "Ram type:",
      proccessing: "Processing:",
      filling: "Filling:",
      addProcc: "Additional proccessing:",
    },

    //app\work-order-summary\[id]\components\workOrder\customerData\notes\page.jsx

    notes: {
      noteTitle: "Additional note: ",
      note: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio exercitationem ab quos quasi consequuntur maxime eius, sequi neque earum sed nostrum debitis enim dolorum beatae iure unde sint reiciendis delectus. Ipsum cumque officia iure animi doloremque quasi hic aspernatur.",
    },

    //app\work-order-summary\[id]\components\workOrder\customerData\page.jsx

    customerData: {
      title: "Customer information",
      nameLabel: "Name: ",
      phoneLabel: "Phone: ",
      emailLabel: "Email: ",
      addressLabel: "Address: ",
      deliveryAddressLabel: "Delivery address: ",
      deliveryDateLabel: "Desired delivery date: ",
      orderNumberLabel: "Internal order number: ",
    },

    //app\work-order-summary\[id]\page.jsx

    workOrderMain: {
      workOrderTitle: "Work Order",
      purchaseTitle: "Purchase Order",
      printTitle: "Print",
      saveTitle: "Save",
    },
    //app\rams\page.jsx

    rams: {
      caution: "Note for users ",
      caution1Desc:
        "When making a front from the RAM 1002 A/N profile, when one of the front page sets RAM 1002 A/N profile with integrated handle, it is necessary to keep in mind that the mentioned profile can be place only the entire length of the page on which it is placed.",
      caution2Desc:
        "When making a front from RAM 1009 and 1010 aluminum profiles, it is possible to install only two hinges per one aluminum front!",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\sketch\components\handlesRenderer\page.jsx

    //app\rams\[id]\components\configurator\components\form\step2\components\orientations\page.jsx

    orientationsAndDimensions: {
      altText: "Image Alt Text",
      imageSrcPrefix: "/images/",
      nameLabel: "Name:",
      selectOrientationLabel: "Select Orientation",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\locks\page.jsx

    locks: {
      sectionTitle: "Locks",
      noLockOptionLabel: "No Lock Hole",
      drillLockHoleOptionLabel: "Drill Lock Hole",
      holeDiameterLabel: "Hole Diameter:",
      centerDistanceOfHoleLabel: "Center Distance from Outer Edge (mm):",
      setHoleToCenterLabel: "Set Hole to Center",
    },

    //app\rams\[id]\components\configurator\components\form\step2\components\lifting -system\page.jsx
    liftingSystem: {
      sectionTitle: "LIFTING SYSTEM",
      noLiftingSystemOptionLabel: "No Lifting System",
      yesLiftingSystemOptionLabel: "With Lifting System",
      positionLabel: "Position:",
      mechanismLabel: "Mechanism:",
      liftSupportLabel: "Lift Support",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\hinges\page.jsx
    hinges: {
      sectionTitle: "HINGES",
      noHoleOptionLabel: "No Handle Holes",
      drillHolesOptionLabel: "Drill Handle Holes",
      mountProfileOptionLabel: "Mount Handle Profile",
      positionLabel: "Position",
      holeDistanceLabel: "Hole Center Distance",
      profileLabel: "Profile",
      lengthLabel: "Length",
      startEdgeLabel: "Start Edge from Left Outer Edge",
      handleLabel: "Handle",
    },

    //app\rams\[id]\components\configurator\components\form\step2\components\handles\page.jsx

    handles: {
      sectionTitle: "HANDLES",
      noHoleOptionLabel: "No Handle Holes",
      drillHolesOptionLabel: "Drill Handle Holes",
      mountProfileOptionLabel: "Mount Handle Profile",
      positionLabel: "Position",
      holeDistanceLabel: "Hole Center Distance",
      profileLabel: "Profile",
      lengthLabel: "Length",
      startEdgeLabel: "Start Edge from Left Outer Edge",
      handleLabel: "Handle",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\frontsPreview\page.jsx

    frontsPreview: {
      addButtonLabel: "Add Front",
      copyButtonLabel: "Copy Front",
      deleteButtonLabel: "Delete Front",
      workOrderSummaryButtonLabel: "Work Order Summary",
      frontLabel: "Front",
    },

    // app\rams\[id]\components\configurator\components\form\step2\components\dimensions\page.jsx
    dimensions: {
      numberOfPiecesLabel: "Number of Pieces:",
      widthLabel: "Width:",
      heightLabel: "Height:",
    },

    treatments: {
      noFillLabel: "No Fill",
      additionalTreatmentLabel: "Additional Treatment",
      additionalTreatmentOptions: {
        noTreatment: "No Treatment",
        kpTreatment: "KP Treatment",
        wholeGlassTreatment: "Sanding Entire Glass Surface",
        glassTempering: "Glass Tempering",
        faceting5mm: "Beveling 5mm",
        faceting10mm: "Beveling 10mm",
        faceting15mm: "Beveling 15mm",
        protectiveFoil: "Protective Foil",
        decorativeFoil: "Decorative Foil",
        motiveFoil: "Motive Foil",
        sandyFoil: "Sandy Foil",
      },
    },
    accordion: {
      noFillLabel: "No Fill",
      additionalTreatmentLabel: "Additional Treatment",
      additionalTreatmentOptions: {
        none: "None",
        kpTreatment: "KP Treatment",
        sandingEntireGlassSurface: "Sanding Entire Glass Surface",
        glassTempering: "Glass Tempering",
        beveling5mm: "Beveling 5mm",
        beveling10mm: "Beveling 10mm",
        beveling15mm: "Beveling 15mm",
        protectiveFilm: "Protective Film",
        decorativeFilm: "Decorative Film",
        customFilm: "Custom Film",
        sandblastFilm: "Sandblast Film",
      },
    },
    //app\rams\[id]\page.jsx
    ramType: {
      title: "RAM Type",
    },
    //app\protectedRoute\page.jsx

    protectedRoute: {
      unauthorizedRedirect:
        "You are not authorized to access this page. Redirecting to the login page...",
    },
    //app\previous-orders\page.jsx
    previousOrders: {
      pageTitle: "Your Previous Orders",
      pageDescription: "Here you can find all your previous orders.",
      orderTitle: (orderId) => `Order ${orderId}`,
      preparingStatus: "Preparing",
      sentStatus: "Sent for Execution",
      mechDes: "RAM 1009, 2000mm x 1600mm, 1 piece",
    },
    //app\navbar\page.jsx
    navbar: {
      userWelcome: "Welcome",
      menuButton: "Menu",
      newOrder: "New Order",
      oldOrder: "Old Orders",
      logoutButton: "Logout",
    },
    //app\login\page.jsx

    login: {
      title: "EUROPROFIL",
      usernameLabel: "Username:",
      passwordLabel: "Password:",
      forgotPassword: "Forgot your password?",
      loginButton: "Login",
      invalidUsername: "Invalid username",
      invalidPassword: "Invalid password",
    },
    //app\footer\page.jsx

    ftr: {
      rightsReserved: "All rights reserved.",
      designDevelopment: "Design and development:",
    },
    //app\context\AuthContext.jsx

    auth: {
      login: "Login",
      logout: "Logout",
      unknownAction: "Unknown action",
    },

    //app\features\ram\ramData.js
    ramData: {
      frameType: "Frame Type",
      treatment: "Treatment",
      ralCode: "RAL Code",
      fill: "Fill",
      subFill: "Sub Fill",
      additionalFillTreatment: "Additional Fill Treatment",
      hinge: "Hinge",
      hingeQty: "Hinge Quantity",
      handleProfile: "Handle Profile",
      qty: "Quantity",
      width: "Width",
      height: "Height",
      orientation: "Orientation",
    },
  },
  bh: {
    //app\work-order-summary\[id]\components\workOrder\personsInCharge\page.jsx

    personInCharge: {
      issuedBy: "Nalog izdao: ",
      createdBy: "Nalog kreirao:",
      controlledBy: "Nalog kontrolirao:",
    },
    //app\work-order-summary\[id]\components\pdf\pdf.jsx
    pdf: {
      basicSpec: "Osnovne specifikacije",
      ramType: "Tim rama:",
      proccessing: "Obrada:",
      filling: "Ispuna:",
      addProcc: "Dodatna obrada:",
    },
    //app\work-order-summary\[id]\components\workOrder\customerData\notes\page.jsx

    notes: {
      noteTitle: "Dodatna napomena: ",
      note: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio exercitationem ab quos quasi consequuntur maxime eius, sequi neque earum sed nostrum debitis enim dolorum beatae iure unde sint reiciendis delectus. Ipsum cumque officia iure animi doloremque quasi hic aspernatur.",
    },
    //app\work-order-summary\[id]\components\workOrder\customerData\page.jsx

    customerData: {
      title: "Podaci o kupcu",
      nameLabel: "Ime: ",
      phoneLabel: "Telefon: ",
      emailLabel: "Email: ",
      addressLabel: "Adresa: ",
      deliveryAddressLabel: "Adresa za dostavu:",
      deliveryDateLabel: "Željeni datum dostave:",
      orderNumberLabel: "Interni broj narudžbe:",
    },
    //app\work-order-summary\[id]\page.jsx

    workOrderMain: {
      workOrderTitle: "Radni Nalog",
      purchaseTitle: "Narudžbe",
      printTitle: "Printaj",
      saveTitle: "Spremi",
    },
    rams: {
      caution: "Napomena za korisnike",
      caution1Desc:
        "Prilikom izrade fronta od RAM 1002 A/N profila kada se na jednu od stranica fronta postavlja RAM 1002 A/N profil sa integrisanom ručicom potrebno je imati u vidu da pomenuti profil može da s postavi samo celom dužinom stranice na koju se postavlja.",
      caution2Desc:
        "Prilikom izrade fronta od RAM 1009 i 1010 aluminijumskih profila, moguće je postaviti samo dve šarke po jednom aluminijumskom frontu!",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\sketch\components\handlesRenderer\page.jsx

    //app\rams\[id]\components\configurator\components\form\step2\components\orientations\page.jsx
    orientationsAndDimensions: {
      altText: "Alternativni tekst slike",
      imageSrcPrefix: "/slike/",
      nameLabel: "Naziv:",
      selectOrientationLabel: "Izaberite orijentaciju",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\locks\page.jsx

    locks: {
      sectionTitle: "Bravice",
      noLockOptionLabel: "Bez rupe za bravicu",
      drillLockHoleOptionLabel: "Bušenje rupe za bravicu",
      holeDiameterLabel: "Prečnik rupe:",
      centerDistanceOfHoleLabel: "Centar rupe od vanjske ivice (mm):",
      setHoleToCenterLabel: "Postavi rupu za bravicu na centar",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\lifting -system\page.jsx
    liftingSystem: {
      sectionTitle: "PODIZNI SISTEM",
      noLiftingSystemOptionLabel: "Bez podiznog sistema",
      yesLiftingSystemOptionLabel: "Sa podiznim sistemom",
      positionLabel: "Položaj:",
      mechanismLabel: "Mehanizam:",
      liftSupportLabel: "Podrška za podizanje",
    },

    //app\rams\[id]\components\configurator\components\form\step2\components\hinges\page.jsx
    hinges: {
      sectionTitle: "ŠARKE",
      noHoleOptionLabel: "Bez rupa za ručicu",
      drillHolesOptionLabel: "Bušenje rupa za ručicu",
      mountProfileOptionLabel: "Postavljanje profila ručice",
      positionLabel: "Položaj",
      holeDistanceLabel: "Osno rastojanje rupa",
      profileLabel: "Profil",
      lengthLabel: "Dužina",
      startEdgeLabel: "Početak u odnosu na lijevu spoljnu ivicu",
      handleLabel: "Ručica",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\handles\page.jsx
    handles: {
      sectionTitle: "RUČICE",
      noHoleOptionLabel: "Bez rupa za ručicu",
      drillHolesOptionLabel: "Bušenje rupa za ručicu",
      mountProfileOptionLabel: "Postavljanja profila ručice",
      positionLabel: "Položaj",
      holeDistanceLabel: "Osno rastojanje rupa",
      profileLabel: "Profil",
      lengthLabel: "Dužina",
      startEdgeLabel: "Početak u odnosu na lijevu spoljnu ivicu",
      handleLabel: "Ručica",
    },

    //app\rams\[id]\components\configurator\components\form\step2\components\frontsPreview\page.jsx

    frontsPreview: {
      addButtonLabel: "Dodajte front",
      copyButtonLabel: "Kopirajte front",
      deleteButtonLabel: "Obrišite front",
      workOrderSummaryButtonLabel: "Pregled naloga",
      frontLabel: "Front",
    },

    // app\rams\[id]\components\configurator\components\form\step2\components\dimensions\page.jsx

    dimensions: {
      numberOfPiecesLabel: "Broj komada:",
      widthLabel: "Širina:",
      heightLabel: "Visina:",
    },

    treatments: {
      noFillLabel: "Bez Ispune",
      additionalTreatmentLabel: "Dodatna Obrada",
      additionalTreatmentOptions: {
        noTreatment: "Bez Dodatne Obrade",
        kpTreatment: "KP Obrada",
        wholeGlassTreatment: "Brušenje Cijele Staklene Površine",
        glassTempering: "Kaljenje Stakla",
        faceting5mm: "Fazetiranje 5mm",
        faceting10mm: "Fazetiranje 10mm",
        faceting15mm: "Fazetiranje 15mm",
        protectiveFoil: "Lijepljenje Zaštitne Folije",
        decorativeFoil: "Lijepljenje Dekorativne Folije",
        motiveFoil: "Lijepljenje Folije Po Motivu",
        sandyFoil: "Lijepljenje Peskirne Folije",
      },
    },

    accordion: {
      noFillLabel: "Bez Ispune",
      additionalTreatmentLabel: "Dodatna Obrada",
      additionalTreatmentOptions: {
        none: "Bez Dodatne Obrade",
        kpTreatment: "KP Obrada",
        sandingEntireGlassSurface: "Brušenje Cele Staklene Površine",
        glassTempering: "Kaljenje Stakla",
        beveling5mm: "Fazetiranje 5mm",
        beveling10mm: "Fazetiranje 10mm",
        beveling15mm: "Fazetiranje 15mm",
        protectiveFilm: "Lijepljenje Zaštitne Folije",
        decorativeFilm: "Lijepljenje Dekorativne Folije",
        customFilm: "Lijepljenje Folije Po Motivu",
        sandblastFilm: "Lijepljenje Peskirne Folije",
      },
    },

    //app\rams\[id]\page.jsx

    ramType: {
      title: "Vrsta RAM-a",
    },
    //app\protectedRoute\page.jsx
    protectedRoute: {
      unauthorizedRedirect:
        "Niste ovlašteni za pristup ovoj stranici. Preusmjeravanje na stranicu za prijavu...",
    },
    //app\previous-orders\page.jsx
    previousOrders: {
      pageTitle: "Vaše Prethodne Narudžbe",
      pageDescription: "Ovdje možete pronaći sve Vaše prethodne narudžbe.",
      orderTitle: (orderId) => `Narudžba ${orderId}`,
      preparingStatus: "U pripremi",
      sentStatus: "Poslano na izvršenje",
      mechDes: "RAM 1009, 2000mm x 1600mm, 1 komad",
    },
    //app\navbar\page.jsx

    navbar: {
      userWelcome: "Dobrodošli",
      menuButton: "Meni",
      newOrder: "Nova Narudžba",
      oldOrder: "Stare Narudžbe",
      logoutButton: "Odjavi se",
    },
    //app\login\page.jsx
    login: {
      title: "EUROPROFIL",
      usernameLabel: "Korisničko ime:",
      passwordLabel: "Lozinka:",
      forgotPassword: "Zaboravili ste svoju lozinku?",
      loginButton: "Prijavi se",
      invalidUsername: "Nevažeće korisničko ime",
      invalidPassword: "Nevažeća lozinka",
    },
    //app\footer\page.jsx

    ftr: {
      rightsReserved: "Sva prava zadržana.",
      designDevelopment: "Dizajn i razvoj:",
    },

    //app\context\AuthContext.jsx

    auth: {
      login: "Prijava",
      logout: "Odjava",
      unknownAction: "Nepoznata radnja",
    },

    //app\features\ram\ramData.js
    ramData: {
      frameType: "Tip Okvira",
      treatment: "Tretman",
      ralCode: "RAL Kod",
      fill: "Punjenje",
      subFill: "Podpunjenje",
      additionalFillTreatment: "Dodatni tretman punjenja",
      hinge: "Šarka",
      hingeQty: "Količina šarki",
      handleProfile: "Profil ručke",
      qty: "Količina",
      width: "Širina",
      height: "Visina",
      orientation: "Orijentacija",
    },
  },

  sr: {
    //app\work-order-summary\[id]\components\workOrder\personsInCharge\page.jsx

    personInCharge: {
      issuedBy: "Nalog izdao: ",
      createdBy: "Nalog napravio:",
      controlledBy: "Nalog kontrolisao:",
    },
    //app\work-order-summary\[id]\components\pdf\pdf.jsx
    pdf: {
      basicSpec: "Osnovne specifikacije",
      ramType: "Tim rama:",
      proccessing: "Obrada:",
      filling: "Ispuna:",
      addProcc: "Dodatna obrada:",
    },
    //app\work-order-summary\[id]\components\workOrder\customerData\notes\page.jsx

    notes: {
      noteTitle: "Dodatna napomena: ",
      note: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio exercitationem ab quos quasi consequuntur maxime eius, sequi neque earum sed nostrum debitis enim dolorum beatae iure unde sint reiciendis delectus. Ipsum cumque officia iure animi doloremque quasi hic aspernatur.",
    },
    //app\work-order-summary\[id]\components\workOrder\customerData\page.jsx

    customerData: {
      title: "Podaci o kupcu",
      nameLabel: "Ime: ",
      phoneLabel: "Telefon: ",
      emailLabel: "Email: ",
      addressLabel: "Adresa: ",
      deliveryAddressLabel: "Adresa za dostavu:",
      deliveryDateLabel: "Željeni datum dostave:",
      orderNumberLabel: "Interni broj narudžbine:",
    },
    //app\work-order-summary\[id]\page.jsx

    workOrderMain: {
      workOrderTitle: "Radni Nalog",
      purchaseTitle: "Porudžbenica",
      printTitle: "Štampaj",
      saveTitle: "Sačuvaj",
    },
    rams: {
      caution: "Napomena za korisnike",
      caution1Desc:
        "Prilikom izrade fronta od RAM 1002 A/N profila kada se na jednu od stranica fronta postavlja RAM 1002 A/N profil sa integrisanom ručicom potrebno je imati u vidu da pomenuti profil može da s postavi samo celom dužinom stranice na koju se postavlja.",
      caution2Desc:
        "Prilikom izrade fronta od RAM 1009 i 1010 aluminijumskih profila, moguće je postaviti samo dve šarke po jednom aluminijumskom frontu!",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\orientations\page.jsx

    orientationsAndDimensions: {
      altText: "Alternativni tekst slike",
      imageSrcPrefix: "/slike/",
      nameLabel: "Ime:",
      selectOrientationLabel: "Izaberite orijentaciju",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\locks\page.jsx

    locks: {
      sectionTitle: "Brave",
      noLockOptionLabel: "Bez rupe za bravu",
      drillLockHoleOptionLabel: "Izbuši rupu za bravu",
      holeDiameterLabel: "Prečnik rupe:",
      centerDistanceOfHoleLabel:
        "Udaljenost centra rupe od spoljnog ruba (mm):",
      setHoleToCenterLabel: "Postavi rupu na centar",
    },

    //app\rams\[id]\components\configurator\components\form\step2\components\lifting -system\page.jsx
    liftingSystem: {
      sectionTitle: "SISTEM PODIZANJA",
      noLiftingSystemOptionLabel: "Bez sistema podizanja",
      yesLiftingSystemOptionLabel: "Sa sistemom podizanja",
      positionLabel: "Pozicija:",
      mechanismLabel: "Mehanizam:",
      liftSupportLabel: "Podrška za podizanje",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\hinges\page.jsx
    hinges: {
      sectionTitle: "ŠARKE",
      noHoleOptionLabel: "Bez rupa za ručke",
      drillHolesOptionLabel: "Izbuši rupe za ručke",
      mountProfileOptionLabel: "Montiraj profil za ručku",
      positionLabel: "Pozicija",
      holeDistanceLabel: "Razdaljina između centara rupa",
      profileLabel: "Profil",
      lengthLabel: "Dužina",
      startEdgeLabel: "Početni rub sa leve spoljne ivice",
      handleLabel: "Ručka",
    },

    //app\rams\[id]\components\configurator\components\form\step2\components\handles\page.jsx
    handles: {
      sectionTitle: "RUČKE",
      noHoleOptionLabel: "Bez rupa za ručke",
      drillHolesOptionLabel: "Izbuši rupe za ručke",
      mountProfileOptionLabel: "Montiraj profil za ručku",
      positionLabel: "Pozicija",
      holeDistanceLabel: "Razdaljina između centara rupa",
      profileLabel: "Profil",
      lengthLabel: "Dužina",
      startEdgeLabel: "Početni rub sa leve spoljne ivice",
      handleLabel: "Ručka",
    },
    //app\rams\[id]\components\configurator\components\form\step2\components\frontsPreview\page.jsx

    frontsPreview: {
      addButtonLabel: "Dodaj front",
      copyButtonLabel: "Kopiraj front",
      deleteButtonLabel: "Obriši front",
      workOrderSummaryButtonLabel: "Sažetak radnog naloga",
      frontLabel: "Fronta",
    },

    // app\rams\[id]\components\configurator\components\form\step2\components\dimensions\page.jsx
    dimensions: {
      numberOfPiecesLabel: "Broj komada:",
      widthLabel: "Širina:",
      heightLabel: "Visina:",
    },

    treatments: {
      noFillLabel: "Bez punjenja",
      additionalTreatmentLabel: "Dodatna obrada",
      additionalTreatmentOptions: {
        noTreatment: "Bez obrade",
        kpTreatment: "KP obrada",
        wholeGlassTreatment: "Brušenje celokupne površine stakla",
        glassTempering: "Kaljenje stakla",
        faceting5mm: "Brušenje ivica 5mm",
        faceting10mm: "Brušenje ivica 10mm",
        faceting15mm: "Brušenje ivica 15mm",
        protectiveFoil: "Zaštitna folija",
        decorativeFoil: "Dekorativna folija",
        motiveFoil: "Folija sa motivom",
        sandyFoil: "Folija sa peskarenim efektom",
      },
    },
    accordion: {
      noFillLabel: "Bez punjenja",
      additionalTreatmentLabel: "Dodatna obrada",
      additionalTreatmentOptions: {
        none: "Nema",
        kpTreatment: "KP obrada",
        sandingEntireGlassSurface: "Brušenje celokupne površine stakla",
        glassTempering: "Kaljenje stakla",
        beveling5mm: "Brušenje ivica 5mm",
        beveling10mm: "Brušenje ivica 10mm",
        beveling15mm: "Brušenje ivica 15mm",
        protectiveFilm: "Zaštitna folija",
        decorativeFilm: "Dekorativna folija",
        customFilm: "Prilagođena folija",
        sandblastFilm: "Peskirna folija",
      },
    },
    //app\rams\[id]\page.jsx
    ramType: {
      title: "Tip RAM-a",
    },
    //app\protectedRoute\page.jsx

    protectedRoute: {
      unauthorizedRedirect:
        "Nemate ovlašćenje za pristup ovoj stranici. Preusmeravanje na stranicu za prijavu...",
    },
    //app\previous-orders\page.jsx
    previousOrders: {
      pageTitle: "Vaše prethodne narudžbine",
      pageDescription: "Ovde možete pronaći sve vaše prethodne narudžbine.",
      orderTitle: (orderId) => `Narudžbina ${orderId}`,
      preparingStatus: "Priprema",
      sentStatus: "Poslato na izvršenje",
      mechDes: "RAM 1009, 2000mm x 1600mm, 1 komad",
    },
    //app\navbar\page.jsx
    navbar: {
      userWelcome: "Dobrodošli",
      menuButton: "Meni",
      newOrder: "Nova narudžbina",
      oldOrder: "Stare narudžbine",
      logoutButton: "Odjava",
    },
    //app\login\page.jsx

    login: {
      title: "EUROPROFIL",
      usernameLabel: "Korisničko ime:",
      passwordLabel: "Šifra:",
      forgotPassword: "Zaboravili ste šifru?",
      loginButton: "Prijava",
      invalidUsername: "Nevažeće korisničko ime",
      invalidPassword: "Nevažeća šifra",
    },
    //app\footer\page.jsx

    ftr: {
      rightsReserved: "Sva prava zadržana.",
      designDevelopment: "Dizajn i razvoj:",
    },
    //app\context\AuthContext.jsx

    auth: {
      login: "Prijava",
      logout: "Odjava",
      unknownAction: "Nepoznata radnja",
    },

    //app\features\ram\ramData.js
    ramData: {
      frameType: "Tip okvira",
      treatment: "Obrada",
      ralCode: "RAL kod",
      fill: "Punjenje",
      subFill: "Podpunjenje",
      additionalFillTreatment: "Dodatna obrada punjenja",
      hinge: "Šarka",
      hingeQty: "Količina šarki",
      handleProfile: "Profil ručke",
      qty: "Količina",
      width: "Širina",
      height: "Visina",
      orientation: "Orijentacija",
    },
  },
};

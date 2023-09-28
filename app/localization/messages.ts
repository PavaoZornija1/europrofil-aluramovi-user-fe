export const messages = {
  en: {
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

    treatments: {
        noFillLabel: "Bez Ispune",
        additionalTreatmentLabel: "Dodatna Obrada",
        additionalTreatmentOptions: {
          noTreatment: "Bez Dodatne Obrade",
          kpTreatment: "KP Obrada",
          wholeGlassTreatment: "Brušenje Cele Staklene Površine",
          glassTempering: "Kaljenje Stakla",
          faceting5mm: "Fazetiranje 5mm",
          faceting10mm: "Fazetiranje 10mm",
          faceting15mm: "Fazetiranje 15mm",
          protectiveFoil: "Lepljenje Zaštitne Folije",
          decorativeFoil: "Lepljenje Dekorativne Folije",
          motiveFoil: "Lepljenje Folije Po Motivu",
          sandyFoil: "Lepljenje Peskirne Folije",
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
          protectiveFilm: "Lepljenje Zaštitne Folije",
          decorativeFilm: "Lepljenje Dekorativne Folije",
          customFilm: "Lepljenje Folije Po Motivu",
          sandblastFilm: "Lepljenje Peskirne Folije",
        },
    },

   

    //app\rams\[id]\page.jsx
    
    bh: {
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
      pageTitle: "Vaše Prethodne Porudžbine",
      pageDescription: "Ovdje možete pronaći sve Vaše prethodne porudžbine.",
      orderTitle: (orderId) => `Porudžbina ${orderId}`,
      preparingStatus: "U pripremi",
      sentStatus: "Poslato na izvršenje",
    },
    //app\navbar\page.jsx

    navbar: {
      userWelcome: "Dobrodošli",
      menuButton: "Meni",
      newOrder: "Nova Porudžbina",
      oldOrder: "Stare Porudžbine",
      logoutButton: "Odjavi se",
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

    footer: {
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
  }}};
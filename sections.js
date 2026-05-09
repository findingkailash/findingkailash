// sections.jsx — Finding Kailash landing page sections
// Components exported to window at the end.

// ============================================================
// NAV
// ============================================================
const Nav = ({
  onInquire
}) => {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${stuck ? "is-stuck" : ""}`,
    "data-screen-label": "Nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav__row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav__logo"
  }, /*#__PURE__*/React.createElement(OmPeakIcon, {
    size: 28,
    color: "var(--ink)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 20,
      letterSpacing: "-0.01em"
    }
  }, "Finding Kailash"), /*#__PURE__*/React.createElement("span", {
    className: "devanagari",
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginLeft: 4
    }
  }, "\u0916\u094B\u091C")), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#journeys"
  }, "Journeys"), /*#__PURE__*/React.createElement("a", {
    href: "#itinerary"
  }, "Itinerary"), /*#__PURE__*/React.createElement("a", {
    href: "#tiers"
  }, "Packages"), /*#__PURE__*/React.createElement("a", {
    href: "#gallery"
  }, "Gallery"), /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--alpen btn--small",
    onClick: onInquire
  }, "Plan my yatra ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 15
    }
  }))));
};

// ============================================================
// HERO
// ============================================================
const Hero = ({
  onInquire,
  headline
}) => {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__sky"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__sun"
  }), /*#__PURE__*/React.createElement(HeroMountains, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1
    }
  }, "\uD83D\uDD49"), /*#__PURE__*/React.createElement("span", null, "Expeditions \xB7 Kumaon Himalaya")), /*#__PURE__*/React.createElement("div", {
    className: "devanagari",
    style: {
      fontSize: 22,
      color: "var(--ink-2)",
      marginBottom: 14,
      fontWeight: 500
    }
  }, "\u092F\u093E\u0924\u094D\u0930\u093E \u0928\u0939\u0940\u0902, \u090F\u0915 \u0905\u0928\u0941\u092D\u0935 \u0939\u0948\u2026 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alpen)"
    }
  }, "\uD83D\uDD31")), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(44px, 6.4vw, 88px)",
      margin: "0 0 20px",
      color: "var(--ink)"
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--ink-soft)",
      maxWidth: 540,
      marginBottom: 32,
      lineHeight: 1.55
    }
  }, "Soul-stirring expeditions to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "Adi Kailash & Om Parvat"), " \u2014 and across four more sacred valleys of Uttarakhand. Witness the sacred Om carved by nature itself."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--alpen",
    onClick: onInquire
  }, "Plan my journey ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+918126980408",
    className: "btn btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      fontSize: 15
    }
  }), " +91 81269 80408")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric__num"
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "metric__label",
    style: {
      color: "var(--ink)"
    }
  }, "Sacred trails")), /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric__num"
  }, "8\u201311"), /*#__PURE__*/React.createElement("div", {
    className: "metric__label",
    style: {
      color: "var(--ink)"
    }
  }, "Day yatras")), /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric__num"
  }, "5,945", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: "var(--ink-2)"
    }
  }, "m")), /*#__PURE__*/React.createElement("div", {
    className: "metric__label",
    style: {
      color: "var(--ink)"
    }
  }, "Adi Kailash peak")), /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric__num"
  }, "12", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: "var(--ink-2)"
    }
  }, "max")), /*#__PURE__*/React.createElement("div", {
    className: "metric__label",
    style: {
      color: "var(--ink)"
    }
  }, "Per group")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "hero__img-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: PHOTOS.hero,
    alt: "Om Parvat at sunrise",
    lift: true,
    style: {
      width: "100%",
      aspectRatio: "4/5",
      borderRadius: 22,
      boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "card card--glass hero__chip-bottom",
    style: {
      position: "absolute",
      left: -28,
      bottom: 38,
      padding: "14px 18px",
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      gap: 12,
      maxWidth: 250
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: "linear-gradient(135deg, #f2c879, #e0773c)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: 18
    }
  }, "\uD83D\uDD49"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, "The Om of nature"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, "Snow-carved on Om Parvat, 6,191m"))), /*#__PURE__*/React.createElement("div", {
    className: "card hero__chip-top",
    style: {
      position: "absolute",
      right: -22,
      top: 28,
      padding: "10px 14px",
      fontSize: 12.5,
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-leaf",
    style: {
      fontSize: 14,
      color: "var(--pine)"
    }
  }), "Small-group \xB7 permit-included")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "topo",
    style: {
      marginBottom: 18,
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.2px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__dest-strip",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 12,
      fontSize: 12.5,
      background: "rgba(10, 29, 49, 0.42)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderRadius: 12,
      padding: "16px 20px",
      border: "1px solid rgba(255,255,255,0.10)"
    }
  }, [["01", "Adi Kailash & Om Parvat", "Vyas Valley"], ["02", "Darma Valley", "Panchachuli base"], ["03", "Munsiyari", "Khaliya · Birthi"], ["04", "Manaskhand Circuit", "Jageshwar · Patal Bhuvaneshwar"], ["05", "Johar Valley", "Milam · Martoli"]].map(([n, name, sub]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--alpen)",
      fontSize: 11
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ffffff",
      fontWeight: 600,
      fontSize: 13.5
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.60)"
    }
  }, sub)))))));
};

// ============================================================
// JOURNEYS — 5 destinations
// ============================================================
const DESTINATIONS = [{
  id: "adikailash",
  no: "01",
  featured: true,
  name: "Adi Kailash & Om Parvat",
  hindi: "आदि कैलाश एवं ॐ पर्वत",
  region: "Vyas Valley · Pithoragarh",
  days: "8 days",
  altitude: "5,945 m",
  grade: "Moderate",
  blurb: "The pilgrimage at the heart of everything we do. Stand before the snow-carved ॐ of Om Parvat, circle the sapphire Parvati Kund, and feel the Himalaya breathe back at you.",
  badge: "Flagship"
}, {
  id: "darma",
  no: "02",
  name: "Darma Valley",
  hindi: "दारमा घाटी",
  region: "Panchachuli base · Dharchula",
  days: "6 days",
  altitude: "4,150 m",
  grade: "Easy–Moderate",
  blurb: "Walk under the five-peaked Panchachuli through villages of stone and slate — Dantu, Dugtu, Bidang. Crisp dawns, alpine pasture, and the cleanest silence in Kumaon."
}, {
  id: "munsiyari",
  no: "03",
  name: "Munsiyari",
  hindi: "मुनस्यारी",
  region: "Khaliya Top · Birthi Falls",
  days: "5 days",
  altitude: "3,500 m",
  grade: "Easy",
  blurb: "The little Kashmir of Kumaon. Sunrise on Panchachuli from Khaliya Top, oak-rhododendron forest trails, and the slow rhythm of a hill town that hasn't lost itself."
}, {
  id: "manaskhand",
  no: "04",
  name: "Manaskhand Circuit",
  hindi: "मानसखंड परिक्रमा",
  region: "Jageshwar · Patal Bhuvaneshwar",
  days: "7 days",
  altitude: "2,400 m",
  grade: "Easy",
  blurb: "A temple-circuit journey through the Manaskhand of the Skanda Purana — Jageshwar's deodar groves, the cave of Patal Bhuvaneshwar, Chitai, Kasar Devi, Bagnath."
}, {
  id: "johar",
  no: "05",
  name: "Johar Valley",
  hindi: "जोहार घाटी",
  region: "Milam · Martoli",
  days: "11 days",
  altitude: "3,870 m",
  grade: "Moderate–Hard",
  blurb: "An old trade route to the abandoned Bhotia village of Milam, beside the glacier that births the Goriganga. The longest, most remote of our trails — for those who want the quiet."
}];
const Journeys = ({
  onInquire
}) => {
  const featured = DESTINATIONS.find(d => d.featured);
  const others = DESTINATIONS.filter(d => !d.featured);
  return /*#__PURE__*/React.createElement("section", {
    className: "section bg-snow",
    id: "journeys",
    "data-screen-label": "Journeys"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "The trails"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(32px, 4vw, 52px)",
      margin: 0
    }
  }, "Five sacred trails.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alpen-deep)"
    }
  }, "One unforgettable yatra."))), /*#__PURE__*/React.createElement("p", {
    className: "text-muted",
    style: {
      maxWidth: 380,
      fontSize: 15,
      lineHeight: 1.65
    }
  }, "We run small expeditions across five corners of the Kumaon Himalaya. Adi Kailash & Om Parvat is our flagship \u2014 the rest are quieter, equally beautiful pieces of the same map."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "card featured-card",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      padding: 0,
      marginBottom: 24,
      overflow: "hidden",
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "featured-card__img",
    style: {
      position: "relative",
      minHeight: 440
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: PHOTOS[featured.id] || PHOTOS.hero,
    alt: featured.name,
    style: {
      width: "100%",
      height: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      padding: "5px 12px",
      background: "var(--alpen)",
      color: "white",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, featured.badge)), /*#__PURE__*/React.createElement("div", {
    className: "featured-card__body",
    style: {
      padding: "44px 44px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--alpen-deep)",
      fontSize: 12,
      marginBottom: 12
    }
  }, featured.no, " \xB7 ", featured.region), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 38,
      margin: "0 0 6px"
    }
  }, featured.name), /*#__PURE__*/React.createElement("div", {
    className: "devanagari",
    style: {
      color: "var(--ink-soft)",
      fontSize: 18,
      marginBottom: 22
    }
  }, featured.hindi), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 15.5,
      lineHeight: 1.7,
      margin: 0
    }
  }, featured.blurb)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
      padding: "20px 0",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "metric__label"
  }, "Duration"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginTop: 4
    }
  }, featured.days)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "metric__label"
  }, "Max altitude"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginTop: 4
    }
  }, featured.altitude)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "metric__label"
  }, "Grade"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginTop: 4
    }
  }, featured.grade))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#itinerary",
    className: "btn"
  }, "View itinerary ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: onInquire
  }, "Inquire")))))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, others.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 80,
    key: d.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: PHOTOS[d.id] || PHOTOS.g1,
    alt: d.name,
    style: {
      width: "100%",
      aspectRatio: "4/3"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: "flex",
      flexDirection: "column",
      flex: 1,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--alpen-deep)",
      fontSize: 11
    }
  }, d.no), /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      fontSize: 11,
      padding: "3px 9px"
    }
  }, d.grade)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    className: "devanagari",
    style: {
      color: "var(--ink-soft)",
      fontSize: 13.5,
      marginTop: 4
    }
  }, d.hindi)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 13.5,
      lineHeight: 1.6,
      margin: 0,
      flex: 1
    }
  }, d.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 12,
      borderTop: "1px solid var(--line)",
      fontSize: 12,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-calendar-days",
    style: {
      fontSize: 12
    }
  }), " ", d.days), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-mountain",
    style: {
      fontSize: 12
    }
  }), " ", d.altitude)))))))));
};

// ============================================================
// PICKUP & PRICING (3-tier table by departure city)
// ============================================================
const Pickup = ({
  onInquire
}) => {
  const tiers = [{
    city: "Pithoragarh",
    sub: "Closest base camp",
    tag: "Most affordable",
    color: "var(--pine)",
    from: "₹ 22,500",
    drive: "Same-day pickup, ~3 hrs to Dharchula",
    perks: ["Shortest drive day", "Best for return trekkers", "Lowest expedition cost"]
  }, {
    city: "Kathgodam",
    sub: "Rail-head pickup",
    tag: "Most popular",
    color: "var(--alpen)",
    from: "₹ 28,500",
    drive: "Train from Delhi (overnight), then 8 hrs road",
    perks: ["Easy from any metro by rail", "Stop at Almora / Chaukori", "Balanced cost & comfort"]
  }, {
    city: "Delhi",
    sub: "Door-to-door from the capital",
    tag: "Premium ease",
    color: "var(--sky-deep)",
    from: "₹ 34,500",
    drive: "Full transfer included from Delhi NCR",
    perks: ["No train booking to manage", "Flexible departure window", "Includes acclimatisation halt"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "pickup",
    "data-screen-label": "Pickup pricing",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Pickup & pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px, 3.4vw, 44px)",
      margin: 0,
      maxWidth: 760
    }
  }, "Three pickup points. Pick the one that suits your start."), /*#__PURE__*/React.createElement("p", {
    className: "text-muted",
    style: {
      maxWidth: 580,
      marginTop: 12
    }
  }, "Per-person, ex-pickup-point, twin-share. Final price varies by group size, season & package tier."))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(3, 1fr)"
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 100,
    key: t.city
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 28,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      borderTop: `4px solid ${t.color}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 28,
      fontWeight: 700
    }
  }, t.city), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 13,
      marginTop: 2
    }
  }, t.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: t.color,
      padding: "4px 10px",
      borderRadius: 999,
      background: "var(--cream)",
      border: "1px solid var(--line)"
    }
  }, t.tag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "metric__label"
  }, "Adi Kailash \xB7 from"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 38,
      fontWeight: 700,
      marginTop: 4
    }
  }, t.from, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginLeft: 6
    }
  }, "/ person"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      paddingBottom: 16,
      borderBottom: "1px solid var(--line)"
    }
  }, t.drive), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, t.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13.5,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      fontSize: 14
    }
  })), p))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: onInquire,
    style: {
      marginTop: "auto",
      justifyContent: "center"
    }
  }, "Choose ", t.city, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 14
    }
  }))))))));
};
Object.assign(window, {
  Nav,
  Hero,
  Journeys,
  Pickup,
  DESTINATIONS
});

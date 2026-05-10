// sections-3.jsx — additions inspired by competitor research:
// Marquee tape, numbered feature triptych, Temples of Kumaon circuit, final CTA.

// ============================================================
// MARQUEE — scrolling announcement tape
// ============================================================
const Marquee = ({
  items = [],
  variant = "ink"
}) => {
  // Repeat items so the loop is seamless
  const list = [...items, ...items, ...items];
  const bg = variant === "ink" ? "var(--ink)" : "var(--alpen)";
  const fg = variant === "ink" ? "var(--cream)" : "white";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: fg,
      overflow: "hidden",
      position: "relative",
      zIndex: 30,
      borderTop: variant === "ink" ? "1px solid rgba(250,246,238,0.08)" : "none",
      borderBottom: "1px solid rgba(0,0,0,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      whiteSpace: "nowrap",
      gap: 0,
      animation: "fk-marquee 40s linear infinite",
      padding: "11px 0",
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 22,
      padding: "0 22px"
    }
  }, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55,
      fontSize: 10
    }
  }, "\u25C6")))), /*#__PURE__*/React.createElement("style", null, `@keyframes fk-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`));
};

// ============================================================
// BEYOND — numbered feature triptych
// ============================================================
const BEYOND_FEATURES = [{
  no: "01",
  kicker: "Native wisdom",
  title: "Born of these mountains.",
  body: "Our trek leads grew up in the Vyas Valley — the same valley you'll be walking. They speak the local Bhotia dialect, know which guesthouse aunty makes the best aloo ke gutke, and which ridge clears first after a morning fog."
}, {
  no: "02",
  kicker: "Zero compromise",
  title: "Safety isn't a marketing word.",
  body: "Satellite phones on every vehicle. A medical-grade oxygen cylinder per group. ITBP-trained leads on every departure. And a buffer day built into every itinerary above 4,000 m. Quiet, boring safety — the only kind that actually works."
}, {
  no: "03",
  kicker: "Seamless flow",
  title: "We take the paperwork.",
  body: "Inner Line Permits. ITBP checkposts. SDM verifications. The administrative side of an Adi Kailash yatra is more complex than the trek itself — and we handle every page of it before you arrive."
}];
const Beyond = () => /*#__PURE__*/React.createElement("section", {
  className: "section bg-snow",
  id: "beyond",
  "data-screen-label": "Beyond",
  style: {
    paddingBottom: 32
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 48,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: 28
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 600
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 14
  }
}, "Beyond standard"), /*#__PURE__*/React.createElement("h2", {
  className: "display",
  style: {
    fontSize: "clamp(30px, 3.6vw, 48px)",
    margin: 0
  }
}, "Three things we refuse to", " ", /*#__PURE__*/React.createElement("em", {
  style: {
    fontStyle: "italic",
    color: "var(--alpen-deep)"
  }
}, "cut corners on"), ".")), /*#__PURE__*/React.createElement("p", {
  className: "text-muted",
  style: {
    maxWidth: 360,
    fontSize: 15,
    lineHeight: 1.65
  }
}, "The mountain doesn't negotiate. So neither do we \u2014 on local guides, on safety protocol, or on paperwork."))), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-3"
}, BEYOND_FEATURES.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
  delay: i * 100,
  key: f.no
}, /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 32,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  className: "beyond-no",
  style: {
    position: "absolute",
    top: 4,
    right: 8,
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: "clamp(80px, 20vw, 130px)",
    fontWeight: 800,
    lineHeight: 1,
    color: "var(--cream-2)",
    letterSpacing: "-0.04em",
    pointerEvents: "none",
    userSelect: "none"
  }
}, f.no), /*#__PURE__*/React.createElement("div", {
  className: "mono",
  style: {
    color: "var(--alpen-deep)",
    fontSize: 11.5,
    position: "relative"
  }
}, f.kicker), /*#__PURE__*/React.createElement("h3", {
  className: "display",
  style: {
    fontSize: 24,
    margin: 0,
    position: "relative",
    lineHeight: 1.2
  }
}, f.title), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "var(--ink-soft)",
    fontSize: 14.5,
    lineHeight: 1.65,
    margin: 0,
    position: "relative"
  }
}, f.body), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    paddingTop: 16,
    borderTop: "1px solid var(--line)",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#about",
  style: {
    color: "var(--ink)",
    fontSize: 13,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  }
}, "Learn our process", " ", /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-arrow-right",
  style: {
    fontSize: 13
  }
})))))))));

// ============================================================
// TEMPLES — sacred circuit
// ============================================================
const TEMPLES = [{
  id: "kainchi",
  name: "Kainchi Dham",
  sub: "Neem Karoli Baba",
  body: "The world-famous ashram of Maharaj-ji — the Baba whose blessings shaped Steve Jobs, Larry Page and a generation of seekers. A sanctuary of silence on our way north."
}, {
  id: "chitai",
  name: "Chitai Golu Devta",
  sub: "God of justice",
  body: "The temple of a thousand bells. Pilgrims tie a bell with a hand-written letter to god — a prayer for justice and a safe passage through the high Himalaya."
}, {
  id: "jageshwar",
  name: "Jageshwar Dham",
  sub: "Lord Shiva · 124 temples",
  body: "A complex of 124 ancient stone temples nestled in a dense deodar forest. Local belief places one of the original Jyotirlingas here — the air itself feels older."
}, {
  id: "patal",
  name: "Patal Bhuvaneshwar",
  sub: "The cave temple",
  body: "A limestone cave where, the Skanda Purana says, all 33 crore deities reside. A torch-lit descent into the earth's belly — included on our Manaskhand circuit."
}];
const Temples = () => /*#__PURE__*/React.createElement("section", {
  className: "section bg-dawn",
  id: "temples",
  "data-screen-label": "Temples"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 48,
    flexWrap: "wrap",
    gap: 28
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 640
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 14
  }
}, "The sacred circuit"), /*#__PURE__*/React.createElement("h2", {
  className: "display",
  style: {
    fontSize: "clamp(30px, 3.6vw, 48px)",
    margin: 0
  }
}, "Temples", " ", /*#__PURE__*/React.createElement("em", {
  style: {
    fontStyle: "italic",
    color: "var(--alpen-deep)"
  }
}, "of"), " ", "Kumaon")), /*#__PURE__*/React.createElement("p", {
  className: "text-muted",
  style: {
    maxWidth: 380,
    fontSize: 15,
    lineHeight: 1.65
  }
}, "On the Manaskhand circuit (and as add-ons to other yatras), we route you through the four most significant spiritual portals of the Kumaon Himalaya."))), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-4",
  style: {
    gap: 18
  }
}, TEMPLES.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
  delay: i * 80,
  key: t.id
}, /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement(Photo, {
  src: PHOTOS[t.id] || PHOTOS.kainchi,
  alt: t.name,
  style: {
    width: "100%",
    aspectRatio: "1/1"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 22,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    color: "var(--alpen-deep)"
  }
}, t.sub), /*#__PURE__*/React.createElement("div", {
  className: "display",
  style: {
    fontSize: 20,
    fontWeight: 700
  }
}, t.name), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "var(--ink-soft)",
    fontSize: 13.5,
    lineHeight: 1.6,
    margin: 0,
    flex: 1
  }
}, t.body))))))));

// ============================================================
// FINAL CTA — sacred quest banner
// ============================================================
const FinalCTA = ({
  onInquire
}) => /*#__PURE__*/React.createElement("section", {
  className: "section bg-ink",
  "data-screen-label": "Final CTA",
  style: {
    padding: "100px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 1600 320",
  preserveAspectRatio: "none",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: 220,
    opacity: 0.18,
    color: "var(--saffron)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M0,260 L120,180 L220,220 L360,120 L520,210 L680,140 L820,220 L980,160 L1140,230 L1280,170 L1420,225 L1600,180 L1600,320 L0,320 Z",
  fill: "currentColor"
})), /*#__PURE__*/React.createElement("div", {
  className: "wrap",
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  className: "mono",
  style: {
    color: "var(--saffron)",
    fontSize: 12,
    letterSpacing: "0.16em",
    marginBottom: 22
  }
}, "KAILASH \xB7 2026"), /*#__PURE__*/React.createElement("h2", {
  className: "display",
  style: {
    fontSize: "clamp(40px, 6vw, 84px)",
    margin: "0 auto 24px",
    maxWidth: 1000,
    lineHeight: 1.05
  }
}, "Ready to begin your", " ", /*#__PURE__*/React.createElement("em", {
  style: {
    fontStyle: "italic",
    color: "var(--saffron)"
  }
}, "sacred"), " ", "quest?"), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "rgba(250,246,238,0.72)",
    maxWidth: 620,
    margin: "0 auto 36px",
    fontSize: 17,
    lineHeight: 1.65
  }
}, "Over 240 yatris have walked these trails with us. Join them in 2026 \u2014 permits are limited and the season is short."), /*#__PURE__*/React.createElement("div", {
  className: "row",
  style: {
    justifyContent: "center",
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "btn btn--alpen",
  onClick: onInquire
}, "Reserve a slot", " ", /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-arrow-right",
  style: {
    fontSize: 15
  }
})), /*#__PURE__*/React.createElement("a", {
  className: "btn btn--ghost",
  href: "https://wa.me/917037478455",
  target: "_blank",
  rel: "noreferrer",
  style: {
    color: "var(--cream)",
    borderColor: "rgba(230,238,247,0.28)"
  }
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-brands fa-whatsapp",
  style: {
    fontSize: 16
  }
}), " ", "WhatsApp us")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 14,
    paddingTop: 32,
    borderTop: "1px solid rgba(250,246,238,0.12)"
  }
}, [{
  icon: "🏛",
  label: "Govt. approved"
}, {
  icon: "🎖",
  label: "ITBP-coordinated"
}, {
  icon: "🌿",
  label: "Plastic-free expedition"
}, {
  icon: "⭐",
  label: "4.9 from 320+ yatris"
}].map(b => /*#__PURE__*/React.createElement("span", {
  key: b.label,
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    borderRadius: 999,
    border: "1px solid rgba(250,246,238,0.18)",
    background: "rgba(250,246,238,0.04)",
    fontSize: 12.5,
    color: "rgba(250,246,238,0.85)",
    fontWeight: 500
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13
  }
}, b.icon), " ", b.label))))));

// ============================================================
// HERO TRUST STRIP — scrolling list of trail/keyword tokens
// ============================================================
const TrustTicker = () => /*#__PURE__*/React.createElement(Marquee, {
  variant: "alpen",
  items: ["Adi Kailash Yatra 2026", "Om Parvat Darshan", "Darma Valley · Panchachuli", "Munsiyari · Khaliya Top", "Manaskhand · Jageshwar", "Johar · Milam Glacier", "ILP permits included", "Plastic-free yatra"]
});
Object.assign(window, {
  Marquee,
  Beyond,
  Temples,
  FinalCTA,
  TrustTicker
});

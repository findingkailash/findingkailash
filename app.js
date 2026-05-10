// app.jsx — root composition + sticky CTA + tweaks panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  headline: "Walk the trail where the mountain hums Om.",
  palette: "alpenglow"
}; /*EDITMODE-END*/

const PALETTES = {
  alpenglow: {
    alpen: "#e0773c",
    alpenDeep: "#b85a26",
    saffron: "#f2c879",
    sky: "#7ba3c8",
    skyDeep: "#4f7da6"
  },
  saffron: {
    alpen: "#d97706",
    alpenDeep: "#a14e0a",
    saffron: "#fcd34d",
    sky: "#a78bb5",
    skyDeep: "#7a5a8c"
  },
  glacier: {
    alpen: "#2f7ea0",
    alpenDeep: "#1f5c79",
    saffron: "#9ec9d9",
    sky: "#86b6c8",
    skyDeep: "#3e7790"
  },
  evergreen: {
    alpen: "#3a7a52",
    alpenDeep: "#235038",
    saffron: "#cce0a8",
    sky: "#8fa993",
    skyDeep: "#516a55"
  }
};
function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.alpenglow;
  const r = document.documentElement;
  r.style.setProperty("--alpen", p.alpen);
  r.style.setProperty("--alpen-deep", p.alpenDeep);
  r.style.setProperty("--saffron", p.saffron);
  r.style.setProperty("--sky", p.sky);
  r.style.setProperty("--sky-deep", p.skyDeep);
}
const HEADLINE_OPTIONS = ["Walk the trail where the mountain hums Om.", "Stand before the Om carved by nature itself.", "Eight days. One mountain. A lifetime of quiet.", "The Himalaya is waiting. Listening, even."];
const StickyCTA = () => /*#__PURE__*/React.createElement("a", {
  className: "sticky-cta__btn sticky-cta__btn--wa",
  href: "https://wa.me/917037478455",
  target: "_blank",
  rel: "noreferrer",
  "aria-label": "Chat on WhatsApp",
  style: {
    position: "fixed",
    right: 24,
    bottom: 24,
    zIndex: 9999,
    borderRadius: 50,
    width: 52,
    height: 52,
    padding: 0,
    justifyContent: "center",
    boxShadow: "0 4px 16px rgba(0,0,0,0.22)"
  }
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-brands fa-whatsapp",
  style: {
    fontSize: 26,
    color: "white"
  }
}));
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const bookingRef = React.useRef(null);
  React.useEffect(() => {
    applyPalette(tweaks.palette);
  }, [tweaks.palette]);
  const goInquire = () => {
    if (bookingRef.current) {
      const top = bookingRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Marquee, {
    items: ["2026 registrations open", "Limited ILP permits — Adi Kailash & Om Parvat", "Plastic-free expedition", "Small groups · max 12"]
  }), /*#__PURE__*/React.createElement(Nav, {
    onInquire: goInquire
  }), /*#__PURE__*/React.createElement(Hero, {
    onInquire: goInquire,
    headline: tweaks.headline
  }), /*#__PURE__*/React.createElement(TrustTicker, null), /*#__PURE__*/React.createElement(Journeys, {
    onInquire: goInquire
  }), /*#__PURE__*/React.createElement(Beyond, null), /*#__PURE__*/React.createElement(Pickup, {
    onInquire: goInquire
  }), /*#__PURE__*/React.createElement(Itinerary, null), /*#__PURE__*/React.createElement(Tiers, {
    onInquire: goInquire
  }), /*#__PURE__*/React.createElement(Included, null), /*#__PURE__*/React.createElement(Temples, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Permits, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Booking, {
    ref: bookingRef
  }), /*#__PURE__*/React.createElement(FinalCTA, {
    onInquire: goInquire
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Headline",
    value: tweaks.headline,
    onChange: v => setTweak("headline", v),
    options: HEADLINE_OPTIONS
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Palette"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Mood",
    value: tweaks.palette,
    onChange: v => setTweak("palette", v),
    options: [{
      value: "alpenglow",
      label: "Alpenglow"
    }, {
      value: "saffron",
      label: "Saffron"
    }, {
      value: "glacier",
      label: "Glacier"
    }, {
      value: "evergreen",
      label: "Evergreen"
    }]
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

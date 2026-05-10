// sections-2.jsx — Itinerary, Tiers, Included, Gallery, Testimonials, About, Permits, FAQ, Booking, Footer

// ============================================================
// ITINERARY (Adi Kailash & Om Parvat, 5 days)
// ============================================================
const ITINERARY = [{
  d: "Day 01",
  title: "Pickup → Pithoragarh",
  elev: "1,814 m",
  body: "Morning pickup from Delhi or Kathgodam. A long, beautiful drive through the Kumaon foothills — tea stops, mountain views, and the first smell of pine. Arrive Pithoragarh by evening. Briefing & gear check at the hotel."
}, {
  d: "Day 02",
  title: "Pithoragarh → Gunji / Nabi",
  elev: "3,200 m",
  body: "Early start along the Kali river valley through Dharchula and Tawaghat, climbing steadily into the Vyas Valley. The landscape opens into high-altitude meadows and snow peaks. Overnight in Gunji or Nabi — light acclimatisation walk in the evening."
}, {
  d: "Day 03",
  title: "Gunji / Nabi → Om Parvat (Nabhidhang)",
  elev: "4,150 m",
  body: "The day. We drive to Nabhidhang for a clear view of the snow-carved ॐ on Om Parvat. Time to sit, breathe, and witness. Return to Gunji / Nabi by afternoon. Reserve day built into this leg if weather intervenes."
}, {
  d: "Day 04",
  title: "Gunji / Nabi → Adi Kailash darshan → Pithoragarh",
  elev: "4,572 m",
  body: "Drive to Jolingkong via Kuti village. Darshan at Parvati Sarovar at the foot of Adi Kailash — the Himalayan echo of Mansarovar. Then a long descent all the way back to Pithoragarh. Celebratory dinner in town."
}, {
  d: "Day 05",
  title: "Pithoragarh → Jageshwar → Kaichi Dham → Delhi / Kathgodam",
  elev: "~250 m",
  body: "Unhurried departure with two sacred stops on the way down — the ancient Jageshwar Dham temple complex (108 Shiva shrines in a deodar forest) and the beloved Kaichi Dham ashram. Drop at Kathgodam railway station or Delhi as per your package."
}];
const Itinerary = () => /*#__PURE__*/React.createElement("section", {
  className: "section bg-dawn",
  id: "itinerary",
  "data-screen-label": "Itinerary"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: 28
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 14
  }
}, "Day-by-day \xB7 Adi Kailash & Om Parvat"), /*#__PURE__*/React.createElement("h2", {
  className: "display",
  style: {
    fontSize: "clamp(32px, 4vw, 50px)",
    margin: 0,
    maxWidth: 700
  }
}, "Five days. Two mountains that will look back at you.")), /*#__PURE__*/React.createElement("div", {
  className: "row",
  style: {
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-calendar-days",
  style: {
    fontSize: 13
  }
}), " ", "May\u2013Oct"), /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-users",
  style: {
    fontSize: 13
  }
}), " Max 12"), /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-shield-halved",
  style: {
    fontSize: 13
  }
}), " ", "ILP included")))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    paddingLeft: 40
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 16,
    top: 8,
    bottom: 8,
    width: 1,
    background: "var(--line-2)"
  }
}), ITINERARY.map((day, i) => /*#__PURE__*/React.createElement(Reveal, {
  delay: i * 60,
  key: day.d
}, /*#__PURE__*/React.createElement("div", {
  className: "itinerary-row",
  style: {
    position: "relative",
    paddingBottom: 28
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: -32,
    top: 8,
    width: 14,
    height: 14,
    borderRadius: "50%",
    background: "var(--alpen)",
    boxShadow: "0 0 0 4px var(--cream), 0 0 0 5px var(--line-2)"
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "itinerary-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 12,
    color: "var(--alpen-deep)",
    fontWeight: 600
  }
}, day.d), /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    marginTop: 6
  }
}, day.elev)), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 22
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "display",
  style: {
    fontSize: 21,
    fontWeight: 700,
    marginBottom: 6
  }
}, day.title), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "var(--ink-soft)",
    fontSize: 14.5,
    lineHeight: 1.65,
    margin: 0
  }
}, day.body))))))));

// ============================================================
// TIERS — Comfort vs Premium
// ============================================================
const Tiers = ({
  onInquire
}) => {
  const rows = [["Price by pickup", "Delhi ₹35,000 · Haldwani ₹32,000 · Pithoragarh ₹25,000", "Delhi ₹55,000 · Haldwani ₹51,000 · Pithoragarh ₹30,000"], ["Group size", "Up to 12 trekkers", "Up to 6 trekkers"], ["Stay", "Clean guesthouses, twin-share", "Best-available, mostly single-share"], ["Vehicle", "Shared 4×4 / Tempo Traveller", "Private SUV per group"], ["Meals", "Local Kumaoni vegetarian", "Curated · with chef on long days"], ["Guide", "Senior trek leader", "Trek leader + dedicated photographer"], ["Reserve days", "1 weather buffer", "2 weather buffers"], ["Permits & paperwork", "Included", "Included + handled door-to-door"]];
  const cols = [{
    name: "Comfort",
    sub: "Our default. Honest, well-run, joyful.",
    price: "from ₹ 25,000",
    color: "var(--ink)"
  }, {
    name: "Premium",
    sub: "Smaller groups, more flexibility, more time.",
    price: "from ₹ 30,000",
    color: "var(--alpen)"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "tiers",
    "data-screen-label": "Tiers",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Packages"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px, 3.4vw, 42px)",
      margin: 0
    }
  }, "Two ways to walk the same trail."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tiers-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tiers-row tiers-row--header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--label",
    style: {
      padding: "24px 26px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric__label"
  }, "Compare")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    className: `tiers-cell tiers-cell--${c.name.toLowerCase()}`,
    style: {
      padding: "24px 26px",
      borderBottom: "1px solid var(--line)",
      borderLeft: "1px solid var(--line)",
      background: c.name === "Premium" ? "var(--cream-2)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, c.name), c.name === "Premium" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--alpen-deep)",
      padding: "2px 8px",
      borderRadius: 999,
      background: "rgba(224,119,60,0.12)"
    }
  }, "Most loved")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginBottom: 10
    }
  }, c.sub), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: c.color,
      fontWeight: 700
    }
  }, c.price)))), rows.map(([label, a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "tiers-row tiers-row--data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--label",
    style: {
      padding: "16px 26px",
      color: "var(--ink-2)",
      fontSize: 14,
      borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--comfort",
    style: {
      padding: "16px 26px",
      color: "var(--ink-2)",
      fontSize: 14,
      borderLeft: "1px solid var(--line)",
      borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--premium",
    style: {
      padding: "16px 26px",
      color: "var(--ink-2)",
      fontSize: 14,
      borderLeft: "1px solid var(--line)",
      borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none",
      background: "var(--cream-2)"
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    className: "tiers-row tiers-row--footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--label",
    style: {
      padding: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--comfort",
    style: {
      padding: 26,
      borderLeft: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    style: {
      width: "100%",
      justifyContent: "center"
    },
    onClick: onInquire
  }, "Choose Comfort")), /*#__PURE__*/React.createElement("div", {
    className: "tiers-cell tiers-cell--premium",
    style: {
      padding: 26,
      borderLeft: "1px solid var(--line)",
      background: "var(--cream-2)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--alpen",
    style: {
      width: "100%",
      justifyContent: "center"
    },
    onClick: onInquire
  }, "Choose Premium"))))))));
};

// ============================================================
// INCLUDED / NOT INCLUDED
// ============================================================
const Included = () => {
  const yes = ["Inner Line Permits & all paperwork", "Accommodation (twin-share guesthouses & tents)", "All meals from Day 1 dinner to Day 5 breakfast", "Private 4×4 / Tempo Traveller transfers", "Senior trek leader + local Bhotia guide", "Basic first-aid & oxygen cylinder on standby", "Welcome kit · prayer flags · trip diary"];
  const no = ["Train / flight to Pickup City", "Personal trekking gear (shoes, jackets)", "Pony / porter for personal luggage", "Travel insurance (strongly recommended)", "Anything not in the inclusions list", "Costs from delays caused by weather / road closures"];
  return /*#__PURE__*/React.createElement("section", {
    className: "section bg-snow",
    id: "included",
    "data-screen-label": "Included",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "What's in the price"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px, 3.4vw, 42px)",
      margin: "0 0 40px",
      maxWidth: 700
    }
  }, "Honest inclusions. No surprises at altitude.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-2"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "rgba(47,93,79,0.12)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pine)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, "Included")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, yes.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      color: "var(--ink-2)",
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pine)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      fontSize: 14
    }
  })), x))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 28,
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "rgba(184,90,38,0.14)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--alpen-deep)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, "Not included")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, no.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      color: "var(--ink-2)",
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alpen-deep)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 14
    }
  })), x))))))));
};

// ============================================================
// GALLERY (tabs by 5 destinations)
// ============================================================
const GalleryCarousel = ({
  photos,
  destName
}) => {
  const [slide, setSlide] = React.useState(0);
  const touchStart = React.useRef(null);
  const total = photos.length;
  const prev = () => setSlide(s => (s - 1 + total) % total);
  const next = () => setSlide(s => (s + 1) % total);
  const onTouchStart = e => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = e => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStart.current = null;
  };
  React.useEffect(() => {
    setSlide(0);
  }, [destName]);
  return /*#__PURE__*/React.createElement("div", {
    className: "gallery-carousel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-carousel__track",
    style: {
      transform: `translateX(-${slide * 100}%)`
    },
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  }, photos.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "gallery-carousel__slide"
  }, /*#__PURE__*/React.createElement(Photo, {
    src: src,
    alt: `${destName} photo ${i + 1}`,
    style: {
      height: "100%",
      borderRadius: 14
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "gallery-carousel__dots"
  }, photos.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `gallery-carousel__dot${i === slide ? " is-active" : ""}`,
    onClick: () => setSlide(i),
    "aria-label": `Photo ${i + 1}`
  }))), /*#__PURE__*/React.createElement("button", {
    className: "gallery-carousel__arrow gallery-carousel__arrow--prev",
    onClick: prev,
    "aria-label": "Previous"
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    className: "gallery-carousel__arrow gallery-carousel__arrow--next",
    onClick: next,
    "aria-label": "Next"
  }, "\u203A"));
};
const DEST_GALLERY = {
  adikailash: [PHOTOS.ak1, PHOTOS.ak2, PHOTOS.ak3, PHOTOS.ak4, PHOTOS.ak5],
  darma: [PHOTOS.da1, PHOTOS.da2, PHOTOS.da3, PHOTOS.da4, PHOTOS.da5],
  munsiyari: [PHOTOS.mu1, PHOTOS.mu2, PHOTOS.mu3, PHOTOS.mu4, PHOTOS.mu5],
  manaskhand: [PHOTOS.ma1, PHOTOS.ma2, PHOTOS.ma3, PHOTOS.ma4, PHOTOS.ma5],
  johar: [PHOTOS.jo1, PHOTOS.jo2, PHOTOS.jo3, PHOTOS.jo4, PHOTOS.jo5]
};
const Gallery = () => {
  const [active, setActive] = React.useState(DESTINATIONS[0].id);
  const dest = DESTINATIONS.find(d => d.id === active);
  const photos = DEST_GALLERY[active] || [];
  const mainPhoto = photos[0];
  const secondary = photos.slice(1);
  const galleryPhotos = photos;
  return /*#__PURE__*/React.createElement("section", {
    className: "section bg-dawn",
    id: "gallery",
    "data-screen-label": "Gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 32,
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "From the trail"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px, 3.4vw, 42px)",
      margin: 0
    }
  }, "Photographs from past yatras.")), /*#__PURE__*/React.createElement("p", {
    className: "text-muted",
    style: {
      maxWidth: 360
    }
  }, "Filter by trail. All photos are from our own expeditions \u2014 not stock."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "tabs",
    style: {
      marginBottom: 24
    }
  }, DESTINATIONS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    className: `tab ${active === d.id ? "is-active" : ""}`,
    onClick: () => setActive(d.id)
  }, d.name)))), /*#__PURE__*/React.createElement(Reveal, {
    key: active
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid"
  }, /*#__PURE__*/React.createElement(Photo, {
    src: mainPhoto,
    alt: `${dest.name} feature`,
    style: {
      gridRow: "1 / 3",
      height: "100%",
      borderRadius: 14
    }
  }), secondary.map((src, i) => /*#__PURE__*/React.createElement(Photo, {
    key: src,
    src: src,
    alt: `${dest.name} 0${i + 2}`,
    style: {
      height: "100%",
      borderRadius: 14
    }
  }))), /*#__PURE__*/React.createElement(GalleryCarousel, {
    photos: galleryPhotos,
    destName: dest.name
  }))));
};

// ============================================================
// TESTIMONIALS
// ============================================================
const TESTIMONIALS = [{
  name: "Aarti Menon",
  from: "Bengaluru · Adi Kailash, 2024",
  quote: "I've trekked Everest base camp. Nothing prepared me for the silence at Nabhidhang when the ॐ first emerged through the cloud."
}, {
  name: "Vikram & Ritu Saxena",
  from: "Delhi · Premium · 2023",
  quote: "We were the only ones at Parvati Kund at sunrise. The team had thought of every detail — even the rajma-chawal at base camp tasted like ghar."
}, {
  name: "Joshua Pinto",
  from: "Mumbai · Darma Valley, 2024",
  quote: "Came for the photography, left with a guide who'd become a friend. Will book again, this time with my parents."
}];
const Testimonials = () => /*#__PURE__*/React.createElement("section", {
  className: "section bg-snow",
  "data-screen-label": "Testimonials"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 14
  }
}, "Past yatris"), /*#__PURE__*/React.createElement("h2", {
  className: "display",
  style: {
    fontSize: "clamp(28px, 3.4vw, 42px)",
    margin: "0 0 48px",
    maxWidth: 720
  }
}, "What people say after they come down.")), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-3"
}, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
  delay: i * 80,
  key: t.name
}, /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 28,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "display",
  style: {
    fontSize: 30,
    color: "var(--alpen)",
    lineHeight: 1,
    fontWeight: 700
  }
}, "\u201C"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15.5,
    lineHeight: 1.65,
    color: "var(--ink-2)",
    margin: 0,
    flex: 1
  }
}, t.quote), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 16,
    borderTop: "1px solid var(--line)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 700,
    fontSize: 14
  }
}, t.name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12.5,
    color: "var(--ink-soft)"
  }
}, t.from))))))));

// ============================================================
// ABOUT / FOUNDERS + PERMITS
// ============================================================
const About = () => /*#__PURE__*/React.createElement("section", {
  className: "section bg-ink",
  id: "about",
  "data-screen-label": "About"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid",
  style: {
    gridTemplateColumns: "1fr 1.2fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Photo, {
  src: PHOTOS.founders,
  alt: "Founders",
  lift: true,
  style: {
    width: "100%",
    aspectRatio: "4/5",
    borderRadius: 22
  }
})), /*#__PURE__*/React.createElement(Reveal, {
  delay: 100
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 14,
    color: "var(--saffron)"
  }
}, "About us"), /*#__PURE__*/React.createElement("h2", {
  className: "display",
  style: {
    fontSize: "clamp(30px, 3.6vw, 46px)",
    margin: "0 0 22px"
  }
}, "We're from these mountains."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(250,246,238,0.78)",
    marginBottom: 18
  }
}, "Finding Kailash was started by two cousins from Pithoragarh \u2014 children of the Vyas Valley who grew up listening to shepherd songs and walking ridge lines to school. We don't outsource. We guide every yatra ourselves, with people we've walked with for twenty years."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(250,246,238,0.78)",
    marginBottom: 28
  }
}, "Our promise is small \u2014 small groups, small ego, big care. We'd rather you come back twice than refer us to ten."), /*#__PURE__*/React.createElement("div", {
  className: "row",
  style: {
    gap: 28
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "metric"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric__num",
  style: {
    color: "var(--saffron)"
  }
}, "240+"), /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    color: "rgba(250,246,238,0.6)"
  }
}, "Yatras run")), /*#__PURE__*/React.createElement("div", {
  className: "metric"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric__num",
  style: {
    color: "var(--saffron)"
  }
}, "18"), /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    color: "rgba(250,246,238,0.6)"
  }
}, "Years on these trails")), /*#__PURE__*/React.createElement("div", {
  className: "metric"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric__num",
  style: {
    color: "var(--saffron)"
  }
}, "4.9"), /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    color: "rgba(250,246,238,0.6)"
  }
}, "From 320+ reviews"))))))));
const Permits = () => {
  const cards = [{
    title: "Inner Line Permit",
    body: "Adi Kailash & Om Parvat fall in a restricted ITBP area. We process the ILP for every trekker — bring an Aadhaar + 2 photos.",
    icon: "shield"
  }, {
    title: "Fitness",
    body: "Moderate. If you can walk 5 km / day on flat ground without distress, we'll prepare you for the rest. Doctor's clearance after 55.",
    icon: "leaf"
  }, {
    title: "Gear",
    body: "We send a complete packing list 30 days before. Layered clothing, broken-in trek shoes, and a 60L backpack are non-negotiable.",
    icon: "compass"
  }, {
    title: "Best season",
    body: "May to mid-October. Monsoon (Jul–Aug) means greener valleys but more landslide risk. Sept–Oct is the clearest sky window.",
    icon: "calendar"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "permits",
    "data-screen-label": "Permits"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Before you come"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px, 3.4vw, 42px)",
      margin: 0
    }
  }, "Permits, fitness, gear & season."))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-4"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 60,
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 24,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "var(--cream-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--alpen-deep)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 8
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      margin: 0
    }
  }, c.body)))))));
};

// ============================================================
// FAQ ACCORDION
// ============================================================
const FAQS = [{
  q: "How difficult is the Adi Kailash & Om Parvat trek?",
  a: "Most of the route is by road — we drive 4×4s up to Jolingkong (4,572 m). The 'trekking' is short walks of 2–4 km/day at altitude. Acclimatisation, not endurance, is the real challenge."
}, {
  q: "Do I need to be a Hindu to do this yatra?",
  a: "Not at all. We host trekkers of every faith and many of none. The mountain doesn't ask for credentials. The journey is open to anyone who walks it with respect."
}, {
  q: "What's the booking process?",
  a: "Send us an inquiry through this page, on WhatsApp, or by email. We'll send a detailed itinerary and quote within 24 hours. A 25% deposit confirms your seat; the rest is due 14 days before departure."
}, {
  q: "Is travel insurance required?",
  a: "Strongly recommended. Adventure-grade cover that includes high-altitude evacuation. We can refer you to good insurers but do not sell policies ourselves."
}, {
  q: "What happens if weather closes the road?",
  a: "We build a buffer day into every Adi Kailash itinerary. If we still cannot complete darshan because of weather, we offer a discounted return trip in the same season."
}, {
  q: "Are there options for solo women travellers?",
  a: "Yes. About a third of our yatris are solo women. We arrange single-share accommodation on request and our team includes a senior woman trip lead on most departures."
}];
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section bg-snow",
    id: "faq",
    "data-screen-label": "FAQ",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1.4fr",
      gap: 56,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px, 3.4vw, 42px)",
      margin: "0 0 18px"
    }
  }, "Questions we hear most."), /*#__PURE__*/React.createElement("p", {
    className: "text-muted",
    style: {
      fontSize: 15
    }
  }, "Don't see yours? Drop us a WhatsApp on +91 70374 78455 \u2014 we usually reply same day."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, FAQS.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: f.q,
      style: {
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        background: "transparent",
        border: 0,
        width: "100%",
        textAlign: "left",
        padding: "20px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 18,
        color: "var(--ink)",
        fontSize: 16,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "1px solid var(--line-2)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ink-2)",
        flexShrink: 0,
        transition: "all 200ms ease",
        background: isOpen ? "var(--ink)" : "transparent",
        color: isOpen ? "var(--cream)" : "var(--ink-2)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: isOpen ? "minus" : "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? 200 : 0,
        transition: "max-height 280ms ease"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--ink-soft)",
        fontSize: 14.5,
        lineHeight: 1.7,
        margin: 0,
        paddingBottom: 22,
        paddingRight: 40
      }
    }, f.a)));
  }))))));
};

// ============================================================
// BOOKING FORM
// ============================================================
const Booking = React.forwardRef((props, ref) => {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    destination: "adikailash",
    pickup: "Haldwani",
    tier: "Comfort",
    month: "",
    group: "2",
    msg: ""
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const set = k => e => setForm(s => ({
    ...s,
    [k]: e.target.value
  }));
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone)) e.phone = "A reachable phone number, please.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Looks like the email isn't quite right.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const submit = ev => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "inquire",
    "data-screen-label": "Booking",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1.3fr",
      gap: 56,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Plan your yatra"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(30px, 3.6vw, 46px)",
      margin: "0 0 22px"
    }
  }, "Tell us when. We'll send a quote within 24 hours."), /*#__PURE__*/React.createElement("p", {
    className: "text-muted",
    style: {
      marginBottom: 28,
      fontSize: 15
    }
  }, "Or just call. We pick up \u2014 even at 5,000m if there's signal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+917037478455",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "var(--cream-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--alpen-deep)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "+91 70374 78455"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "Prashant Pal \xB7 founder \xB7 9am\u20139pm IST"))), /*#__PURE__*/React.createElement("a", {
    href: "tel:+917037478455",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "var(--cream-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--alpen-deep)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "+91 70374 78455"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "Naval Bisht \xB7 Co Founder"))), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@findingkailash.com",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "var(--cream-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--alpen-deep)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope",
    style: {
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "contact@findingkailash.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "Mail us \xB7 24h reply")))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 48,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 38,
      marginBottom: 12
    }
  }, "\uD83D\uDE4F"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 10
    }
  }, "Inquiry received."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 15,
      maxWidth: 440,
      margin: "0 auto"
    }
  }, "We've got it. Expect a custom itinerary & quote in your inbox within 24 hours, often sooner. Until then \u2014 go for a walk.")) : /*#__PURE__*/React.createElement("form", {
    className: "card",
    style: {
      padding: 32
    },
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-2",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Your name"), /*#__PURE__*/React.createElement("input", {
    className: "field__input",
    value: form.name,
    onChange: set("name"),
    placeholder: "Aarti Menon"
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    className: "field__error"
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Phone / WhatsApp"), /*#__PURE__*/React.createElement("input", {
    className: "field__input",
    value: form.phone,
    onChange: set("phone"),
    placeholder: "+91 \u2026"
  }), errors.phone && /*#__PURE__*/React.createElement("span", {
    className: "field__error"
  }, errors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "field__input",
    value: form.email,
    onChange: set("email"),
    placeholder: "you@example.com"
  }), errors.email && /*#__PURE__*/React.createElement("span", {
    className: "field__error"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Destination"), /*#__PURE__*/React.createElement("select", {
    className: "field__select",
    value: form.destination,
    onChange: set("destination")
  }, DESTINATIONS.map(d => /*#__PURE__*/React.createElement("option", {
    key: d.id,
    value: d.id
  }, d.name)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Pickup city"), /*#__PURE__*/React.createElement("select", {
    className: "field__select",
    value: form.pickup,
    onChange: set("pickup")
  }, /*#__PURE__*/React.createElement("option", null, "Pithoragarh"), /*#__PURE__*/React.createElement("option", null, "Haldwani"), /*#__PURE__*/React.createElement("option", null, "Delhi"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Package"), /*#__PURE__*/React.createElement("select", {
    className: "field__select",
    value: form.tier,
    onChange: set("tier")
  }, /*#__PURE__*/React.createElement("option", null, "Comfort"), /*#__PURE__*/React.createElement("option", null, "Premium"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Group size"), /*#__PURE__*/React.createElement("select", {
    className: "field__select",
    value: form.group,
    onChange: set("group")
  }, [1, 2, 3, 4, 5, 6, 7, 8, "9+"].map(n => /*#__PURE__*/React.createElement("option", {
    key: n
  }, n)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Preferred month"), /*#__PURE__*/React.createElement("input", {
    className: "field__input",
    value: form.month,
    onChange: set("month"),
    placeholder: "e.g. June 2026, or flexible"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field__label"
  }, "Anything we should know?"), /*#__PURE__*/React.createElement("textarea", {
    className: "field__textarea",
    value: form.msg,
    onChange: set("msg"),
    placeholder: "Dietary, fitness concerns, anniversary trip, photography focus\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted",
    style: {
      fontSize: 12.5
    }
  }, "No deposit at this stage. We'll send a personalised quote first."), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--alpen"
  }, "Send inquiry", " ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 15
    }
  }))))))));
});

// ============================================================
// FOOTER
// ============================================================
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "foot",
  "data-screen-label": "Footer"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 1600 100",
  preserveAspectRatio: "none",
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    width: "100%",
    opacity: 0.18,
    color: "var(--saffron)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M0,80 L160,40 L320,75 L500,20 L680,65 L860,30 L1040,65 L1220,40 L1400,70 L1600,40 L1600,100 L0,100 Z",
  fill: "currentColor"
})), /*#__PURE__*/React.createElement("div", {
  className: "wrap",
  style: {
    position: "relative",
    paddingLeft: "clamp(20px, 6vw, 28px)",
    paddingRight: "clamp(20px, 6vw, 28px)"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "grid",
  style: {
    gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
    gap: 32,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 18
  }
}, /*#__PURE__*/React.createElement(OmPeakIcon, {
  size: 32,
  color: "#faf6ee"
}), /*#__PURE__*/React.createElement("span", {
  className: "display",
  style: {
    fontSize: 22,
    fontWeight: 700
  }
}, "Finding Kailash")), /*#__PURE__*/React.createElement("p", {
  className: "devanagari",
  style: {
    fontSize: 17,
    color: "var(--saffron)",
    marginBottom: 14
  }
}, "\u092F\u093E\u0924\u094D\u0930\u093E \u0928\u0939\u0940\u0902, \u090F\u0915 \u0905\u0928\u0941\u092D\u0935 \u0939\u0948"), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "rgba(250,246,238,0.7)",
    fontSize: 14,
    lineHeight: 1.65,
    maxWidth: 360
  }
}, "Soul-stirring expeditions to Adi Kailash & Om Parvat \u2014 and across the Kumaon Himalaya. Run by people from these mountains.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    color: "rgba(250,246,238,0.55)",
    marginBottom: 14
  }
}, "Trails"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: 14
  }
}, DESTINATIONS.map(d => /*#__PURE__*/React.createElement("li", {
  key: d.id
}, /*#__PURE__*/React.createElement("a", {
  href: `#journeys`
}, d.name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    color: "rgba(250,246,238,0.55)",
    marginBottom: 14
  }
}, "Plan"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: 14
  }
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#itinerary"
}, "Itinerary")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#tiers"
}, "Packages")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#permits"
}, "Permits & prep")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#faq"
}, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#inquire"
}, "Plan my yatra")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "metric__label",
  style: {
    color: "rgba(250,246,238,0.55)",
    marginBottom: 14
  }
}, "Reach us"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: 14
  }
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "tel:+917037478455"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-phone",
  style: {
    fontSize: 13
  }
}), " +91 70374 78455")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "tel:+917037478455"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-phone",
  style: {
    fontSize: 13
  }
}), " +91 81269 80408")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "mailto:contact@findingkailash.com"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-solid fa-envelope",
  style: {
    fontSize: 13
  }
}), " ", "contact@findingkailash.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "https://www.instagram.com/findingkailash/",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("i", {
  className: "fa-brands fa-instagram",
  style: {
    fontSize: 13
  }
}), " ", "@findingkailash"))))), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 24,
    borderTop: "1px solid rgba(250,246,238,0.12)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }
}, ["#adikailash", "#omparvat", "#uttarakhand", "#bholenath", "#shiva", "#kumaon"].map(h => /*#__PURE__*/React.createElement("span", {
  key: h,
  style: {
    fontSize: 12,
    color: "var(--saffron)",
    fontFamily: "'JetBrains Mono', monospace"
  }
}, h))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "rgba(250,246,238,0.45)"
  }
}, "\xA9 ", new Date().getFullYear(), " Finding Kailash \xB7 Pithoragarh, Uttarakhand \xB7 Made with \u0939\u093F\u092E\u093E\u0932\u092F")), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 14,
    paddingBottom: 8,
    textAlign: "center",
    fontSize: 12,
    color: "rgba(250,246,238,0.35)"
  }
}, "Created with \u2764\uFE0F by", " ", /*#__PURE__*/React.createElement("a", {
  href: "https://soartech.in",
  target: "_blank",
  rel: "noreferrer",
  style: {
    color: "rgba(250,246,238,0.55)",
    textDecoration: "none",
    borderBottom: "1px solid rgba(250,246,238,0.25)"
  }
}, "Soartech"))));
Object.assign(window, {
  Itinerary,
  Tiers,
  Included,
  Gallery,
  Testimonials,
  About,
  Permits,
  FAQ,
  Booking,
  Footer
});

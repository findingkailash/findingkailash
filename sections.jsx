// sections.jsx — Finding Kailash landing page sections
// Components exported to window at the end.

// ============================================================
// NAV
// ============================================================
const Nav = ({ onInquire }) => {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${stuck ? "is-stuck" : ""}`} data-screen-label="Nav">
      <div className="wrap nav__row">
        <a href="#top" className="nav__logo">
          <OmPeakIcon size={28} color="var(--ink)" />
          <span
            className="display"
            style={{ fontSize: 20, letterSpacing: "-0.01em" }}
          >
            Finding Kailash
          </span>
          <span
            className="devanagari"
            style={{ fontSize: 13, color: "var(--ink-soft)", marginLeft: 4 }}
          >
            खोज
          </span>
        </a>
        <div className="nav__links">
          <a href="#journeys">Journeys</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#tiers">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="btn btn--alpen btn--small" onClick={onInquire}>
          Plan my yatra{" "}
          <i className="fa-solid fa-arrow-right" style={{ fontSize: 15 }} />
        </button>
      </div>
    </nav>
  );
};

// ============================================================
// HERO
// ============================================================
const Hero = ({ onInquire, headline }) => {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero__sky" />
      <div className="hero__sun" />
      <HeroMountains />

      <div className="wrap" style={{ position: "relative", zIndex: 5 }}>
        <div
          className="hero__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 22 }}>
              <span style={{ fontSize: 14, lineHeight: 1 }}>🕉</span>
              <span>Expeditions · Kumaon Himalaya</span>
            </div>
            <div
              className="devanagari"
              style={{
                fontSize: 22,
                color: "var(--ink-2)",
                marginBottom: 14,
                fontWeight: 500,
              }}
            >
              यात्रा नहीं, एक अनुभव है…{" "}
              <span style={{ color: "var(--alpen)" }}>🔱</span>
            </div>
            <h1
              className="display"
              style={{
                fontSize: "clamp(44px, 6.4vw, 88px)",
                margin: "0 0 20px",
                color: "var(--ink)",
              }}
            >
              {headline}
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--ink-soft)",
                maxWidth: 540,
                marginBottom: 32,
                lineHeight: 1.55,
              }}
            >
              Soul-stirring expeditions to{" "}
              <strong style={{ color: "var(--ink)" }}>
                Adi Kailash &amp; Om Parvat
              </strong>{" "}
              — and across four more sacred valleys of Uttarakhand. Witness the
              sacred Om carved by nature itself.
            </p>

            <div className="row" style={{ marginBottom: 36 }}>
              <button className="btn btn--alpen" onClick={onInquire}>
                Plan my journey{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: 16 }}
                />
              </button>
              <a href="tel:+917037478455" className="btn btn--ghost">
                <i className="fa-solid fa-phone" style={{ fontSize: 15 }} /> +91
                70374 78455
              </a>
            </div>

            <div className="row" style={{ gap: 22 }}>
              <div className="metric">
                <div className="metric__num">5</div>
                <div className="metric__label" style={{ color: "var(--ink)" }}>
                  Sacred trails
                </div>
              </div>
              <div className="metric">
                <div className="metric__num">Customisable</div>
                <div className="metric__label" style={{ color: "var(--ink)" }}>
                  Day yatras
                </div>
              </div>
              <div className="metric">
                <div className="metric__num">
                  5,945
                  <span style={{ fontSize: 18, color: "var(--ink-2)" }}>m</span>
                </div>
                <div className="metric__label" style={{ color: "var(--ink)" }}>
                  Adi Kailash peak
                </div>
              </div>
              <div className="metric">
                <div className="metric__num">
                  12
                  <span style={{ fontSize: 18, color: "var(--ink-2)" }}>
                    max
                  </span>
                </div>
                <div className="metric__label" style={{ color: "var(--ink)" }}>
                  Per group
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="hero__img-col">
            <div style={{ position: "relative" }}>
              <Photo
                src={PHOTOS.hero}
                alt="Om Parvat at sunrise"
                lift
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  borderRadius: 22,
                  boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55)",
                }}
              />
              {/* floating chip */}
              <div
                className="card card--glass hero__chip-bottom"
                style={{
                  position: "absolute",
                  left: -28,
                  bottom: 38,
                  padding: "14px 18px",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  maxWidth: 250,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #f2c879, #e0773c)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  🕉
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    The Om of nature
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--ink-soft)" }}>
                    Snow-carved on Om Parvat, 6,191m
                  </div>
                </div>
              </div>
              {/* topright chip */}
              <div
                className="card hero__chip-top"
                style={{
                  position: "absolute",
                  right: -22,
                  top: 28,
                  padding: "10px 14px",
                  fontSize: 12.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--ink-2)",
                }}
              >
                <i
                  className="fa-solid fa-leaf"
                  style={{ fontSize: 14, color: "var(--pine)" }}
                />
                Small-group · permit-included
              </div>
            </div>
          </Reveal>
        </div>

        {/* destination strip */}
        <Reveal delay={300} style={{ marginTop: 72 }}>
          <div
            className="topo"
            style={{
              marginBottom: 18,
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.2px)",
            }}
          />
          <div
            className="hero__dest-strip"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 12,
              fontSize: 12.5,
              background: "rgba(10, 29, 49, 0.42)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: 12,
              padding: "16px 20px",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {[
              ["01", "Adi Kailash & Om Parvat", "Vyas Valley"],
              ["02", "Darma Valley", "Panchachuli base"],
              ["03", "Munsiyari", "Khaliya · Birthi"],
              ["04", "Manaskhand Circuit", "Jageshwar · Patal Bhuvaneshwar"],
              ["05", "Johar Valley", "Milam · Martoli"],
            ].map(([n, name, sub]) => (
              <div
                key={n}
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <span
                  className="mono"
                  style={{ color: "var(--alpen)", fontSize: 11 }}
                >
                  {n}
                </span>
                <span
                  style={{ color: "#ffffff", fontWeight: 600, fontSize: 13.5 }}
                >
                  {name}
                </span>
                <span style={{ color: "rgba(255,255,255,0.60)" }}>{sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ============================================================
// JOURNEYS — 5 destinations
// ============================================================
const DESTINATIONS = [
  {
    id: "adikailash",
    no: "01",
    featured: true,
    name: "Adi Kailash & Om Parvat",
    hindi: "आदि कैलाश एवं ॐ पर्वत",
    region: "Vyas Valley · Pithoragarh",
    days: "5 days",
    altitude: "5,945 m",
    grade: "Moderate",
    blurb:
      "The pilgrimage at the heart of everything we do. Stand before the snow-carved ॐ of Om Parvat, circle the sapphire Parvati Kund, and feel the Himalaya breathe back at you.",
    badge: "Flagship",
  },
  {
    id: "darma",
    no: "02",
    name: "Darma Valley",
    hindi: "दारमा घाटी",
    region: "Panchachuli base · Dharchula",
    days: "6 days",
    altitude: "4,150 m",
    grade: "Easy–Moderate",
    blurb:
      "Walk under the five-peaked Panchachuli through villages of stone and slate — Dantu, Dugtu, Bidang. Crisp dawns, alpine pasture, and the cleanest silence in Kumaon.",
  },
  {
    id: "munsiyari",
    no: "03",
    name: "Munsiyari",
    hindi: "मुनस्यारी",
    region: "Khaliya Top · Birthi Falls",
    days: "5 days",
    altitude: "3,500 m",
    grade: "Easy",
    blurb:
      "The little Kashmir of Kumaon. Sunrise on Panchachuli from Khaliya Top, oak-rhododendron forest trails, and the slow rhythm of a hill town that hasn't lost itself.",
  },
  {
    id: "manaskhand",
    no: "04",
    name: "Manaskhand Circuit",
    hindi: "मानसखंड परिक्रमा",
    region: "Jageshwar · Patal Bhuvaneshwar",
    days: "7 days",
    altitude: "2,400 m",
    grade: "Easy",
    blurb:
      "A temple-circuit journey through the Manaskhand of the Skanda Purana — Jageshwar's deodar groves, the cave of Patal Bhuvaneshwar, Chitai, Kasar Devi, Bagnath.",
  },
  {
    id: "johar",
    no: "05",
    name: "Johar Valley",
    hindi: "जोहार घाटी",
    region: "Milam · Martoli",
    days: "11 days",
    altitude: "3,870 m",
    grade: "Moderate–Hard",
    blurb:
      "An old trade route to the abandoned Bhotia village of Milam, beside the glacier that births the Goriganga. The longest, most remote of our trails — for those who want the quiet.",
  },
];

const Journeys = ({ onInquire }) => {
  const featured = DESTINATIONS.find((d) => d.featured);
  const others = DESTINATIONS.filter((d) => !d.featured);
  return (
    <section
      className="section bg-snow"
      id="journeys"
      data-screen-label="Journeys"
    >
      <div className="wrap">
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                The trails
              </div>
              <h2
                className="display"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", margin: 0 }}
              >
                Five sacred trails.
                <br />
                <span style={{ color: "var(--alpen-deep)" }}>
                  One unforgettable yatra.
                </span>
              </h2>
            </div>
            <p
              className="text-muted"
              style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.65 }}
            >
              We run small expeditions across five corners of the Kumaon
              Himalaya. Adi Kailash &amp; Om Parvat is our flagship — the rest
              are quieter, equally beautiful pieces of the same map.
            </p>
          </div>
        </Reveal>

        {/* Featured card */}
        <Reveal>
          <div
            className="card featured-card"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              padding: 0,
              marginBottom: 24,
              overflow: "hidden",
              minHeight: 480,
            }}
          >
            <div
              className="featured-card__img"
              style={{ position: "relative", minHeight: 440 }}
            >
              <Photo
                src={PHOTOS[featured.id] || PHOTOS.hero}
                alt={featured.name}
                style={{ width: "100%", height: "100%" }}
              />
              <div
                style={{
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
                  textTransform: "uppercase",
                }}
              >
                {featured.badge}
              </div>
            </div>
            <div
              className="featured-card__body"
              style={{
                padding: "44px 44px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div>
                <div
                  className="mono"
                  style={{
                    color: "var(--alpen-deep)",
                    fontSize: 12,
                    marginBottom: 12,
                  }}
                >
                  {featured.no} · {featured.region}
                </div>
                <h3
                  className="display"
                  style={{ fontSize: 38, margin: "0 0 6px" }}
                >
                  {featured.name}
                </h3>
                <div
                  className="devanagari"
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: 18,
                    marginBottom: 22,
                  }}
                >
                  {featured.hindi}
                </div>
                <p
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: 15.5,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {featured.blurb}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 18,
                    padding: "20px 0",
                    borderTop: "1px solid var(--line)",
                    borderBottom: "1px solid var(--line)",
                    marginBottom: 22,
                  }}
                >
                  <div>
                    <div className="metric__label">Duration</div>
                    <div style={{ fontWeight: 700, marginTop: 4 }}>
                      {featured.days}
                    </div>
                  </div>
                  <div>
                    <div className="metric__label">Max altitude</div>
                    <div style={{ fontWeight: 700, marginTop: 4 }}>
                      {featured.altitude}
                    </div>
                  </div>
                  <div>
                    <div className="metric__label">Grade</div>
                    <div style={{ fontWeight: 700, marginTop: 4 }}>
                      {featured.grade}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <a href="#itinerary" className="btn">
                    View itinerary{" "}
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ fontSize: 15 }}
                    />
                  </a>
                  <button className="btn btn--ghost" onClick={onInquire}>
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Other 4 cards */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        >
          {others.map((d, i) => (
            <Reveal delay={i * 80} key={d.id}>
              <div
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Photo
                  src={PHOTOS[d.id] || PHOTOS.g1}
                  alt={d.name}
                  style={{ width: "100%", aspectRatio: "4/3" }}
                />
                <div
                  style={{
                    padding: 22,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="mono"
                      style={{ color: "var(--alpen-deep)", fontSize: 11 }}
                    >
                      {d.no}
                    </span>
                    <span
                      className="chip"
                      style={{ fontSize: 11, padding: "3px 9px" }}
                    >
                      {d.grade}
                    </span>
                  </div>
                  <div>
                    <div
                      className="display"
                      style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.1 }}
                    >
                      {d.name}
                    </div>
                    <div
                      className="devanagari"
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 13.5,
                        marginTop: 4,
                      }}
                    >
                      {d.hindi}
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--ink-soft)",
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {d.blurb}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid var(--line)",
                      fontSize: 12,
                      color: "var(--ink-2)",
                    }}
                  >
                    <span>
                      <i
                        className="fa-solid fa-calendar-days"
                        style={{ fontSize: 12 }}
                      />{" "}
                      {d.days}
                    </span>
                    <span>
                      <i
                        className="fa-solid fa-mountain"
                        style={{ fontSize: 12 }}
                      />{" "}
                      {d.altitude}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// PICKUP & PRICING (3-tier table by departure city)
// ============================================================
const Pickup = ({ onInquire }) => {
  const tiers = [
    {
      city: "Pithoragarh",
      sub: "Closest base camp",
      tag: "Most affordable",
      color: "var(--pine)",
      comfort: "₹ 25,000",
      premium: "₹ 30,000",
      drive: "Same-day pickup, ~5 hrs to Gunji / Nabi",
      perks: [
        "Shortest drive day",
        "Best for return trekkers",
        "Lowest expedition cost",
      ],
    },
    {
      city: "Haldwani",
      sub: "Rail-head pickup · Kathgodam stn",
      tag: "Most popular",
      color: "var(--alpen)",
      comfort: "₹ 32,000",
      premium: "₹ 51,000",
      drive: "Train from any metro (overnight), ~10 hrs road",
      perks: [
        "Easy from any city by rail",
        "Stop at Almora / Chaukori",
        "Balanced cost & comfort",
      ],
    },
    {
      city: "Delhi",
      sub: "Door-to-door from the capital",
      tag: "Premium ease",
      color: "var(--sky-deep)",
      comfort: "₹ 35,000",
      premium: "₹ 55,000",
      drive: "Full transfer included from Delhi NCR",
      perks: [
        "No train booking to manage",
        "Flexible departure window",
        "Includes acclimatisation halt",
      ],
    },
  ];
  return (
    <section
      className="section"
      id="pickup"
      data-screen-label="Pickup pricing"
      style={{ paddingTop: 0 }}
    >
      <div className="wrap">
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Pickup &amp; pricing
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                margin: 0,
                maxWidth: 760,
              }}
            >
              Three pickup points. Pick the one that suits your start.
            </h2>
            <p className="text-muted" style={{ maxWidth: 580, marginTop: 12 }}>
              Per-person, ex-pickup-point, twin-share. Final price varies by
              group size, season &amp; package tier.
            </p>
          </div>
        </Reveal>

        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {tiers.map((t, i) => (
            <Reveal delay={i * 100} key={t.city}>
              <div
                className="card"
                style={{
                  padding: 28,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  borderTop: `4px solid ${t.color}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div
                      className="display"
                      style={{ fontSize: 28, fontWeight: 700 }}
                    >
                      {t.city}
                    </div>
                    <div
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 13,
                        marginTop: 2,
                      }}
                    >
                      {t.sub}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: t.color,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "var(--cream)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
                <div>
                  <div className="metric__label" style={{ marginBottom: 6 }}>Adi Kailash · per person</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span
                        className="display"
                        style={{ fontSize: 32, fontWeight: 700 }}
                      >
                        {t.comfort}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>Comfort</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span
                        className="display"
                        style={{ fontSize: 22, fontWeight: 700, color: "var(--alpen-deep)" }}
                      >
                        {t.premium}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>Premium</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--ink-soft)",
                    paddingBottom: 16,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {t.drive}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    flex: 1,
                  }}
                >
                  {t.perks.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 13.5,
                        color: "var(--ink-2)",
                      }}
                    >
                      <span style={{ color: t.color, display: "inline-flex" }}>
                        <i
                          className="fa-solid fa-check"
                          style={{ fontSize: 14 }}
                        />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn--ghost"
                  onClick={onInquire}
                  style={{ marginTop: "auto", justifyContent: "center" }}
                >
                  Choose {t.city}{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ fontSize: 14 }}
                  />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Nav, Hero, Journeys, Pickup, DESTINATIONS });

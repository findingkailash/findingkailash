// components.jsx — shared decorative pieces, icons, image-slot wrapper, photo

const FK_ImageSlot = ({ id, placeholder, style, className, shape, radius }) => {
  // small wrapper around <image-slot>
  return (
    <image-slot
      id={id}
      placeholder={placeholder || "Drag photo here"}
      shape={shape || "rect"}
      radius={radius}
      class={className}
      style={style}
    ></image-slot>
  );
};

// Stock photo URLs (Unsplash — free for commercial use under their license).
// Users can drop in their own by replacing src in the markup, or we can swap
// these for the user's own image-slot setup later.
const PHOTOS = {
  // hero
  hero: "/public/images/hero.webp",

  // 5 destinations
  adikailash: "/public/images/omparvat_2.webp",
  darma: "/public/images/darma_valley.webp",
  munsiyari:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
  manaskhand:
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80&auto=format&fit=crop",
  johar:
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",

  // founders portrait
  founders:
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1000&q=80&auto=format&fit=crop",

  // temples (manaskhand circuit)
  kainchi: "public/images/kaichi_dham.webp",
  chitai: "public/images/chitai_golu_devta.webp",
  jageshwar: "public/images/jageshwar_dham.webp",
  patal: "public/images/patal_bhuvneshwar.webp",

  // gallery — Adi Kailash & Om Parvat (5 photos)
  ak1: "/public/images/omparvat_4.webp",
  ak2: "/public/images/omparvat_2.webp",
  ak3: "/public/images/omparvat_3.webp",
  ak4: "/public/images/omparvat_1.webp",
  ak5: "/public/images/omparvat_5.webp",

  // gallery — Darma Valley (5 photos)
  da1: "public/images/darma_valley.webp",
  da2: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80&auto=format&fit=crop",
  da3: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&q=80&auto=format&fit=crop",
  da4: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1000&q=80&auto=format&fit=crop",
  da5: "https://images.unsplash.com/photo-1502519144081-acca18599776?w=1000&q=80&auto=format&fit=crop",

  // gallery — Munsiyari (5 photos)
  mu1: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80&auto=format&fit=crop",
  mu2: "https://images.unsplash.com/photo-1551636898-47668aa61de2?w=1000&q=80&auto=format&fit=crop",
  mu3: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&q=80&auto=format&fit=crop",
  mu4: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1000&q=80&auto=format&fit=crop",
  mu5: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop",

  // gallery — Manaskhand Circuit (5 photos)
  ma1: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1000&q=80&auto=format&fit=crop",
  ma2: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&q=80&auto=format&fit=crop",
  ma3: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1000&q=80&auto=format&fit=crop",
  ma4: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=1000&q=80&auto=format&fit=crop",
  ma5: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&q=80&auto=format&fit=crop",

  // gallery — Johar Valley (5 photos)
  jo1: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=80&auto=format&fit=crop",
  jo2: "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?w=1000&q=80&auto=format&fit=crop",
  jo3: "https://images.unsplash.com/photo-1486591038211-a0aacaecc94f?w=1000&q=80&auto=format&fit=crop",
  jo4: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1000&q=80&auto=format&fit=crop",
  jo5: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80&auto=format&fit=crop",
};

// Themed photo placeholder — lazy-loads via IntersectionObserver.
// Pass eager={true} for above-the-fold images (e.g. hero) to skip lazy loading.
const Photo = ({
  src,
  alt,
  caption,
  style,
  lift = false,
  eager = false,
  className = "",
  children,
}) => {
  const ref = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!src) return;

    const load = () => {
      const img = new Image();
      img.onload = () => {
        setImgSrc(src);
        setReady(true);
      };
      img.src = src;
    };

    if (eager) {
      load();
      return;
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src, eager]);

  return (
    <div
      ref={ref}
      className={`photo ${lift ? "photo--lift" : ""} ${className}`}
      style={style}
      role="img"
      aria-label={alt || caption || ""}
    >
      <div
        className={`photo__img ${ready ? "photo__img--ready" : "photo__img--skeleton"}`}
        style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : {}}
      />
      <div className="photo__shade" />
      {caption && <div className="photo__caption">{caption}</div>}
      {children}
    </div>
  );
};

// Decorative SVG: layered mountain ranges (hero foreground)
const HeroMountains = () => (
  <svg
    viewBox="0 0 1600 520"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "62%",
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    <defs>
      <linearGradient id="m1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#a3bcd0" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#7c9bb6" stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id="m2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#5b7a96" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#365373" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="m3" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#1f3a55" />
        <stop offset="100%" stopColor="#0e2a45" />
      </linearGradient>
      <linearGradient id="snow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
      </linearGradient>
    </defs>

    {/* far range */}
    <path
      d="M0,360 L120,240 L220,300 L320,180 L420,250 L520,140 L640,260 L760,160 L880,240 L980,170 L1100,260 L1220,180 L1340,250 L1460,170 L1600,240 L1600,520 L0,520 Z"
      fill="url(#m1)"
    />
    {/* snow caps on far range */}
    <path
      d="M300,200 L320,180 L350,210 Z M500,170 L520,140 L555,180 Z M740,190 L760,160 L795,200 Z M960,200 L980,170 L1015,210 Z M1200,210 L1220,180 L1255,225 Z M1440,200 L1460,170 L1495,215 Z"
      fill="url(#snow)"
      opacity="0.85"
    />
    {/* mid range */}
    <path
      d="M0,440 L100,360 L200,400 L320,300 L450,380 L560,320 L700,400 L820,310 L960,380 L1100,330 L1240,400 L1380,330 L1520,390 L1600,360 L1600,520 L0,520 Z"
      fill="url(#m2)"
    />
    <path
      d="M300,320 L320,300 L355,340 Z M540,340 L560,320 L595,360 Z M800,330 L820,310 L860,355 Z M1080,350 L1100,330 L1135,375 Z M1360,350 L1380,330 L1418,375 Z"
      fill="url(#snow)"
      opacity="0.7"
    />
    {/* near range (darkest silhouette) */}
    <path
      d="M0,500 L160,450 L320,485 L500,420 L680,475 L860,430 L1040,475 L1220,440 L1400,480 L1600,450 L1600,520 L0,520 Z"
      fill="url(#m3)"
    />
  </svg>
);

// Small Om Parvat illustrative SVG: a triangular peak with snow forming "ॐ" hint
const OmPeakIcon = ({ size = 64, color = "#13283c" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M32 8 L58 56 L6 56 Z" fill={color} opacity="0.92" />
    <path
      d="M22 38 Q26 30 32 32 Q38 34 36 42 Q34 48 28 47 Q22 46 22 38 Z M40 30 Q44 28 46 32 Q47 36 43 36"
      fill="white"
      opacity="0.95"
    />
    <circle cx="44" cy="22" r="2" fill="white" opacity="0.95" />
  </svg>
);

// Topographic line ornament
const TopoLine = ({ style }) => (
  <svg
    width="100%"
    height="40"
    viewBox="0 0 800 40"
    preserveAspectRatio="none"
    style={style}
  >
    <path
      d="M0,20 C100,10 200,30 300,20 C400,10 500,30 600,20 C700,10 800,25 800,20"
      stroke="currentColor"
      strokeOpacity="0.25"
      strokeWidth="1"
      strokeDasharray="2 6"
      fill="none"
    />
    <path
      d="M0,28 C120,18 220,38 320,28 C420,18 520,38 620,28 C720,18 800,32 800,28"
      stroke="currentColor"
      strokeOpacity="0.18"
      strokeWidth="1"
      strokeDasharray="2 6"
      fill="none"
    />
  </svg>
);

// Compass / route mark
const CompassMark = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <circle
      cx="9"
      cy="9"
      r="7.5"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.6"
    />
    <path d="M9 2 L11 9 L9 16 L7 9 Z" fill="currentColor" opacity="0.85" />
    <circle cx="9" cy="9" r="1.4" fill="currentColor" />
  </svg>
);

// Reveal-on-scroll wrapper (uses IntersectionObserver)
const Reveal = ({ children, delay = 0, as: As = "div", style, ...rest }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <As
      ref={ref}
      className={`reveal ${shown ? "in" : ""}${rest.className ? " " + rest.className : ""}`}
      style={style}
    >
      {children}
    </As>
  );
};

// Phone / wa / mail icons (inline SVG, simple stroke)
const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.36-1.3a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "wa":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.4 8.4 0 0 1-1.2 4.3L21 21l-5.3-1.4a8.5 8.5 0 1 1 5.3-8.1Z" />
          <path d="M8 9.5c0 4 3 7 7 7" />
        </svg>
      );
    case "ig":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill={color} />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 12l5 5 9-12" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...props}>
          <path d="M5 12h14" />
        </svg>
      );
    case "elevation":
      return (
        <svg {...props}>
          <path d="M3 18l5-7 4 5 3-4 6 8H3z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M22 19a4.5 4.5 0 0 0-6-4.2" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M14 10l-1 4-4 1 1-4 4-1z" fill={color} />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M5 21c8 0 14-6 14-14V4h-3C8 4 4 9 4 16c0 2 .5 3.5 1 5z" />
          <path d="M5 21c5-7 9-10 14-13" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" />
        </svg>
      );
    default:
      return null;
  }
};

Object.assign(window, {
  FK_ImageSlot,
  Photo,
  PHOTOS,
  HeroMountains,
  OmPeakIcon,
  TopoLine,
  CompassMark,
  Reveal,
  Icon,
});

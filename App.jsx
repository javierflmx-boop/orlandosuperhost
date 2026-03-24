import { useState } from "react";

/* ─────────────────────────────────────────────────────
   🎨 BRAND COLORS
───────────────────────────────────────────────────── */
const ORANGE = "#E8601C";
const BG     = "#111111";
const CARD   = "#1A1A1A";
const CARD2  = "#222222";
const TEXT   = "#F0EDE8";
const MUTED  = "#777770";
const WHITE  = "#FAFAFA";

/* ─────────────────────────────────────────────────────
   🚗 YOUR CARS
   Add each car like this:
   { name: "Tesla Model S", year: "2024", img: "https://your-photo.com/car.jpg" }
───────────────────────────────────────────────────── */
const CARS = [
  // ADD YOUR CARS HERE
];

/* ─────────────────────────────────────────────────────
   🏡 YOUR HOMES
   Add each home like this:
   { name: "Pool Villa", area: "Dr. Phillips", beds: 4, baths: 3, img: "https://..." }
───────────────────────────────────────────────────── */
const HOMES = [
  // ADD YOUR HOMES HERE
];

/* ─────────────────────────────────────────────────────
   🔗 YOUR LINKS — replace with real URLs
───────────────────────────────────────────────────── */
const TURO_URL   = "https://turo.com";
const AIRBNB_URL = "https://airbnb.com";
const WHATSAPP   = "https://wa.me/1407000000";

/* ═══════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════ */

function Logo() {
  return (
    <div style={{ textAlign: "center", padding: "28px 0 20px" }}>
      <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.55em", color: ORANGE, textTransform: "uppercase" }}>
        Orlando Superhost
      </div>
    </div>
  );
}

function BackHeader({ tag, onBack }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,.06)", background: BG, position: "sticky", top: 0, zIndex: 50 }}>
      <button onClick={onBack} style={{ background: "none", border: "1px solid rgba(232,96,28,.4)", borderRadius: 30, padding: "7px 16px", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: ORANGE, cursor: "pointer" }}>
        ← Back
      </button>
      <div style={{ fontSize: 10, letterSpacing: "0.45em", color: TEXT, textTransform: "uppercase" }}>Orlando Superhost</div>
      <div style={{ fontSize: 9, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", minWidth: 50, textAlign: "right" }}>{tag}</div>
    </div>
  );
}

/* ── LANDING ─────────────────────────────────────── */
function Landing({ onGo }) {
  const [hov, setHov] = useState(null);

  const Tile = ({ id, label, sub, style = {} }) => (
    <div
      onClick={() => onGo(id)}
      onMouseEnter={() => setHov(id)}
      onMouseLeave={() => setHov(null)}
      style={{
        borderRadius: 28, background: CARD, cursor: "pointer",
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "24px 24px 22px",
        transition: "transform .22s ease, box-shadow .22s ease",
        transform: hov === id ? "scale(0.97)" : "scale(1)",
        boxShadow: hov === id
          ? `0 0 0 2px ${ORANGE}, 0 8px 28px rgba(232,96,28,.15)`
          : "0 2px 12px rgba(0,0,0,.5)",
        ...style,
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: ORANGE, opacity: hov === id ? 1 : 0, transition: "opacity .2s" }} />
      <div style={{ fontSize: 9, letterSpacing: "0.35em", color: ORANGE, textTransform: "uppercase", marginBottom: 8 }}>{sub}</div>
      <div style={{ fontSize: 44, fontWeight: 700, color: WHITE, letterSpacing: "-0.02em", lineHeight: 1 }}>{label}</div>
      <div style={{ position: "absolute", bottom: 22, right: 22, fontSize: 18, color: ORANGE, opacity: hov === id ? 1 : 0.3, transition: "opacity .2s" }}>→</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", padding: "0 16px 28px" }}>
      <Logo />
      <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 480, margin: "0 auto", width: "100%", flex: 1 }}>
        <Tile id="cars" label="Cars" sub="Tap to see the fleet" style={{ height: 220 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <Tile id="homes"  label="Homes"  sub="Rentals"     style={{ height: 185 }} />
          <Tile id="airbnb" label="Airbnb" sub="Short stays" style={{ height: 185 }} />
        </div>
        <div
          onClick={() => window.open(WHATSAPP, "_blank")}
          style={{ borderRadius: 18, background: CARD2, padding: "15px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", border: "1px solid rgba(232,96,28,.12)" }}
        >
          <div style={{ fontSize: 9, letterSpacing: "0.3em", color: MUTED, textTransform: "uppercase" }}>Questions?</div>
          <div style={{ fontSize: 9, letterSpacing: "0.3em", color: ORANGE, textTransform: "uppercase" }}>WhatsApp Us →</div>
        </div>
      </div>
    </div>
  );
}

/* ── CARS ──────────────────────────────────────────── */
function CarsPage({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <BackHeader tag="Cars" onBack={onBack} />
      <div style={{ padding: "28px 16px 8px" }}>
        <div style={{ fontSize: 9, letterSpacing: "0.4em", color: ORANGE, textTransform: "uppercase", marginBottom: 10 }}>Our Fleet · Orlando FL</div>
        <div style={{ fontSize: 32, fontWeight: 700, color: WHITE, marginBottom: 24, letterSpacing: "-0.01em" }}>Luxury Cars</div>
      </div>
      <div style={{ padding: "0 16px 40px", display: "flex", flexDirection: "column", gap: 10 }}>
        {CARS.length === 0
          ? <EmptyState icon="🚗" text="Your cars will show here" sub="Add your vehicles in App.jsx" />
          : CARS.map((c, i) => <CarCard key={i} car={c} />)
        }
        <LinkTile href={TURO_URL} label="See all cars on Turo" />
      </div>
    </div>
  );
}

function CarCard({ car }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderRadius: 22, overflow: "hidden", position: "relative", height: 155, background: CARD, cursor: "pointer", transition: "transform .22s", transform: hov ? "scale(0.985)" : "scale(1)", boxShadow: hov ? `0 0 0 1.5px ${ORANGE}` : "0 2px 10px rgba(0,0,0,.4)" }}
    >
      {car.img
        ? <img src={car.img} alt={car.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.4) saturate(.5)" }} />
        : <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#1e1e1e,#2a2a2a)" }} />
      }
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,14,14,.92) 0%, transparent 65%)" }} />
      <div style={{ position: "absolute", inset: 0, padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: WHITE, marginBottom: 3 }}>{car.name}</div>
        <div style={{ fontSize: 8, letterSpacing: "0.2em", color: MUTED, marginBottom: 14 }}>{car.year}</div>
        <a href={TURO_URL} target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: ORANGE, border: "1px solid rgba(232,96,28,.4)", borderRadius: 12, padding: "5px 12px", background: "rgba(232,96,28,.08)", textDecoration: "none", width: "fit-content" }}>
          Book on Turo →
        </a>
      </div>
    </div>
  );
}

/* ── HOMES ─────────────────────────────────────────── */
function HomesPage({ onBack }) {
  const [modal, setModal] = useState(null);
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <BackHeader tag="Homes" onBack={onBack} />
      <div style={{ padding: "28px 16px 8px" }}>
        <div style={{ fontSize: 9, letterSpacing: "0.4em", color: ORANGE, textTransform: "uppercase", marginBottom: 10 }}>Rentals · Orlando FL</div>
        <div style={{ fontSize: 32, fontWeight: 700, color: WHITE, marginBottom: 24, letterSpacing: "-0.01em" }}>Our Homes</div>
      </div>
      <div style={{ padding: "0 16px 40px", display: "flex", flexDirection: "column", gap: 10 }}>
        {HOMES.length === 0
          ? <EmptyState icon="🏡" text="Your homes will show here" sub="Add your properties in App.jsx" />
          : HOMES.map((h, i) => <HomeCard key={i} home={h} onAvail={() => setModal(h)} />)
        }
      </div>
      {modal && <AvailModal home={modal} onClose={() => setModal(null)} />}
    </div>
  );
}

function HomeCard({ home, onAvail }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderRadius: 22, overflow: "hidden", background: CARD, cursor: "pointer", transition: "transform .22s", transform: hov ? "scale(0.985)" : "scale(1)", boxShadow: hov ? `0 0 0 1.5px ${ORANGE}` : "0 2px 10px rgba(0,0,0,.4)" }}
    >
      <div style={{ position: "relative", height: 155 }}>
        {home.img
          ? <img src={home.img} alt={home.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.55)" }} />
          : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#1e1e1e,#2a2a2a)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 36, opacity: .3 }}>🏡</span></div>
        }
      </div>
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ fontSize: 20, fontWeight: 600, color: WHITE, marginBottom: 2 }}>{home.name}</div>
        <div style={{ fontSize: 8, letterSpacing: "0.2em", color: MUTED, marginBottom: 12 }}>{home.area} · Orlando, FL</div>
        <div style={{ display: "flex", gap: 18, marginBottom: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <Stat label="Beds" value={home.beds} />
          <Stat label="Baths" value={home.baths} />
        </div>
        <button onClick={onAvail} style={{ width: "100%", padding: 10, background: "none", border: "1px solid rgba(232,96,28,.35)", borderRadius: 12, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: ORANGE, cursor: "pointer" }}>
          Check Availability →
        </button>
      </div>
    </div>
  );
}

/* ── AIRBNB ────────────────────────────────────────── */
function AirbnbPage({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <BackHeader tag="Airbnb" onBack={onBack} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: 52, marginBottom: 20, opacity: .4 }}>🏠</div>
        <div style={{ fontSize: 32, fontWeight: 700, color: WHITE, marginBottom: 10, letterSpacing: "-0.01em" }}>Superhost</div>
        <div style={{ fontSize: 9, letterSpacing: "0.3em", color: MUTED, marginBottom: 8, textTransform: "uppercase" }}>Verified · 5-Star · Instant Book</div>
        <div style={{ fontSize: 9, letterSpacing: "0.3em", color: MUTED, marginBottom: 32, textTransform: "uppercase" }}>Orlando, Florida</div>
        <LinkTile href={AIRBNB_URL} label="View all listings on Airbnb" />
      </div>
    </div>
  );
}

/* ── MODAL ─────────────────────────────────────────── */
function AvailModal({ home, onClose }) {
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.88)", backdropFilter: "blur(14px)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 200 }}>
      <div style={{ background: "#1A1A1A", borderRadius: "26px 26px 0 0", width: "100%", maxWidth: 500, padding: "26px 20px 36px", borderTop: `3px solid ${ORANGE}`, position: "relative" }}>
        <div style={{ width: 34, height: 4, borderRadius: 2, background: "rgba(255,255,255,.12)", margin: "0 auto 22px" }} />
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: MUTED, fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
        <div style={{ fontSize: 8, letterSpacing: "0.4em", textTransform: "uppercase", color: ORANGE, marginBottom: 6 }}>Availability</div>
        <div style={{ fontSize: 20, fontWeight: 600, color: WHITE, marginBottom: 22 }}>{home.name}</div>
        <div style={{ fontSize: 9, letterSpacing: "0.25em", color: MUTED, textAlign: "center", padding: "28px 0", textTransform: "uppercase" }}>
          Add your available dates here
        </div>
        <button onClick={() => window.open(WHATSAPP, "_blank")}
          style={{ width: "100%", padding: 14, background: ORANGE, border: "none", borderRadius: 14, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: WHITE, cursor: "pointer", marginTop: 8 }}>
          Message Us on WhatsApp →
        </button>
      </div>
    </div>
  );
}

/* ── HELPERS ───────────────────────────────────────── */
function Stat({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 20, fontWeight: 600, color: WHITE }}>{value}</div>
      <div style={{ fontSize: 7, letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

function EmptyState({ icon, text, sub }) {
  return (
    <div style={{ borderRadius: 22, background: CARD, padding: "40px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 38, marginBottom: 14, opacity: .3 }}>{icon}</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: WHITE, marginBottom: 8 }}>{text}</div>
      <div style={{ fontSize: 9, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase" }}>{sub}</div>
    </div>
  );
}

function LinkTile({ href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 22px", borderRadius: 18, background: hov ? CARD2 : CARD, border: "1px solid rgba(232,96,28,.2)", textDecoration: "none", transition: "background .2s" }}>
      <div style={{ fontSize: 9, letterSpacing: "0.3em", color: TEXT, textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontSize: 14, color: ORANGE }}>→</div>
    </a>
  );
}

/* ── ROOT ──────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState("landing");
  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {page === "landing" && <Landing onGo={setPage} />}
      {page === "cars"    && <CarsPage    onBack={() => setPage("landing")} />}
      {page === "homes"   && <HomesPage   onBack={() => setPage("landing")} />}
      {page === "airbnb"  && <AirbnbPage  onBack={() => setPage("landing")} />}
    </div>
  );
}

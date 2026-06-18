import { useState, useEffect, useRef } from "react";

// ==========================================
// 1. ASSETS & DATA
// ==========================================
import cmdCatLogo from "./assets/CMD Cat Logo.png";
import characterModel3D from "./assets/3D Character Model.png";
import cowboyCharacter from "./assets/Cowboy Character.PNG";
import flowerCollection from "./assets/Flower Collection.jpg";
import flowerCharacter from "./assets/Flower Character.PNG";
import tulipPainting from "./assets/Tulip Painting.PNG";
import flowerScene3D from "./assets/3D Flower Scene.png";
import catCharacter from "./assets/Cat Character.JPEG";
import characterDuo from "./assets/Character Duo.png";
import ratCharacter from "./assets/rat character.PNG";
import canvasCharacterOther from "./assets/Canvas Character Other.jpeg";
import scareAudio from "./assets/dragon-studio-cartoon-lion-roar-487672.mp3";
import heroImg from "./assets/CMD Cat Logo.png"; 

const ARTWORKS = [
  { id: 1, title: "CMD Cat Logo", category: "Illustrator", image: cmdCatLogo },
  { id: 2, title: "3D Character Model", category: "Blender", image: characterModel3D },
  { id: 3, title: "Cowboy Character", category: "Procreate", image: cowboyCharacter },
  { id: 4, title: "Flower Collection", category: "Illustrator", image: flowerCollection },
  { id: 5, title: "Flower Character", category: "Procreate", image: flowerCharacter },
  { id: 6, title: "Tulip Painting", category: "Procreate", image: tulipPainting },
  { id: 7, title: "3D Flower Scene", category: "Blender", image: flowerScene3D },
  { id: 8, title: "Cat Character", category: "Procreate", image: catCharacter },
  { id: 9, title: "Character Duo", category: "Procreate", image: characterDuo },
  { id: 10, title: "Rat Character", category: "Procreate", image: ratCharacter },
  { id: 11, title: "Canvas Character", category: "Other", image: canvasCharacterOther },
];

const CATEGORIES = ["All", "Illustrator", "Blender", "Procreate", "Other"];

// ==========================================
// 2. SUB-COMPONENTS (Fixing the Large Component Issue)
// ==========================================

// Extracts the massive CSS block out of the main logic
function Y2KStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; margin: 0; padding: 0; cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFFF00"/><stop offset="100%" stop-color="%23FF8800"/></linearGradient></defs><path fill="url(%23g)" stroke="%23FF00FF" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path fill="none" stroke="%23FFFFFF" stroke-width="1" d="M12 4l2.5 5.5L19 10l-4 3.5 1 5.5-4-2.5-4 2.5 1-5.5-4-3.5 4.5-.5z" opacity="0.6"/></svg>') 16 16, auto !important; }
      body { background-color: #000; background-image: radial-gradient(#ff00ff 1px, transparent 1px), radial-gradient(#00ffff 1px, transparent 1px); background-size: 40px 40px; background-position: 0 0, 20px 20px; color: #39ff14; font-family: "Comic Sans MS", "Chalkboard SE", sans-serif; line-height: 1.6; overflow-x: hidden; }
      .glitter-star { position: absolute; pointer-events: none; color: #ff00ff; text-shadow: 0 0 10px #00ffff, 0 0 20px #fff; font-size: 24px; z-index: 9998; transform: translate(-50%, -50%); animation: fallAndFade 1s linear forwards; }
      @keyframes fallAndFade { 0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; } 100% { transform: translate(-50%, 100px) scale(0) rotate(180deg); opacity: 0; } }
      img { max-width: 100%; height: auto; display: block; border: 3px solid #ff00ff; filter: contrast(1.2) saturate(1.5); }
      img:hover { filter: invert(1); }
      .container { max-width: 1000px; margin: 20px auto; padding: 2rem 1.5rem; background-color: rgba(0, 0, 0, 0.85); border: 4px dashed #00ffff; box-shadow: 0 0 20px #ff00ff, inset 0 0 20px #00ffff; }
      h1, h2, h3 { color: #00ffff; text-shadow: 3px 3px #ff00ff; letter-spacing: 2px; text-transform: uppercase; }
      .blink { animation: blinker 1s linear infinite; }
      @keyframes blinker { 50% { opacity: 0; } }
      .marquee-container { background: #ff00ff; color: #fff; border: 2px solid #00ffff; padding: 5px; overflow: hidden; white-space: nowrap; margin-bottom: 2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 4px; }
      .marquee-content { display: inline-block; animation: scroll 15s linear infinite; }
      @keyframes scroll { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
      .ascii { font-family: 'Courier New', Courier, monospace; color: #ff00ff; white-space: pre; text-align: center; line-height: 1.1; margin-bottom: 1rem; text-shadow: 0 0 5px #ff00ff; }
      header { text-align: center; margin-bottom: 2rem; }
      nav { display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; }
      nav a { color: #ffff00; font-weight: 900; text-decoration: underline; font-size: 1.2rem; }
      nav a:hover { color: #ff00ff; background: #ffff00; text-decoration: none; }
      .hero { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 4rem; align-items: center; text-align: center; }
      .hero p { font-size: 1.2rem; font-family: 'Courier New', monospace; border: 1px dotted #39ff14; padding: 10px; }
      .hero-img-wrap { padding: 10px; background: repeating-linear-gradient(45deg, #000, #000 10px, #ff00ff 10px, #ff00ff 20px); }
      @media (min-width: 768px) { .hero { flex-direction: row; text-align: left; } .hero > div { flex: 1; } }
      .filters { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; justify-content: center; }
      .filter-btn { background: #000; color: #00ffff; border: 2px outset #00ffff; padding: 8px 15px; font-size: 1rem; font-family: 'Comic Sans MS'; font-weight: bold; }
      .filter-btn:active { border-style: inset; }
      .filter-btn:hover { background: #00ffff; color: #000; }
      .filter-btn.active { background: #ff00ff; color: #fff; border-color: #ff00ff; }
      .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 4rem; }
      .card { background: #111; border: 2px dashed #39ff14; padding: 10px; text-align: center; }
      .card-img-wrap { background: #000; aspect-ratio: 1 / 1; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; overflow: hidden; }
      .card-img-wrap img { object-fit: contain; max-height: 100%; border: none; }
      .card h3 { font-size: 1.1rem; margin-bottom: 0.25rem; color: #ffff00; text-shadow: none; }
      .card span { font-size: 0.85rem; color: #ff00ff; font-family: 'Courier New', monospace; }
      footer { border-top: 5px double #00ffff; padding-top: 2rem; text-align: center; font-size: 1rem; color: #ffff00; }
      .idle-cat-container { position: fixed; bottom: 20px; right: 30px; z-index: 9999; display: flex; flex-direction: column; align-items: center; pointer-events: none; }
      .jumping-sprite { animation: megaJump 0.4s infinite alternate cubic-bezier(0.33, 1, 0.68, 1); }
      @keyframes megaJump { 0% { transform: translateY(0) scale(1.15, 0.85); } 20% { transform: translateY(-30px) scale(0.9, 1.1); } 100% { transform: translateY(-150px) scale(1, 1); } }
      .idle-alert-box { background: #000; color: #ff00ff; border: 2px solid #00ffff; padding: 5px 10px; margin-top: 10px; font-family: 'Courier New', monospace; font-weight: bold; font-size: 1.2rem; }
      .scare-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 100000; pointer-events: none; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.95); }
      .scare-img { width: 100vw; height: 100vh; object-fit: cover; border: none; filter: none; mix-blend-mode: hard-light; transform: scale(1.5); animation: creepIn 0.3s ease-out forwards, subtleShake 0.1s infinite alternate; }
      @keyframes creepIn { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1.1); opacity: 1; } }
      @keyframes subtleShake { 0% { transform: scale(1.1) translate(3px, 3px); } 100% { transform: scale(1.1) translate(-3px, -3px); } }
    `}</style>
  );
}

// Manages the cursor effect independently
function GlitterCursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const star = document.createElement("div");
      star.className = "glitter-star";
      star.style.left = `${e.pageX}px`;
      star.style.top = `${e.pageY}px`;
      star.innerHTML = "★"; 
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 1000);
    };

    // FIXED: Made touchstart and scroll listeners passive
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
    };
  }, []);
  
  return null;
}

// Isolates all complex idle and audio logic away from UI rendering
function IdleManager() {
  const [isIdle20, setIsIdle20] = useState(false);
  const [isIdle50, setIsIdle50] = useState(false);
  
  const scareAudioRef = useRef(null);
  const audioUnlocked = useRef(false);

  useEffect(() => {
    const unlocking = { current: false }; 
    const unlock = () => {
      if (audioUnlocked.current || unlocking.current || !scareAudioRef.current) return;
      unlocking.current = true;
      const a = scareAudioRef.current;
      a.muted = true;
      a.play()
        .then(() => {
          a.pause();
          a.currentTime = 0;
          a.muted = false;
          audioUnlocked.current = true;
        })
        .catch(() => {})
        .finally(() => { unlocking.current = false; });
    };

    // FIXED: Touchstart is now passive
    window.addEventListener("click", unlock);
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock, { passive: true });
    
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  useEffect(() => {
    let timeout20;
    let timeout50;

    const startTimers = () => {
      clearTimeout(timeout20);
      clearTimeout(timeout50);
      timeout20 = setTimeout(() => setIsIdle20(true), 20000);
      timeout50 = setTimeout(() => setIsIdle50(true), 50000);
    };

    const resetTimer = () => {
      // FIXED: Only update state if it is currently true (prevents double mount renders)
      setIsIdle20(prev => { if (prev) return false; return prev; });
      setIsIdle50(prev => { if (prev) return false; return prev; });
      startTimers();
    };

    // FIXED: Added passive flags to scrolling/touching to improve mobile performance
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('mousedown', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer, { passive: true });
    window.addEventListener('touchstart', resetTimer, { passive: true });

    // Just start the timers on mount, don't trigger state setters
    startTimers();

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('mousedown', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
      clearTimeout(timeout20);
      clearTimeout(timeout50);
    };
  }, []);

  useEffect(() => {
    if (!scareAudioRef.current) return;
    if (isIdle50) {
      scareAudioRef.current.currentTime = 0;
      scareAudioRef.current.play().catch(console.warn);
    } else {
      scareAudioRef.current.pause();
      scareAudioRef.current.currentTime = 0;
    }
  }, [isIdle50]);

  return (
    <>
      <audio ref={scareAudioRef} src={scareAudio} loop preload="auto" style={{ display: "none" }} />

      {isIdle20 && !isIdle50 && (
        <div className="idle-cat-container">
          <div className="jumping-sprite">
            <img src={cmdCatLogo} alt="Jumping Idle Cat" style={{ width: "120px", border: "none", filter: "none", boxShadow: "none" }} />
          </div>
          <div className="idle-alert-box blink">WAKE UP!!</div>
        </div>
      )}

      {isIdle50 && (
        <div className="scare-overlay">
          <img className="scare-img" src="https://media.tenor.com/6oKfSmPfTW0AAAAC/deepfriedwoomy.gif" alt="FNAF Foxy Jumpscare" />
        </div>
      )}
    </>
  );
}


// ==========================================
// 3. MAIN COMPONENT (Now clean and readable!)
// ==========================================
export default function App() {
  const [filter, setFilter] = useState("All");

  const displayedArt = filter === "All"
    ? ARTWORKS
    : ARTWORKS.filter((art) => art.category === filter);

  return (
    <>
      <Y2KStyles />
      <GlitterCursor />
      <IdleManager />

      <div className="container">
        
        <div className="marquee-container">
          <div className="marquee-content">
            ★彡 WELCOME TO KATRIN'S CMD CYBERSPACE ~ UNDER CONSTRUCTION ~ BEST VIEWED IN NETSCAPE NAVIGATOR 彡★
          </div>
        </div>

        <header>
          <div className="ascii">
{`   |\\__/,|   (\`\\
 _.|o o  |_   ) )
-(((---(((--------`}
          </div>
          <h1 className="blink">xX_K4TR1N.N_Xx</h1>
          <div style={{ color: "#39ff14", marginTop: "0.5rem", fontFamily: "'Courier New', monospace" }}>
            [ CMD PORTFOLIO ARCHIVE v1.0 ]
          </div>
          <nav>
            <a href="#work">[ ~ W O R K ~ ]</a>
            <a href="#about">[ ~ I N F O ~ ]</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div>
              <h2 style={{ marginBottom: "1rem" }}>&gt; INITIALIZING...</h2>
              <p>
                Welcome to my digital lair. First year, period one showcase. 
                Curated creations exploring illustration, 3D environments, and foundational design tooling.
                <br/><br/>
                <span style={{ color: "#ff00ff" }}>STATUS: ONLINE</span>
              </p>
            </div>
            <div className="hero-img-wrap">
              <img src={heroImg} alt="Cyber Cat Logo" />
            </div>
          </section>

          <section id="work">
            <div style={{ borderBottom: "3px dashed #00ffff", paddingBottom: "1rem", marginBottom: "1.5rem", textAlign: "center" }}>
              <h2>~ S3L3CT3D_W0RKS.exe ~</h2>
            </div>
            
            <div className="filters">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                >
                  [{cat}]
                </button>
              ))}
            </div>

            <div className="gallery">
              {displayedArt.map((art) => (
                <article key={art.id} className="card">
                  <div className="card-img-wrap">
                    <img src={art.image} alt={art.title} loading="lazy" />
                  </div>
                  <div>
                    <h3>{art.title}</h3>
                    <span>FILE: {art.category}.dat</span>
                  </div>
                </article>
              ))}
            </div>

            {displayedArt.length === 0 && (
              <div style={{ color: "#ff00ff", padding: "3rem 0", textAlign: "center", border: "2px dotted #ff00ff" }}>
                <div className="ascii" style={{ fontSize: "2rem" }}>¯\_(ツ)_/¯</div>
                <h3 className="blink">404: NO FILES FOUND</h3>
              </div>
            )}
          </section>

          <section id="about" style={{ marginBottom: "4rem", textAlign: "center", border: "2px solid #39ff14", padding: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>&gt; WHOAMI</h2>
            
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
               <img src={catCharacter} alt="My Cat Persona" style={{ width: "150px", borderRadius: "50%" }} />
            </div>

            <p style={{ fontFamily: "'Courier New', monospace" }}>
              I am currently a first-year student studying <strong>Communication and Multimedia Design (CMD)</strong> at NHL Stenden in Leeuwarden. 
              Equipped with a background in digital painting via Procreate, I am fast-tracking my skills across complex 3D environments in Blender and asset production in Adobe Illustrator.
            </p>
            <div className="ascii" style={{ marginTop: "2rem", color: "#00ffff" }}>
{` (\\_/)
(='.'=)
(")_(")`}
            </div>
          </section>
        </main>

        <footer>
          <p className="blink">© 2026 Katrin Nakonechna</p>
          <p>NHL Stenden - Friesland</p>
          <p style={{ marginTop: "10px", fontSize: "0.7rem", fontFamily: "sans-serif" }}>
            Hit counter: <span style={{ background: "#000", color: "#ff00ff", padding: "2px", border: "1px inset #fff" }}>001337</span>
          </p>
        </footer>
      </div>
    </>
  );
}
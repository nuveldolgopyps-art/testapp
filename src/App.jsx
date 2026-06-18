import { useState } from "react";

// ==========================================
// 1. ASSETS
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
import heroImg from "./assets/hero.png";

// ==========================================
// 2. DATA
// ==========================================
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
// 3. MAIN COMPONENT
// ==========================================
export default function App() {
  const [filter, setFilter] = useState("All");

  const displayedArt = filter === "All"
    ? ARTWORKS
    : ARTWORKS.filter((art) => art.category === filter);

  return (
    <>
      {/* INJECTED RESPONSIVE CSS */}
      <style>{`
        /* Global Reset */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
          background-color: #ffffff; 
          color: #111111; 
          line-height: 1.6;
        }
        
        /* Make all images responsive so they never break out of their containers */
        img { max-width: 100%; height: auto; display: block; }

        /* Main Layout constraints */
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }

        /* Header Layout */
        header { 
          display: flex; flex-direction: column; gap: 1rem; 
          border-bottom: 2px solid #111; padding-bottom: 1.5rem; margin-bottom: 3rem; 
        }
        .header-title { font-size: 1.5rem; font-weight: 800; text-transform: uppercase; letter-spacing: -0.05em; }
        nav { display: flex; gap: 1.5rem; }
        nav a { color: #111; font-weight: 600; text-decoration: none; text-transform: uppercase; font-size: 0.85rem; }
        nav a:hover { text-decoration: underline; text-underline-offset: 4px; }

        /* Media Query: Desktop Header */
        @media (min-width: 768px) {
          header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
        }

        /* Hero Layout */
        .hero { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 5rem; }
        .hero p { font-size: 1.25rem; color: #444; max-width: 600px; }
        .hero-img-wrap { border: 1px solid #e5e5e5; padding: 0.5rem; background: #fafafa; }
        
        /* Media Query: Desktop Hero */
        @media (min-width: 768px) {
          .hero { flex-direction: row; align-items: center; }
          .hero > div { flex: 1; }
        }

        /* Filters */
        .filters { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem; align-items: center; }
        .filters strong { text-transform: uppercase; font-size: 0.85rem; margin-right: 0.5rem; }
        .filter-btn {
          background: #fff; border: 1px solid #ccc; padding: 0.5rem 1rem; 
          cursor: pointer; font-size: 0.85rem; border-radius: 4px; transition: all 0.2s;
        }
        .filter-btn:hover { border-color: #111; }
        .filter-btn.active { background: #111; color: #fff; border-color: #111; }

        /* Gallery Grid */
        .gallery { 
          display: grid; 
          /* This makes the grid responsive. Images will never be smaller than 280px, but will fill available space */
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          gap: 2.5rem; 
          margin-bottom: 5rem; 
        }
        .card-img-wrap {
          background: #f9f9f9; 
          border: 1px solid #eaeaea; 
          /* Forces all image boxes to be the same height ratio */
          aspect-ratio: 4 / 3; 
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem; margin-bottom: 1rem;
        }
        .card-img-wrap img {
          max-height: 100%; object-fit: contain; 
        }
        .card h3 { font-size: 1.1rem; margin-bottom: 0.25rem; }
        .card span { font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 0.05em; }

        /* Footer */
        footer { 
          border-top: 1px solid #eaeaea; padding-top: 2rem; 
          display: flex; justify-content: space-between;
          font-size: 0.85rem; color: #666; text-transform: uppercase;
        }
      `}</style>

      {/* HTML STRUCTURE */}
      <div className="container">
        
        <header>
          <div>
            <div className="header-title">Katrin.N</div>
            <div style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.25rem" }}>
              CMD Portfolio Archive
            </div>
          </div>
          <nav>
            <a href="#work">Index</a>
            <a href="#about">Info</a>
          </nav>
        </header>

        <main>
          {/* HERO SECTION */}
          <section className="hero">
            <div>
              <p>
                First year, period one showcase. Curated creations exploring illustration, 3D environments, and foundational design tooling.
              </p>
            </div>
            <div className="hero-img-wrap">
              <img src={heroImg} alt="Hero Banner" />
            </div>
          </section>

          {/* WORK SECTION */}
          <section id="work">
            <div style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "1rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Selected Works</h2>
            </div>
            
            <div className="filters">
              <strong>Filter:</strong>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                >
                  {cat}
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
                    <span>{art.category}</span>
                  </div>
                </article>
              ))}
            </div>

            {displayedArt.length === 0 && (
              <p style={{ color: "#666", padding: "3rem 0", textAlign: "center", border: "1px dashed #ccc" }}>
                No items match this filter.
              </p>
            )}
          </section>

          {/* ABOUT SECTION */}
          <section id="about" style={{ marginBottom: "4rem", maxWidth: "700px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>About</h2>
            <p style={{ color: "#444" }}>
              I am currently a first-year student studying <strong>Communication and Multimedia Design (CMD)</strong> at NHL Stenden in Leeuwarden. 
              Equipped with a background in digital painting via Procreate, I am fast-tracking my skills across complex 3D environments in Blender and asset production in Adobe Illustrator.
            </p>
          </section>
        </main>

        <footer>
          <span>© 2026 Katrin Nakonechna</span>
          <span>NHL Stenden</span>
        </footer>

      </div>
    </>
  );
}
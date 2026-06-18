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
    <div className="max-w-5xl mx-auto p-4 sm:p-8 bg-white text-black font-sans">
      
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Katrin Nakonechna</h1>
        <p className="mb-4 text-lg">Communication and Multimedia Design (CMD) Portfolio</p>
        <nav className="flex gap-4">
          <a href="#work" className="text-blue-600 underline">Work</a>
          <a href="#about" className="text-blue-600 underline">About</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>
        
        {/* HERO */}
        <section className="mb-16">
          <p className="mb-4 max-w-2xl">
            First year, period one showcase. Curated creations exploring illustration, 3D environments, and design tooling.
          </p>
          <img 
            src={heroImg} 
            alt="Featured work" 
            className="w-full max-w-2xl h-auto" 
          />
        </section>

        {/* WORK / GALLERY */}
        <section id="work" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Selected Works</h2>
          
          {/* FILTER */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="font-semibold">Filter:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={filter === cat ? "font-bold underline" : "text-blue-600 underline"}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {displayedArt.map((art) => (
              <figure key={art.id} className="m-0">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-auto mb-2 bg-gray-50" 
                  loading="lazy"
                />
                <figcaption>
                  <strong>{art.title}</strong>
                  <br />
                  <span className="text-sm text-gray-600">{art.category}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {displayedArt.length === 0 && (
            <p className="text-gray-500 italic mt-8">No creations match this filter.</p>
          )}
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-16 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I am currently a first-year student studying Communication and Multimedia Design (CMD) at NHL Stenden in Leeuwarden. 
          </p>
          <p>
            Equipped with a background in digital painting via Procreate, I am fast-tracking my skills across complex 3D environments in Blender and asset production in Adobe Illustrator.
          </p>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
        <p>© 2026 Katrin Nakonechna</p>
        <p>NHL Stenden</p>
      </footer>

    </div>
  );
}
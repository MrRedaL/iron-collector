import { useState } from "react";
import { images } from "../assets/images";
import Card from "./Card";
import IronBox from "./IronBox";
import ResultScreen from "./ResultScreen";

const MAX_CLICKS = 5;

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [locked, setLocked] = useState(false);
  const [collected, setCollected] = useState<string[]>([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const currentImage = images[currentIndex];

  const handleClick = () => {
    if (locked) return;

    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= MAX_CLICKS) {
      setLocked(true);
      attemptCapture();
    }
  };

  const attemptCapture = () => {
    const success = Math.random() > 0.4;

    if (success) {
      setCollected((prev) => [...prev, currentImage]);
      setMessage("✅ Carte récupérée !");
    } else {
      setMessage("❌ Carte perdue...");
    }

    setTimeout(() => {
      setMessage(null);
      nextImage();
    }, 2000);
  };

  const nextImage = () => {
    if (currentIndex + 1 >= images.length) {
      setGameFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setClicks(0);
      setLocked(false);
    }
  };

  if (gameFinished) {
    return <ResultScreen total={images.length} collected={collected.length} />;
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h1>Iron Collector</h1>

      {/* compteur */}
      <h3>
        Cartes collectées : {collected.length} / {images.length}
      </h3>

      <p>
        Clicks: {clicks} / {MAX_CLICKS}
      </p>

      <div style={{ position: "relative" }}>
        <Card image={currentImage} onClick={handleClick} />
        {locked && <IronBox />}
      </div>

      {/* notification */}
      {message && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px 25px",
            background: "rgba(0,0,0,0.8)",
            borderRadius: "10px",
            fontSize: "20px",
            animation: "fadeIn 0.5s",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}
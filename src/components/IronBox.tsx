import "./IronBox.css";

export default function IronBox() {
  return (
    <div className="overlay">
      <div className="bars">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bar" />
        ))}
      </div>
    </div>
  );
}
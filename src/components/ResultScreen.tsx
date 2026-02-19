type Props = {
  total: number;
  collected: number;
};

export default function ResultScreen({ total, collected }: Props) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Jeu Terminé 🎉</h1>
      <p>Cartes collectées : {collected}</p>
      <p>Total des cartes : {total}</p>
      <p>Taux de réussite : {Math.round((collected / total) * 100)}%</p>
    </div>
  );
}
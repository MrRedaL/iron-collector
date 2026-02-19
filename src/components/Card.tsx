type Props = {
  image: string;
  onClick: () => void;
};

export default function Card({ image, onClick }: Props) {
  return (
    <img
        src={image}
        onClick={onClick}
        style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            cursor: "pointer",
        }}
    />
  );
}
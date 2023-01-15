export default function Stats({ headCount, middleCount, pantsCount, catchphrases }) {
  return (
    <div>
      You have changes the head {headCount} times, the body {middleCount} times, and the pants{' '}
      {pantsCount} times. And nobody can forget your characters classic catchphrases:
      <div>{catchphrases}</div>
    </div>
  );
}

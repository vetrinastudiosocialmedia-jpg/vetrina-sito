// Mostra un testo trasformando [testo](indirizzo) in un link vero.
export default function Testo({ children }) {
  const testo = String(children ?? "");
  const parti = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let ultimo = 0;
  let m;
  while ((m = re.exec(testo))) {
    if (m.index > ultimo) parti.push(testo.slice(ultimo, m.index));
    const esterno = /^https?:\/\//.test(m[2]);
    parti.push(
      <a key={m.index} href={m[2]} {...(esterno ? { rel: "noopener" } : {})}>
        {m[1]}
      </a>
    );
    ultimo = m.index + m[0].length;
  }
  if (ultimo < testo.length) parti.push(testo.slice(ultimo));
  return <>{parti}</>;
}

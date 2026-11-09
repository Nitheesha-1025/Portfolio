import type { PlateRow } from "../data/content"

export function ArchitecturePlate({ rows, caption }: { rows: PlateRow[]; caption: string }) {
  return (
    <figure className="plate plate-arch">
      <figcaption>{caption}</figcaption>
      <ol>
        {rows.map((row, index) => (
          <li key={row.label}>
            <span className="plate-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="plate-label">{row.label}</span>
            <span className="plate-detail">{row.detail}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}

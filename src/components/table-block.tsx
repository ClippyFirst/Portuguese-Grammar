import type { TableData } from "@/content/types";
import { cn } from "@/lib/cn";

export function TableBlock({ table }: { table: TableData }) {
  return (
    <figure className="my-5">
      {table.caption ? (
        <figcaption className="mb-2 text-sm font-medium text-ink-soft">{table.caption}</figcaption>
      ) : null}
      <div className={cn("table-scroll rounded-lg border border-line bg-surface")}>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-azulejo-soft">
              {table.headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="whitespace-nowrap px-3 py-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-azulejo"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-t border-line">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "px-3 py-2 align-top",
                      j === 0 ? "font-medium text-ink" : "font-mono text-[0.85rem] text-ink-soft",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note ? <p className="mt-2 text-xs text-muted">{table.note}</p> : null}
    </figure>
  );
}

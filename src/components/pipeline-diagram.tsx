// Static stand-in for the eventual operable pipeline (deferred to a later
// pass — see docs/BUILD-SPEC.md §5 / DESIGN.md §6). This is deliberately
// NOT animated or interactive: a clean, legible diagram of the real
// sequence, with the active path picked out in --signal.

const steps = [
  { id: "task", label: "Task", detail: "enters" },
  { id: "odin", label: "Odin", detail: "classifies" },
  { id: "specialist", label: "Specialist", detail: "executes" },
  { id: "gate", label: "Gate", detail: "safety check" },
  { id: "loki", label: "Loki", detail: "argues" },
  { id: "return", label: "Return", detail: "result ships" },
];

function Connector({ direction }: { direction: "right" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      width={direction === "right" ? 28 : 16}
      height={direction === "right" ? 16 : 28}
      viewBox={direction === "right" ? "0 0 28 16" : "0 0 16 28"}
      className="shrink-0 text-signal"
    >
      {direction === "right" ? (
        <path
          d="M0 8H24M24 8L18 2M24 8L18 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ) : (
        <path
          d="M8 0V24M8 24L2 18M8 24L14 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </svg>
  );
}

export function PipelineDiagram() {
  return (
    <div
      role="img"
      aria-label="Pipeline diagram: a task enters, Odin classifies it, routes to a specialist, the result hits a safety gate, Loki argues the case, then the result returns."
      className="rounded-lg border border-border bg-bg-elevated p-5"
    >
      <div className="mb-4 flex items-center gap-2 font-mono text-mono text-text-muted">
        <span
          aria-hidden="true"
          className="status-dot-live inline-block size-1.5 rounded-full bg-signal"
        />
        <span>pipeline — static preview</span>
      </div>
      <ol className="flex list-none flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
        {steps.map((step, i) => (
          <li key={step.id} className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-0.5 rounded-md border border-border-strong bg-bg-raised px-4 py-3">
              <span className="font-mono text-mono text-signal">{step.label}</span>
              <span className="text-caption text-text-muted">{step.detail}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1 sm:py-0">
                <span className="sm:hidden">
                  <Connector direction="down" />
                </span>
                <span className="hidden sm:inline-flex">
                  <Connector direction="right" />
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

import { Reveal } from "@/components/reveal";

export function GuestbookSection() {
  return (
    <section id="guestbook" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid">
        <div className="rounded-lg border border-border bg-bg-elevated p-8 sm:p-10">
          <Reveal>
            <h2 className="text-h2 font-display text-text-primary" style={{ fontWeight: 440 }}>
              Sign the ledger — coming online
            </h2>
            <p className="mt-4 max-w-[56ch] text-body text-text-secondary">
              GitHub-OAuth secured, RLS-enforced, publicly readable. A live
              demo of the same security discipline behind Syndicate — not a
              comment box, an audit trail. Backend lands in a later pass.
            </p>
          </Reveal>
          <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-dashed border-border px-3 py-1.5">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-text-muted" />
            <span className="coord-label text-text-muted">Status · Offline</span>
          </div>
        </div>
      </div>
    </section>
  );
}

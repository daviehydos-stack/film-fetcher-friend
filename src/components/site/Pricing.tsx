import { Check, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { plans, WHATSAPP_TEL, type Plan } from "@/lib/site-data";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="panel relative flex flex-col overflow-hidden rounded-2xl">
      {plan.best ? (
        <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-flame px-3 py-1 text-[11px] font-bold tracking-wider text-flame-foreground uppercase">
          <Star className="size-3 fill-current" /> Best value
        </span>
      ) : null}
      {plan.image ? (
        <img src={plan.image} alt={plan.name} loading="lazy" className="h-40 w-full object-cover" />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="headline text-2xl text-ink-foreground">{plan.name}</h3>
        <p className="mt-2 text-4xl font-bold text-flame">{plan.price}</p>
        <p className="mt-3 text-sm text-ink-foreground/75">{plan.blurb}</p>
        <ul className="mt-5 space-y-2 text-sm text-ink-foreground/85">
          {plan.perks.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-flame" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs tracking-wider text-muted-foreground uppercase">
          {plan.validity}
        </p>
        <Link
          to="/checkout/$productId"
          params={{ productId: plan.productId }}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-flame px-5 py-3 text-sm font-bold tracking-wide text-flame-foreground uppercase transition hover:brightness-110"
        >
          Select
        </Link>
      </div>
    </div>
  );
}

export function PricingSection({
  title = "Choose your plan",
  only,
}: {
  title?: string;
  only?: string[];
}) {
  const list = only ? plans.filter((p) => only.includes(p.name)) : plans;
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="eyebrow text-center">Support independent film</p>
      <h2 className="headline mt-3 text-center text-4xl text-foreground sm:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-foreground/80">
        At Avant Cinema, our vision is to create a fully independent channel; one where passionate
        storytellers can continue bringing meaningful stories to life. Every purchase moves us
        closer to that dream. Thank you for being part of our journey.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
}

export function PaymentHelp() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="panel rounded-2xl p-8">
        <p className="eyebrow">Secure checkout</p>
        <h3 className="headline mt-2 text-3xl text-ink-foreground">Pay with M-PESA</h3>
        <p className="mt-3 text-sm leading-6 text-ink-foreground/75">
          Select an access plan above. Avant will ask you to sign in with Google, then enter your
          M-PESA number. Approve the STK prompt on your phone; access is activated only after the
          backend verifies the payment.
        </p>
        <a
          href={WHATSAPP_TEL}
          className="mt-6 inline-flex rounded-md border border-flame px-5 py-3 text-sm font-bold tracking-wide text-flame uppercase hover:bg-flame hover:text-flame-foreground"
        >
          Payment support
        </a>
      </div>
    </section>
  );
}

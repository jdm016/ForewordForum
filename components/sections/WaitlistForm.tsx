"use client";

import { useRef, useState, type FormEvent } from "react";
import { CaretDown, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui";
import { waitlist } from "@/content/home";
import { site } from "@/content/site";
import { validateWaitlist, type WaitlistErrors, type WaitlistInput } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

const fieldOrder: (keyof WaitlistInput)[] = ["name", "email", "role", "message"];

const inputBase =
  "w-full rounded border bg-cream px-4 py-3 font-sans text-body text-ink md:text-body-lg placeholder:text-ink/70 transition-colors focus:border-navy";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-2 font-sans text-caption-lg text-ink">
      <WarningCircle size={20} weight="light" className="mt-px shrink-0 text-alert" aria-hidden />
      {message}
    </p>
  );
}

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-sans text-caption-lg font-semibold text-navy">
      {children}
      {optional ? <span className="ml-2 font-normal text-ink">(optional)</span> : null}
    </label>
  );
}

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<WaitlistErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const input: WaitlistInput = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      role: String(data.get("role") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const found = validateWaitlist(input);
    setErrors(found);
    const firstInvalid = fieldOrder.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, company: String(data.get("company") ?? "") }),
      });
      if (res.status === 400) {
        const body = (await res.json()) as { errors?: WaitlistErrors };
        setErrors(body.errors ?? {});
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex items-start gap-4 py-4 outline-none">
        <CheckCircle size={32} weight="light" className="shrink-0 text-bindery" aria-hidden />
        <p className="type-subtitle">{waitlist.success}</p>
      </div>
    );
  }

  const describedBy = (field: keyof WaitlistInput) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy("name")}
          className={`${inputBase} ${errors.name ? "border-2 border-alert" : "border-patina"}`}
        />
        <FieldError id="name-error" message={errors.name} />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email")}
          className={`${inputBase} ${errors.email ? "border-2 border-alert" : "border-patina"}`}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <div>
        <Label htmlFor="role">I am a...</Label>
        <div className="relative">
          <select
            id="role"
            name="role"
            required
            aria-required="true"
            defaultValue=""
            aria-invalid={errors.role ? true : undefined}
            aria-describedby={describedBy("role")}
            className={`${inputBase} appearance-none pr-12 ${errors.role ? "border-2 border-alert" : "border-patina"}`}
          >
            <option value="" disabled>
              Choose one
            </option>
            {waitlist.roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <CaretDown
            size={20}
            weight="light"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy"
            aria-hidden
          />
        </div>
        <FieldError id="role-error" message={errors.role} />
      </div>

      <div>
        <Label htmlFor="message" optional>
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={`${inputBase} resize-y ${errors.message ? "border-2 border-alert" : "border-patina"}`}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {/* Honeypot for bots. Hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="flex items-start gap-2 font-sans text-caption-lg text-ink">
          <WarningCircle size={20} weight="light" className="mt-px shrink-0 text-alert" aria-hidden />
          <span>
            Something went wrong on our end. Please try again, or write to us at {site.email}.
          </span>
        </p>
      ) : null}

      <div>
        <Button type="submit" disabled={status === "submitting"} aria-disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : waitlist.submit}
        </Button>
      </div>
    </form>
  );
}

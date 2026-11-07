"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { appointmentSchema, type AppointmentInput } from "@/lib/validations";
import { getWhatsAppAppointmentUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { WhatsAppIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

interface AppointmentFormProps {
  compact?: boolean;
  /** Pre-select a department (service slug). */
  defaultDepartment?: string;
}

export function AppointmentForm({ compact = false, defaultDepartment = "" }: AppointmentFormProps) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { department: defaultDepartment },
  });

  const watchDept = watch("department");
  const doctorOptions = watchDept ? doctors.filter((d) => d.specialtySlug === watchDept) : doctors;

  const onSubmit = (data: AppointmentInput) => {
    trackEvent("generate_lead", { method: "appointment_form", department: data.department, page: window.location.pathname });
    window.open(getWhatsAppAppointmentUrl(data), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className={cn("grid grid-cols-1 gap-5", !compact && "sm:grid-cols-2")}>
        <Field label="Full name" htmlFor={id("name")} required error={errors.name?.message}>
          <input
            id={id("name")}
            {...register("name")}
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className="form-input"
          />
        </Field>

        <Field label="Mobile number" htmlFor={id("phone")} required error={errors.phone?.message}>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[0.9375rem] text-ink-500">
              +91
            </span>
            <input
              id={id("phone")}
              {...register("phone")}
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10-digit number"
              maxLength={10}
              aria-invalid={!!errors.phone}
              className="form-input pl-12"
            />
          </div>
        </Field>
      </div>

      <div className={cn("grid grid-cols-1 gap-5", !compact && "sm:grid-cols-2")}>
        <Field label="Department" htmlFor={id("department")} required error={errors.department?.message}>
          <select
            id={id("department")}
            {...register("department")}
            aria-invalid={!!errors.department}
            className="form-input"
          >
            <option value="">Select a department</option>
            {services.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred date" htmlFor={id("date")} required error={errors.date?.message}>
          <input
            id={id("date")}
            {...register("date")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            aria-invalid={!!errors.date}
            className="form-input"
          />
        </Field>
      </div>

      {!compact && (
        <>
          <Field label="Preferred doctor" htmlFor={id("doctor")} optional>
            <select id={id("doctor")} {...register("doctor")} className="form-input">
              <option value="">Any available doctor</option>
              {doctorOptions.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name} — {d.specialty}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Notes" htmlFor={id("message")} optional>
            <textarea
              id={id("message")}
              {...register("message")}
              placeholder="Briefly describe your concern…"
              rows={3}
              className="form-input"
            />
          </Field>
        </>
      )}

      <button
        type="submit"
        className="btn-whatsapp btn-lg h-auto min-h-14 w-full whitespace-normal py-3 text-center"
      >
        <WhatsAppIcon className="w-5 h-5 shrink-0" />
        Book via WhatsApp
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={htmlFor} className="form-label">
        {label}
        {required && <span className="text-red-500"> *</span>}
        {optional && <span className="font-normal text-ink-400"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p className="form-error" role="alert">
          <AlertCircle size={13} />
          {error}
        </p>
      )}
    </div>
  );
}

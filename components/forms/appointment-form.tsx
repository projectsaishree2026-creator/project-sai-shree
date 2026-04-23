"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, AlertCircle, User, Phone, MessageSquare } from "lucide-react";
import { appointmentSchema, type AppointmentInput } from "@/lib/validations";
import { getWhatsAppAppointmentUrl } from "@/lib/whatsapp";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { cn } from "@/lib/utils";

interface AppointmentFormProps {
  compact?: boolean;
}


export function AppointmentForm({ compact = false }: AppointmentFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
  });

  const watchDept = watch("department");
  const filteredDoctors = doctors.filter(
    (d) => d.specialtySlug === watchDept || watchDept === ""
  );

  const onSubmit = (data: AppointmentInput) => {
    const url = getWhatsAppAppointmentUrl(data);
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <label className="form-label">
          <User size={13} className="inline mr-1.5 opacity-60" />
          Full Name *
        </label>
        <input
          {...register("name")}
          placeholder="Your full name"
          className={cn("form-input", errors.name && "border-red-400")}
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="form-label">
          <Phone size={13} className="inline mr-1.5 opacity-60" />
          Mobile Number *
        </label>
        <div className="flex gap-2">
          <span className="form-input w-16 flex-shrink-0 text-sm text-gray-500 bg-gray-50 flex items-center justify-center">
            +91
          </span>
          <input
            {...register("phone")}
            placeholder="10-digit mobile number"
            maxLength={10}
            className={cn("form-input flex-1", errors.phone && "border-red-400")}
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Department */}
      <div>
        <label className="form-label">Department / Specialty *</label>
        <select
          {...register("department")}
          className={cn("form-input", errors.department && "border-red-400")}
        >
          <option value="">Select a department</option>
          {services.map((s) => (
            <option key={s.id} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.department.message}
          </p>
        )}
      </div>

      {/* Doctor (optional) */}
      {!compact && (
        <div>
          <label className="form-label">Preferred Doctor (Optional)</label>
          <select {...register("doctor")} className="form-input">
            <option value="">Any available doctor</option>
            {(watchDept ? filteredDoctors : doctors).map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} — {d.specialty}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Date */}
      <div>
        <label className="form-label">
          <CalendarCheck size={13} className="inline mr-1.5 opacity-60" />
          Preferred Date *
        </label>
        <input
          {...register("date")}
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className={cn("form-input", errors.date && "border-red-400")}
        />
        {errors.date && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.date.message}
          </p>
        )}
      </div>

      {/* Message (compact hides this) */}
      {!compact && (
        <div>
          <label className="form-label">
            <MessageSquare size={13} className="inline mr-1.5 opacity-60" />
            Additional Notes (Optional)
          </label>
          <textarea
            {...register("message")}
            placeholder="Briefly describe your concern..."
            rows={3}
            className="form-input resize-none"
          />
        </div>
      )}

      {/* Submit button */}
      <div className="pt-2">
        <button
          type="submit"
          className="btn-whatsapp w-full justify-center py-3.5 text-base shadow-md hover:shadow-lg transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.843L.057 23.486a.5.5 0 0 0 .613.614l5.74-1.466A11.957 11.957 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.022-1.38l-.36-.213-3.736.954.97-3.647-.233-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          Book via WhatsApp
        </button>
      </div>
    </form>
  );
}

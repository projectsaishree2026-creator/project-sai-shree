"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, User, Phone, Mail, MessageSquare } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("success");
        reset();
        setTimeout(() => setState("idle"), 6000);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-accent" />
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          Message Sent!
        </h3>
        <p className="text-sm text-gray-500 max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="form-label"><User size={13} className="inline mr-1.5 opacity-60" />Full Name *</label>
        <input {...register("name")} placeholder="Your full name" className={cn("form-input", errors.name && "border-red-400")} />
        {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.name.message}</p>}
      </div>

      <div>
        <label className="form-label"><Phone size={13} className="inline mr-1.5 opacity-60" />Mobile Number *</label>
        <div className="flex gap-2">
          <span className="form-input w-14 shrink-0 text-sm text-gray-500 bg-gray-50 flex items-center justify-center">+91</span>
          <input {...register("phone")} placeholder="10-digit number" maxLength={10} className={cn("form-input flex-1", errors.phone && "border-red-400")} />
        </div>
        {errors.phone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.phone.message}</p>}
      </div>

      <div>
        <label className="form-label"><Mail size={13} className="inline mr-1.5 opacity-60" />Email (Optional)</label>
        <input {...register("email")} type="email" placeholder="your@email.com" className="form-input" />
      </div>

      <div>
        <label className="form-label"><MessageSquare size={13} className="inline mr-1.5 opacity-60" />Message *</label>
        <textarea {...register("message")} rows={4} placeholder="How can we help you?" className={cn("form-input resize-none", errors.message && "border-red-400")} />
        {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.message.message}</p>}
      </div>

      {state === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2 text-sm text-red-700">
          <AlertCircle size={16} /> Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button type="submit" disabled={state === "loading"} className="btn-primary w-full justify-center py-3">
        {state === "loading" ? (
          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
        ) : (
          <><Send size={16} />Send Message</>
        )}
      </button>
    </form>
  );
}

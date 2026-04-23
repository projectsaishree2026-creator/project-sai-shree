import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Log the appointment (replace with DB/email integration)
    console.log("[Appointment Request]", {
      name: data.name,
      phone: data.phone,
      department: data.department,
      doctor: data.doctor || "Any available",
      date: data.date,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with your preferred method:
    // Option 1 — Email via Resend/Nodemailer:
    //   await sendEmail({ to: CLINIC_EMAIL, subject: "New Appointment", ... })
    // Option 2 — Save to database (Prisma/Supabase):
    //   await db.appointment.create({ data })
    // Option 3 — WhatsApp Business API notification:
    //   await sendWhatsAppNotification(data)

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request received. We will contact you shortly to confirm.",
        data: {
          name: data.name,
          department: data.department,
          date: data.date,
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Appointment API is running." });
}

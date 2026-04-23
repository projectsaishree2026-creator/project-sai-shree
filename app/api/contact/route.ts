import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    console.log("[Contact Message]", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate email/DB here

    return NextResponse.json(
      { success: true, message: "Message received. We'll respond within 24 hours." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

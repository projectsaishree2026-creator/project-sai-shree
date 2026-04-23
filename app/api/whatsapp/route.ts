import { NextRequest, NextResponse } from "next/server";
import { clinic } from "@/data/clinic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ success: false, message: "Message is required." }, { status: 400 });
    }

    const encoded = encodeURIComponent(message.trim());
    const url = `https://wa.me/${clinic.whatsapp}?text=${encoded}`;

    return NextResponse.json({ success: true, url });
  } catch {
    return NextResponse.json({ success: false, message: "Error building WhatsApp URL." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

interface WaitlistPayload {
  firstName?: string;
  email?: string;
  stage?: string;
  dueDate?: string;
  country?: string;
  referral?: string;
  appsUsed?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: WaitlistPayload = await req.json();
    const { firstName, email, stage, dueDate, country, referral, appsUsed } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { success: false, error: "First name and email are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error("KIT_API_KEY or KIT_FORM_ID not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    const kitRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          first_name: firstName,
          fields: {
            stage: stage ?? "",
            due_date: dueDate ?? "",
            country: country ?? "",
            referral: referral ?? "",
            apps_used: (appsUsed ?? []).join(", "),
          },
        }),
      }
    );

    if (!kitRes.ok) {
      const errorData = await kitRes.json().catch(() => ({}));
      console.error("Kit API error:", errorData);
      return NextResponse.json(
        { success: false, error: "Could not add you to the list. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const kylasApiKey = process.env.KYLAS_API_KEY; // Keep API key secure (no NEXT_PUBLIC)
    
    if (!kylasApiKey) {
      return NextResponse.json({ error: "Kylas API Key is missing" }, { status: 500 });
    }

    const formData = await req.json(); // Get form data from the request body

    const kylasResponse = await fetch("https://api.kylas.io/v1/leads/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": kylasApiKey,
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    });

    const kylasData = await kylasResponse.json();
    
    if (!kylasResponse.ok) {
      throw new Error(kylasData.error || "Failed to submit lead to Kylas CRM");
    }

    return NextResponse.json({ success: true, data: kylasData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

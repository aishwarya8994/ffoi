import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const kylasApiKey = process.env.KYLAS_API_KEY; // Keep API key secure

    if (!kylasApiKey) {
      return NextResponse.json({ error: "Kylas API Key is missing" }, { status: 500 });
    }

    const formData = await req.json(); // Get form data from the request body

    const { data } = await axios.post("https://api.kylas.io/v1/leads/", formData, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": kylasApiKey,
        "Accept": "application/json"
      },
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.response?.data?.error || error.message || "Internal Server Error" }, { status: 500 });
  }
}

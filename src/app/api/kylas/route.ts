export async function POST(req: Request) {
  console.log("Kylas API Key:", process.env.KYLAS_API_KEY); // Debugging line
  try {
    const body = await req.json();
    const kylasApiKey = process.env.KYLAS_API_KEY; // Read API key from .env.local

    if (!kylasApiKey) {
      throw new Error("Kylas API Key is missing. Please set KYLAS_API_KEY in .env.local");
    }

    const response = await fetch("https://api.kylas.io/v1/leads/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${kylasApiKey}`,
      },
      body: JSON.stringify(body),
      
    });

    if (!response.ok) {
      throw new Error(`Kylas API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

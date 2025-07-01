import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const apiUrl =
    "https://tachmiwlktzvnwsxngne.supabase.co/rest/v1/Projects?select=*";
  const apiKey = process.env.SUPABASE_ANON_KEY;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        apikey: `${apiKey}`,
      },
    });

    if (!response.ok) {
      res.status(response.status).json({ error: "Failed to fetch projects" });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

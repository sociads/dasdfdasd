import { RequestHandler } from "express";

export const handleCreateMeeting: RequestHandler = async (req, res) => {
  try {
    const { topic, start_time, duration = 30 } = req.body || {};
    const token = process.env.ZOOM_API_TOKEN;

    if (!token) {
      // Demo fallback
      return res.json({ demo: true, join_url: `https://meet.example.com/demo-${Date.now()}` });
    }

    const body = {
      topic: topic || "Toplantı",
      type: 2, // scheduled meeting
      start_time,
      duration,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      settings: {
        join_before_host: true,
        mute_upon_entry: true,
      },
    };

    const r = await fetch(`https://api.zoom.us/v2/users/me/meetings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error("Zoom API error:", r.status, txt);
      return res.status(502).json({ error: "Zoom API error", details: txt });
    }

    const data = await r.json();
    return res.json({ join_url: data.join_url, id: data.id });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "internal" });
  }
};

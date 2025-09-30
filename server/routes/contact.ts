import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const {
      type = "contact",
      name = "",
      email = "",
      subject = "",
      message = "",
      phone = "",
      meta = {},
    } = req.body || {};

    const host = process.env.EMAIL_HOST || "smtp.yandex.com.tr";
    const port = Number(process.env.EMAIL_PORT || 465);
    const secure = (process.env.EMAIL_SECURE || "true") === "true";
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || user;

    if (!user || !pass) {
      console.warn("Email credentials not configured");
      return res.status(500).json({ error: "Email not configured" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subjectLine = subject || `${type.toUpperCase()} - ${name || email}`;

    const text = `Type: ${type}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage:\n${message}\n\nMeta:\n${JSON.stringify(meta, null, 2)}`;

    await transporter.sendMail({
      from: user,
      to,
      subject: subjectLine,
      text,
      replyTo: email || undefined,
    });

    return res.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "failed to send" });
  }
};

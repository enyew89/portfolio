import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || user;

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "Email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      replyTo: email,
      to,
      subject: `Portfolio contact from ${name || email}`.trim(),
      text: `${message}\n\nFrom: ${name || "unknown"} <${email}>`,
      html: `
        <p>${String(message).replace(/\n/g, "<br />")}</p>
        <p style="color:#888">From: ${name || "unknown"} &lt;${email}&gt;</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email me directly." },
      { status: 500 }
    );
  }
}

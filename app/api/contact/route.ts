import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, category, quantity, details } = body;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['sukichoi@adaceramics.com'],
        subject: `New Inquiry from ${fullName}`,
        text: `
Name: ${fullName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Category: ${category}
Quantity: ${quantity}
Details: ${details}
        `,
        reply_to: email
      })
    });

    const data = await res.json();
    console.log("✅ Resend 响应：", data);

    if (!res.ok) throw new Error(data.error || "发送失败");
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ 错误：", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

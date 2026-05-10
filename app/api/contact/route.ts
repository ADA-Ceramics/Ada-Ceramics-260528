import { NextResponse } from 'next/server';

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
        from: 'Contact Form <contact@adaceramics.com>', // 后续在Resend验证域名后修改
        to: [process.env.RECEIVER_EMAIL],
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

    if (!res.ok) throw new Error('Failed to send email');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

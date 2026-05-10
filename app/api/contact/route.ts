import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, category, quantity, details } = body;

    // 调用 Resend API 发送邮件
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: [process.env.RECEIVER_EMAIL], // 你的收件邮箱
        subject: `New Inquiry from ${fullName} (${company})`,
        text: `
Name: ${fullName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Product Category: ${category}
Estimated Quantity: ${quantity}
Project Details:
${details}
        `,
        reply_to: email // 客户回复邮件时，直接回复到客户邮箱
      })
    });

    if (!res.ok) throw new Error('Failed to send email');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

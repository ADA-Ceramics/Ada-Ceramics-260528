import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. 接收前端数据
    const body = await request.json();
    console.log("✅ 收到表单数据：", body);

    const { fullName, company, email, phone, category, quantity, details } = body;

    // 2. 发送邮件
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: [process.env.RECEIVER_EMAIL],
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
        reply_to: email
      })
    });

    // 3. 读取 Resend 返回的真实错误
    const data = await res.json();
    console.log("✅ Resend 返回结果：", data);

    if (!res.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ 发送失败：", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

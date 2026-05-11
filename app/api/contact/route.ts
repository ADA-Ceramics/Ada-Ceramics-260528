import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // 从环境变量读取（安全且正确）
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("❌ Resend API 密钥不存在");
      return NextResponse.json({ success: false, error: "API key missing" });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'website@adaceramics.com',
        to: 'sukichoi@adaceramics.com', // 你的企业邮箱 ✅
        subject: '新网站询盘 - ADA Ceramics',
        html: `
          <p>客户姓名：${name}</p>
          <p>客户邮箱：${email}</p>
          <p>电话：${phone || '无'}</p>
          <p>留言：${message}</p>
        `
      })
    });

    const data = await res.json();
    console.log("📩 Resend 响应:", data);

    if (data.id) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data });
    }

  } catch (err) {
    console.error("❌ 发送失败:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}

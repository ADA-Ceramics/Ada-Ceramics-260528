import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // 这里必须和前端表单完全一致！！
    const {
      fullName,
      company,
      email,
      phone,
      category,
      quantity,
      details,
    } = await req.json();

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("❌ Resend API 密钥不存在");
      return NextResponse.json({ success: false, error: "API key missing" });
    }

    // 发送邮件到你的企业邮箱
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@adaceramics.com',
        to: 'sukichoi@adaceramics.com', // 你的企业邮箱
        subject: `【新询盘】${fullName} - ${company}`,
        html: `
          <div style="font-size:16px; line-height:1.8;">
            <p><strong>客户姓名：</strong>${fullName}</p>
            <p><strong>公司名称：</strong>${company}</p>
            <p><strong>邮箱：</strong>${email}</p>
            <p><strong>电话/WhatsApp：</strong>${phone || '未填写'}</p>
            <p><strong>产品类别：</strong>${category}</p>
            <p><strong>预计数量：</strong>${quantity || '未填写'}</p>
            <p><strong>项目详情：</strong></p>
            <p>${details}</p>
          </div>
        `,
      }),
    });

    const data = await res.json();
    if (data.id) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data });
    }

  } catch (err) {
    console.error("❌ 发送失败：", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}

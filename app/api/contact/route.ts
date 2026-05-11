import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // 这里的变量名，必须和前端 formData 里的字段名完全一致！
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

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@adaceramics.com',
        to: 'sukichoi@adaceramics.com',
        subject: `【新询盘】${fullName} - ${company || '未填写公司'}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.8; font-size: 16px;">
            <p><strong>客户姓名：</strong>${fullName}</p>
            <p><strong>公司名称：</strong>${company || '未填写'}</p>
            <p><strong>邮箱：</strong>${email}</p>
            <p><strong>电话/WhatsApp：</strong>${phone || '未填写'}</p>
            <p><strong>产品类别：</strong>${category || '未填写'}</p>
            <p><strong>预计数量：</strong>${quantity || '未填写'}</p>
            <p><strong>项目详情：</strong></p>
            <p>${details || '未填写'}</p>
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

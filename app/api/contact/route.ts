import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const RESEND_API_KEY = "re_8XhNPJX2_BAVfLyEhGL9GGyTiyBamFJc5";

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from: 'website@adaceramics.com',
    to: 'sukichoi@adaceramics.com',
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
    if (data.id) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}

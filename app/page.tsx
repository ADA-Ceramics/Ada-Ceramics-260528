import { HomeClient } from "@/components/home/home-client"

const fixedCategories = [
  {
    name: "High-Temperature White Porcelain",
    description: "Durable pure white porcelain for hotels & restaurants.",
    image: "https://eqlatpimljraiapadkww.supabase.co/storage/v1/object/sign/showed%20pictures/Alice.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDBjNDhiYy1hM2U4LTQxNWMtOTdhMi0yNTBiN2RkYjIxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaG93ZWQgcGljdHVyZXMvQWxpY2Uud2VicCIsImlhdCI6MTc3ODIwNzU5NywiZXhwIjo0OTMxODA3NTk3fQ.8zPR5oOPaN9pZWtwXaciJXt-Q-Uoh4zBg18cjs8Sqkg",
    slug: "high-temperature-white",
  },
  {
    name: "Color Glaze Ceramics",
    description: "Vibrant glazed finish, unique elegant tableware.",
    image: "https://eqlatpimljraiapadkww.supabase.co/storage/v1/object/sign/showed%20pictures/color-glaze.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDBjNDhiYy1hM2U4LTQxNWMtOTdhMi0yNTBiN2RkYjIxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaG93ZWQgcGljdHVyZXMvY29sb3ItZ2xhemUud2VicCIsImlhdCI6MTc3ODIwNzY1OCwiZXhwIjo0OTMxODA3NjU4fQ.woH_inoZzykPTjvjTYPlD37l9jZtx-d4cidJqYKe0gQ",
    slug: "color-glaze-ceramic",
  },
  {
    name: "Kiln Change Ceramic",
    description: "Natural kiln variation, artistic premium tableware.",
    image: "https://eqlatpimljraiapadkww.supabase.co/storage/v1/object/sign/showed%20pictures/kiln-transformation.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDBjNDhiYy1hM2U4LTQxNWMtOTdhMi0yNTBiN2RkYjIxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaG93ZWQgcGljdHVyZXMva2lsbi10cmFuc2Zvcm1hdGlvbi53ZWJwIiwiaWF0IjoxNzc4MjA3Njk1LCJleHAiOjQ5MzE4MDc2OTV9.jA_mvaHJMWXdRHDc3blLbTEREOiwLCngIjBv2j_gJoQ",
    slug: "kiln-change-ceramic",
  },
];

export default async function HomePage() {
  return <HomeClient categories={fixedCategories} />;
}

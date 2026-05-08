// Company info - 保留公司信息
export const companyInfo = {
  name: "ADA CERAMICS",
  tagline: "Premium Food Grade Ceramic Manufacturer",
  email: "sukichoi@adaceramics.com",
  phone: "+86 15919512131",
  address: {
    line1: "Ceramic Industrial Zone",
    line2: "Chaozhou, Guangdong",
    line3: "China 521000",
  },
  businessHours: "Monday - Saturday, 9:00 AM - 6:00 PM (GMT+8)",
  stats: {
    yearsExperience: "20+",
    globalClients: "500+",
    countriesServed: "50+",
    productsDelivered: "10M+",
  },
  factory: {
    area: "50,000",
    workers: "300+",
    productionLines: "10+",
    qualityRate: "98%",
  },
}

// Certifications - 保留认证信息
export const certifications = [
  {
    id: "fda",
    name: "FDA",
    fullName: "U.S. Food & Drug Administration",
    description: "Compliant with FDA food contact regulations",
  },
  {
    id: "lfgb",
    name: "LFGB",
    fullName: "German Food Safety",
    description: "Meets German food-grade material standards",
  },
  {
    id: "sedex",
    name: "Sedex",
    fullName: "Supplier Ethical Data Exchange",
    description: "Verified ethical trading practices",
  },
  {
    id: "bsci",
    name: "BSCI",
    fullName: "Business Social Compliance",
    description: "Certified social compliance standards",
  },
]

// 所有产品数据现在从 Supabase public.products 表获取
// 使用 lib/supabase/products.ts 中的函数:
// - getAllProducts() - 获取所有产品
// - getProductsByCategory(category) - 按分类获取产品
// - getProductBySlug(slug) - 获取单个产品

import { createClient } from './server'
import type { Product } from './types'
import { CATEGORY_INFO } from './types'

// 获取所有产品
export async function getAllProducts(): Promise<Product[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
  
  if (error) {
    console.error('Error fetching products:', error)
    return []
  }
  
  return data || []
}

// 获取指定分类的产品
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
  
  if (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
  
  return data || []
}

// 获取单个产品
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('Error fetching product:', error)
    return null
  }
  
  return data
}

// 获取分类下的产品数量
export async function getProductCountByCategory(category: string): Promise<number> {
  const supabase = await createClient()
  
  const { count, error } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .eq('category', category)
    .eq('is_active', true)
  
  if (error) {
    console.error('Error fetching product count:', error)
    return 0
  }
  
  return count || 0
}

// 从数据库获取所有分类（基于products表中的category字段）
export async function getCategories(): Promise<{ slug: string; name: string; description: string; image: string | null }[]> {
  const supabase = await createClient()
  
  // 获取所有不重复的分类，并获取每个分类的第一个产品的图片
  const { data, error } = await supabase
    .from('products')
    .select('category, main_image')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
  
  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }
  
  // 按分类分组，取每个分类的第一个产品图片
  const categoryMap = new Map<string, string | null>()
  for (const product of data || []) {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, product.main_image)
    }
  }
  
  // 转换为分类数组
  return Array.from(categoryMap.entries()).map(([slug, image]) => ({
    slug,
    name: CATEGORY_INFO[slug]?.name || slug,
    description: CATEGORY_INFO[slug]?.description || '',
    image,
  }))
}

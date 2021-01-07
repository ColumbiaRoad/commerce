interface Product {
  id: string | number
  name: string
  description: string
  images: ProductImage[]
  variants: ProductVariant[]
  prices: ProductPrice[]
  slug: string
  path?: string
}
interface ProductImage {
  url: string
  alt?: string
}

interface ProductVariant {
  id: string | number
}

interface ProductPrice {
  value: number | string
  currencyCode: 'USD' | 'ARS'
  type?: 'price' | 'retail' | 'sale' | string
}
import { Category } from './Category'
import { ProductImage } from './ProductImage'
import { ProductMeta } from './ProductMeta'
import { ProductOwner } from './ProductOwner'

export interface Product {
  _id: string
  name: string
  price: number
  image: ProductImage
  category: Category
  meta: ProductMeta
  owner: ProductOwner
}

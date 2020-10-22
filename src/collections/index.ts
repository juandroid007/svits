import {element} from 'svelte/internal'
import * as c from '../../.collections'

export type order = 'desc' | 'cresc'

export interface OrderOptions {
  field: string
  order: 'cresc'
  isDate: false
}

export const getCollection = (
  collectionName: string,
  orderOptions?: OrderOptions,
): Collection<any> => {
  let collection = new Collection()
  collection.elements = !!c[collectionName] ? c[collectionName] : []
  if (orderOptions) {
    collection = collection.sort(orderOptions)
  }
  return collection
}

export class Collection<T> {
  elements: T[]

  paginate(page_size: number, page_number: number): this {
    this.elements.slice((page_number - 1) * page_size, page_number * page_size);
    return this
  }

  sort(orderOptions: OrderOptions): this {
    this.elements = this.elements.sort((a: any, b: any) => {
      let aa: any = a[orderOptions.field]
      let bb: any = b[orderOptions.field]
      console.log(aa, bb)
      if (orderOptions.isDate) {
        aa = +new Date(a[orderOptions.field])
        bb = +new Date(b[orderOptions.field])
        if (orderOptions.order == 'cresc') {
          return bb - aa
        } else {
          return aa - bb
        }
      } else {
        if (orderOptions.order == 'cresc') {
          return aa < bb ? -1 : 1
        } else {
          return aa > bb ? -1 : 1
        }
      }
    })
    return this
  }
}

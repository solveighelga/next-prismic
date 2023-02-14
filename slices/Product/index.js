import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ProductSlice} ProductSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductSlice>} ProductProps
 * @param { ProductProps }
 */
const Product = ({ slice }) => (
  <section>
    <div className='px-4 py-8 md:py-10 md:px-6 lg:py-12'>
      <div className='mx-auto w-full max-w-6xl'>
        <div>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl'><PrismicRichText field={slice.primary.title} /> </h1>
        <p className='mt-3 text-lg text-gray-500'><PrismicRichText field={slice.primary.description} /></p>
          <ul className='grid grid-cols-1 gap-16'>
            <li className='grid grid-cols-1 item-start gap-6 md:grid-cols-3 md:gap-8'>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Product
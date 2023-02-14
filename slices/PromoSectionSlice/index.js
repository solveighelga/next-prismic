import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PromoSectionSliceSlice} PromoSectionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromoSectionSliceSlice>} PromoSectionSliceProps
 * @param { PromoSectionSliceProps }
 */
const PromoSectionSlice = ({ slice }) => (
  <section>
    <div className= "relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className='absolute inset-0 overflow-hidden mx-auto'>
        <img
          src={slice.primary.image.url}
          alt=""
          className='w-full h-full object-center object-cover'></img> 
      </div>
      <div aria-hidden="true" className='absolute inset-0 bg-gray-900 bg-opacity-50'/>
      <div className='relative max-w-3xl mx-auto flex flex-col items-center text-center'>
        <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'><PrismicRichText field={slice.primary.title} /></h2>
        <p className='mt-3 text-xl text-white'>
          <PrismicRichText field={slice.primary.description} />
        </p>
        <a
        href="https://github.com/solveighelga?tab=repositories"
        className='mt-8 w-80 block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100' 
        >
          <span>{ slice.primary.cta_link }</span>
        </a>
      </div>
    </div>
  </section>
)
export default PromoSectionSlice
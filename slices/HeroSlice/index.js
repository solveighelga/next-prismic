import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'


/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section>
    <div className="py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
    <div className='grid grid-cols-1 justify-items-center gap-8'>
      <div className='relative h-40 w-40 overflow-hidden rounded-full bg-slate-300'>
        <img 
              src={slice.primary.image.url}
              alt=""
              className="">
        </img>
      </div>
    <div className="grid grid-cols-1 gap-2 text-center">
      <h1 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
        <PrismicRichText field={slice.primary.title} />
      </h1>
      <p className='font-serif text-2xl italic leading-normal tracking-tight text-slate-500'>
        <PrismicRichText field={slice.primary.description} />
      </p>
    </div> 
    </div>
    </div>
  </section>
)

export default HeroSlice
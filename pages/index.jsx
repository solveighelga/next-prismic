import { SliceZone } from '@prismicio/react' // renders each slice on different pages
import { createClient } from '../prismico'
import { components } from '../slices/index'
 
const Page = ({ page }) => {
  
  return <SliceZone slices={page.data.slices} components={components} /> // mapping different slice types to a react component
}
 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage') // fetching my homepage from Prismic Client and it is a single type query so only one because it is a single-type.
  
  return {
    props: {
      page
    }
  }
}
# CMS system - Prismic
##### I really enjoyed getting to know Prismic and how slices work. It is so smart how you create a slice, non-repeatable zones OR repeatable zones depending on the slice and from there you get the code snippet! This you can use in your code while styling how it should look on the page. I decided to use **Tailwind** for two reasons. A) Prismic tutorials use it mostly and B) I actually really enjoy using Tailwind. So when everything was styled and looking good I could see the Simulate Slice (example of what my client will see) and from there go to my prismic page and enter inn the data. There I can rearrange in what order my slices appear but how it appears on the page has already been designed by me the developer but if this were real life then my cilent would add inn the correct information for each slice it would like on the website. 

**Side note:** I started this project before Smári had made it into smaller projects so I will continue with my Portfolio page in the next guide :) Here below I wrote some notes for myself what was happening with the slicezone and my UID page.


**SliceZone**: I'm using a SliceZone component from Prismic React that takes in two props, slices and a components folder that is mapping different slice types to their react compontent which is responsable for rendering the SiceZone passing it to slices which passes it to compontent mapping. If you check out my Slice folder (which was created automatically for me) there you will see a file called index.js. There you can see all of the slices that I have created. So what is happening is that it exports a component that maps a slice type to the React component that I have created (see folder slices/HeroSlice/index.js for example). So what is happening is that it is matching the slice type to the component that is responsable for rendering it and this is how it is rendering my Prismic pages in my Next.js App.

**getStaticProps & getStaticPaths**: This is for a dynamic page, UID. Inside the page components you would have these functions. This has to do with when the user who is trying to access a url, it fetches the data or just renders that page statically at build time instead of hardcoding every single page we can just have this dynamic UID page and have it fetch specific data regarding a specific UID in Prismic Client.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# next-prismic

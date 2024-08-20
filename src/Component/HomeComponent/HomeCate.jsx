import { Link } from "react-router-dom"
const callouts = [
    {
      name: 'Electronics',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/product/Electronics',
    },
    {
      name: 'Women',
      description: 'For Women who settle for nothing but the best. Indulge in excellence.',
      imageSrc: "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/product/Women',
    },
    {
      name: 'Men',
      description: 'For men who settle for nothing but the best. Indulge in excellence.',
      imageSrc: 'https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_ethical_fashion_for_men_a28a3041_a73b_4b79_a598_dd7267a0489a.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/product/Men',
    },
  ]
  
  export default function HomeCate() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={`product/${callout.name.toLowerCase()}`}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
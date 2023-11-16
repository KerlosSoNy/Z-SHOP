import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
    name: 'Fast To Buy',
    description:
    'recommended source for automation products due to their exceptional customer service, quality products, knowledgeable staff and prompt delivery.',
    icon: CloudArrowUpIcon,
    },
    {
    name: 'International Accounting Standards',
    description:
      'promote transparency and consistency in financial reporting, reducing costs for companies.',
    icon: LockClosedIcon,
    },
    {
    name: 'Easy To Use',
    description:
        'products are praised for their simplicity and quick installation, which saves time and hassle. Additionally, they are reliable and durable, ensuring long-lasting use.',
    icon: ArrowPathIcon,
    },
    {
    name: 'Advanced security For Your Card',
    description:
        'provide a sense of peace and protect their personal and financial data by preventing unauthorized access and fraudulent activity.',
    icon: FingerPrintIcon,
    },
]

export default function About() {
    
    return (
        <div className="bg-white py-20 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Buy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to buy is here
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                The store offers a comprehensive selection of goods that can fulfill a customer's shopping needs. Customers can find various items in one place, making it easier and more convenient for them to make purchases.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
)
}

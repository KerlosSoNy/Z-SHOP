import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  RectangleGroupIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  LightBulbIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import img1 from '../../pic/pngegg.png'
import { useRecoilState } from 'recoil'
import { CartAtom } from '../../Atoms/Products-Atom'

const productsCate = [
  { name: "Men", to: '/', icon: ChartPieIcon },
  { name: "Women", to: '/', icon: CursorArrowRaysIcon },
  { name: "Jewelery", to: '/', icon: FingerPrintIcon },
  { name: "Electronics", to: '/', icon: LightBulbIcon },
  { name: 'Home', to: '/', icon: Bars3Icon },
  { name: 'All', to: '/', icon: RectangleGroupIcon },
]
const callsToAction = [
  { name: 'Contact sales', to: '/', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Nav(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ cart ] = useRecoilState(CartAtom)
    return (
        <header className="bg-white lg:border-b-[1px] lg: border-indigo-100 text-black">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-black" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src={img1} alt="" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-sm font-semibold leading-6 text-black hover:text-indigo-600">
                Home
              </Link>
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black hover:text-indigo-600">
                  Product
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>
    
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {productsCate.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-black group-hover:text-indigo-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <Link to={`/product/${item.name}`} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          to={`/product/${item.name}`}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-black hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
    
              <Link to="/features" className="text-sm font-semibold leading-6 text-black hover:text-indigo-600">
                Features
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-black hover:text-indigo-600">
                Contact Us
              </Link>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/product/cart" className="text-sm font-semibold leading-6 text-black cart relative hover:text-indigo-600" >
                Cart <span aria-hidden="true">{cart.length > 0 && cart.length} &rarr;</span>
                <div className='cartDiv absolute w-[24rem] z-30 right-0 top-10 bg-white rounded-md border-[1.5px] border-indigo-300'>
                    {cart.length > 0 ?
                    <div className='grid grid-flow-row gap-4'>
                      {cart.map((e)=>{
                        return(
                          <div className='grid grid-cols-3 border-b-[1.5px] p-4 justify-between' key={e.product.id+1}>
                            <img src={e.product.image} alt="" className='w-20 h-20 columns-3' />
                            <div className='bg-white-100 col-span-2   grid grid-cols-4 justify-between justify-items-start'>
                              <div className=' text-left col-span-3 justify-start'>
                                <h4 className=' text-left'>{e.product.title}</h4>
                              </div>
                              <div className='text-right p-2'>
                                  <span>${e.product.price}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    : <h1 className='p-2'>No Products Yet</h1>}
                </div>
              </Link>
            </div>
          </nav>


          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={img1}
                    alt=""
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                  <Link
                          to="/"
                          className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Home
                  </Link>
                  <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 -mx-3 rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  ">
                  Product
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>
    
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {productsCate.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-black group-hover:text-indigo-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <Link to={`/product/${item.name}`} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          to={`/product/${item.name}`}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-black hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
                    <Link
                      to="/features"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </Link>
                    <Link
                      to="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      to="/product/cart"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                     {cart.length > 0 ? <Link to="product/cart">Cart {cart.length}</Link> :<Link to="product/cart">Cart</Link>}
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      )
}
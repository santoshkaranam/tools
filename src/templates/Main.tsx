import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import CookieBanner from '@/components/cookieBanner';
import Image from 'next/image';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'UrlDecode', href: '/urldecode' },
  { name: 'Base64Decode', href: '/base64decode' },
  { name: 'JwtDecode', href: '/jwtdecode' },
];

const Main = (props: IMainProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-auto w-full text-gray-700 antialiased">
      {props.meta}
      <div className="bg-gray-300">
        <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-md bg-black/20">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <button type="button" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-12 w-auto" src="/2.png" alt="" />
              </button>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold leading-6 text-white hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                type="button"
                className="text-lg font-semibold leading-6 text-white hover:underline"
              >
                Tools <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/2.png" alt="" />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <button
                      type="button"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <main className="content  text-xl  ">
          <div className="h-auto bg-gray-900">
            <div className="relative isolate h-auto ">
              <Image
                width="2592"
                height="1728"
                src="/1.jpg"
                loading="lazy"
                alt=""
                className="absolute inset-0 -z-10 h-screen w-full object-cover"
              />
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56  ">
                <div className="bg-black/20 p-4 pb-8 text-center backdrop-blur-sm">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} <br />
          This work is licensed under a{' '}
          <a rel="license" href="https://opensource.org/license/mit/">
            {' '}
            MIT license
          </a>
        </footer>
        <CookieBanner />
      </div>
    </div>
  );
};

export { Main };

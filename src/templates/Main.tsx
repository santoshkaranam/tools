import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import CookieBanner from '@/components/cookieBanner';
import Image from 'next/image';
import Script from 'next/script';
import { MyFooter } from '@/templates/MyFooter';
import { navigation } from '@/utils/Helpers';
import GoogleAdd from '@/components/googleAdd';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-auto w-full text-gray-700 antialiased">
      {props.meta}
      <div className="bg-gray-300">
        <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-md bg-black/20">
          <Script
            id="Adsense-id"
            data-ad-client="ca-pub-1482811726476217"
            crossOrigin="anonymous"
            async
            strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <Script
            async
            src="https://umamianalytics-kappa.vercel.app/script.js"
            data-website-id="8f899ef9-8b83-478c-86da-27807740485b"
          />
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <button type="button" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="https://raw.githubusercontent.com/santoshkaranam/tools/main/public/2.png"
                  alt=""
                />
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
              <a
                type="button"
                href="https://www.buymeacoffee.com/karanamsantosh"
                className="text-lg font-semibold leading-6 text-white hover:underline"
              >
                Buy Me Battery
              </a>
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
                  <img
                    className="h-8 w-auto"
                    src="https://raw.githubusercontent.com/santoshkaranam/tools/main/public/2.png"
                    alt=""
                  />
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

        <main className="content min-h-screen text-xl  ">
          <div className="h-auto bg-gray-900">
            <div className="relative isolate h-auto ">
              <Image
                width="2592"
                height="1728"
                src="https://github.com/santoshkaranam/tools/blob/main/public/1.jpg?raw=true"
                loading="lazy"
                alt=""
                className="absolute inset-0 -z-10 h-screen w-full object-cover"
              />
              {/* <div className="mx-auto max-w-4xl pt-32 sm:pt-48 lg:pt-56  ">
                <div className="bg-black/20 p-4 pb-8 text-center backdrop-blur-sm">
                  {props.children}
                </div>
              </div> */}
              <div className="pt-32 sm:pt-48 lg:pt-56 grid grid-cols-5">
                <div className="text-left">
                  <GoogleAdd />
                </div>
                <div className="bg-black/20 p-4 pb-8 text-center backdrop-blur-sm col-span-3">
                  {props.children}
                </div>
                <div className="text-right">
                  <GoogleAdd />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="h-auto">
          <GoogleAdd />
        </div>
        {MyFooter(navigation)}
        <CookieBanner />
      </div>
    </div>
  );
};

export { Main };

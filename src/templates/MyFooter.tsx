import React from 'react';
import Link from 'next/link';

export function MyFooter(navigation: { name: string; href: string }[]) {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h1 id="footer-heading" className="sr-only">
        Footer
      </h1>
      <div className="lg:py-16 md:px-12 lg:px-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link
              href="/"
              className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-black tracking-relaxed lg:pr-8"
            >
              <img
                src="https://raw.githubusercontent.com/santoshkaranam/tools/main/public/2.png"
                height={40}
                width={40}
                alt=""
              />
            </Link>
            <p className="w-1/2 mt-2 text-sm text-gray-500">Decode Tools</p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold leading-6 uppercase text-black">
                  Tools
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-semibold leading-6 uppercase text-black">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://www.buymeacoffee.com/karanamsantosh"
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      Buy me Battery
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:justify-end md:grid md:grid-cols-1">
              <div className="w-full mt-12 md:mt-0">
                <div className="mt-8 lg:justify-end xl:mt-0">
                  <h3 className="font-semibold leading-6 uppercase text-black pb-4">
                    Follow me on
                  </h3>
                  <div className="flex flex-row ">
                    <a
                      href="https://twitter.com/santoshkaranam1"
                      className="pr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/santoshkaranam">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

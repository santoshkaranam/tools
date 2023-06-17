import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React from 'react';
import { navigation } from '@/utils/Helpers';
import Link from 'next/link';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Decode Tools"
          description="Tools to support different types of decode and encode"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        About Encode Decode
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        This website is developed to help users and myself to quickly get the
        necessary tools for GIS and Research related development. Once the tools
        are stable the plan is to open source and work as a community.
      </p>

      <section>
        <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-24">
          <div className="max-w-xl py-12 mx-auto text-center lg:max-w-7xl">
            <div className="grid grid-cols-3 gap-12 text-center lg:grid-cols-4 lg:space-y-0">
              {navigation
                .filter((x) => x.name !== 'Home')
                .map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-blue-600"
                  >
                    <div className="flex items-center justify-center  w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-white">
                      {item.name}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="space-y-4 p-8 lg:p-24 ">
            <div className="aspect-[3/2]">
              <img
                className="object-cover w-full h-full"
                src="https://pbs.twimg.com/profile_images/1670041099245862913/onKTxZwp_400x400.jpg"
                alt=""
              />
            </div>
            <div className="inline-flex items-start justify-between w-full">
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-6 text-white">
                  Santosh Karanam
                </h3>
                <p className="text-base text-gray-500 text-left">Creator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;

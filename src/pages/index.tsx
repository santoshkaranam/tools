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
          title="Online Decode Encode Tools"
          description="Tools to support different types of decode and encode online"
        />
      }
    >
      <section>
        <div className="relative items-center w-full px-5 pt-2 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-4">
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

      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Online Decode Encode Tools
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        I am thrilled to offer you a comprehensive set of decoding and encoding
        tools to simplify your data manipulation tasks. Whether you&#39;re
        working with URLs, Base64 strings, or other formats, our tools will help
        you effortlessly decode and encode your data.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300 text-left">
        URL Decoder/Encoder: Our URL Decoder/Encoder tool allows you to convert
        URLs between their encoded and decoded formats. If you have a URL with
        special characters or percent-encoded elements, our URL Decoder will
        transform it into its readable form. On the other hand, our URL Encoder
        will encode any special characters in the URL to ensure its proper
        transmission and compatibility across different systems.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300 text-left">
        Base64 Decoder/Encoder: Base64 encoding is commonly used for encoding
        binary data in a text format. With our Base64 Decoder/Encoder tool, you
        can easily decode Base64 strings into their original binary
        representation or encode your data into Base64 format for safe
        transmission or storage. It&#39;s a quick and efficient way to work with
        Base64-encoded data.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300 text-left">
        JWT Decoder/Encoder: JSON Web Tokens are compact, URL-safe tokens used
        for securely transmitting information between parties. They consist of
        three parts: the header, the payload, and the signature. Our tool
        specifically focuses on decoding and extracting the contents of the
        header and payload. By decoding JWTs, you gain valuable insights into
        the token&lsquo;s contents, which can be useful for debugging,
        troubleshooting, or simply understanding the data being transmitted. You
        may uncover details such as the token issuer, expiration time, user
        roles, or any custom claims embedded within the payload.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300 text-left">
        JSON (JavaScript Object Notation) is a widely used data format for
        storing and exchanging structured data. However, JSON strings can often
        be lengthy, compact, and challenging to read. With our JSON Formatting
        Tool, you can transform those complex JSON strings into well-indented,
        human-readable formats with just a few clicks.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300 text-left">
        I hope that our collection of decoding and encoding tools will assist
        you in your data manipulation endeavors. Feel free to utilize these
        tools and simplify your workflow. If you have any questions or
        suggestions, please don&#39;t hesitate to reach out. Happy decoding and
        encoding!
      </p>

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

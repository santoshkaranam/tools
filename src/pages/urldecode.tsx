import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UrlDecode = () => {
  const [inputString, setValue] = useState(
    'Input your url encoded string here and use the below buttons to encode decode'
  );
  const notify = () => {
    navigator.clipboard.writeText(inputString).then();
    toast('Copied');
  };
  return (
    <Main
      meta={
        <Meta
          title="Online Url Decode Encode"
          description="Decodes encodes any text online to and from url format"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Online Url Encode Decode
      </h1>
      <dd className="text-right">
        <button
          type="button"
          onClick={notify}
          className="text-white  rounded-md border border-gray-200 hover:border-black text-sm p-2 mb-1"
        >
          copy
        </button>
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="dark"
        />
      </dd>
      <textarea
        defaultValue={inputString}
        value={inputString}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full h-80 p-2"
      />
      <div className="grid grid-cols-2">
        <dd className="mt-1  p-2 text-left ">
          <button
            type="button"
            onClick={() => {
              setValue(encodeURIComponent(inputString));
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Encode
          </button>
        </dd>
        <dd className="mt-1  p-2 text-right ">
          <button
            type="button"
            onClick={() => {
              setValue(decodeURIComponent(inputString));
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Decode
          </button>
        </dd>
      </div>
      <div className="text-white text-left">
        <p>
          The `decodeURIComponent()` function is a built-in JavaScript function
          that is used to decode a Uniform Resource Identifier (URI) component
          that has been previously encoded with the `encodeURIComponent()`
          function. It reverses the encoding process and converts any escape
          sequences back to their original characters.
        </p>

        <p>Here is an example usage of `decodeURIComponent()`:</p>

        <p>
          ---javascript
          <br />
          <code>
            const encodedURI =
            &#39;https%3A%2F%2Fwww.example.com%2Fpath%2Fpage%3Fparam%3Dvalue&#39;;
            <br />
            const decodedURI = decodeURIComponent(encodedURI);
            <br />
            console.log(decodedURI);
          </code>
        </p>

        <p>
          Output:
          <br />
          <br />
          https://www.example.com/path/page?param=value
          <br />
        </p>

        <p>
          For more information, you can refer to the Mozilla Developer Network
          (MDN) documentation on{' '}
          <a
            className="underline underline-offset-1"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent"
          >
            decodeURIComponent()
          </a>
        </p>

        <p>&nbsp;</p>
      </div>
    </Main>
  );
};

export default UrlDecode;

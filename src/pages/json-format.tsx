import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JsonFormat = () => {
  const [inputString, setValue] = useState('Input unformatted string here');
  const notify = () => {
    navigator.clipboard.writeText(inputString).then();
    toast('Copied');
  };
  return (
    <Main
      meta={
        <Meta
          title="Free Online Format Json String"
          description="Formats online any JSON string for readability"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Online Format JSON String
      </h1>
      <dd className="text-right">
        <button
          type="button"
          onClick={() => {
            setValue('');
          }}
          className="text-white  rounded-md border border-gray-200 hover:border-black text-sm p-2 mb-1 mr-2"
        >
          clear
        </button>
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
        className="w-full h-80 p-2 text-sm"
      />
      <div className="grid grid-cols-2">
        <dd className="mt-1 p-2 text-left ">
          <button
            type="button"
            onClick={() => {
              setValue(JSON.stringify(JSON.parse(inputString), null, 4));
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Format
          </button>
        </dd>
      </div>
      <div className="text-white text-left">
        <p>
          1. `JSON.parse()`: The `JSON.parse()` function is used to parse a JSON
          string and convert it into a JavaScript object or value.
        </p>
        <p>
          2. `JSON.stringify()`: The `JSON.stringify()` function is used to
          convert a JavaScript object or value into a JSON string. When combined
          with the `null` and `4` arguments, it formats the JSON string with
          indentation for improved readability.
        </p>

        <p>
          By combining `JSON.stringify(JSON.parse(inputString), null, 4)`, you
          can take a JSON string, parse it into a JavaScript object using
          `JSON.parse()`, and then convert it back to a formatted JSON string
          using `JSON.stringify()`.
        </p>

        <p>
          This combination is useful when you want to format a JSON string with
          proper indentation for better readability.
        </p>

        <p>
          For more information on `JSON.stringify()` and `JSON.parse()`, you can
          refer to the Mozilla Developer Network (MDN) documentation:
        </p>

        <ul>
          <li>
            <a
              className="underline underline-offset-1"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
              target="_new"
            >
              MDN Web Docs: JSON.stringify()
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-1"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
              target="_new"
            >
              MDN Web Docs: JSON.parse()
            </a>
          </li>
        </ul>
      </div>
    </Main>
  );
};

export default JsonFormat;

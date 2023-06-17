import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseDecode = () => {
  const [inputString, setValue] = useState(
    'Input your base64 encoded string here and use the below buttons to encode decode'
  );
  const notify = () => {
    navigator.clipboard.writeText(inputString).then();
    toast('Copied');
  };
  return (
    <Main
      meta={
        <Meta
          title="Base64 Decode Encode"
          description="Decodes encodes any text to and from base64 format"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Base64 Encode Decode
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
              setValue(btoa(inputString).toString());
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
              setValue(atob(inputString));
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Decode
          </button>
        </dd>
      </div>
    </Main>
  );
};

export default BaseDecode;

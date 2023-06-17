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
          title="Format Json String"
          description="Formats any JSON string for readability"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Format JSON String
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
    </Main>
  );
};

export default JsonFormat;

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JwtDecode = () => {
  const [inputString, setValue] = useState(
    'Input your JWT string to decode here'
  );
  const notify = () => {
    navigator.clipboard.writeText(inputString).then();
    toast('Copied');
  };

  function parseJwt(token: string) {
    try {
      const token2 = token.split('.')[1] as string;
      const base64 = atob(token2);
      console.log(token2);
      console.log(base64);
      return JSON.stringify(JSON.parse(base64), null, 4);
    } catch (e) {
      // @ts-ignore
      return e.toString();
    }
  }

  return (
    <Main meta={<Meta title="JWT Decode" description="Decodes JWT tokens" />}>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        JWT Decode
      </h2>
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
              setValue(parseJwt(inputString).toString());
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

export default JwtDecode;

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
      return JSON.stringify(JSON.parse(base64), null, 4);
    } catch (e) {
      // @ts-ignore
      return e.toString();
    }
  }

  return (
    <Main
      meta={
        <Meta
          title="Online JWT Decode"
          description="Online Decodes JWT tokens"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Online JWT Decode
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
              setValue(parseJwt(inputString).toString());
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Decode
          </button>
        </dd>
      </div>
      <div className="text-white text-left">
        <p>
          JWT stands for JSON Web Token. It is an open standard (RFC 7519) for
          securely transmitting information between parties as a JSON object.
          JWTs are commonly used for authentication and authorization in web
          applications and APIs.
        </p>
        <p>
          JWTs are self-contained and portable, allowing them to be transmitted
          and verified across different systems or domains. They eliminate the
          need for server-side session storage and enable stateless
          authentication.
        </p>
        <p>
          This online tool only decodes and displays payload information of the
          JWT tokens.
        </p>
      </div>
    </Main>
  );
};

export default JwtDecode;

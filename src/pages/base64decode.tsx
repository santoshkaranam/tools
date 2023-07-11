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
          title="Free Online Base64 Decode Encode"
          description="Decodes encodes online any text to and from base64 format for free"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Online Base64 Encode Decode
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
      <div className="text-white text-left">
        <p>
          The <code>atob()</code> and <code>btoa()</code> functions in
          JavaScript are used to encode and decode strings using Base64
          encoding. Base64 encoding is a way of representing binary data as
          ASCII text, which is useful for transmitting or storing binary data in
          a text-based format.
        </p>

        <p>
          <code>1. btoa()</code>: The <code>btoa()</code> function is used to
          encode a string to Base64 format.
        </p>

        <p>
          <strong>javascript</strong>
        </p>

        <p>
          <strong>
            <code className="language-javascript">
              const encodedString = btoa(&#39;Hello, World!&#39;);{' '}
            </code>
          </strong>
        </p>

        <p>
          <code className="language-javascript">
            <strong>console.log(encodedString);</strong>{' '}
          </code>
        </p>

        <p>
          Output:&nbsp;{' '}
          <strong>
            <code className="language-makefile">SGVsbG8sIFdvcmxkIQ== </code>
          </strong>
        </p>

        <p>
          In the example above, the <code>btoa()</code> function encodes the
          string <code>&#39;Hello, World!&#39;</code> to Base64 format. The
          result is stored in the <code>encodedString</code> variable, and it is
          printed to the console.
        </p>

        <p>
          <code>2. atob()</code>: The <code>atob()</code> function is used to
          decode a Base64-encoded string back to its original form.
        </p>

        <p>
          <strong>javascript</strong>
        </p>

        <p>
          <strong>
            <code className="language-javascript">
              const decodedString = atob(&#39;SGVsbG8sIFdvcmxkIQ==&#39;);{' '}
            </code>
          </strong>
        </p>

        <p>
          <strong>
            <code className="language-javascript">
              console.log(decodedString);{' '}
            </code>
          </strong>
        </p>

        <p>
          Output:{' '}
          <strong>
            <code>Hello, World! </code>
          </strong>
        </p>

        <p>
          In this example, the <code>atob()</code> function decodes the
          Base64-encoded string <code>&#39;SGVsbG8sIFdvcmxkIQ==&#39;</code> back
          to its original form. The result is stored in the{' '}
          <code>decodedString</code> variable and printed to the console.
        </p>

        <p>
          It&#39;s important to note that these functions are available in
          modern browsers and in Node.js for server-side JavaScript. However,
          they may not be available in all environments, so it&#39;s a good
          practice to check for their existence before using them. You can use
          the following code to check if the functions are available:
        </p>

        <p>
          <strong>javascript</strong>
        </p>

        <p>
          <code className="language-javascript">
            if (typeof btoa === &#39;function&#39; &amp;&amp; typeof atob ===
            &#39;function&#39;)
          </code>
        </p>
        <p>
          For more information on <code>atob()</code> and <code>btoa()</code>,
          you can refer to the Mozilla Developer Network (MDN) documentation:
        </p>

        <ul>
          <li>
            <a
              className="underline underline-offset-1"
              href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob"
              target="_new"
            >
              MDN Web Docs: atob()
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-1"
              href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa"
              target="_new"
            >
              MDN Web Docs: btoa()
            </a>
          </li>
        </ul>
      </div>
    </Main>
  );
};

export default BaseDecode;

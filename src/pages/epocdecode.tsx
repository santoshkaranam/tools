import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EpocDecode = () => {
  const [inputString, setValue] = useState(
    'Input your Unix epoch time encoded string here and use the below buttons'
  );
  const notify = () => {
    navigator.clipboard.writeText(inputString).then();
    toast('Copied');
  };
  return (
    <Main
      meta={
        <Meta
          title="Free Online Unix epoch time Decode Encode"
          description="Decodes encodes any text online to and from Unix epoch time format"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Online Unix epoch time Encode Decode
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
        className="w-full h-80 p-2"
      />
      <div className="grid grid-cols-2">
        <dd className="mt-1  p-2 text-left ">
          <button
            type="button"
            onClick={() => {
              setValue((new Date(inputString).getTime() / 1000.0).toString());
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
              setValue(
                new Date(parseInt(inputString, 10) * 1000).toISOString()
              );
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Decode
          </button>
        </dd>
      </div>
      <div className="text-white text-left">
        <p>
          The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the
          number of seconds that have elapsed since January 1, 1970 (midnight
          UTC/GMT), not counting leap seconds (in ISO 8601:
          1970-01-01T00:00:00Z). Literally speaking the epoch is Unix time 0
          (midnight 1/1/1970), but epoch is often used as a synonym for Unix
          time. Some systems store epoch dates as a signed 32-bit integer, which
          might cause problems on January 19, 2038 (known as the Year 2038
          problem or Y2038). The converter on this page converts timestamps in
          seconds (10-digit), milliseconds (13-digit) and microseconds
          (16-digit) to readable dates.
        </p>
        <p>
          <strong>Convert an Unix epoch date to human-readable date:</strong>
        </p>

        <pre>
          <code className="language-javascript">
            var myDate = new Date( your epoch date *1000);
            <br />
            document.write(myDate.toGMTString()+myDate.toISOString());
          </code>
        </pre>

        <p>Output:</p>

        <pre>2023-07-01T01:30:00.000Z</pre>

        <p>
          <strong>Convert human-readable dates to epoch:</strong>
        </p>

        <pre>
          <code className="language-javascript">
            var myDate = new Date(&quot;2023-07-01T01:30:00.000Z&quot;); // Your
            timezone! <br />
            var myEpoch = myDate.getTime()/1000.0; document.write(myEpoch);
          </code>
        </pre>

        <p>Output:</p>

        <pre>1688175000</pre>
      </div>
    </Main>
  );
};

export default EpocDecode;

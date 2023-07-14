import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deg2Mtrs = () => {
  const [inputString, setValue] = useState(
    'Input degree lat or degree long here'
  );
  const notify = () => {
    navigator.clipboard.writeText(inputString).then();
    toast('Copied');
  };

  function deg2mtrs(degValueString: string) {
    if (degValueString === undefined) {
      return;
    }
    const degValue = Number(degValueString);
    if (degValue === undefined || Number.isNaN(degValue)) {
      return;
    }
    const mtrs = 111139 * degValue;
    setValue(`${mtrs.toString()} meters`);
  }

  return (
    <Main
      meta={
        <Meta
          title="Free Earth Degree to Meters"
          description="Decodes Earth Degree to Meters"
        />
      }
    >
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Earth Degree to Meters
      </h1>
      <p className="text-white">
        For Each degree the radius line of the Earth sweeps out 111139 meters.
        This is true for small values. Near the poles this calculations doesnot
        hold good. This tool assumes small values of degree and earth as flat
        for calculation purposes.
      </p>
      <div className="grid grid-cols-1 text-white">
        <dt className="text-left ">Degree to Meters</dt>
        <dt className="text-left ">1 = 111139 meters</dt>
        <dt className="text-left ">0.01 = 1111.39 meters</dt>
        <dt className="text-left ">0.001 = 111.139 meters</dt>
        <dt className="text-left ">0.00225 = 250.06275 meters</dt>
        <dt className="text-left ">0.0045 = 500.1255 meters</dt>
      </div>

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
              deg2mtrs(inputString);
            }}
            className="rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-gray-500 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Convert
          </button>
        </dd>
      </div>
    </Main>
  );
};

export default Deg2Mtrs;

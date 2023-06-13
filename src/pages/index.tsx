import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React from 'react';

const Index = () => {
    return (
        <Main
            meta={
                <Meta
                    title="Decode Tools"
                    description="Tools to support different types of decode and encode"
                />
            }
        >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                About Encode Decode
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                This website is developed to help users and myself to quickly
                get the necessary tools for GIS and Research related
                development. Once the tools are stable the plan is to open
                source and work as a community.
            </p>
        </Main>
    );
};

export default Index;

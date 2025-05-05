import Blog from '@/app/Components/Blog/Blog';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Blog"></BreadCumb>
            {/* <MarqueeText></MarqueeText> */}
            <Blog></Blog>
            {/* <Cta1></Cta1>             */}
        </div>
    );
};

export default page;
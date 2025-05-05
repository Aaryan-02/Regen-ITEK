import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactUs from '@/app/Components/ContactUs/ContactUs';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Contact Us"></BreadCumb>
            {/* <MarqueeText></MarqueeText> */}
            <ContactUs></ContactUs>
            {/* <Cta1></Cta1>             */}
        </div>
    );
};

export default page;
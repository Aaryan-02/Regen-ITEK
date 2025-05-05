import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Testimonial5 from '@/app/Components/Testimonial/Testimonial5';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Testimonial"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Testimonial5></Testimonial5>
            <Cta1></Cta1>           
        </div>
    );
};

export default page;
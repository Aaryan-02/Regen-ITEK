import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Project4 from '@/app/Components/Project/Project4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Our Project"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Project4></Project4>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;
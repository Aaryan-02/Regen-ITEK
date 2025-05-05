import Blog7 from '@/app/Components/Blog/Blog7';
import BlogDetailsLeft1 from '@/app/Components/BlogDetails/BlogDetailsLeft1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Blog Details Left"></BreadCumb>
            <MarqueeText></MarqueeText>
            <BlogDetailsLeft1></BlogDetailsLeft1>
            <Blog7></Blog7>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;
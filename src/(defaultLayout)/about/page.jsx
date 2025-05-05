import About6 from '@/app/Components/About/About6';
import BreadCumb from '@/app/Components/Common/BreadCumb';
// import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
// import Mission1 from '@/app/Components/Mission/Mission1';
// import Vission1 from '@/app/Components/Mission/Vission1';
// import Team2 from '@/app/Components/Team/Team2';
// import Testimonial1 from '@/app/Components/Testimonial/Testimonial1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="About Us"></BreadCumb>
            {/* <MarqueeText></MarqueeText> */}
            <About6
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="25"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="Empower Your Business With Our Comprehensive IT Solutions"
                content="Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like."
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="Cyber Security"
                CounNum2="98%"
            ></About6>
            {/* <Mission1></Mission1>
            <Vission1></Vission1> */}
            {/* <Testimonial1></Testimonial1>
            <Team2></Team2> */}
            {/* <Cta1></Cta1>             */}

        </div>
    );
};

export default page;
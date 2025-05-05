import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ProjectDetailsRight1 from '@/app/Components/ProjectDetails/ProjectDetailsRight1';
import Service7 from '@/app/Components/Services/Service7';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Project Details Right"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ProjectDetailsRight1></ProjectDetailsRight1>
            <Service7></Service7>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;
import React from 'react';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = ({ children }) => {
    return (
        <div className='bodySectionWithMargin'>
            <BodySection title={"Hello, Khiba"} >{children}</BodySection>
        </div>
    )
}

export default BodySectionWithMarginBottom;
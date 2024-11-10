import React from 'react';


 function BookIcon() {
    return (

        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" >
<rect width="56" height="56" fill="url(#pattern0_316_3619)"/>
<defs>
<pattern id="pattern0_316_3619" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_316_3619" transform="scale(0.01)"/>
</pattern>
<image id="image0_316_3619" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>


    )

}

export default BookIcon;


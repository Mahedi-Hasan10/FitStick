import React from 'react';

const MyButton = ({buttonName,btnBG,Border}) => {
    return (
        <button className={`lg:py-[14px] py-2 lg:px-[32px] px-[20px] ${btnBG} text-white rounded-md ${Border}`}>
          {buttonName}
        </button> 
    );
};

export default MyButton;
import React from 'react';

const MyButton = ({buttonName,btnBG,Border}) => {
    return (
        <button className={`lg:py-4 py-2 lg:px-8 md:px-5 px-4 ${btnBG} text-white border-opacity-20 ${Border}`}>
          {buttonName}
        </button> 
    );
};

export default MyButton;
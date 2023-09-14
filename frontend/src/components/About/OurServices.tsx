import React from 'react'

interface OurServicesProps{
    heading: string;
    body: string;
}

const OurServices:React.FC<OurServicesProps> = ({heading, body})=> {
  return (
      <div className="card">
        <div className="badge"></div>
        <span className="font-bold text-xl">
          {heading}
        </span>
        <p>
         {body}
        </p>
      </div>
   
  );
}

export default OurServices

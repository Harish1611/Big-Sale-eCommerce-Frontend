import React from "react";

const AddressCard = ({address}) => {

  console.log(address)
  return (
<div className="space-y-3">
      <div >
        <p className="font-normal pt-2"> {`${address?.firstName} ${address?.lastName}`} </p>
        <p className="opacity-60 pt-2"> {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}</p>
        <div assName="space-y-1">
          <p className="font-normal opacity-60 pt-2">Phone Number</p>
          <p className="opacity-60 pt-2">{address?.mobile}</p>
        </div>

      </div>
    </div>


  );

};

export default AddressCard;

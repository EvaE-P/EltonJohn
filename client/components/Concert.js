import React from "react";

const Concert = props => {
  return (
    <tbody className="tryWrap">
      <tr className="style2">
        <td>{props.event.VenueCity}</td>
        
        <td>{props.event.Date}</td>
      </tr>
    </tbody>
  );
};

export default Concert;

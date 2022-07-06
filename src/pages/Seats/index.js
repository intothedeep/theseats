import React, { useEffect } from "react";

function Seats() {
  useEffect(() => {
    console.log('seats json');
  }, []);

  return <div>Seats</div>;
}

export default Seats;

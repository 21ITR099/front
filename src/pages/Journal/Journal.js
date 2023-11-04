import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Process" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">HINATA</span>{" "}
          Dairy farming is a class of agriculture for the long-term production of milk, which is processed (either on the farm or at a dairy plant, either of which may be called a dairy) for the eventual sale of a dairy product. Dairy farming has a history that goes back to the early Neolithic era, around the seventh millennium BC, in many regions of Europe and Africa. Before the 20th century, milking was done by hand on small farms. 
        </h1>
        
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>


    </div>
  );
};

export default Journal;

import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjIu_23snxZjae_eUKS1Z528QFnhQFnR0tSKyCGcxKJxzA_jz2suAQ3BPeSUEW08X80c&usqp=CAU"
          productName="CHEESE"
          price="65.00"
          des="Cheese is a dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein."
        />
        <Product
          _id="1012"
          img="https://cdn.britannica.com/86/197886-050-014D8A12/bowl-yogurt.jpg"
          productName="Yogurt"
          price="80.00"
          des="Yogurt is a food produced by bacterial fermentation of milk. The bacteria used to make yogurt are known as yogurt cultures. Fermentation of sugars in the milk by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tart flavor"
        />
        <Product
          _id="1013"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWo13WiYnnH5L92wpdjeUe35TQmBTvaYQ0Envbx4x4i-HzQTQShlLQthY9yxOEh9_5ZSg&usqp=CAU"
          productName="Butter"
          price="75.00"
          des="Butter is a dairy product made from the fat and protein components of churned cream. It is a semi-solid emulsion at room temperature, consisting of approximately 80% butterfat."
        />
        <Product
          _id="1014"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNCfbgHN_giezP3PWq0zJYlWPGcYd8CynLg&usqp=CAU"
          productName="Milk Powder"
          price="100.00"
          des="Powdered milk has the same nutrition as fresh milk, meaning it's a good source of vitamins A and D, calcium, and protein."
        />
      </div>
    </div>
  );
};

export default BestSellers;

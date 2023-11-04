import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img="https://www.aromamilk.com/images/curd/set-curd.png"
            productName="CURD"
            price="30.00"
            des="Curd is made by mixing a yogurt starter with warm milk and allowed to ferment for some hours. After the fermentation process the consistency of the flowing milk gradually transforms to a thick wobbly pudding like texture"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img="https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream-500x500.jpg"
            productName="ICE CREAM"
            price="50.00"
            des="Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches. Food colouring is sometimes added in addition to stabilizers"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img="https://www.aromamilk.com/images/products/butter/table-butter.png"
            productName="AROMA BUTTER"
            price="180.00"
            des="Made out of fresh cream, the texture of the butter is consistent in nature. The salt content in the butter acts as a general preservative adding life."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img="https://www.aromamilk.com/images/products/milk/toned_milk.png"
            productName="AROMA MILK"
            price="60.00"
            des="Aroma Toned milk has the qualities of the fine nourishments and good taste. With the nutritive value of fresh Cow`s milk, a glass of toned milk is good source of protein to rectify condition like malnourishment."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img="https://www.aromamilk.com/images/products/milk/double_toned_milk.png"
            productName="DOUBLE TONED MILK"
            price="70.00"
            des="Made low in fat and high on quality, Aroma DTM is the right pick for your healthy lifestyle. Perfect to maintain the cholesterol level, Aroma DTM keeps your heart happy, while a low calorie content keeps your body fit."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

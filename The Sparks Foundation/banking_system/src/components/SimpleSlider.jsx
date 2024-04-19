import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider className="p-[9.86rem] bg-black bg-opacity-50" {...settings}>
      <div className="">
        <h1 className="uppercase text-center text-6xl text-white p-2">
          TSF Bank
        </h1>
        <p className="text-xl text-center text-white p-2">
          TSF Bank is committed to providing reliable and secure banking
          services to its customers. With a wide range of financial products and
          a strong customer focus, we aim to meet all your banking needs. Our
          online banking platform offers convenience and ease of access,
          allowing you to manage your finances from anywhere, at any time.
        </p>
      </div>
      <div className="">
        <h1 className="uppercase text-center text-6xl text-white p-2">
          All Customer Details
        </h1>
        <p className="text-xl text-center text-white p-2">
          Our customer details section provides a comprehensive view of all our
          customers, allowing you to easily access and manage customer
          information. From basic contact details to account history, this
          feature gives you the insights you need to better serve our customers
          and enhance their banking experience.
        </p>
      </div>
      <div className="">
        <h1 className="uppercase text-center text-6xl text-white p-2">
          Transactions
        </h1>
        <p className="text-xl text-center text-white p-2">
          Transfer money between customers seamlessly with TSF Bank's secure and
          efficient transfer system. Whether you need to send money to a friend
          or family member or make a payment to a business, our platform ensures
          that your transactions are processed quickly and securely, giving you
          peace of mind.
        </p>
      </div>
    </Slider>
  );
};

export default SimpleSlider;

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";

const HeroSection1 = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      image: "/gamepad.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 75,
      image: "/keyboard.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      discount: "-30%",
      rating: 99,
      image: "/monitor.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 99,
      image: "/chair.png",
    },
  ];

  return (
    <div>
      <div className="w-[1170px] h-[103px] ml-24 mt-11">
        <div className="w-[20px] h-[40px] rounded-md bg-red-600">
          <p className="text-red-600 ml-9 pt-2">Today's</p>
        </div>
        <div className=" flex">
          <h1 className=" font-semibold text-xl mt-4">Flash Sales</h1>
          <img
            className="mx-[90px] w-[240px] h-[50px]"
            src="/CalenderTime.png"
            alt=""
          />

          <span className="bg-gray-100 mx-1 rounded-full h-[26px] w-[26px] ml-[530px] mt-4">
            <ArrowLeft />
          </span>
          <span className="bg-gray-100  rounded-full h-[26px] w-[26px] mt-4">
            <ArrowRight />
          </span>
        </div>
      </div>
      <div className="bg-white ml-20 mr-10 mt-4">
        <div className="bg-gray-100 border rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-md p-4 shadow hover:shadow-lg transition duration-300"
              >
                <div className="relative h-44 flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />

                  <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>

                  <div className="absolute top-1 right-1  ">
                    <button className="text-gray-400 hover:text-red-500  ">
                      <Heart />
                    </button>
                  </div>
                  <div className="absolute top-10 right-1 ">
                    <button className="text-gray-400 hover:text-red-500">
                      <Eye />
                    </button>
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <span className="text-red-500 font-semibold">
                        {product.price}
                      </span>
                      <span className="line-through px-3 text-gray-400">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-500 ml-1">
                        ({product.rating})
                      </span>
                    </div>
                  </div>

                  <button className="mt-2 w-full bg-black text-white py-1 rounded text-sm hover:bg-gray-800 transition duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection1;

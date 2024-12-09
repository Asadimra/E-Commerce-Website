import { ArrowRight } from "lucide-react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex  mt-10">
      <div className="w-[217px] h-[344px] ml-24 border-purple-900">
        <ol className="">
          <ul className="flex my-3">
            Women&apos;s Fashion{" "}
            <span className="ml-10 w-[24px]">
              <ChevronRight />
            </span>{" "}
          </ul>
          <ul className="flex my-3">
            Men&apos;s Fashion{" "}
            <span className="ml-16 w-[24px]">
              <ChevronRight />
            </span>{" "}
          </ul>
          <ul className="my-3">Electronic</ul>
          <ul className="my-4">Home & Lifestyle</ul>
          <ul className="my-4">Medicine</ul>
          <ul className="my-4">Sport & Outdoor</ul>
          <ul className="my-4">Baby&apos;s & Toys</ul>
          <ul className="my-4">Groceries & Pets</ul>
          <ul className="my-4">Health & Beauty</ul>
        </ol>
      </div>
      <div className="flex bg-black text-white w-[892px] h-[344px] pl-16">
        <div>
          <img className="pt-14" src="/iphoneLogo.png" alt="" />
          <h1 className="w-[294px] h-[120px] font-medium text-5xl pt-7">
            Up to 10% off Voucher
          </h1>
          <button className="flex pt-7 text-xl underline underline-offset-8">
            Shop Now{" "}
            <span className="m-1">
              {" "}
              <ArrowRight />
            </span>
          </button>
        </div>
        <div className="w-[496px] h-[352px] ml-10">
          <img src="iphone.png" alt="" />
          <img className="w-[110px] h-[14px] -ml-9 " src="/dotted.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;

import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="  w-[1170px] h-[38px] flex  mt-9">
      <div className="  flex ">
        <h1 className="font-bold text-xl mx-24">Exclusive</h1>

        <ol className="flex   gap-[48px] ">
          <ul className="underline underline-offset-8 ">Home</ul>
          <ul>Contact</ul>
          <ul>About</ul>
          <ul>Sign in</ul>
        </ol>
      </div>
      <div className="w-[243px] h-[38px] ml-14 flex">
        <input
          type="text"
          className="w-[350px] h-[24px] opacity[50%] p-2 py-4 rounded-md bg-gray-100"
          name="searching"
          id=""
          placeholder="What are you Looking for?"
        />
        <span className="-ml-8 mt-1">
          <Search />
        </span>
      </div>

      <div className=" flex gap-6 mx-10 mt-1">
        <Heart />
        <ShoppingCart />
      </div>
    </div>
  );
};
export default Navbar;

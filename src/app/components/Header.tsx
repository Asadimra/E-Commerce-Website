const Header = () => {
  return (
    <div className=" bg-black text-white w-[1280px] h-[48px]  ">
      <div className="flex pt-3">
        <p className="w-[650px] h-[22px]  gap-8 font-normal mx-56 ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a className="underline ml-4 " href="/home">
            ShopNow
          </a>
        </p>
        <select className="bg-black items-end w-[78px] gap[5px]">
          <option value="english">English</option>
        </select>
      </div>
    </div>
  );
};
export default Header;

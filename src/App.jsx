import { TypeAnimation } from "react-type-animation";
import "/src/App.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Card } from "flowbite-react";

function App() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24  mx-auto fixed w-screen px-24 bg-[#faf6f0]">
        <h1 className="w-full text-3xl font-bold ">KHOMSA_</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Projects</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={!nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500" : "fixed top-0 left-[-100%] w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500"}
        >
          <h1 className="w-full text-3xl font-bold  m-4">KHOMSA_</h1>
          <ul className=" uppercase p-4">
            <li className="p-4  border-b border-[#ddd0c0]">Home</li>
            <li className="p-4  border-b border-[#ddd0c0]">Projects</li>
            <li className="p-4  border-b border-[#ddd0c0]">About</li>
            <li className="p-4 ">Contact</li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[800px] mt[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center px-24 lg:px-0">
        <p className="font-bold p-2 text-xl uppercase">Welcome to Khomsa_</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#607274]">Reach the pinnacle of fashion with us!</h1>
        <div className="flex">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Trendsetting Styles, Quality Craftsmanship, Inclusive Fashion for{" "}
            <TypeAnimation
              className="text-[#607274]"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "All",
                10000, // wait 1s before replacing "Mice" with "Hamsters"
                "Kids",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Teen",
                1000,
                "Adults",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-fle" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl text-gray-600"> Explore the latest fashion collections and express yourself with unique flair from Khomsa_</p>
        <button className="bg-[#607274] text-[#faf6f0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:scale-110 duration-300">Contact Us</button>
      </div>
      <div className="w-full bg-slate-50 py-24 px-4">
        <h1 className="font-bold pb-5 text-xl uppercase text-center">New Collection</h1>
        <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10 justify-center items-center ">
          <Card className="max-w-sm" imgSrc="/produk/1.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk Baru 1</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 13,4</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/2.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk Baru 2</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/3.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;

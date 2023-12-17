import { TypeAnimation } from "react-type-animation";
import "/src/App.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { Card } from "flowbite-react";

function App() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* navbar */}
      <div className="flex justify-between items-center h-24  mx-auto fixed w-screen px-24 bg-[#faf6f0]">
        <h1 className="w-full ">
          <img src="/logo.png" alt="" width={150} />
        </h1>
        <ul className="hidden md:flex items-center">
          <li className="p-4">
            <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link activeClass="active" to="New_Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              New Collection
            </Link>
          </li>
          <li className="p-4">
            <Link activeClass="active" to="Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              Collection
            </Link>
          </li>
          <li className="p-4">
            {" "}
            <Link activeClass="active" to="Location" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              Location
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={!nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500" : "fixed top-0 left-[-100%] w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500"}
        >
          <h1 className="w-full m-5 ">
            <img src="/logo.png" alt="" width={150} />
          </h1>
          <ul className=" uppercase p-4">
            <li className="p-4  border-b border-[#ddd0c0]">
              <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
                Home
              </Link>
            </li>
            <li className="p-4  border-b border-[#ddd0c0]">
              <Link activeClass="active" to="New_Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
                New Collection
              </Link>
            </li>
            <li className="p-4  border-b border-[#ddd0c0]">
              <Link activeClass="active" to="Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
                Collection
              </Link>
            </li>
            <li className="p-4 ">
              {" "}
              <Link activeClass="active" to="Location" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[800px] mt[-96px] w-full h-full text-center mx-auto flex flex-col justify-center px-24 lg:px-0 pt-48 pb-24 " id="Hero">
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

        <a
          href="https://wa.me/6289512832588?text=Halo%20admin%20saya%20ingin%20membeli%20produk%20dari%20Khomsa_"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#607274] text-[#faf6f0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:scale-110 duration-300"
        >
          Contact Us
        </a>
        <div id="New_Collection"></div>
      </div>

      {/* New Collection */}
      <div className="w-full bg-slate-50 py-24 px-4">
        <h1 className="font-bold pb-5 text-xl uppercase text-center">New Collection</h1>

        <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10 justify-center items-center ">
          <img src="/produk/1.webp" alt="" width={"25%"} />
          <img src="/produk/2.webp" alt="" width={"25%"} />
          <img src="/produk/3.webp" alt="" width={"25%"} />
          <img src="/produk/1.webp" alt="" width={"25%"} />
          <img src="/produk/2.webp" alt="" width={"25%"} />
          <img src="/produk/3.webp" alt="" width={"25%"} />
        </div>
        <div id="Collection"></div>
      </div>

      {/* Collection */}
      <div className="w-full py-24 px-4">
        <div className="flex justify-center items-center gap-5  pb-5 ">
          <img src="/logo.png" alt="" width={150} />
          <h1 className="font-bold text-xl uppercase text-center">Collection</h1>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10 justify-center items-center ">
          <Card className="max-w-sm" imgSrc="/produk/1.webp" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk 1</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 13,4</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/2.webp" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk 2</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/3.webp" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/1.webp" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk 1</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 13,4</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/2.webp" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk 2</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/3.webp" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
        </div>
        <div id="Location"></div>
      </div>

      {/* Location */}
      <div className="w-full bg-slate-50 py-24 px-4">
        <h1 className="font-bold pb-5 text-xl uppercase text-center">Location</h1>

        <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10 lg:justify-between justify-center items-center ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <p>GDC, Gg. 5B, RT.12/RW.04, Tengah, Bebel, </p>
                <p>Kec. Wonokerto, Kabupaten Pekalongan</p>
                <p>Jawa Tengah 51153</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              089512832588
            </div>
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <div>
                <p>Senin - Minggu </p>
                <p>09.00 - 17.00</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.56785560718265!2d109.62488981694152!3d-6.880337472780778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70270c2e15eb0b%3A0x8b0e2b993a58faa4!2sKhomsa_!5e0!3m2!1sid!2sid!4v1702796772218!5m2!1sid!2sid"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Khomsa_Location"
          ></iframe>
        </div>
        <div id="Collection"></div>
      </div>
      <footer className="my-10 text-center text-gray-500">
        <p>&copy; 2023 SeniCrew. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

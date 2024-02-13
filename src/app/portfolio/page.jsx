"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Onlife Platform",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/portfolio/onlife.webp",
    link: "https://onlife.ir",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "MotionAndPotion",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/portfolio/motion.webp",
    link: "https://motionandpotion.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Karsaz Charity Platform",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/portfolio/karsaz.webp",
    link: "https://karsazcharity.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "ProBot Trader App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/portfolio/trader.png",
    link: "https://traderprobot.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className='h-[600vh] relative'
        ref={ref}
      >
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Works
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div
            style={{ x }}
            className='flex'
          >
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className='flex flex-col gap-8 text-white'>
                  <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
                    {item.title}
                  </h1>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] overflow-hidden rounded-xl'>
                    <Image
                      src={item.img}
                      fill
                      alt=''
                      className='object-cover object-top'
                    />
                  </div>
                  {/* <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                    {item.desc}
                  </p> */}
                  <Link
                    href={item.link}
                    target='_blank'
                    className='flex justify-end '
                  >
                    <button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-gray-600 hover:text-white'>
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-8xl'>Do you have a project?</h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath
                xlinkHref='#circlePath'
                className='text-xl'
              >
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

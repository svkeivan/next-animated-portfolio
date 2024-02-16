"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroImage from "../../public/herofc.webp";

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center'>
          <Image
            src={HeroImage}
            alt='hero'
            priority
            fill={true}
            className='object-contain'
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* TITLE */}
          <h1 className='text-4xl md:text-6xl font-bold'>
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className='md:text-xl'>
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className='w-full flex gap-4'>
            <Link
              href={"/portfolio"}
              className='p-4 rounded-lg ring-1 ring-black bg-black text-white hover:font-bold'
            >
              View My Work
            </Link>
            <Link
              href={"/contact"}
              className='p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white'
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

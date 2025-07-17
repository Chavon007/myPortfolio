"use client";
import { motion } from "framer-motion";
import "./home.css";
import Image from "next/image";
import Link from "next/link";
function Home() {
  return (
    <div className="container">
      <div className="home">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="home-content">
            <div className="home-image">
              <Image
                id="home-image"
                src="/port.png"
                alt="salvation"
                width={1000}
                height={100}
                style={{ width: "250px", height: "200px" }}
              />
            </div>

            <div className="home-writeup">
              <h3 className="typewriter-text">Azuh Salvation Enyioma</h3>
              <p className="brief">A Software Developer</p>
              <p className="mainBrief">
                I build responsive websites, modern user interfaces, and
                full-stack applications. Whether it’s creating from scratch or
                optimizing an existing project, I focus on clean code, great
                performance, and seamless user experience.
              </p>
              <Link href="/about">About me</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

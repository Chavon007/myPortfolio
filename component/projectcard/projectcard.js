import Link from "next/link";
import Image from "next/image";
import "./projectcard.css";

function Projectcard() {
  const projectcard = [
    {
      image: "/fitmuse.JPG",
      name: "FITMUSE - Full-Stack E-Commerce Website",
      desc: "A complete fitness-themed e-commerce platform where users can browse, search, and purchase gym wear and accessories.",
      stack: "Next.js, Express.js, MongoDB, Tailwind CSS, and CSS",
      link: "https://fitmuse.vercel.app/",
      glink: "https://github.com/Chavon007/fitmuse-frontend.git",
    },
    {
      image: "/Healet.JPG",
      name: "Healet – Jewelry Store Website",
      desc: "A stylish and modern jewelry storefront built with Next.js, designed to highlight elegant products and deliver a smooth shopping experience.",
      stack: " Next.js, React, Tailwind CSS, and CSS",
      link: "https://jewellery-app-two.vercel.app/",
      glink: "https://github.com/Chavon007/jewellery.app.git",
    },
  ];
  return (
    <div className="projectcard">
      {projectcard.map((product, index) => (
        <div className="card" key={index}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            style={{ width: "100%", height: "60%" }}
          />
          <h2>{product.name}</h2>
          <h6>{product.desc}</h6>
          <p>
            Tech Stack: <span>{product.stack}</span>
          </p>
          <div className="link">
            <Link href={product.link}>View Project</Link>
            <Link href={product.glink}>GitHub Repo</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projectcard;

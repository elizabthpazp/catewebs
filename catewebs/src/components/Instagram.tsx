"use client";

import { InstagramEmbed } from "react-social-media-embed";

export const Instagram = () => {
  return (
    <div className="flex flex-col items-center sm:flex-col xs:flex-col md:flex-row gap-4" style={{ display: "flex", justifyContent: "center", zoom: "80%" }}>
      <InstagramEmbed url="https://www.instagram.com/p/CzEsAzJBFQe/" width={328} height={350} placeholderImageUrl="https://i.pinimg.com/originals/7f/ea/55/7fea550d2455d9cd93299698f7302247.gif" />
      <InstagramEmbed url="https://www.instagram.com/p/Cy01z-GL6k8/" width={328} height={350}  placeholderImageUrl="https://i.pinimg.com/originals/7f/ea/55/7fea550d2455d9cd93299698f7302247.gif"/>
      <InstagramEmbed url="https://www.instagram.com/p/CnNdBiXvPZE/" width={328} height={350} placeholderImageUrl="https://i.pinimg.com/originals/7f/ea/55/7fea550d2455d9cd93299698f7302247.gif"/>
      <InstagramEmbed url="https://www.instagram.com/p/CzJrnZzgxnX/" width={328} height={350} placeholderImageUrl="https://i.pinimg.com/originals/7f/ea/55/7fea550d2455d9cd93299698f7302247.gif"/>
    </div>
  );
};

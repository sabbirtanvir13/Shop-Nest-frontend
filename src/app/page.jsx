import Banner from "@/pages/Banner";
import { Features } from "@/pages/Features";
import PromoBanner from "@/pages/PromoBanner";
import SubscribeSection from "@/pages/SubscribeSection";


import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <Features></Features>
    <PromoBanner></PromoBanner>
      
<SubscribeSection></SubscribeSection>
  </div>
  );
}

import Latestproducts from "@/components/LatesProducts/Latestproducts";
import Banner from "@/pages/Banner";
import { Blog } from "@/pages/Blog";
import { Features } from "@/pages/Features";
import PromoBanner from "@/pages/PromoBanner";
import ReviewsSection from "@/pages/ReviewsSection";
import SubscribeSection from "@/pages/SubscribeSection";


import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <Features></Features>
    <Latestproducts></Latestproducts>
     <Blog></Blog>
    <PromoBanner></PromoBanner>
    <ReviewsSection></ReviewsSection>
      
<SubscribeSection></SubscribeSection>
  </div>
  );
}

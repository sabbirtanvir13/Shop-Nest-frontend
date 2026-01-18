// import Latestproducts from "@/components/LatesProducts/Latestproducts";
// import Banner from "@/pages/Banner";

// import { Blog } from "@/pages/Blog";
// import { Features } from "@/pages/Features";
// import PromoBanner from "@/pages/PromoBanner";
// import ReviewsSection from "@/pages/ReviewsSection";
// import SubscribeSection from "@/pages/SubscribeSection";



// export default function Home() {
//   return (
//   <div>
//     <Banner></Banner>
//     <Features></Features>
//     <Latestproducts></Latestproducts>
//      <Blog></Blog>
//     <PromoBanner></PromoBanner>
//     <ReviewsSection></ReviewsSection>
      
// <SubscribeSection></SubscribeSection>
//   </div>
//   );
// }


import Banner from "@/pages/Banner";
import Features from "@/pages/Features";
import Latestproducts from "@/components/LatesProducts/Latestproducts";
import Blog from "@/pages/Blog";
import PromoBanner from "@/pages/PromoBanner";
import ReviewsSection from "@/pages/ReviewsSection";
import SubscribeSection from "@/pages/SubscribeSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <Latestproducts />
      <Blog />
      <PromoBanner />
      <ReviewsSection />
      <SubscribeSection />
    </div>
  );
}

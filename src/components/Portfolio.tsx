import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import MediaDisplay, { MediaType } from "@/components/MediaDisplay";
import pancakePoster from "@/assets/portfolio/pancake-poster.jpg";
import burgerPoster from "@/assets/portfolio/burger-poster.jpg";
import honeyChilliPoster from "@/assets/portfolio/honey-chilli-poster.jpg";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });
  const portfolioItems = [{
    id: 1,
    title: "Pancake Perfection",
    category: "posters",
    mediaType: "image" as MediaType,
    mediaUrl: pancakePoster,
    description: "Delicious pancake poster design for social media marketing",
    tags: ["Food Design", "Social Media", "Poster"]
  }, {
    id: 2,
    title: "Gourmet Burger Campaign", 
    category: "posters",
    mediaType: "image" as MediaType,
    mediaUrl: burgerPoster,
    description: "Mouth-watering burger poster for restaurant promotion",
    tags: ["Food Design", "Restaurant", "Marketing"]
  }, {
    id: 3,
    title: "Honey Chilli Delight",
    category: "posters", 
    mediaType: "image" as MediaType,
    mediaUrl: honeyChilliPoster,
    description: "Spicy honey chilli poster design with vibrant colors",
    tags: ["Food Design", "Spicy", "Vibrant"]
  }, {
    id: 4,
    title: "Instagram Reels Collection",
    category: "reels",
    mediaType: "google-drive" as MediaType,
    mediaUrl: "https://drive.google.com/file/d/1example_reel_collection/view",
    thumbnail: "https://via.placeholder.com/400x500?text=Reels+Collection",
    description: "Engaging short-form video content for maximum reach",
    tags: ["Video", "Instagram", "Engagement"]
  }, {
    id: 5,
    title: "Brand Story Series",
    category: "stories",
    mediaType: "youtube" as MediaType,
    mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://via.placeholder.com/400x500?text=Brand+Stories",
    description: "Creative Instagram stories that tell your brand's story",
    tags: ["Stories", "Branding", "Creative"]
  }, {
    id: 6,
    title: "Product Showcase Reel",
    category: "reels",
    mediaType: "video" as MediaType,
    mediaUrl: "/videos/product-showcase.mp4",
    thumbnail: "https://via.placeholder.com/400x500?text=Product+Video",
    description: "Dynamic product presentation with smooth transitions",
    tags: ["Product", "Video", "Showcase"]
  }];
  const categories = [{
    id: "all",
    label: "All Work"
  }, {
    id: "posters",
    label: "Posters"
  }, {
    id: "reels",
    label: "Reels"
  }, {
    id: "stories",
    label: "Stories"
  }];
  const filteredItems = activeTab === "all" ? portfolioItems : portfolioItems.filter(item => item.category === activeTab);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gradient-primary md:text-5xl">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of creative campaigns and discover how we've helped 
            brands tell their stories and connect with their audiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-glass rounded-2xl border border-border/50">
            {categories.map(category => <Button key={category.id} variant={activeTab === category.id ? "default" : "ghost"} className={`rounded-xl transition-smooth ${activeTab === category.id ? "gradient-primary text-white shadow-glow" : "hover:bg-primary/10"}`} onClick={() => setActiveTab(category.id)}>
                {category.label}
              </Button>)}
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-glass border-primary/20 hover:bg-primary/10" onClick={scrollPrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-glass border-primary/20 hover:bg-primary/10" onClick={scrollNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredItems.map((item, index) => <div key={item.id} className="flex-[0_0_350px] min-w-0">
                  <Card className="overflow-hidden border-0 shadow-soft hover-lift bg-glass group h-full">
                    <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <MediaDisplay
                        mediaType={item.mediaType}
                        mediaUrl={item.mediaUrl}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        className="group"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                        <div className="absolute bottom-4 left-4 right-4">
                          <Button size="sm" variant="secondary" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {tag}
                          </Badge>)}
                      </div>
                    </div>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth">
            View More Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Portfolio;
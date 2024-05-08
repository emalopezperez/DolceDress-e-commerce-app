import HeroSlider from "./components/sliders/HeroSlider";
import HeroSliderMobil from "./components/sliders/HeroSliderMobil";

const slides = [
  {
    id: 1,
    image:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-slider-01.jpg?v=1660279624&width=2000",
    title: "Summer of the nigth",
    parraf:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo",
  },
  {
    id: 5,
    image:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-slider-03.jpg?v=1679041258&width=2000",
    title: "Summer of the nigth",
    parraf:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo",
  },
  {
    id: 3,
    image:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-slider-02.jpg?v=1679040707&width=3840",
    title: "Summer of the nigth",
    parraf:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo",
  },
];

const slidesMobil = [
  {
    id: 1,
    image:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-slider-mobile-02.jpg?v=1685515621&width=3840",
    title: "Summer of the nigth",
    parraf:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo",
  },
  {
    id: 5,
    image:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-slider-mobile-01.jpg?v=1685515621&width=3840",
    title: "Summer of the nigth",
    parraf:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo",
  },
  {
    id: 3,
    image:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-slider-mobile-03.jpg?v=1685515621&width=width=3840",
    title: "Summer of the nigth",
    parraf:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo",
  },
];

export default function Hero() {
  return (
    <>
      <div className="sm:block hidden">
        <HeroSlider slides={slides} />
      </div>
      <div className="block sm:hidden">
        <HeroSliderMobil slides={slidesMobil} />
      </div>
    </>
  );
}

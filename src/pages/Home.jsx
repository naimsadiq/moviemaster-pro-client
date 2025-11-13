// import React, { useContext, useEffect, useState } from "react";
import TopRatedMovies from "../components/TopRatedMovies";
import Search from "../components/header/Search";
import banner from "../assets/banner.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { MovieContext } from "../context/movieContext";
import { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import LatestMovies from "../components/LatestMovies";
import MovieCard from "../components/MovieCard";
import BannerText from "../components/header/BannerText";
import GenreMenu from "../components/GenreMenu";
import AboutPlatform from "../components/AboutPlatform";
const Home = () => {
  const { movies, loading } = useContext(MovieContext);
  const [moviesData, setMoviesDatas] = useState([]);
  // console.log(movies);
  useEffect(() => {
    if (movies && movies.length > 0) {
      const sortedMovie = movies
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
      setMoviesDatas(sortedMovie);
    }
  }, [movies]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <section className="relative md:h-[550px] h-[430px] overflow-hidden">
        <img
          className="w-full h-full absolute object-cover"
          src={banner}
          alt=""
        />
        <div className="w-full md:h-[550px] h-[550px] absolute bg-[#00000060]"></div>
        {/* <Search></Search> */}
        {/* <BannerText></BannerText> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper absolute md:w-10/12 w-11/12 mx-auto left-8 md:left-0 md:top-23  top-5"
        >
          <div className="md:py-5">
            {moviesData.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
      <section className="bg-[#f9fafb] dark:bg-[#23036a]">
        <GenreMenu></GenreMenu>
      </section>
      <section className="py-10 bg-[#f1f5f9] text-[#6992f3] dark:bg-[#191e24] dark:text-white">
        <TopRatedMovies></TopRatedMovies>
      </section>
      <section className="py-10 bg-[#f5f3ff] text-[#6992f3] dark:bg-[#121212] dark:text-white">
        <LatestMovies></LatestMovies>
      </section>
      <section className="">
        <AboutPlatform></AboutPlatform>
      </section>
    </div>
  );
};

export default Home;

// /* eslint-disable react/destructuring-assignment */
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from 'reactstrap';

// const initialState = [
//   {
//     src: '',
//     altText: '',
//     caption: '',
//     key: 0,
//   },

// ];
// export default function ArtistPicCarousel(args, singleArtist) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [picInfo, setPicInfo] = useState({
//     ...initialState,
//   });

//   useEffect(() => {
//     setPicInfo({
//       src: singleArtist.img1,
//       altText: '',
//       caption: '',
//       key: 1,
//     });
//   });

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === singleArtist.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? singleArtist.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = singleArtist.map((item) => (
//     <CarouselItem
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={singleArtist.src}
//     >
//       <img src={singleArtist.src} alt={item.altText} />
//       <CarouselCaption
//         captionText={item.caption}
//         captionHeader={item.caption}
//       />
//     </CarouselItem>
//   ));

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       // eslint-disable-next-line react/jsx-props-no-spreading
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// ArtistPicCarousel.propTypes = {
//   singleArtist: PropTypes.shape({
//     name: PropTypes.string,
//     img1: PropTypes.string,
//     img2: PropTypes.string,
//     img3: PropTypes.string,
//   }).isRequired,
// };

import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

const Banner = () => {
  let foto = useRef(null);
  let title1 = useRef(null);
  let title2 = useRef(null);
  let card1 = useRef(null);
  let card2 = useRef(null);

  let t1 = new TimelineLite({ delay: 0.3 }); //para asegurar la carga de la animacion

  useEffect(() => {
    TweenMax.to(foto, 10, { css: { visibility: 'visible' } });
    t1.from(foto, 1.2, { x: 800, ease: Power3.easeOut }, 'Start').from(
      foto,
      2,
      { scale: 0.8, ease: Power3.easeOut },
      0.2
    );

    t1.from(title1, 1.2, { x: -800, ease: Power3.easeOut }, 'Start').from(
      title1,
      2,
      { scale: 0.8, ease: Power3.easeOut },
      0.2
    );

    t1.from(title2, 0.8, { y: 800, ease: Power3.easeInOut }, 'Start').from(
      title2,
      0.6,
      { scale: 0.1, ease: Power3.easeOut },
      0.8
    );

    t1.from(card2, 3, { x: -800, ease: Power3.easeInOut }, 'Start').from(
      card2,
      3,
      { scale: 0.1, ease: Power3.easeOut },
      0.15
    );

    t1.from(card1, 4, { x: -1000, ease: Power3.easeInOut }, 'Start').from(
      card1,
      4,
      { scale: 0.1, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div className=" m-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="m-6 md:grid md:gap-5 lg:grid-cols-2 sm:flex sm:flex-col-reverse md:row-gap-8">
        <div className="flex flex-col  justify-cemter">
          <div className="max-w-xl mb-6  ">
            <h2
              ref={(el) => {title1 = el;}}
              className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              Hi! i'm fran
              <br className="hidden md:block" />I develop systems that
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span
                  className={`relative inline-block text-deep-purple-accent-400  text_primary pb-4 bg-gradient-to-t  h-9 `}
                >
                  generate incredible experiences.
                </span>
              </span>
            </h2>
            <p
              ref={(el) => {
                title2 = el;
              }}
              className="text-base text-gray-700 md:text-lg"
            >
              Nice to meet you! I know that my portfolio is not perfect but
              these were developed with a lot of effort,
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div
              ref={(el) => {
                card1 = el;
              }}
              className=" shadow-lg border-deep-purple"
            >
              <div className="h-full p-5 border-l-2 borderCard rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  I'll be sure to note
                </h6>
                <p className="text-sm text-gray-900">
                  Lookout flogging bilge rat main sheet bilge
                </p>
              </div>
            </div>
            <div
              ref={(el) => {
                card2 = el;
              }}
              className="  shadow-lg border-deep-purple"
            >
              <div className="h-full  p-5 border-l-2 borderCard rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big that
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with hello
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-16 sm:pt-4 sm:pb-4 ">
          <img
            ref={(el) => {
              foto = el;
            }}
            className="object-cover w-full   rounded shadow-lg "
            src="https://avatars.githubusercontent.com/u/63974005?v=4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
import anime from "animejs";
import { useRef, useEffect } from "react";

export const NewloadingAnimation = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);
  const leftSide = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const animation = anime.timeline({
  //     easing: "easeOutExpo",
  //     duration: 2000,
  //   });

  //   animation
  //     .add({
  //       targets: loadingRef.current?.querySelector(".loading-bar"),
  //       width: ["0%", "100%"],
  //       duration: 2000,
  //     })

  //     .add(
  //       {
  //         targets: loadingRef.current,
  //         opacity: 0,
  //         duration: 1000,
  //         complete: (anim) => {
  //           loadingRef.current!.style.display = "none";
  //         },
  //       },
  //       "+=500"
  //     );
  // }, []);
  useEffect(() => {
    const animation = anime.timeline({
      easing: "easeOutExpo",
      duration: 2000,
    });
    animation
      .add({
        targets: loadingRef.current?.querySelector(".right-side"),
        translateX: ["0%", "-100%"],
        duration: 2000,
        easing: "easeInOutExpo",
      })
      .add(
        {
          targets: loadingRef.current?.querySelector(".left-side"),
          translateX: ["0%", "100%"],
          easing: "easeInOutExpo",
          duration: 2000,
        },
        0,
      )
      .add(
        {
          targets: loadingRef.current?.querySelector(".loading"),
          translateY: ["0%", "1000%"],

          easing: "easeInOutExpo",
          duration: 2000,
        },
        0
      )
      .add(
        {
          targets: loadingRef.current,
          opacity: 0,
          duration: 1000,
          complete: (anim) => {
            loadingRef.current!.style.display = "none";
          },
        },
        "+=500"
      );
  }, []);

  return (
    <div ref={loadingRef} className="fixed inset-0 z-50">
      {/* Split Background */}
      <div className="flex h-full w-full">
        <div
          ref={rightSide}
          className="right-side h-full w-1/2 bg-[#d8d5cf] "
        />

        <div ref={leftSide} className="left-side h-full w-1/2 bg-[#d8d5cf] " />
      </div>

      {/* Centered Loading Text */}
      <div className="absolute  inset-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="overflow-hidden pb-52">
          <h1
            className="loading leading-loose text-4xl h-full font-extrabold text-[#2c2c2c] px-8 py-4 rounded-lg"
            //   style={{ fontFamily: "cursive" }}
          >
                 Miko Cañares
          </h1>
        </div>
      </div>
    </div>
  );
};

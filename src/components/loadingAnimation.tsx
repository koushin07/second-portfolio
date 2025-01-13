import anime from "animejs";
import { useRef, useEffect } from "react";

export const LoadingAnimation = () => {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = anime.timeline({
      easing: "easeOutExpo",
      duration: 2000,
    });

    animation
      .add({
        targets: loadingRef.current?.querySelector(".loading-bar"),
        width: ["0%", "100%"],
        duration: 2000,
      })

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
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e7e4de]"
    >
      <h2
        className="text-4xl font-light text-[#4a4a4a] mb-4"
        style={{ fontFamily: "cursive" }}
      >
        Loading
      </h2>
      <div className="w-48 h-1 bg-[#4a4a4a] bg-opacity-20 rounded-full overflow-hidden">
        <div className="loading-bar h-full w-0 bg-[#4a4a4a] rounded-full"></div>
      </div>
    </div>
  );
};

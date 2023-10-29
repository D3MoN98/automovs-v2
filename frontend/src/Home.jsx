import { useEffect } from "react";
import AboutUs from "./sections/AboutUs";
import Banner from "./sections/Banner";
import ContactUs from "./sections/ContactUs";
import OnlineBooking from "./sections/OnlineBooking";
import OurServices from "./sections/OurServices";

function Home() {
  useEffect(() => {
    let lastGenerated = Date.now(); // Initialize with current timestamp

    function generateDifferentRandomNumber(max, min) {
      if (max - min < 100) {
        throw new Error("The range should be at least 100.");
      }

      const a = 1664525;
      const c = 1013904223;
      const m = Math.pow(2, 32);

      lastGenerated = (a * lastGenerated + c) % m;
      const randomOffset = (lastGenerated / m) * (max - min - 100);
      const randomNumber = min + Math.floor(randomOffset);

      return randomNumber;
    }

    var gearCount = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    var gearContainer = document.querySelector("body");
    var body = document.body,
      html = document.documentElement;

    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    var width = Math.max(
      body.scrollWidth,
      body.offsetWidth,
      html.clientWidth,
      html.scrollWidth,
      html.offsetWidth
    );

    for (let i = 0; i <= gearCount; i++) {
      const gearElement = document.createElement("i");
      const gearElementClass = gearElement.classList;

      const icons = ["fas", "far", "fal"];

      gearElementClass.add(icons[Math.floor(Math.random() * icons.length)]);
      gearElementClass.add("fa-cog");

      gearElement.style.top =
        generateDifferentRandomNumber(height - 256, 100) + "px";
      gearElement.style.left =
        generateDifferentRandomNumber(width - 256, 50) + "px";
      gearElement.style.fontSize =
        generateDifferentRandomNumber(256, 32) + "px";

      const rotationAnimation = ["rotation", "rotationAnti"];

      gearElement.style.animation =
        rotationAnimation[
          Math.floor(Math.random() * rotationAnimation.length)
        ] + " 10s infinite linear";

      gearContainer.appendChild(gearElement);
    }
  }, []);

  return (
    <>
      <Banner />
      <OurServices />
      <OnlineBooking />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default Home;

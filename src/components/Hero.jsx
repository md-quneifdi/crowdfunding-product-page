import React, { createElement } from "react";
import { Container } from "../components";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Hero = () => {
  return (
    <section className="h-[225vh]">
      <Container>
        <div className="w-[100%] md:w-[82%] absolute bg-amber-500 top-[25%] mx-auto">
          {/* Start First */}
          <First />
          {/* End First */}
          {/* Start Second */}
          <Second />
          {/* End Second */}
          {/* Start Third */}
          <Third />
          {/* End Third */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10">
        <BentoGridItem
          id={6}
          title="Overview"
          description={
            <>
              <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Welcome to Hackfinity – the next big stop on our journey toward
                quality education for all!
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Prepare for an electrifying 24-hour hackathon experience as we
                gather bright minds from around the world at SRMIST. Hosted by
                SRM Institute and Team Livewires, this event is set to ignite
                innovation, collaboration, and impact on a global scale.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Join us for a whirlwind of activity, featuring inspiring keynote
                speeches, hands-on mentor hours, and friendly but intense
                competition. With tracks focused on making education more
                accessible, engaging, and powered by AI, Hackfinity promises a
                showcase of groundbreaking projects aimed at reshaping how we
                learn and teach.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Get ready to team up, think big, and tackle some of the most
                pressing challenges in education. Whether you’re here to win
                part of the 2 lakh INR prize pool or to connect with like-minded
                innovators, Hackfinity is the place to share ideas and create
                something extraordinary.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                So gather your tools, bring your brightest ideas, and let’s
                build a future where education is truly for everyone!
              </p>
            </>
          }
          className="lg:col-span-6 md:col-span-3 md:row-span-1"
          titleClassName="justify-center md:max-w-full max-w-full text-center"
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;

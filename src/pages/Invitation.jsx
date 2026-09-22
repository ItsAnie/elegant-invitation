import { useState } from "react";
import couple1 from "../assets/couple1.png";

import couple2 from "../assets/couple2.jpg";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import WeddingDay from "../components/WeddingDay";
import Ceremony from "../components/Ceremony";
import Reception from "../components/Reception";
import DressCode from "../components/DressCode";
import WeddingPlan from "../components/WeddingPlan";
import InvitationMessage from "../components/InvitationMessage";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer";

export default function Invitation({data, weddingId }) {
  const [ceremonyDone, setCeremonyDone] = useState(false);

  return (
    <main className="min-h-screen bg-[#deddd5] px-0 sm:px-5 md:px-8 lg:px-12">
      <div className="w-full overflow-hidden bg-[#f5f1e9] wedding-card sm:mx-auto sm:max-w-2xl sm:rounded-[28px] md:max-w-3xl lg:max-w-4xl">

        <Hero data={data} />

        <Countdown targetDate={data.dateISO} />

        <InvitationMessage />

        <WeddingDay date={data.dateISO}/>

        <WeddingPlan data={data} />

        

        <section className="bg-[#f5f1e9]">
          <img
            src={couple2}
            alt="Wedding couple"
            className="h-[420px] w-full object-cover sm:h-[500px] md:h-[600px]"
          />
        </section>

        <section className="bg-[#f5f1e9]">
          <div className="mx-auto max-w-3xl">
            <div className="grid md:grid-cols-2">
              <Ceremony
                event={data.ceremony}
                onComplete={() => setCeremonyDone(true)}
              />

              {ceremonyDone && (
                <Reception event={data.reception} />
              )}
            </div>
          </div>
        </section>

        <div className="h-[340px] sm:h-[420px] md:h-[850px]">

        <img
          src={couple1}
          alt="Wedding couple"
          className="h-full w-full object-cover"
        />

      </div>

        <RSVP weddingId={weddingId} deadline={data.rsvpDeadline} />

        <DressCode />
        <Footer />

      </div>
    </main>
  );
}
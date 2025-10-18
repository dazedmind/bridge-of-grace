import { FaHandHoldingHeart, FaPrayingHands } from "react-icons/fa";
import unity from "../img/unity.jpg";
import educational from "../img/education.jpg";
import discipleship from "../img/discipleship.webp";
import livelihood from "../img/livelihood.jpg";
import emergencyAid from "../img/emergencyAid.jpg";
import { Card } from "../components/Card";
import { FaHandsHolding } from "react-icons/fa6";

export const HomePage = () => {
  return (
    <div className=" space-y-12">
      <div className="hero-header w-dvw bg-neutral-300 h-[300px] flex flex-col items-start px-6 md:px-28  gap-2 justify-center">
        <h1 className="font-bold text-5xl text-primary-foreground">
          Bridge of Grace Ministry
        </h1>
        <p className="text-primary-foreground text-lg">Every child deserves a path from poverty</p>
        <button className="bg-purple hover:bg-purple-foreground transition-colors duration-300 ease-in-out px-4 py-2 rounded-md text-primary-foreground cursor-pointer">
          Learn About Us
        </button>
      </div>

      <main className="p-16 px-8 md:px-30 space-y-6">
        <h1 className="text-foreground text-4xl font-bold">
          Welcome to Bridge of Grace
        </h1>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-auto md:w-[800px] h-[350px] object-cover overflow-hidden rounded-md bg-amber-100">
            <img
              src={unity}
              alt="Bridge of Grace"
              className="rounded-md object-cover w-full h-full"
              width={300}
              height={350}
            />
          </div>

          <span>
            <p className="text-lg leading-relaxed">
              Bridge of Grace is a Christ-centered initiative birthed by{" "}
              <strong>JILGM Blumentritt</strong> committed to building the
              strong pathways for children living in the{" "}
              <strong>North Cemetery, Philippines</strong> through educational
              scholarships, discipleship. and holistic support.
              <br /> <br />
              We believe that education empowered by{" "}
              <strong>faith in Christ</strong>, is a powerful tool to bridge out
              of poverty and into purpose. Every child holds the capacity to
              influence not just their own future, but to bring channel of hope
              and transformation to their families and communities.
              <br /> <br />
              Bridge of Grace walks alongside these youth laying down stepping
              stones of{" "}
              <strong>
                opportunity, spiritual growth, and practical aid;
              </strong>{" "}
              so they may rise with dignity, live out their calling in Christ,
              and become disciple-makers who impact generations to come.
            </p>
          </span>
        </div>
      </main>

      <section>
        <div className="bg-purple p-6">
          <h1 className="text-3xl md:text-4xl text-primary-foreground font-bold text-center">
            Made possible by God&apos;s grace and your support, we provide:
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 px-8 md:px-30 py-12 ">
         <Card
            title="Educational Assistance"
            image={educational}
            number="1"
            description="Empowering children through education and faith"
          />
          <Card
            title="Livelihood Training Assistance"
            image={livelihood}
            number="2"
            description="Empowering children through livelihood training and faith"
          />
          <Card
            title="Emergency Aid Assistance"
            image={emergencyAid}
            number="3"
            description="Empowering children through emergency aid and faith"
          />
          <Card
            title="Discipleship and Faith Formation"
            image={discipleship}
            number="4"
            description="Empowering children through discipleship and faith formation"
          />
        </div>
      </section>

      <section className="px-8 md:px-30 py-12 space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span>
            <h1 className="text-teal text-4xl font-bold">A Glimpse of Grace</h1>
            <br />
            <p className="text-xl leading-relaxed">
              Many of the children we serve live in makeshift homes besides
              tombs. Their days are filled with hardship, but they hold onto
              dreams of a better future.
              <br /> <br />
              Your support makes a lasting impact in the lives of children.
              Together, we can nurture their hearts and build a hopeful future
            </p>
          </span>
          <img
            src="https://placehold.co/600x400"
            alt="Bridge of Grace"
            className="rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-purple py-8 m-2 md:m-8 rounded-xl gap-2">
        <h1 className="text-4xl md:text-6xl text-primary-foreground font-bold">
          BE THE BRIDGE
        </h1>
        <p className="text-sm md:text-xl text-primary-foreground italic">
          Every child deserves a path from poverty to purpose
        </p>
        <button className="bg-purple-foreground text-primary-foreground px-4 py-2 mt-2 rounded-md cursor-pointer">
          Donate Now
        </button>
      </section>

      <section className="px-8 md:px-34 py-12 space-y-12">
        <h1 className="text-teal text-4xl font-bold">
          Become the bridge to that path today by:
        </h1>
        <div className="space-y-8 px-8 md:px-16">
          <div className="flex flex-col md:flex-row gap-2">
            <FaHandHoldingHeart className="text-primary-foreground bg-purple p-2 rounded-full w-10 h-10" />
            <span className="flex flex-col">
              <h3 className="text-2xl font-bold">Sponsor a child</h3>
              <p className="text-lg text-muted-foreground">
                Provide a scholarship to a child in need, empowering them with
                the tools to break the cycle of poverty.
              </p>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <FaHandsHolding className="text-primary-foreground bg-purple p-2 rounded-full w-10 h-10" />
            <span className="flex flex-col">
              <h3 className="text-2xl font-bold">Support a family</h3>
              <p className="text-lg text-muted-foreground">
                Step in today. Provide emergency relief or fund a family&apos;s
                new livelihood{" "}
              </p>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <FaPrayingHands className="text-primary-foreground bg-purple p-2 rounded-full w-10 h-10" />
            <span className="flex flex-col">
              <h3 className="text-2xl font-bold">Invest in Discipleship</h3>
              <p className="text-lg text-muted-foreground">
                Provide a scholarship to a child in need, empowering them with
                the tools to break the cycle of poverty.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

import { Button } from "@/components/common/Button";
import LandingContainer from "@/components/common/LandingContainer";
import { Timer } from "lucide-react";
import Image from "next/image";

export default function Landing() {
  const style = {
    icon:"inline-flex items-center justify-center w-15 h-15 p-2 rounded-full   bg-opacity-20"
  }
  return (
    <div>
      <LandingContainer>
        <div className="py-2">
          {/* nav */}
          <div className="flex flex-row sm:justify-between gap-20 ">
            <div className="flex">
              <Image src="/logo/logo.png" alt="logo" width={100} height={100} />
            </div>
            <div className="flex flex-row gap-4  items-center sm:px-24">
              <div className="flex ">
                <Button className="p-5">Doctor</Button>
              </div>
              <div className="flex">
                <Button variant={"outline"} className="p-5">
                  Patient
                </Button>
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
      <div className="bg-ugray-100">
        <LandingContainer>
          <div className="flex justify-between py-20 lg:flex-row flex-col gap-5">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <div className="flex flex-col">
                <div className="md:text-7xl text-5xl font-semibold ">
                  Simplify your Medical{" "}
                </div>
                <div className="md:text-7xl text-5xl font-semibold ">
                  Practice with <samp className="text-ublue-200"> Unite</samp>
                </div>
              </div>

              <div className="text-2xl">
                The platform where doctors meet patients...
              </div>
              <div className="text-sm">
                Instantly book appointments, securely message doctors, and
                access telemedicine options from the comfort of your home.{" "}
                <br /> At MedConnect, we're dedicated to making healthcare
                accessible to all. Our platform connects patients with top-tier
                medical professionals, anytime, anywhere.
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/landing/land.png"}
                alt=""
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
        </LandingContainer>
      </div>

      <div className="bg-ugray-0">
        <LandingContainer>
          <div className="flex lg:flex-row flex-col gap-12 py-20 ">
            <div className="flex justify-center">
              <Image
                src={"/landing/land2.png"}
                alt=""
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="sm:text-5xl text-2xl font-semibold">
                It’s Time to Say Goodbye to Paper Work
              </div>
              <div>
                Experience seamless virtual consultations with our secure
                telemedicine platform. <br />
                Rest assured, your health information is encrypted and secure
                during online consultations.
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>

      <div className="bg-ugray-100">
        <LandingContainer>
          <div>
            <div className="text-center gap-3 flex flex-col  items-center ">
              <div className="flex sm:text-5xl text-2xl font-semibold   ">
                Why You Choose Us
              </div>
              <div className="flex  ">
                Communicate securely with patients for follow-ups or
                prescription requests.
              </div>
            </div>
            {/*cards  */}
            <div>
              <div>
                <div className={`${style.icon} bg-ublue-100 text-ugray-600` }>
                  <Timer size={40}></Timer>
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
    </div>
  );
}

import { Button } from "@/components/common/Button";
import LandingContainer from "@/components/common/LandingContainer";
import {
  CalendarDays,
  Check,
  Dock,
  FileSpreadsheet,
  Mail,
  Phone,
  Timer,
} from "lucide-react";
import Image from "next/image";
import logoslinks from "@/data/landing/media";
import Link from "next/link";
import { email } from "@/constants/details";
import { Input } from "@/components/ui/input";

export default function Landing() {
  const style = {
    icon: "inline-flex items-center justify-center w-15 h-15 p-2 rounded-full   bg-opacity-20",
  };
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
      {/* Simplify your medical */}
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
      {/* Its time to say */}
      <div className="bg-ugray-0">
        <LandingContainer>
          <div className="flex lg:flex-row flex-col justify-between py-20 ">
            <div className="flex justify-center">
              <Image
                src={"/landing/land2.png"}
                alt=""
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="flex flex-col justify-center text-center gap-5 lg:text-right">
              <div className="sm:text-5xl text-2xl font-semibold text-start">
                It’s Time to Say Goodbye to <br /> Paper Work
              </div>
              <div className="flex text-start">
                Experience seamless virtual consultations with our secure
                telemedicine platform. <br />
                Rest assured, your health information is encrypted and secure
                during online consultations.
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
      {/* Why you choose us 1 */}
      <div className="bg-ugray-100">
        <LandingContainer>
          <div className="py-20 flex flex-col gap-5">
            <div className="text-center gap-5 flex flex-col  items-center ">
              <div className="flex sm:text-5xl text-2xl font-semibold   ">
                Why You Choose Us
              </div>
              <div className="flex  ">
                Communicate securely with patients for follow-ups or
                prescription requests.
              </div>
            </div>
            {/*cards  */}
            <div className="flex md:flex-row flex-col gap-5">
              <div className=" items-center flex-1 text-center flex flex-col bg-ugray-0 rounded-lg p-4 gap-5">
                <div
                  className={`${style.icon} bg-ublue-50 text-ublue-200 flex`}
                >
                  <Timer size={40}></Timer>
                </div>
                <div className="flex font-semibold text-xl">Save Time</div>
                <div className="flex ">
                  Connect instantly with doctors, book appointments, and access
                  telemedicine.
                </div>
              </div>

              <div className=" items-center flex-1 text-center flex flex-col bg-ugray-0 rounded-lg p-4 gap-5">
                <div className={`${style.icon} bg-ured-200 text-ured-600 flex`}>
                  <FileSpreadsheet size={40}></FileSpreadsheet>
                </div>
                <div className="flex font-semibold text-xl">Organize</div>
                <div className="flex ">
                  Experience seamless virtual consultations with our secure
                  telemedicine platform.
                </div>
              </div>

              <div className=" items-center flex-1 text-center flex flex-col bg-ugray-0 rounded-lg p-4 gap-5">
                <div
                  className={`${style.icon} bg-uyellow-200 text-uorange-600 flex`}
                >
                  <CalendarDays size={40}></CalendarDays>
                </div>
                <div className="flex font-semibold text-xl">
                  Easy Appoinment
                </div>
                <div className="flex ">
                  Choose a convenient time for your appointment.
                </div>
              </div>

              <div className=" items-center flex-1 text-center flex flex-col bg-ugray-0 rounded-lg p-4 gap-5">
                <div
                  className={`${style.icon} bg-umint-200 text-umint-600 flex`}
                >
                  <Dock size={40}></Dock>
                </div>
                <div className="flex font-semibold text-xl">Minimal design</div>
                <div className="flex ">
                  Connect instantly with doctors, book appointments, and access
                  telemedicine.
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
      {/* Explore the amazing */}
      <div className="bg-ugray-0">
        <LandingContainer>
          <div className="flex lg:flex-row flex-col justify-between py-20 gap-5">
            <div className="flex flex-col gap-5 justify-center lg:items-start items-center text-center lg:text-left">
              <div className="flex sm:text-5xl text-2xl font-semibold">
                Explore the Amazing <br /> Features
              </div>
              <div className="flex">
                Rest assured, your health information is encrypted and secure
                during online consultations.
              </div>
              {/*  */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-4">
                  <Check></Check>
                  View your upcoming and past appointments.
                </div>
                <div className="flex flex-row gap-4">
                  <Check></Check>
                  Manage your availability and view upcoming appointments.
                </div>
                <div className="flex flex-row gap-4">
                  <Check></Check>
                  Access patient profiles, appointment history, and medical
                  notes.
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/landing/land3.png"}
                alt=""
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
        </LandingContainer>
      </div>
      {/* Why you choose us */}
      <div className="bg-ugray-100">
        <LandingContainer>
          <div className="flex flex-col gap-5 py-20">
            <div className="flex flex-col justify-center items-center gap-5 ">
              <div className="flex sm:text-5xl text-2xl font-semibold ">
                Why You Choose Us
              </div>
              <div className="flex text-center">
                Access your medical records, including test results and
                treatment plans.
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col bg-ugray-0 border-none rounded-lg p-8 gap-4">
                <div className="flex flex-row gap-5">
                  <div className="flex">
                    <Image
                      src={"/landing/profile.png"}
                      alt=""
                      width={50}
                      height={50}
                    ></Image>
                  </div>
                  <div className="flex  items-center">Vince Fleming</div>
                </div>
                <div className="flex">
                  {" "}
                  "Communicate securely with patients for follow-ups or
                  prescription requests. Explore our accessibility features,
                  including text-to-speech functionality and adjustable font
                  sizes"
                </div>
              </div>

              <div className="flex flex-col bg-ugray-0 border-none rounded-lg p-8 gap-4">
                <div className="flex flex-row gap-5">
                  <div className="flex">
                    <Image
                      src={"/landing/profile.png"}
                      alt=""
                      width={50}
                      height={50}
                    ></Image>
                  </div>
                  <div className="flex  items-center">Vince Fleming</div>
                </div>
                <div className="flex">
                  {" "}
                  "Communicate securely with patients for follow-ups or
                  prescription requests. Explore our accessibility features,
                  including text-to-speech functionality and adjustable font
                  sizes"
                </div>
              </div>

              <div className="flex flex-col bg-ugray-0 border-none rounded-lg p-8 gap-4">
                <div className="flex flex-row gap-5">
                  <div className="flex">
                    <Image
                      src={"/landing/profile.png"}
                      alt=""
                      width={50}
                      height={50}
                    ></Image>
                  </div>
                  <div className="flex  items-center">Vince Fleming</div>
                </div>
                <div className="flex">
                  {" "}
                  "Communicate securely with patients for follow-ups or
                  prescription requests. Explore our accessibility features,
                  including text-to-speech functionality and adjustable font
                  sizes"
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>

      <div className="bg-ugray-0">
        <LandingContainer>
          <div className="flex lg:flex-row flex-col gap-10  py-12">
            <div className="flex flex-col flex-1 gap-5">
              <div className="flex sm:text-5xl text-2xl font-semibold justify-center lg:justify-start">
                Keep in Touch with Us
              </div>
              <div className="flex  text-center lg:text-left justify-center ">
                Learn about ongoing clinical trials and research studies in
                various medical fields.
                <br /> Find out how you can participate in clinical trials and
                contribute to medical research advancements.
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-5 lg:justify-between justify-around text-xl">
                <div className="flex flex-row gap-5 w-56">
                  <div
                    className={`${style.icon}  bg-ublue-50 text-ublue-200 flex`}
                  >
                    <Phone />
                  </div>
                  <div className="flex items-center">+94 11 2345678</div>
                </div>
                <div className="flex flex-row gap-5 w-56">
                  <div
                    className={`${style.icon}  bg-ured-200 text-ured-600 flex`}
                  >
                    <Mail />
                  </div>
                  <div className="flex items-center">
                    <Link href={`mailto: ${email}`}>{email}</Link>
                  </div>
                </div>
              </div>
              <div className="text-xl">
                <div className=" flex sm:flex-row flex-col items-center gap-5 lg:justify-between justify-around ">
                  <div className="flex w-56">
                    {logoslinks
                      .filter((item) => item.id === 1)
                      .map((item) => (
                        <div key={item.id} className="flex flex-row gap-5">
                          <Link href={item.link}>
                            <div
                              className={`${style.icon} bg-uyellow-200 text-uorange-600 flex`}
                            >
                              <item.icon strokeWidth={1} />
                            </div>
                          </Link>
                          <Link href={item.link} className="flex  items-center">
                            <div>{item.name}</div>
                          </Link>
                        </div>
                      ))}
                  </div>
                  <div className="flex w-56">
                    {logoslinks
                      .filter((item) => item.id === 2)
                      .map((item) => (
                        <div key={item.id} className="flex flex-row gap-5">
                          <Link href={item.link}>
                            <div
                              className={`${style.icon} bg-umint-200 text-umint-600 flex`}
                            >
                              <item.icon strokeWidth={1} />
                            </div>
                          </Link>
                          <Link href={item.link} className="flex  items-center">
                            <div>{item.name}</div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-1 flex-col gap-5  ">
              <form>
                <div className=" flex flex-col gap-5 items-center">
                  <div className="flex lg:w-full md:w-96 w-72 flex-col  ">
                    Full Name <Input className=""></Input>
                  </div>
                  <div className="flex lg:w-full md:w-96 w-72 flex-col ">
                    Email <Input className=""></Input>
                  </div>
                  <div className="flex lg:w-full md:w-96 w-72 flex-col ">
                    Message <Input className=""></Input>
                  </div>
                </div>

                <div className="flex lg:justify-start justify-center">
                  <Button className="p-5 text-base ">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </LandingContainer>
      </div>
    </div>
  );
}

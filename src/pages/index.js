import React from "react";
import Button, { WhiteButton } from "../components/Button";
import Card from "../components/Card";
import LabelText from "../components/LabelText";
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";
import LeafletMap from "../components/LeafletMap";
import SEO from "../components/SEO";
import { useIntl } from "gatsby-plugin-intl";
import ThemeProvider from "../providers/ThemeProvider";
import { StaticImage } from "gatsby-plugin-image";

export default () => {
  const intl = useIntl();
  const rtl = intl.locale === "ar";

  return (
    <ThemeProvider>
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "name" })}
          keywords={[`elarizona`, `backery`, `sweets`]}
        />
        <section>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="container mx-auto px-16 lg:flex flex-1 md:pt-40 py-20">
              <div className={`text-center lg:text-${rtl ? "right" : "left"}`}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                  {intl.formatMessage({ id: "name" })}
                </h1>
                <p className="text-xl lg:text-2xl mt-6 font-light">
                  {intl.formatMessage({ id: "slogan" })}
                </p>
                <p className="mt-8 md:mt-12">
                  <Button size="lg">
                    {intl.formatMessage({ id: "contact_us" })}
                  </Button>
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col px-16 md:px-0 text-center">
              <StaticImage
                src="../images/donut.png"
                alt="A donut"
                placeholder="blurred"
                layout="fixed"
                width={460}
                style={donutStyle}
                className="mx-auto md:mt-24"
                imgStyle={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </section>

        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48 text-center ">
              <h3 className="text-3xl font-semibold leading-tight">
                Search For Performance Optimization
              </h3>
              <p className="mt-8 text-xl font-medium leading-relaxed">
                With all the information in place you will be presented with an
                action plan that your company needs to follow
              </p>
            </div>
          }
          secondarySlot={
            <div className="w-full">
              <StaticImage
                src="../images/panel1.png"
                alt="Panel 1"
                placeholder="blurred"
                layout="fixed"
                width={460}
                className="mx-auto"
                style={{
                  width: "100%",
                }}
              />
            </div>
          }
        />
        <section id="features" className="py-20 lg:py-40">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold">About us</h2>
            <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
              <div className="flex-1 px-3">
                <Card className="mb-8 bg-white bg-opacity-75">
                  <p className="font-semibold text-xl">Service One</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta
                    justo integer odio velna vitae auctor integer.
                  </p>
                </Card>
              </div>
              <div className="flex-1 px-3">
                <Card className="mb-8 bg-white bg-opacity-75">
                  <p className="font-semibold text-xl">Service Two</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta
                    justo integer odio velna vitae auctor integer.
                  </p>
                </Card>
              </div>
              <div className="flex-1 px-3">
                <Card className="mb-8 bg-white bg-opacity-75">
                  <p className="font-semibold text-xl">Service Three</p>
                  <p className="mt-4">
                    An enim nullam tempor gravida donec enim ipsum blandit porta
                    justo integer odio velna vitae auctor integer.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="stats" className="lg:pt-32 text-center">
          <LabelText className="text-black-600 mb-8 text-xl font-bold">
            Our customers get results
          </LabelText>
          <div className="py-2 flex flex-col md:flex-row">
            <div
              className="w-full mx-auto text-center flex flex-col bg-white bg-opacity-75 md:py-24"
              style={{ flex: "3" }}
            >
              <div className="flex flex-col sm:flex-row lg:px-24">
                <div className="w-full sm:w-1/3">
                  <StatsBox
                    primaryText="+100%"
                    secondaryText="Stats Information"
                  />
                </div>
                <div className="w-full sm:w-1/3">
                  <StatsBox
                    primaryText="+100%"
                    secondaryText="Stats Information"
                  />
                </div>
                <div className="w-full sm:w-1/3">
                  <StatsBox
                    primaryText="+100%"
                    secondaryText="Stats Information"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex text-center" style={{ flex: "2" }}>
              <div className="flex flex-col lg:px-24 bg-red-600 py-24 my-auto w-full justify-content">
                <h3 className="text-3xl md:text-6xl font-semibold text-white">
                  FUN STATS
                </h3>
                <p className="mt-3 text-xl font-light text-white px-3 md:px-0">
                  Want to hear some fun stats? Here is the data from our last
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-20 lg:py-40">
          <div className="container mx-auto ">
            <LabelText className="mb-8 text-black-600 text-xl font-bold text-center">
              What customers are saying
            </LabelText>
            <div className="flex flex-col md:flex-row md:-mx-3 ">
              {customerData.map((customer) => (
                <div key={customer.customerName} className="flex-1 px-3 ">
                  <CustomerCard customer={customer} />
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="container mx-auto my-20 py-24 bg-red-600 bg-opacity-75 rounded-lg text-center">
          <h3 className="text-5xl font-semibold text-white">
            Ready to grow your business?
          </h3>
          <p className="mt-8 text-xl font-light text-white px-4 md:px-0">
            Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque
            fermentum dui faucibus in.
          </p>
          <p className="mt-8 text-black">
            <WhiteButton size="xl">Get Started Now</WhiteButton>
          </p>
        </section>

        <section className="py-20 lg:py-40">
          <div className="container mx-auto ">
            <LabelText className="mb-8 text-black-600 text-xl font-bold text-center">
              Where you can find us
            </LabelText>
            <LeafletMap
              position={[52, -0.5]}
              zoom={8}
              markerText={"ElArizona Bakery"}
            />
          </div>
        </section>
      </Layout>
    </ThemeProvider>
  );
};

const donutStyle = {
  filter: "drop-shadow(7px 7px 8px black)",
  // width: "320px",
};

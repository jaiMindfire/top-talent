import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import vector from "../../src/assets/vector.svg";

export default function FirstPage() {
  const paymentLaterRef = useRef(null);
  const successFirstRef = useRef(null);
  const heroImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(paymentLaterRef.current, { y: "-500px" });
    gsap.to(paymentLaterRef.current, {
      y: 0,
      opacity: 1,
      duration: 5,
      ease: "power3.out",
    });

    gsap.set(successFirstRef.current, { y: "-500px" });
    gsap.to(successFirstRef.current, {
      y: 0,
      opacity: 1,
      duration: 5,
      ease: "power3.out",
    });

    gsap.set(heroImageRef.current, { x: "-700px" });
    gsap.to(heroImageRef.current, {
      x: 0,
      opacity: 1,
      duration: 5,
      ease: "power3.out",
    });

    gsap.set(containerRef.current, { x: "800px" });
    gsap.to(containerRef.current, {
      x: 0,
      opacity: 1,
      duration: 5,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="home-page-description">
        <div className="outer-container">
          <div className="blur-background-container">
            <div className="blur-background-effect"></div>
            <div className="text-main" ref={paymentLaterRef}>
              PAYMENT LATER
            </div>
          </div>
          <div className="secondary-text" ref={successFirstRef}>
            SUCCESS FIRST
          </div>
          <img src={vector} className="vector-img" alt="vector" />
          <div className="blur-box-red"></div>
        </div>

        <div className="container" ref={containerRef}>
          <div className="large-text">????</div>

          <div className="blur-container">
            <div className="blur-background"></div>
            <div className="blur-text">
              Instead of you chasing jobs <br /> we make jobs chase you
            </div>
          </div>

          <div className="center-text-container">
            <div className="center-text">
              Top Talent Bridge is your One-Stop Solution to Bridge the Gap
              between your current job and the job you truly deserve!
            </div>
            <div className="center-background"></div>
          </div>

          <div className="bottom-container">
            <div className="bottom-background"></div>
            <div className="bottom-text">
              Are you tired of not hearing back from the recruiters?
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="container-large">
          <img
            className="placeholder-image"
            alt="logo"
            src="https://s3-alpha-sig.figma.com/img/e8ef/2d6d/f79256598345b72160ca493a652cd413?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmwLrt5ViFrBRKcS1XYJdoFv9FslSAvcHE85a0KNabYLhwK9WnGjsikua92QdLGLY-mFdvn3RsbWJEEbuasE~HXnti0PeJ5bYpnhl5UQ2~zUTt3kn4mzzKckP1BcI501I2oFN-IOI0rInJ7WcIBm2J2a2skXZ~PYaUx5pw7aD1cOdNQ0knvEm0SQqg-gnZ2nJFBghVtw0OfX46vcKE1Adq3ew0xApDPZj4UEmm4Yuso20YYSL1vxFOId83PVPHi-G4OBf4CePh7qL8Cbtv7kPWEdtIdOz4A58sicUfKYmCbqeO1Mfl9apfUzLAaYHdhLdJ8KRREV3dTlfhn-nVGJsA__"
          />
          <div className="blur-overlay"></div>
          <img
            className="image-element"
            ref={heroImageRef}
            src="https://s3-alpha-sig.figma.com/img/eb3d/047e/f215cb24992d58ba347c663d65882d44?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Px3b8GSYE6K-Pb8HHTAMQvXXGTmojwGDTRhmOaLu70PAl1xngM2EAf4xCVnWup7Tc2~IGH5gO23OxYi6L3P63Z~Afj9zp86gjFPi0Xf5OI05ZSw~wgbDonC8m4M~EfKrLsoaCHRF83RuQpHDmTWAvpMyU-bs9x11VFE7Oepmz5N0xEC-sCJi1~WU8p7EJ7sDLsE5xSZhT9ddySuC~N2NMHMQ7RNLK2ti2RDymt2WsflX-aXQiTVUxxSz3gdo0U8H4JuIP~YxkI2pF9Al-fcfndI2riW5Em615aQoeLF6djL9QYAnLylqVliAe0FjLCAjjI7InnMoZJ762A~XVXltcw__"
            alt="Hero"
          />
        </div>

        <div style={{ position: "absolute", top: "100px" }}>
          <div className="text-center-large">TOP</div>
          <div className="text-center-large">TALENT</div>
          <div className="text-center-large">BRIDGE</div>
        </div>
        <div className="red-blur-box"></div>
      </div>
    </>
  );
}
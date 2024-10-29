import React from "react";

export default function SecondPage() {
  return (
    <div
      className="home-page"
      style={{
        paddingTop: "150px",
        background: "linear-gradient( #261983, #8024B8",
      }}
    >
      <div className="container-second">
        <div className="header-second">
          <div className="header-text-second">IS THIS YOU?</div>
          <div className="ellipse-background-second" />
        </div>
        <ul className="content-second">
          <li>Sent out 100+ applications but </li>
          <div style={{ marginLeft: "30px" }}>no interviews lined up?</div>
          <li>Lacking hands-on projects in your</li>
          <div style={{ marginLeft: "30px" }}>resume?</div>
          <li>Frustrated with the scarce opportunities</li>
          <div style={{ marginLeft: "30px" }}>from</div>
          <div style={{ marginLeft: "30px" }}>college placements?</div>
          <li>Feeling invisible in the</li>
          <div style={{ marginLeft: "30px" }}>eyes of top tech</div>
          <div style={{ marginLeft: "30px" }}>recruiters?</div>
          <li>Unsure about the</li>
          <div style={{ marginLeft: "10px" }}>score of your resume</div>
          <div style={{ marginLeft: "50px" }}>and</div>
          <div style={{ marginLeft: "10px" }}>LinkedIn profile?</div>
        </ul>
        <img
          src="https://s3-alpha-sig.figma.com/img/d778/ef12/4a02e281833c225040c43ee9050f0293?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piyVvxmifavrOCNfN2LMPpKPgxbA1V9MSFZcOoVuruG3OMKd1DC~FxINicjmtQCxXlCmk2AEppyiCjihH62IpsPCeMs4jsH7D9MWspnzD4o99occ0BMOusb6mD10jLTcbi3wGa7r-DW6CKNbdelxSmEHAtiL8bHZPh5YThwuogc-YZP1-zqpxUCFzgmDfhQj7klBBezhwhlIuxFUYhc36cKZdEm5oVZtn-OJKxkKtEIHxu5mUKi~-E4hL0nr9ds8EzF7RruuWgxzrQAXYdwzLrSm60FYUxpqaFSLzBvkDYDtVQmCp6~lNPRCZURhCHDMy6dXEpg9Glzc22LhQrsmdQ__"
          alt="hero"
          className="hero-img"
        />
        <div
          style={{
            width: 348,
            height: 121,
            background:
              "linear-gradient(153deg, #3E92CE 0%, rgba(164.40, 93.24, 235.56, 0.85) 100%)",
            boxShadow: "80px 80px 80px ",
            borderRadius: 9999,
            filter: "blur(30px)",
            position: "absolute",
            top: "50%",
            left: "100%",
          }}
        />
        <div className="container-how">
          <div className="text-shadow-how">HOW?</div>
          <div className="text-main-how">HOW?</div>
        </div>

        <div className="text-container">
          Our cut-edge strategy can change that
        </div>
      </div>
      <div className="container-third">
        <div className="background-blur-large"></div>
        <div className="background-blur-small"></div>
        <div className="text-container-third">
          <div className="main-text-third">
            Resume <br /> & <br /> LinkedIn <br /> Makeover:
          </div>
          <div className="sub-text-third">
            AI-approved, <br /> recruiter-friendly <br /> profiles that get you{" "}
            <br /> those <br /> interview calls.
          </div>
        </div>
      </div>
      <div className="container-fourth">
        <div className="background-blur-large-fourth"></div>
        <div className="background-blur-small-fourth"></div>
        <div className="text-container-fourth">
          <div className="main-text-fourth">1-on-1 Sessions:</div>
          <div className="sub-text-fourth">
            Weekly mentorship with our founders, Arvind and Madhav. Because
            we're with you, every step of the way.
          </div>
        </div>
      </div>
      <div className="container-fifth">
        <div className="background-blur-large-fifth"></div>
        <div className="background-solid-fifth"></div>
        <div className="text-container-fifth">
          <div className="main-text-fifth">
            Mock <br /> Interviews & <br /> Soft Skills Training:
          </div>
          <div className="sub-text-fifth">
            Not just technical, but <br /> a complete preparation <br /> to ace
            interviews.
          </div>
        </div>
      </div>
      <div className="container-sixth">
        <div className="background-blur-large-sixth"></div>
        <div className="background-solid-sixth"></div>
        <div className="text-container-sixth">
          <div className="main-text-sixth">
            Skill <br /> Enhancement:
          </div>
          <div className="sub-text-sixth">
            Upskill with our partner platform, Codedamn, <br /> designed to{" "}
            <br /> make you industry-ready <br /> in record time.
          </div>
        </div>
      </div>
      <div className="container-seventh">
        <div className="background-blur-large-seventh"></div>
        <div className="background-solid-seventh"></div>
        <div className="text-container-seventh">
          <div className="main-text-seventh">Practical Training:</div>
          <div className="sub-text-seventh">
            Dive into real-world industry-level projects <br /> that add weight
            to your resume.
          </div>
        </div>
      </div>
    </div>
  );
}

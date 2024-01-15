import React, { useRef } from "react";
import { Image, Card } from "react-bootstrap";
import "./HuntingSeason2024.css";
//import { BiMessageAlt } from "react-icons/bi";
import referrals from "./BlogImages/referrals.jpg";
import screenTime from "./BlogImages/screenTime.jpeg";
import bald from "./BlogImages/bald.jpeg";
import linkedInPost from "./BlogImages/linkedInPost.jpg";
import STK from "./BlogVideos/STK.mp4";
import LeetCode1 from "./BlogImages/LeetCode1.jpg";
import LeetCode2 from "./BlogImages/LeetCode2.jpg";
import Coffe from "./BlogImages/askForCoffee.jpg";
import Nope from "./BlogImages/Nope.jpg";

const HuntingSeason2024 = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optionally reset the video to start
    }
  };

  return (
    <Card className="blog-post mb-3B" id="AMBox">
      <Card.Body>
        <div className="post-header">
          <Card.Title className="title">
            Hunting Season 2024: My Hunting Journey
          </Card.Title>
          <div className="post-info">
            <Card.Subtitle className=" text-muted" id="date">
              Posted on December 21, 2023
            </Card.Subtitle>
            <div className="vertical-line"></div>
            <div className="reading-time">3 min read</div>
          </div>
        </div>
        <hr></hr>
        <Card.Text className="theText">
          It all started when Google surprisingly posted their 2024 Summer SWE
          internship applications a bit too early back in June. I applied the
          same hour and had nothing to work on at the time other than just
          getting referrals from Google engineers, since Google was the only
          company that had its applications open that early at the time. If you
          work at Google then there is a high chance I asked you for a referral!
          For the next 3 weeks I got{" "}
          <span className="image-hover">
            <span className="image-text"> 10 referrals </span>
            <div className="image-tooltip">
              <Image src={referrals} alt="Referrals" />
              <div className="tooltip-arrow"></div>
            </div>
          </span>{" "}
          from over 200 messages being spammed from me in over{" "}
          <span className="image-hover">
            <span className="image-text"> 30 hours of work on LinkedIn </span>
            <div className="image-tooltip">
              <Image
                src={screenTime}
                alt="Screen Time"
                className="screen-time-image" // Unique class for this specific image
              />
              <div className="tooltip-arrow"></div>
            </div>
          </span>
          . I thought it would all pay off, but did it?
          <br></br>
          <br></br>A month has passed and I got myself busy applying to other
          companies that started opening. I thought referrals were a big thing
          so I worked myself out by spamming people cold messages on LinkedIn
          and ended up with 4 referrals from Microsoft, 3 Amazon, 1 Apple, 2
          Riot Games, 1 Okta, 1 Roblox, 1 Tesla and 0 LinkedIn. Over the next 2
          months, I solved 94 leetcode questions and have applied to over 200
          job applications, got about 12 Online Assesments and 0 Interviews. On
          the 29th of August, I received 5 email rejections within 20 minutes,
          all in a row, and that’s when I knew I should take this more
          seriously.{" "}
          <span className="image-hover">
            <span className="image-text">
              {" "}
              I shaved my head (escaped the Matrix){" "}
            </span>
            <div className="image-tooltipS">
              <Image src={bald} alt="Referrals" />
              <div className="tooltip-arrow"></div>
            </div>
          </span>{" "}
          and put in 2X the effort into applying and reaching out to recruiters
          on LinkedIn. Suddenly one day (9th of Sep) I got a response from one
          of the recruiters with an OA sent over. I completed it within 2 hours
          and two days later got a call from her. It was more of a behaviour
          phone call type interview. I had the chance to know more about the
          position and to choose which position I wanted, whether it was
          Front-end, Back-end, ML, etc. At the end of the call, we scheduled the
          final round on the spot, three weeks following our conversation,
          landing on the date of October 5th.
          <br></br>
          <br></br>
          It was a back-to-back, two-round interview, 1 hour behaviour and 1
          hour technical. I only had one shot and I had to{" "}
          <span
            className="video-hover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="image-text">“shoot to kill”</span>
            <div className="video-tooltip">
              <video ref={videoRef} width="320" height="240" loop>
                <source src={STK} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="tooltip-arrow"></div>
            </div>
          </span>{" "}
          I stopped applying for the next 3 weeks and had to put all the effort
          into only this one opportunity. Over the next 3 weeks, I solved over
          220 LeetCode questions (including all most asked questions by
          LinkedIn){" "}
          <span className="image-hover">
            <span className="image-text">
              [LeetCode Premuim Shared Account 1]
            </span>
            <div className="image-tooltip">
              <Image src={LeetCode1} alt="LeetCode 1" />
              <div className="tooltip-arrow"></div>
            </div>
          </span>{" "}
          <span className="image-hover">
            <span className="image-text">[LeetCode Personal Account 2]</span>
            <div className="image-tooltip">
              <Image src={LeetCode2} alt="LeetCode 2" />
              <div className="tooltip-arrow"></div>
            </div>
          </span>
          , did a total of 17 LC mock interviews with friends and on sites such{" "}
          <a
            href="https://www.interviewing.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            interviewing.io
          </a>{" "}
          and{" "}
          <a
            href="https://www.pramp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            pramp.com
          </a>
          . Two days before the interview I did 2 behaviour mock interviews to
          make sure I got this. October 5th came and I simply KILLED it, and got
          the offer a week later.
          <br></br>
          <br></br>
          Do I regret spending all these hours on getting referrals? No, I
          don’t. It did teach me many things ‘the hard way’. Was it a great
          hunting season as I mentioned in my{" "}
          <span className="image-hover">
            <span className="image-text"> LinkedIn post </span>
            <div className="image-tooltipS">
              <Image src={linkedInPost} alt="Referrals" />
              <div className="tooltip-arrow"></div>
            </div>
          </span>
          ? Hmmmm, Idk you tell me!
          <br></br>
          <br></br>
          If you’re currently hunting, here are some take aways:
          <br></br>
          <ul>
            <li>
              Have a list of 50 to 100 companies that you really want to join
              instead of just applying randomly. Once you apply to these
              companies that’s when you should start reaching out to “Campus
              recruiters” or “University recruiters” on LinkedIn. DO NOT waste
              your time and reach out to just some random engineers or managers,
              the best they can do is telling you to apply over the website!
            </li>
            <li>
              Spend 1 hour writing one nice short message introducing yourself
              and showing your interest in the company and just use it to send
              your LinkedIn messages. All you have to do at this point is to
              just change the name of the person you are sending the message to.
            </li>
            <li>
              Don’t risk it by not applying to other companies once you get an
              interview from one of them. Even if you get a job offer, keep
              applying. What’s better than one job offer? Two Job offers! :)
            </li>{" "}
            <li>
              Never hesitate reaching out with cold messages; a single message
              could be life-changing. Inspired by someone's work? Why not{" "}
              <span className="image-hover">
                <span className="image-text">
                  invite them for a cup of coffee
                </span>
                <div className="image-tooltip">
                  <Image src={Coffe} alt="Coffee Invitation" />
                  <div className="tooltip-arrow"></div>
                </div>
              </span>
              ? The O(n) in this situation is a{" "}
              <span className="image-hover">
                <span className="image-text">simple refusal</span>
                <div className="image-tooltip">
                  <Image src={Nope} alt="Refusal" />
                  <div className="tooltip-arrow"></div>
                </div>
              </span>{" "}
              lol.
            </li>
            <li>
              Finally, most important tip is to surround yourself with those who
              already made it!
            </li>
          </ul>
          GL!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HuntingSeason2024;

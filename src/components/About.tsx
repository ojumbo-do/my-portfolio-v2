import Image from "next/image";

function About() {
  return (
    <section
      id="about-me"
      className="scroll-smooth mt-10 relative flex max-w-[100rem] flex-col-reverse items-center justify-center gap-10 p-4 md:gap-20 md:p-20 xl:flex-row-reverse"
    >
      <article className="w-full flex justify-center flex-col gap-5">
        <div>
          <h2 className="text-tertiary capitalize font-semibold leading-none xl:text-start">
            <span className="text-[clamp(2rem,8vw,4rem)]">About Me</span>
          </h2>
          <hr className="w-5 h-0.5 bg-tertiary border-none" />
        </div>

        <div className="flex flex-col">
          <h3></h3>
          <p className="mb-6 text-center font-light md:text-3xl xl:text-start text-tertiary opacity-40">
            I’m a full-satck software developer and a cloud-savvy coder fluent
            in AWS, CI/CD magic (Jenkins, GitHub, GitBucket), and agile antics
            with Jira. I squash bugs with SonarQube and write rock-solid tests
            for my code.
          </p>

          <p className="mb-6 text-center font-light md:text-3xl xl:text-start text-tertiary opacity-40">
            Passionate about crafting seamless user experiences and solving
            real-world problems, I bring a dash of tech wizardry to every
            project!
          </p>
        </div>
      </article>

      <article className="pointer-events-none relative z-[1] shrink-0 xl:w-1/3">
        <h3 className="-rotate-90 absolute left-0 h-1/2 text-xl text-center -z-10 text-tertiary font-bold opacity-10 leading-none">
          Technologies & tools
        </h3>
        <div className="grid max-w-sm grid-cols-4 gap-4 px-10 pt-10 md:max-w-none md:gap-6 xl:px-6 xl:pt-0 [&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1rem/2)] md:[&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1.5rem/2)]">
          <div></div>
          <Image
            src={"/html5-plain-wordmark.svg"}
            alt={"html5"}
            height={100}
            width={100}
          />
          <Image src={"/css.svg"} alt={"css"} height={100} width={100} />
          <Image
            src={"/typescript-original.svg"}
            alt={"typescript"}
            height={100}
            width={100}
          />
          <Image
            src={"/vscode-original.svg"}
            alt={"vscode"}
            height={100}
            width={100}
          />
          <Image
            src={"/javaScript.svg"}
            alt={"javascript"}
            height={100}
            width={100}
          />
          <Image src={"/java.svg"} alt={"java"} height={100} width={100} />{" "}
          <Image
            src={"/Postman.svg"}
            alt={"postman"}
            height={100}
            width={100}
          />{" "}
          <Image src={"/react.svg"} alt={"react"} height={100} width={100} />{" "}
          <Image
            src={"/nextjs-original-wordmark.svg"}
            alt={"nextjs"}
            height={100}
            width={100}
          />{" "}
          <Image
            src={"/mongodb-plain-wordmark.svg"}
            alt={"mongodb"}
            height={100}
            width={100}
          />{" "}
          <Image
            src={"/androidstudio-original.svg"}
            alt={"mobile-dev"}
            height={100}
            width={100}
          />{" "}
          <Image src={"/git.svg"} alt={"git"} height={100} width={100} />{" "}
          <Image
            src={"/nodejs-plain.svg"}
            alt={"nodejs"}
            height={100}
            width={100}
          />{" "}
          <Image src={"/Docker.svg"} alt={"docker"} height={100} width={100} />{" "}
        </div>
      </article>
    </section>
  );
}

export default About;

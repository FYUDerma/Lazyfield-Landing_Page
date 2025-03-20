import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import team1 from "@/assets/team/team1.jpg";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: team1,
    name: "Zakaria AATTACHE",
    position: "Web Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/zakaria-aattache/",
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Benoit MARIN",
    position: "Web Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/beno%C3%AEt-marin/",
      }
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
  };
};

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold flex-col justify-center items-center text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet our team who work to bring our vision to life. 
        Each member brings unique skills and expertise to the table, ensuring the progress of our projects.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-2">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
            key={name}
            className={`bg-muted/50 relative mt-8 flex flex-col justify-center items-center max-w-xs h-auto w-80 ${
              name === "Zakaria AATTACHE" ? "ml-auto" : ""
            }`}
            >
              <CardHeader className="mt-16 flex flex-col justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col justify-center items-center text-center pb-2 flex-grow">
                {name === "Zakaria AATTACHE" ? (
                  <ol>
                    <li>Back-End Developper</li>
                    <li>Database Specialist</li>
                  </ol>
                ) : name === "Benoit MARIN" ? (
                  <ol>
                    <li>Front-End Developper</li>
                    <li>UI/UX Designer</li>
                  </ol>
                ) : null}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

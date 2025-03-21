import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/upgrade.png";
import image3 from "../assets/progression.png";
import image4 from "../assets/register.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Améliorations",
    description:
      "Améliorez votre récolte et débloquez de nouvelles fonctionnalités pour progresser plus rapidement.",
    image: image,
  },
  {
    title: "Progression",
    description:
      "Sauvegardez votre progression et continuez à jouer à tout moment sur n'importe quel navigateur.",
    image: image3,
  },
  {
    title: "Authentications",
    description:
      "Créez un compte pour sauvegarder votre progression et débloquer des fonctionnalités supplémentaires.",
    image: image4,
  },
];

const featureList: string[] = [
  "Authentification",
  "Responsive design",
  "Upgrade system",
  "Progression saving",
  "User-friendly",
  "Idle game",
  "Clicker game",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

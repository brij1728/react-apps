import { FeatureSection, FeatureText, FeatureTitle } from "./FeatureElement";

interface FeatureProps {
  title: string;
  text?: string;
}
export const Feature: React.FC<FeatureProps> = ({
  title = "Feature",
  text = "Feature",
}) => {
  return (
    <FeatureSection>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{text}</FeatureText>
    </FeatureSection>
  );
};

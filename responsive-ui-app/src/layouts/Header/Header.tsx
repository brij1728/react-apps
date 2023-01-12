import {
  GradientTextHeading,
  HeaderButton,
  HeaderContent,
  HeaderEmailInput,
  HeaderInputContent,
  HeaderSection,
  HeaderText,
} from "./HeaderElement";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContent>
        <GradientTextHeading>
          Let’s Build Something amazing with GPT-3 OpenAI
        </GradientTextHeading>
        <HeaderText>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </HeaderText>
        <HeaderInputContent>
          <HeaderEmailInput placeholder="Your Email Address"></HeaderEmailInput>
          <HeaderButton>Get Started</HeaderButton>
        </HeaderInputContent>
      </HeaderContent>
    </HeaderSection>
  );
};

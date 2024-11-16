import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          不喜欢柚子社的小朋友们你们好{' '}
          <GradientText>Ciallo～ (∠・ω )⌒★</GradientText>
          👋
        </>
      }
      description={
        <>
          柚子社全套游戏地址:{''}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.bilibili.com/video/BV1VTeEeDEbi/?spm_id_from=333.337.search-card.all.click&vd_source=ab39233086d665ce61464c4f7fbe50a9"
          >
            神秘链接
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/anon.gif"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };

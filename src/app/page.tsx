import { HeroVideo } from "@/components/HeroVideo";
import { MainSlider } from "@/components/MainSlider";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const slides = [
    // 1. 이동권 영상 영역
    <HeroVideo
      key="s1"
      index={1}
      src="/videos/mobility.mp4"
      poster="/images/photo/mobility-poster.jpg"
      videoPosition="50% 0%"
      label="이동권"
      title={
        <>
          누구나 두려움 없이{" "}
          <br className="hidden lg:inline" />
          외출하고, 귀가하는 일상
        </>
      }
      description="휠체어 휠을 쉽게 교체해 자택 출입 시 20초 만에 안전과 청결을 해결하는 전동리프트"
      button={{ href: "/products", label: "MY LIFT 제품소개", ariaLabel: "MY LIFT 제품소개 페이지로 이동" }}
    />,
    // 2. 고용권 영상 영역 (글씨 없는 빈 버튼)
    <HeroVideo
      key="s2"
      index={2}
      src="/videos/employment.mp4"
      poster="/images/photo/employment-poster.jpg"
      label="고용권"
      title={
        <>
          사회적 약자가{" "}
          <br className="hidden lg:inline" />
          함께 성장하는 일터
        </>
      }
      description="취약계층의 고용을 도와 적극적인 경제활동을 지원하는 것! (주)테라닉스의 소셜미션입니다."
      button={{ href: siteConfig.secondVideoButtonHref, ariaLabel: "다음 페이지로 이동" }}
    />,
    // 3. 비전 영상 영역 (About us 최상단에서 옮겨 옴)
    <HeroVideo
      key="s3"
      index={3}
      src="/videos/wheelchair-park.mp4"
      poster="/images/photo/wheelchair-park-poster.jpg"
      videoPosition="72% 45%"
      // PC에서 왼쪽 인물 얼굴이 로고와 겹치지 않도록 영상을 헤더 높이만큼 내린다
      videoClassName="lg:translate-y-[5.75rem]"
      label="‘국민의 건강, 행복, 안전지킴이’"
      title={
        <>
          국민 모두에게 보다{" "}
          <br className="hidden lg:inline" />
          안전하고 풍요로운 삶을
        </>
      }
      description="예비사회적기업 (주)테라닉스가 ESG와 함께 합니다. 사회적 약자의 안전구현을 위한 제품과 서비스를 개발하고 제공합니다."
    />,
  ];
  return <MainSlider slides={slides} labels={["이동권", "고용권", "비전"]} tones={["dark", "dark", "dark"]} />;
}

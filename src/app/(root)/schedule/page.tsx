"use client";

import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";
import Wrapper from "@/components/marketing/global/wrapper";
import AnimationContainer from "@/components/marketing/global/animation-container";
import Image from "next/image";

function SchedulePage() {
  const router = useRouter();

  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  if (!isInterviewer) return router.push("/");

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full h-full flex-1">
      <InterviewScheduleUI />
      <AnimationContainer animation="scaleUp" delay={1.2} className="absolute w-2/3 h-auto -top-[8%] left-1/4 -z-10">
        <Image
          src="/images/hero-gradient.svg"
          alt="hero"
          width={1024}
          height={1024}
          className="object-cover w-full h-auto"
        />
      </AnimationContainer>
    </Wrapper>
  )
}
export default SchedulePage;

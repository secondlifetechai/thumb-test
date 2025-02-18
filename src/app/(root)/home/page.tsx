"use client";

import ActionCard from "@/components/ActionCard";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import { QUICK_ACTIONS } from "@/constants/index2";
import Wrapper from "@/components/marketing/global/wrapper";
import AnimationContainer from "@/components/marketing/global/animation-container";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full h-full flex-1">
      <div className="container max-w-7xl mx-auto p-6">
        {/* WELCOME SECTION */}
        <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Welcome back!
          </h1>
          <p className="text-muted-foreground mt-2">
            {isInterviewer
              ? "Manage your interviews and review candidates effectively"
              : "Access your upcoming interviews and preparations"}
          </p>
        </div>

        {isInterviewer ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUICK_ACTIONS.map((action) => (
                <ActionCard
                  key={action.title}
                  action={action}
                  onClick={() => handleQuickAction(action.title)}
                />
              ))}
            </div>

            <MeetingModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
              isJoinMeeting={modalType === "join"}
            />
          </>
        ) : (
          <>
            <div>
              <h1 className="text-3xl font-bold">Your Interviews</h1>
              <p className="text-muted-foreground mt-1">View and join your scheduled interviews</p>
            </div>

            <div className="mt-8">
              {interviews === undefined ? (
                <div className="flex justify-center py-12">
                  <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : interviews.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {interviews.map((interview) => (
                    <MeetingCard key={interview._id} interview={interview} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  You have no scheduled interviews at the moment
                </div>
              )}
            </div>
          </>
        )}
      </div>

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
  );
}

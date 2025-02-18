"use client";

import LoaderUI from "@/components/LoaderUI";
import AnimationContainer from "@/components/marketing/global/animation-container";
import Wrapper from "@/components/marketing/global/wrapper";
import RecordingCard from "@/components/RecordingCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import useGetCalls from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useEffect, useState } from "react";

function RecordingsPage() {
  const { calls, isLoading } = useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  useEffect(() => {
    const fetchRecordings = async () => {
      if (!calls) return;

      try {
        // Get recordings for each call
        const callData = await Promise.all(calls.map((call) => call.queryRecordings()));
        const allRecordings = callData.flatMap((call) => call.recordings);

        setRecordings(allRecordings);
      } catch (error) {
        console.log("Error fetching recordings:", error);
      }
    };

    fetchRecordings();
  }, [calls]);

  if (isLoading) return <LoaderUI />;

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full h-full flex-1">
      <div className="container max-w-7xl mx-auto p-6">
        {/* HEADER SECTION */}
        <h1 className="text-3xl font-bold">Recordings</h1>
        <p className="text-muted-foreground my-1">
          {recordings.length} {recordings.length === 1 ? "recording" : "recordings"} available
        </p>

        {/* RECORDINGS GRID */}

        <ScrollArea className="h-[calc(100vh-12rem)] mt-3">
          {recordings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
              {recordings.map((r) => (
                <RecordingCard key={r.end_time} recording={r} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] gap-4">
              <p className="text-xl font-medium text-muted-foreground">No recordings available</p>
            </div>
          )}
        </ScrollArea>
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
export default RecordingsPage;

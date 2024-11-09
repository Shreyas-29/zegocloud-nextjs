
// import { use, useEffect } from "react";
// import { useParams } from "next/navigation";
// import { useUserStore } from "@/lib/store";
// import VideoCall from "@/components/video-call";
// import dynamic from "next/dynamic";

import VideoCall from "@/components/video-call";

// const VideoCall = dynamic(() => import('@/components/video-call'), {
//     ssr: false,
// });

interface Props {
    params: Promise<{
        roomId: string;
    }>;
}

const RoomPage = async ({ params }: Props) => {
    // const roomId = params

    const { roomId } = await params;
    console.log(roomId);

    // const resolvedParams = use(params);

    // const { userId, username } = useUserStore();

    // useEffect(() => {
    //     if (!userId || !username) {
    //         window.location.href = "/";
    //     }
    // }, [userId, username]);

    // if (!userId || !username) {
    //     return null;
    // }

    if (!roomId) {
        return (
            <div className="min-h-screen bg-background">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold">Room not found</h1>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-background">
            <VideoCall roomId={roomId as string} />
        </main>
    );
};

export default RoomPage;

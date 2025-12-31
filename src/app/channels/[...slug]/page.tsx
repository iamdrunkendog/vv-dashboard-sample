// @/app/channels/[...slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { channels, ChatMessage, User } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, Send } from "lucide-react";

function Message({ msg }: { msg: ChatMessage }) {
    const isSystemEvent = msg.content.type === 'system_event';

    if (isSystemEvent) {
        return (
             <div className="flex items-center justify-center my-4">
                <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {msg.content.text}
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-start gap-4 my-4">
            <Avatar className="h-10 w-10">
                <AvatarImage src={msg.author.avatarUrl} />
                <AvatarFallback>{msg.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <div className="flex items-baseline gap-2">
                    <span className="font-semibold">{msg.author.name}</span>
                    <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                </div>
                <p className="text-sm">{msg.content.text}</p>
            </div>
        </div>
    );
}

export default function ChannelPage() {
    const params = useParams();
    const slug = params.slug as string[] || [];
    const [channelId] = slug;
    const channel = channels.find(c => c.id === channelId) || channels[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-5rem)]">
        {/* Main Chat Area */}
        <div className="lg:col-span-2 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4">
                {channel.messages.map(msg => <Message key={msg.id} msg={msg} />)}
            </div>
            <div className="p-4 border-t bg-background">
                <div className="relative">
                    <Input placeholder={`${channel.name}에 메시지 보내기`} className="pr-20" />
                     <div className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center gap-1">
                        <Button variant="ghost" size="icon"><Paperclip className="h-4 w-4" /></Button>
                        <Button size="icon"><Send className="h-4 w-4" /></Button>
                     </div>
                </div>
            </div>
        </div>

        {/* Right Context Panel */}
        <div className="hidden lg:block border-l h-full overflow-y-auto">
            <Card className="rounded-none border-none">
                <CardHeader>
                    <CardTitle>프로젝트 컨텍스트</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold">연결된 프로젝트</h4>
                        <p className="text-sm text-muted-foreground">여름 캠페인</p>
                    </div>
                     <div>
                        <h4 className="font-semibold">상태</h4>
                        <p className="text-sm text-muted-foreground">진행중</p>
                    </div>
                     <div>
                        <h4 className="font-semibold">NAS 경로</h4>
                        <a href="#" className="text-sm text-blue-500 hover:underline truncate">/nas/summer2025/main_banner</a>
                    </div>
                     <div>
                        <h4 className="font-semibold">빠른 링크</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><a href="#" className="text-blue-500 hover:underline">칸반 보드로 가기</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">기획서 보기</a></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}

// @/app/projects/audit-log/page.tsx
import { auditLogs, AuditLog, LogSeverity, LogEventType } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const severityStyles: Record<LogSeverity, string> = {
    low: "bg-blue-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
};

const eventTypeStyles: Record<LogEventType, string> = {
    create: "border-green-500",
    upload: "border-blue-500",
    modify: "border-yellow-500",
    approve: "border-purple-500",
    comment: "border-gray-500",
    delete: "border-red-500",
};

const severityMap: Record<LogSeverity, string> = {
    low: "낮음",
    medium: "중간",
    high: "높음",
};

const eventTypeMap: Record<LogEventType, string> = {
    create: "생성",
    upload: "업로드",
    modify: "수정",
    approve: "승인",
    comment: "댓글",
    delete: "삭제",
};

export default function AuditLogPage() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>변경 이력 (감사 로그)</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="relative pl-6">
                {/* Timeline line */}
                <div className="absolute left-[30px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

                <div className="space-y-8">
                    {auditLogs.map(log => (
                        <div key={log.id} className="flex items-start gap-4">
                            <Avatar className={cn("z-10 h-10 w-10 border-4", eventTypeStyles[log.event])}>
                                <AvatarImage src={log.actor.avatarUrl} />
                                <AvatarFallback>{log.actor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 pt-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">{log.actor.name}</span>
                                    <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                                </div>
                                <p className="text-sm">{log.details}</p>
                                <div className="mt-2 flex items-center gap-2">
                                     <Badge variant="outline">{eventTypeMap[log.event]}</Badge>
                                     <Badge className={cn("text-white", severityStyles[log.severity])}>{severityMap[log.severity]}</Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CardContent>
    </Card>
  );
}

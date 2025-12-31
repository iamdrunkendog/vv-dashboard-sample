// @/app/projects/schedule/page.tsx
import { calendarEvents, CalendarEvent, EventType } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const eventTypeStyles: Record<EventType, string> = {
    shooting: "bg-blue-500",
    review: "bg-purple-500",
    approval: "bg-yellow-500",
    delivery: "bg-green-500",
};

const eventTypeMap: Record<EventType, string> = {
    shooting: "촬영",
    review: "리뷰",
    approval: "승인",
    delivery: "납품",
};

export default function SchedulePage() {
    // Group events by date for a "list" feel
    const groupedEvents = calendarEvents.reduce((acc, event) => {
        (acc[event.date] = acc[event.date] || []).push(event);
        return acc;
    }, {} as Record<string, CalendarEvent[]>);

    const sortedDates = Object.keys(groupedEvents).sort((a,b) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <div className="space-y-6">
        {sortedDates.map(date => (
            <Card key={date}>
                <CardHeader>
                    <CardTitle>{new Date(date).toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {groupedEvents[date].map(event => (
                        <div key={event.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-4">
                                <Badge className={cn("text-white", eventTypeStyles[event.type])}>{eventTypeMap[event.type]}</Badge>
                                <span className="font-medium">{event.title}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{event.project}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>
        ))}
    </div>
  );
}

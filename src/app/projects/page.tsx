"use client";

import { useState } from "react";
import { KanbanTask, kanbanTasks, TaskStatus, TaskPriority, User } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { Clock, Folder, Users, LayoutGrid, List } from "lucide-react";

// --- STYLES & MAPS ---
const priorityStyles: Record<TaskPriority, string> = {
    low: "bg-gray-500",
    medium: "bg-blue-500",
    high: "bg-yellow-500",
    urgent: "bg-red-500",
};

const priorityMap: Record<TaskPriority, string> = {
    low: "낮음",
    medium: "중간",
    high: "높음",
    urgent: "긴급",
};

const statusMap: Record<TaskStatus, string> = {
    requested: "요청됨",
    "in-progress": "진행중",
    review: "리뷰중",
    approval: "승인대기",
    completed: "완료됨",
};

const statusColorStyles: Record<TaskStatus, string> = {
    requested: "bg-yellow-500", // 노란색
    "in-progress": "bg-green-500",    // 초록색
    review: "bg-purple-500",      // 보라색
    approval: "bg-orange-500",     // 주황색
    completed: "bg-gray-500",      // 회색
};


// --- KANBAN VIEW COMPONENTS ---
function KanbanCard({ task }: { task: KanbanTask }) {
    return (
        <Card className="mb-4">
            <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">{task.title}</CardTitle>
                    <Badge className={cn("text-xs text-white", priorityStyles[task.priority])}>
                        {priorityMap[task.priority]}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4" />
                    <span className="truncate">{task.nasPath}</span>
                </div>
                 <div className="flex items-center gap-2 mt-2">
                    <Users className="h-4 w-4" />
                    <span>{task.project}</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{task.dueDate}</span>
                </div>
                <Avatar className="h-8 w-8">
                    <AvatarImage src={task.assignee.avatarUrl} alt={task.assignee.name} />
                    <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </CardFooter>
        </Card>
    )
}

function KanbanColumn({ title, status, tasks }: { title: string, status: TaskStatus, tasks: KanbanTask[] }) {
    const statusTasks = tasks.filter(task => task.status === status);
    return (
        <div className="flex flex-col w-full min-w-[300px] bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">{title}</h3>
                <Badge variant="secondary">{statusTasks.length}</Badge>
            </div>
            <div className="p-4 overflow-y-auto">
                {statusTasks.map(task => <KanbanCard key={task.id} task={task} />)}
            </div>
        </div>
    )
}

function KanbanView() {
    const columns: { title: string, status: TaskStatus }[] = [
        { title: "요청됨", status: "requested" },
        { title: "진행중", status: "in-progress" },
        { title: "리뷰중", status: "review" },
        { title: "승인대기", status: "approval" },
        { title: "완료됨", status: "completed" },
    ];

    return (
        <div className="flex gap-6 h-full overflow-x-auto">
            {columns.map(col => (
                <KanbanColumn
                    key={col.status}
                    title={col.title}
                    status={col.status}
                    tasks={kanbanTasks}
                />
            ))}
        </div>
    );
}

// --- LIST VIEW COMPONENT ---
function ListView() {
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>우선순위</TableHead>
                            <TableHead>제목</TableHead>
                            <TableHead>상태</TableHead>
                            <TableHead>프로젝트</TableHead>
                            <TableHead>담당자</TableHead>
                            <TableHead>마감일</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {kanbanTasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>
                                    <Badge className={cn("text-white", priorityStyles[task.priority])}>
                                        {priorityMap[task.priority]}
                                    </Badge>
                                </TableCell>
                                <TableCell className="font-medium">{task.title}</TableCell>
                                <TableCell>
                                     <div className="flex items-center gap-2">
                                        <div className={cn("w-2 h-2 rounded-full", statusColorStyles[task.status])}></div>
                                        {statusMap[task.status]}
                                    </div>
                                </TableCell>
                                <TableCell>{task.project}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage src={task.assignee.avatarUrl} />
                                            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span>{task.assignee.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{task.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

// --- MAIN PAGE COMPONENT ---
export default function ProjectsPage() {
    const [view, setView] = useState('list');

    return (
        <div className="flex flex-col h-full gap-4">
            <div className="flex justify-end">
                <ToggleGroup type="single" value={view} onValueChange={(value) => { if(value) setView(value)}}>
                    <ToggleGroupItem value="kanban" aria-label="Kanban view">
                        <LayoutGrid className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="List view">
                        <List className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            {view === 'kanban' ? <KanbanView /> : <ListView />}
        </div>
    )
}

// @/app/projects/documents/page.tsx
import { documents, Document, DocStatus } from "@/data";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const statusStyles: Record<DocStatus, string> = {
    draft: "bg-gray-500",
    "in-review": "bg-yellow-500",
    approved: "bg-green-500",
    archived: "bg-red-500",
};

const statusMap: Record<DocStatus, string> = {
    draft: "초안",
    "in-review": "리뷰중",
    approved: "승인됨",
    archived: "보관됨",
};

export default function DocumentsPage() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card>
            <CardHeader>
                <CardTitle>모든 문서</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>제목</TableHead>
                        <TableHead>상태</TableHead>
                        <TableHead>작성자</TableHead>
                        <TableHead>마지막 업데이트</TableHead>
                        <TableHead>태그</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {documents.map((doc) => (
                        <TableRow key={doc.id}>
                            <TableCell className="font-medium">{doc.title}</TableCell>
                            <TableCell>
                                <Badge className={cn("text-white", statusStyles[doc.status])}>
                                    {statusMap[doc.status]}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={doc.author.avatarUrl} />
                                        <AvatarFallback>{doc.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span>{doc.author.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{doc.updatedAt}</TableCell>
                            <TableCell className="space-x-1">
                                {doc.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>최근 업데이트 및 알림</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="text-sm">
                    <p className="font-medium">"AEM 컴포넌트 가이드"가 리뷰 상태로 변경되었습니다.</p>
                    <p className="text-xs text-muted-foreground">5분 전</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="text-sm">
                    <p className="font-medium">찰리가 "소셜 미디어 이미지 규격"을 업데이트했습니다.</p>
                    <p className="text-xs text-muted-foreground">3시간 전</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="text-sm">
                    <p className="font-medium">시스템 알림: "브랜드 스타일 가이드"의 새 버전이 승인되었습니다.</p>
                    <p className="text-xs text-muted-foreground">2일 전</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

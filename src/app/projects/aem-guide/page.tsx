// @/app/projects/aem-guide/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";

const guideSections = [
    {
        title: "초기 에셋 업로드",
        checklist: [
            { id: "aem-1-1", label: "올바른 메타데이터 프리셋이 적용되었는지 확인하세요." },
            { id: "aem-1-2", label: "에셋이 올바른 프로젝트 폴더에 위치하는지 확인하세요." },
            { id: 'aem-1-3', label: "에셋에 최소 3개 이상의 관련 키워드가 태그되었는지 확인하세요."}
        ],
        links: [{ href: "#", label: "전체 메타데이터 가이드" }]
    },
    {
        title: "컴포넌트 저작",
        checklist: [
            { id: "aem-2-1", label: "최상위 배너에는 'Hero Banner' 컴포넌트만 사용하세요." },
            { id: "aem-2-2", label: "모든 이미지에는 대체 텍스트(alt text)가 있어야 합니다." },
            { id: "aem-2-3", label: "게시하기 전에 모바일 미리보기를 확인하세요."}
        ],
        links: [{ href: "#", label: "컴포넌트 문서" }, { href: "#", label: "권장 사항" }]
    }
];

export default function AemGuidePage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {guideSections.map(section => (
        <Card key={section.title}>
            <CardHeader>
                <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <h4 className="font-semibold text-sm">사전 확인 체크리스트</h4>
                    <div className="space-y-2">
                        {section.checklist.map(item => (
                            <div key={item.id} className="flex items-center space-x-2">
                                <Checkbox id={item.id} />
                                <label
                                    htmlFor={item.id}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="mt-6 space-y-2">
                    <h4 className="font-semibold text-sm">관련 링크</h4>
                     {section.links.map(link => (
                        <a key={link.href} href={link.href} className="flex items-center text-sm text-blue-500 hover:underline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {link.label}
                        </a>
                     ))}
                </div>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}

// @/app/projects/handbook/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ChevronRight } from "lucide-react";

const handbookSections = [
    { title: "1. 사전 제작 (Pre-Production)", subitems: ["1.1 컨셉 기획", "1.2 스크립트 작성", "1.3 스토리보드"] },
    { title: "2. 본 제작 (Production)", subitems: ["2.1 스튜디오 준비", "2.2 조명 가이드", "2.3 카메라 설정"] },
    { title: "3. 후반 제작 (Post-Production)", subitems: ["3.1 편집 워크플로우", "3.2 색 보정", "3.3 사운드 믹싱"] },
    { title: "4. 결과물 납품 (Asset Delivery)", subitems: ["4.1 파일명 규칙", "4.2 NAS 업로드 가이드"] },
];

export default function HandbookPage() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
        {/* Category Tree */}
        <div className="md:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Book className="h-5 w-5" /> 핸드북 카테고리</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {handbookSections.map(section => (
                        <div key={section.title}>
                            <h4 className="font-semibold mb-2">{section.title}</h4>
                            <ul className="space-y-1 pl-4">
                                {section.subitems.map(item => (
                                    <li key={item} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center">
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        {/* Document Detail */}
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>2.2 조명 가이드</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                    <h2>3점 조명 설정</h2>
                    <p>3점 조명은 시각 미디어에서 사용되는 표준적인 방법입니다. 이것은 피사체를 비추기 위해 다른 위치에 세 개의 광원을 사용하는 것을 포함합니다.</p>
                    
                    <h3>1. 키 라이트 (Key Light)</h3>
                    <p>주 광원입니다. 일반적으로 가장 밝으며 피사체에 대해 45도 각도로 배치됩니다.</p>
                    
                    <h3>2. 필 라이트 (Fill Light)</h3>
                    <p>필 라이트는 키 라이트 반대편, 역시 45도 각도로 배치됩니다. 목적은 키 라이트로 인해 생긴 그림자를 "채워서" 대비를 줄이는 것입니다.</p>
                    
                    <h3>3. 백 라이트 (Back Light)</h3>
                    <p>백 라이트는 피사체 뒤, 프레임 밖에 배치됩니다. 피사체 주위에 빛의 테두리를 만들어 배경과 분리시킵니다.</p>

                    <h4>스튜디오 장비 체크리스트:</h4>
                    <ul>
                        <li>3 x LED 패널 (예: Aputure 120D)</li>
                        <li>3 x C-스탠드</li>
                        <li>1 x 키 라이트용 소프트박스 디퓨저</li>
                        <li>1 x 필 라이트용 반사판 (선택 사항)</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}

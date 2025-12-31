// @/data/index.ts

// UTILITY TYPES & DATA
export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export const users: User[] = [
  { id: 'user-1', name: '앨리스', avatarUrl: '/avatars/01.png' },
  { id: 'user-2', name: '밥', avatarUrl: '/avatars/02.png' },
  { id: 'user-3', name: '찰리', avatarUrl: '/avatars/03.png' },
  { id: 'user-4', name: '다이애나', avatarUrl: '/avatars/04.png' },
  { id: 'user-5', name: '이브', avatarUrl: '/avatars/05.png' },
];

const systemUser: User = { id: 'system', name: '시스템', avatarUrl: '/avatars/system.png' };

// 1. PROJECTS: KANBAN BOARD DATA
export type TaskStatus = 'requested' | 'in-progress' | 'review' | 'approval' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export type KanbanTask = {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignee: User;
  nasPath: string;
  project: string;
};

export const kanbanTasks: KanbanTask[] = [
  { id: 'task-1', title: 'InstaView 냉장고 GR-X24 - 3D USP 영상 제작', status: 'requested', priority: 'high', dueDate: '2025-07-15', assignee: users[0], nasPath: '/nas/HA/refrigerator/GR-X24/usp_video', project: 'InstaView GR-X24' },
  { id: 'task-2', title: 'WashTower WT21 - VPP 런칭 영상', status: 'in-progress', priority: 'urgent', dueDate: '2025-07-10', assignee: users[1], nasPath: '/nas/HA/washtower/WT21/vpp_launch_video', project: 'WashTower WT21' },
  { id: 'task-3', title: 'PuriCare 공기청정기 AS30 - 2D 라이프스타일 이미지', status: 'in-progress', priority: 'medium', dueDate: '2025-07-20', assignee: users[2], nasPath: '/nas/HA/puricare/AS30/lifestyle_2d_image', project: 'PuriCare AS30' },
  { id: 'task-4', title: 'Styler S5 - GenAI 라이프스타일 이미지', status: 'review', priority: 'high', dueDate: '2025-07-12', assignee: users[3], nasPath: '/nas/HA/styler/S5/genai_lifestyle_image', project: 'Styler S5' },
  { id: 'task-5', title: 'CordZero A9S - 3D Key Visual 영상', status: 'approval', priority: 'medium', dueDate: '2025-07-25', assignee: users[0], nasPath: '/nas/HA/cordzero/A9S/key_visual_video', project: 'CordZero A9S' },
  { id: 'task-6', title: 'DIOS 식기세척기 DFB22 - 3D 디멘션/인스톨레이션 영상', status: 'completed', priority: 'low', dueDate: '2025-06-30', assignee: users[4], nasPath: '/nas/HA/dishwasher/DFB22/dimension_video', project: 'DIOS DFB22' },
  { id: 'task-7', title: 'WHISEN 타워 에어컨 FQ23 - 3D 라이프스타일 영상', status: 'requested', priority: 'medium', dueDate: '2025-08-01', assignee: users[1], nasPath: '/nas/HA/aircon/FQ23/lifestyle_3d_video', project: 'WHISEN FQ23' },
  { id: 'task-8', title: 'TROMM 건조기 RH18 - 2D 왓츠인더박스 이미지', status: 'in-progress', priority: 'high', dueDate: '2025-07-18', assignee: users[2], nasPath: '/nas/HA/dryer/RH18/whats_in_box_image', project: 'TROMM RH18' },
  { id: 'task-9', title: 'DIOS 와인셀러 W085 - AR 인터랙티브 콘텐츠', status: 'review', priority: 'medium', dueDate: '2025-07-14', assignee: users[3], nasPath: '/nas/HA/wine_celler/W085/ar_interactive', project: 'DIOS W085' },
];

// 2. PROJECTS: DOCUMENTS & GUIDES DATA
export type DocStatus = 'draft' | 'in-review' | 'approved' | 'archived';

export type Document = {
  id: string;
  title: string;
  status: DocStatus;
  author: User;
  updatedAt: string;
  tags: string[];
};

export const documents: Document[] = [
  { id: 'doc-1', title: '브랜드 스타일 가이드 v3', status: 'approved', author: users[0], updatedAt: '2일 전', tags: ['브랜딩', '디자인'] },
  { id: 'doc-2', title: '스튜디오 촬영 요청 방법', status: 'approved', author: users[1], updatedAt: '1개월 전', tags: ['프로세스', '스튜디오'] },
  { id: 'doc-3', title: '소셜 미디어 이미지 규격', status: 'in-review', author: users[2], updatedAt: '3시간 전', tags: ['소셜', '규격'] },
  { id: 'doc-4', title: '영상 제작 워크플로우', status: 'draft', author: users[3], updatedAt: '1일 전', tags: ['영상', '워크플로우'] },
  { id: 'doc-5', title: 'NAS 폴더 구조 정책', status: 'approved', author: users[4], updatedAt: '2주 전', tags: ['nas', '정책'] },
  { id: 'doc-6', title: '클라이언트 피드백 처리 방법', status: 'approved', author: users[0], updatedAt: '1주 전', tags: ['프로세스', '클라이언트'] },
  { id: 'doc-7', title: '긴급 요청 프로토콜', status: 'archived', author: users[1], updatedAt: '3개월 전', tags: ['프로세스', '긴급'] },
  { id: 'doc-8', title: 'AEM 컴포넌트 가이드', status: 'in-review', author: users[2], updatedAt: '5분 전', tags: ['aem', '가이드'] },
];

// 3. PROJECTS: SCHEDULE CENTER DATA
export type EventType = 'shooting' | 'review' | 'approval' | 'delivery';

export type CalendarEvent = {
  id: string;
  title: string;
  type: EventType;
  date: string;
  project: string;
};

export const calendarEvents: CalendarEvent[] = [
  { id: 'event-1', title: '여름 캠페인 화보 촬영', type: 'shooting', date: '2025-07-08', project: '여름 캠페인' },
  { id: 'event-2', title: '제품 X 런칭 영상 리뷰', type: 'review', date: '2025-07-09', project: '제품 X 런칭' },
  { id: 'event-3', title: '메인 배너 최종 승인', type: 'approval', date: '2025-07-11', project: '여름 캠페인' },
  { id: 'event-4', title: '3분기 보고서 그래픽 납품', type: 'delivery', date: '2025-07-25', project: '내부' },
  { id: 'event-5', title: '연말 컨셉 아트 리뷰', type: 'review', date: '2025-07-16', project: '연말 캠페인' },
  { id: 'event-6', title: '파트너 덱 초안 리뷰', type: 'review', date: '2025-07-28', project: '파트너 프로그램' },
  { id: 'event-7', title: '스튜디오 장비 점검일', type: 'shooting', date: '2025-07-30', project: '스튜디오 내부' },
  { id: 'event-8', title: '소셜 미디어 콘텐츠 납품', type: 'delivery', date: '2025-07-22', project: '상시 운영' },
];

// 4. PROJECTS: FILE/ASSET DATA
export type FileNode = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  modifiedAt?: string;
  modifiedBy?: User;
  size?: string;
  children?: FileNode[];
};

export const fileTree: FileNode[] = [
  { id: 'folder-1', name: 'summer_campaign_2025', type: 'folder', children: [
    { id: 'file-1a', name: 'main_banner_v3.psd', type: 'file', modifiedAt: '2시간 전', modifiedBy: users[0], size: '1.2 GB' },
    { id: 'file-1b', name: 'ad_reels_final.mp4', type: 'file', modifiedAt: '1일 전', modifiedBy: users[1], size: '870 MB' },
  ]},
  { id: 'folder-2', name: 'product_x_launch', type: 'folder', children: [
    { id: 'folder-2a', name: 'video_source', type: 'folder', children: [] },
    { id: 'file-2b', name: 'launch_video_final_cut.prproj', type: 'file', modifiedAt: '30분 전', modifiedBy: users[1], size: '45 MB' },
  ]},
  { id: 'folder-3', name: 'brand_assets', type: 'folder', children: [
    { id: 'file-3a', name: 'visualvibe_logo_dark.svg', type: 'file', modifiedAt: '3개월 전', modifiedBy: users[4], size: '12 KB' },
    { id: 'file-3b', name: 'visualvibe_logo_light.svg', type: 'file', modifiedAt: '3개월 전', modifiedBy: users[4], size: '12 KB' },
  ]},
  { id: 'file-4', name: '3분기_실적_요약.pdf', type: 'file', modifiedAt: '4일 전', modifiedBy: users[0], size: '2.5 MB' },
];


// 5. PROJECTS: AUDIT LOG DATA
export type LogSeverity = 'low' | 'medium' | 'high';
export type LogEventType = 'create' | 'upload' | 'modify' | 'approve' | 'comment' | 'delete';

export type AuditLog = {
  id: string;
  actor: User;
  event: LogEventType;
  severity: LogSeverity;
  timestamp: string;
  details: string;
};

export const auditLogs: AuditLog[] = [
  { id: 'log-1', actor: users[1], event: 'upload', severity: 'low', timestamp: '2분 전', details: '"launch_video_raw_01.mp4" 파일을 /product_x_launch/video_source 에 업로드했습니다.' },
  { id: 'log-2', actor: systemUser, event: 'create', severity: 'low', timestamp: '15분 전', details: '작업-8을 위해 NAS 폴더 "/nas/holiday2025/concepts"를 생성했습니다.' },
  { id: 'log-3', actor: users[0], event: 'approve', severity: 'medium', timestamp: '1시간 전', details: '문서 "브랜드 스타일 가이드 v3"를 승인했습니다.' },
  { id: 'log-4', actor: users[3], event: 'modify', severity: 'low', timestamp: '3시간 전', details: '/website_ux 폴더의 "website_ux_mockups_v2.fig" 파일을 수정했습니다.' },
  { id: 'log-5', actor: users[2], event: 'comment', severity: 'low', timestamp: '5시간 전', details: '작업-3에 댓글을 남겼습니다: "캐러셀 포스트에 대한 업데이트된 카피가 필요합니다."' },
  { id: 'log-6', actor: systemUser, event: 'delete', severity: 'high', timestamp: '1일 전', details: '폴더 "/nas/temp_archive/q2_cleanup"를 삭제했습니다 (보관 정책).' },
  { id: 'log-7', actor: users[4], event: 'modify', severity: 'low', timestamp: '2일 전', details: '작업-6의 상태를 "완료됨"으로 업데이트했습니다.' },
  { id: 'log-8', actor: users[0], event: 'comment', severity: 'low', timestamp: '2일 전', details: '"A/B 테스트 시안"에 피드백을 남겼습니다.' },
];

// 6. CHANNELS: CHAT DATA
export type MessageContent = 
  | { type: 'text'; text: string }
  | { type: 'system_event'; text: string };

export type ChatMessage = {
  id: string;
  author: User;
  timestamp: string;
  content: MessageContent;
};

export type Channel = {
  id: string;
  name: string;
  description: string;
  lastMessage: string;
  unreadCount: number;
  messages: ChatMessage[];
};

const defaultChannelMessages: ChatMessage[] = [
  { id: 'msg-g1', author: users[0], timestamp: '오전 10:30', content: { type: 'text', text: '안녕하세요. InstaView 냉장고 GR-X24 3D USP 영상 1차 시안 NAS에 업로드했습니다. 리뷰 부탁드립니다.' } },
  { id: 'msg-g2', author: users[2], timestamp: '오전 10:32', content: { type: 'text', text: '네, 확인했습니다. 해당 컷은 Key Visual로 사용될 예정이라 조명 톤을 조금 더 밝게 조정 가능할까요?' } },
  { id: 'msg-g3', author: users[1], timestamp: '오전 10:35', content: { type: 'text', text: '알겠습니다. v2로 수정해서 바로 다시 올리겠습니다.' } },
  { id: 'msg-g4', author: systemUser, timestamp: '오전 11:00', content: { type: 'system_event', text: '📁 NAS: /HA/refrigerator/GR-X24/usp_video/ 폴더에 GR-X24_USP_v2.mp4 파일이 업데이트되었습니다.' } },
  { id: 'msg-g5', author: users[3], timestamp: '오전 11:15', content: { type: 'text', text: 'WashTower WT21 GenAI 라이프스타일 이미지 건, 레퍼런스 이미지 전달드렸으니 확인 후 진행해주세요.' } },
];

export const channels: Channel[] = [
  { 
    id: 'channel-1', 
    name: '#l-studio-general', 
    description: '팀 전체의 일반적인 소통 및 업데이트.',
    lastMessage: '찾았어요. #l-studio-shooting-request 에 있습니다...',
    unreadCount: 3,
    messages: defaultChannelMessages,
  },
  { 
    id: 'channel-2', 
    name: '#l-studio-notice', 
    description: '중요 공지 및 업데이트.', 
    lastMessage: '금일 자정까지 NAS 인증 정보를 업데이트해주세요.', 
    unreadCount: 1, 
    messages: [
      { id: 'msg-n1', author: systemUser, timestamp: '어제 오전 9:00', content: { type: 'system_event', text: '공지: 금요일 자정까지 NAS 인증 정보를 업데이트해주시기 바랍니다. 지원이 필요하면 IT팀에 문의하세요.' } }
    ]
  },
  { 
    id: 'channel-3', 
    name: '#l-studio-shooting-request', 
    description: '모든 신규 촬영 요청.', 
    lastMessage: '"제품 Y"에 대한 신규 요청이 방금 들어왔습니다.', 
    unreadCount: 5, 
    messages: [
        { id: 'msg-sr1', author: systemUser, timestamp: '오후 2:45', content: { type: 'system_event', text: '신규 요청: "제품 Y 런칭 화보 촬영". 작업 생성됨: task-10' } }
    ]
  },
  { 
    id: 'channel-4', 
    name: '#l-studio-feedback', 
    description: '진행 중인 작업에 대한 피드백 및 리뷰.', 
    lastMessage: '클라이언트가 최근 배너 시안을 매우 마음에 들어 했습니다!', 
    unreadCount: 0, 
    messages: [
        { id: 'msg-f1', author: users[0], timestamp: '오후 1:00', content: { type: 'text', text: '좋은 소식입니다! 클라이언트가 여름 캠페인 최신 배너 시안을 매우 마음에 들어 했습니다. 수정 사항 없습니다.' } }
    ]
  },
  { 
    id: 'channel-5', 
    name: '#l-studio-urgent', 
    description: '긴급한 문제 및 요청 전용.', 
    lastMessage: '라이브 사이트 배너가 로드되지 않습니다!', 
    unreadCount: 1, 
    messages: [
        { id: 'msg-u1', author: users[4], timestamp: '오후 3:15', content: { type: 'text', text: '@channel 라이브 사이트의 메인 배너가 로드되지 않고 있습니다! 지금 확인 중입니다.' } }
    ]
  },
  { 
    id: 'channel-6', 
    name: '#studio-internal', 
    description: '내부 팀 채팅 및 기타 잡담.', 
    lastMessage: '커피 드실 분?', 
    unreadCount: 0, 
    messages: [
        { id: 'msg-i1', author: users[1], timestamp: '오후 3:30', content: { type: 'text', text: '커피 타임 가지실 분?' } }
    ]
  },
];

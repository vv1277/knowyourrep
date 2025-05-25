export interface Promise {
  content: string;
  fulfillmentRate: number;
}

export interface Politician {
  id: number;
  name: string;
  party: string;
  position: string;
  region: string;
  imageUrl: string;
  electionProbability: number;
  lastElectionPromises: Promise[];
  currentElectionPromises: string[];
  activities: string[];
}

export const politicians: Politician[] = [
  {
    id: 1,
    name: '홍길동',
    party: '더불어민주당',
    position: '국회의원',
    region: '서울 강남구',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    electionProbability: 65,
    lastElectionPromises: [
      {
        content: '청년 주거 지원 확대: 청년층의 주거 안정을 위해 공공임대주택 5만 호를 추가 공급하고, 전월세 보증금 대출 이자 지원을 확대하겠습니다.',
        fulfillmentRate: 75
      },
      {
        content: '공공 교통망 확충: 강남구 내 지하철역 신설 및 버스 노선 증설을 통해 출퇴근 교통난을 해소하겠습니다.',
        fulfillmentRate: 60
      },
      {
        content: '디지털 교육 인프라 강화: 초중고 학생 대상 AI·코딩 교육 확대 및 스마트 교실 구축 지원',
        fulfillmentRate: 85
      }
    ],
    currentElectionPromises: [
      '지역 경제 활성화 위한 소상공인 지원 강화',
      '미세먼지 저감을 위한 대중교통 이용 장려 및 인프라 확충',
      '어린이집 확충 및 돌봄 서비스 확대',
    ],
    activities: [
      '2023년 국회 국토위 위원으로서 주거복지법 개정안 대표 발의',
      '2022년 강남구 청년 토론회 개최 및 청년 정책 간담회 주최',
      '2021년 강남구 환경정화 봉사활동 주관',
    ],
  },
  {
    id: 2,
    name: '김철수',
    party: '국민의힘',
    position: '시장',
    region: '부산 해운대구',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    electionProbability: 55,
    lastElectionPromises: [
      {
        content: '해운대 해수욕장 정비: 해수욕장 환경 개선 및 안전 인프라 확충, 야간 경관 조명 설치',
        fulfillmentRate: 90
      },
      {
        content: '관광 인프라 확충: 해운대구 내 국제 컨벤션센터 유치 및 관광객 편의시설 확대',
        fulfillmentRate: 45
      },
      {
        content: '소상공인 지원 확대: 코로나19 피해 소상공인 대상 긴급 지원금 및 컨설팅 제공',
        fulfillmentRate: 80
      }
    ],
     currentElectionPromises: [
      '스마트 시티 기술 도입을 통한 교통 체증 완화',
      '지역 특화 산업 육성 및 청년 일자리 창출',
      '문화 시설 확충 및 시민 여가 공간 확대',
    ],
    activities: [
      '2024년 해운대 시민 안전 캠페인 주최 및 안전 교육 실시',
      '2023년 부산시 관광 활성화 포럼 연사',
      '2022년 해운대구 소상공인 간담회 개최',
    ],
  },
  {
    id: 3,
    name: '이영희',
    party: '정의당',
    position: '도지사',
    region: '경기 수원시',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    electionProbability: 40,
    lastElectionPromises: [
      {
        content: '친환경 교통 정책 추진: 전기·수소버스 도입 확대 및 자전거 도로망 구축, 대중교통 요금 할인',
        fulfillmentRate: 70
      },
      {
        content: '경기도 내 무상급식 확대: 초·중·고 전 학년 무상급식 실시 및 지역 농산물 사용 확대',
        fulfillmentRate: 95
      },
      {
        content: '경기 청년 일자리 창출: 스타트업 지원센터 설립 및 청년 창업자금 지원',
        fulfillmentRate: 65
      }
    ],
     currentElectionPromises: [
      '농축산물 생산 농가 직접 지원 및 판로 개척 지원',
      '지역 의료 시스템 강화 및 공공 병원 확충',
      '예술인 지원 확대 및 지역 문화 콘텐츠 개발',
    ],
    activities: [
      '2024년 친환경 교통 세미나 개최 및 정책 발표',
      '2023년 경기도 복지 정책 발표 및 토론회 주관',
      '2022년 경기도 청년 창업 경진대회 심사위원',
    ],
  }
]; 
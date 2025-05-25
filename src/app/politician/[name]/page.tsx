import { politicians } from '@/data/politicians'
import { news } from '@/data/news'
import Link from 'next/link'

interface Props {
  params: { name: string }
}

export default function PoliticianDetailPage({ params }: Props) {
  const decodedName = decodeURIComponent(params.name)
  const politician = politicians.find(p => p.name === decodedName)
  
  if (!politician) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">정치인을 찾을 수 없습니다.</h2>
          <p className="text-gray-600 mb-6">요청하신 정치인 정보를 찾을 수 없습니다.</p>
          <Link href="/" className="text-blue-600 hover:underline text-lg font-medium">홈으로 돌아가기</Link>
        </div>
      </div>
    )
  }

  const relatedNews = news.filter(n => n.title.includes(decodedName) || n.summary.includes(decodedName))

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
          {/* 프로필 섹션 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-8 pb-8 border-b border-gray-200">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <img src={politician.imageUrl} alt={politician.name} className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-sm" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">{politician.name}</h2>
              <div className="text-xl text-gray-700 mb-2">{politician.position}</div>
              <div className="text-lg text-blue-700 font-semibold mb-2">{politician.party}</div>
              <div className="text-md text-gray-500">{politician.region}</div>
            </div>
          </div>

          {/* 이번 선거 주요 공약 섹션 */}
           {politician.currentElectionPromises && politician.currentElectionPromises.length > 0 && (
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">주요 공약</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {politician.currentElectionPromises.map((promise, idx) => (
                  <li key={idx}>{promise}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 활동 섹션 */}
          {politician.activities && politician.activities.length > 0 && (
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">주요 활동</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {politician.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 관련 뉴스 요약 섹션 */}
          {relatedNews.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">관련 뉴스 요약</h3>
              <ul className="space-y-4">
                {relatedNews.map(n => (
                  <li key={n.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1 leading-snug">{n.title}</div>
                    <div className="text-gray-700 mb-2 text-sm leading-relaxed line-clamp-2">{n.summary}</div>
                    <div className="text-xs text-gray-500">{n.date} | {n.source}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* 당선 확률 (하단 분리) */}
           <div className="pt-8 border-t border-gray-200">
             <h3 className="text-2xl font-bold text-gray-800 mb-4">당선 확률</h3>
             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
               <div className="text-3xl font-semibold text-blue-600 mb-4 md:mb-0">{politician.electionProbability}%</div>
                <div className="w-full md:w-2/3 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${politician.electionProbability}%` }}
                  />
                </div>
             </div>
           </div>

          {/* 지난 선거 주요 공약 섹션 */}
          {politician.lastElectionPromises && politician.lastElectionPromises.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">지난 선거 주요 공약</h3>
              {/* 지난 선거 공약 목록 (최대 3개 표시)*/}
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-6">
                {politician.lastElectionPromises.slice(0, 3).map((promise, idx) => (
                  <li key={idx}>{promise.content}</li>
                ))}
              </ul>

              {/* 지난 선거 공약 전체 달성률 */}
              {(() => {
                const totalFulfillment = politician.lastElectionPromises.reduce((sum, promise) => sum + promise.fulfillmentRate, 0);
                const averageFulfillment = politician.lastElectionPromises.length > 0 ? Math.round(totalFulfillment / politician.lastElectionPromises.length) : 0;
                return (
                   <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">전체 공약 평균 달성률</h4>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="text-3xl font-semibold text-green-600 mb-4 md:mb-0">{averageFulfillment}%</div>
                         <div className="w-full md:w-2/3 bg-gray-200 rounded-full h-3">
                           <div
                             className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                             style={{ width: `${averageFulfillment}%` }}
                           />
                         </div>
                      </div>
                    </div>
                );
              })()}

            </div>
          )}

          <div className="mt-10 text-center">
             <Link href="/" className="text-blue-600 hover:underline text-lg font-medium">
               홈으로 돌아가기
             </Link>
           </div>

        </div>
      </div>
    </div>
  )
} 
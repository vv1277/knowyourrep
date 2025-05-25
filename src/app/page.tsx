'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import FilterSection from '@/components/FilterSection'
import NewsCard from '@/components/NewsCard'
import PoliticianCard from '@/components/PoliticianCard'
import { news } from '@/data/news'
import { politicians } from '@/data/politicians'
import { FunnelIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const router = useRouter();
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const handleSearch = (query: string) => {
    // For now, search navigates to detail page. 
    // Later, this will filter the list.
    router.push(`/politician/${encodeURIComponent(query)}`);
  };

   const handleFilterApply = (filters: { region: string, party: string, position: string }) => {
    // TODO: Implement actual filtering based on selected filters
    console.log('Filters applied:', filters);
    setIsFilterPanelOpen(false); // 필터 적용 후 패널 닫기
  };

  const handleNewsClick = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            KnowYourRep
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            지역 정치인의 공약, 실적, 입장을 쉽고 투명하게 확인하세요
          </p>
        </header>
        
        <section className="flex justify-center mb-8 relative">
           <div className="flex-grow max-w-3xl w-full mr-2 md:mr-4">
             <SearchBar onSearch={handleSearch} />
           </div>
            {/* Filter Button */}
           <div>
             <button
               className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
               onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
               aria-label="필터 열기/닫기"
             >
               <FunnelIcon className="h-6 w-6 text-gray-600" />
             </button>
           </div>
           {/* Filter Panel (Absolute Position) */}
           {isFilterPanelOpen && (
               <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-10 w-full md:w-[600px]">
                  <FilterSection onFilterApply={handleFilterApply} onClose={() => setIsFilterPanelOpen(false)} />
               </div>
           )}
        </section>


        <section className="mb-16 mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">주요 정치 뉴스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                summary={item.summary}
                date={item.date}
                source={item.source}
                onClick={() => handleNewsClick(item.id)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">추천 정치인</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {politicians.map((p) => (
              <PoliticianCard
                key={p.id}
                name={p.name}
                party={p.party}
                position={p.position}
                region={p.region}
                imageUrl={p.imageUrl}
                electionProbability={p.electionProbability}
                promises={p.promises}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 
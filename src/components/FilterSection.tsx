'use client'

import { useState } from 'react'

const regions = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']
const parties = ['국민의힘', '더불어민주당', '정의당', '기본소득당', '진보당', '무소속']
const positions = ['국회의원', '시장', '도지사', '구청장', '시의원', '도의원']

interface FilterSectionProps {
  onFilterApply?: (filters: { region: string, party: string, position: string }) => void;
  onClose?: () => void;
}

export default function FilterSection({ onFilterApply, onClose }: FilterSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedParty, setSelectedParty] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('')

  const handleFilterApply = () => {
    if (onFilterApply) {
      onFilterApply({ selectedRegion, selectedParty, selectedPosition });
    }
    if (onClose) {
        onClose(); // 필터 적용 후 패널 닫기
    }
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">필터</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label htmlFor="region-filter" className="block text-sm font-medium text-gray-700 mb-2">
            지역
          </label>
          <select
            id="region-filter"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          >
            <option value="">전체</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="party-filter" className="block text-sm font-medium text-gray-700 mb-2">
            정당
          </label>
          <select
             id="party-filter"
            value={selectedParty}
            onChange={(e) => setSelectedParty(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          >
            <option value="">전체</option>
            {parties.map((party) => (
              <option key={party} value={party}>
                {party}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="position-filter" className="block text-sm font-medium text-gray-700 mb-2">
            직책
          </label>
          <select
            id="position-filter"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          >
            <option value="">전체</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleFilterApply}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
        >
          필터 적용
        </button>
      </div>
    </div>
  )
} 
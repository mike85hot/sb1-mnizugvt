import React, { useState } from 'react';
import { DataRoomSection } from '../components/dataroom/DataRoomSection';
import { ShareModal } from '../components/dataroom/ShareModal';
import { DataRoomItem } from '../types/dataRoom';

const SECTIONS = [
  'Financials',
  'Company Documents',
  'Legal',
  'Technology',
  'Market & Competition',
  'Team',
];

const DataRoom = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataRoomItem | null>(null);
  const [expiryDays, setExpiryDays] = useState(7);

  const handleUpload = async (sectionId: string) => {
    // Implement file upload logic
    console.log('Uploading to section:', sectionId);
  };

  const handleShare = (item: DataRoomItem) => {
    setSelectedItem(item);
    setShareModalOpen(true);
  };

  const handleDelete = async (itemId: string) => {
    // Implement delete logic
    console.log('Deleting item:', itemId);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Data Room</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search documents..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All sections</option>
            {SECTIONS.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SECTIONS.map((section) => (
          <DataRoomSection
            key={section}
            title={section}
            items={[]} // Connect to your data source
            onUpload={handleUpload}
            onShare={handleShare}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        shareUrl={`https://tizora.com/shared/${selectedItem?.id}`}
        onCopy={() => console.log('Link copied')}
        expiryDays={expiryDays}
        onExpiryChange={setExpiryDays}
      />
    </div>
  );
};

export default DataRoom;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Button } from './ui/button';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: (format: string, options: any) => void;
}

export const ExportDialog: React.FC<ExportDialogProps> = ({
  isOpen,
  onClose,
  onExport
}) => {
  const [format, setFormat] = useState('csv');
  const [options, setOptions] = useState({
    dateRange: 'all',
    includePersonalInfo: false,
    includeSensitiveData: false
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Export Data</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icons.X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Export Format
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg"
            >
              <option value="csv">CSV</option>
              <option value="excel">Excel</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <select
              value={options.dateRange}
              onChange={(e) => setOptions(prev => ({ ...prev, dateRange: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg"
            >
              <option value="all">All Time</option>
              <option value="year">Past Year</option>
              <option value="quarter">Past Quarter</option>
              <option value="month">Past Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={options.includePersonalInfo}
                onChange={(e) => setOptions(prev => ({ ...prev, includePersonalInfo: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <span className="text-sm">Include Personal Information</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={options.includeSensitiveData}
                onChange={(e) => setOptions(prev => ({ ...prev, includeSensitiveData: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <span className="text-sm">Include Sensitive Data</span>
            </label>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onExport(format, options)}>
            Export
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
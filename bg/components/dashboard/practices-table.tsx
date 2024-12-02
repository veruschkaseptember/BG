'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CustomSwitch } from '@/components/ui/custom-switch';
import { EditPracticeForm } from './edit-practice-form';
import {
  ResponsiveModal,
  ResponsiveModalContent,
} from '@/components/ui/responsive-modal';
import Image from 'next/image';

interface Practice {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  status: boolean;
}

const TableRowMotion = motion(TableRow);

export function PracticesTable() {
  const [showAll, setShowAll] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPractice, setEditingPractice] = useState<Practice | null>(null);

  const allPractices: Practice[] = [
    {
      id: '1',
      name: 'Cape Fertility Clinic',
      phone: '+21 794 3956',
      email: 'info@capefertility.co.za',
      date: '04/10/2021',
      status: true,
    },
    {
      id: '2',
      name: 'Cape Fertility Clinic',
      phone: '+21 794 3956',
      email: 'info@capefertility.co.za',
      date: '04/10/2021',
      status: true,
    },
    {
      id: '3',
      name: 'Cape Fertility Clinic',
      phone: '+21 794 3956',
      email: 'info@capefertility.co.za',
      date: '04/10/2021',
      status: false,
    },
    {
      id: '4',
      name: 'Cape Fertility Clinic',
      phone: '+21 794 3956',
      email: 'info@capefertility.co.za',
      date: '04/10/2021',
      status: true,
    },
    {
      id: '5',
      name: 'Cape Fertility Clinic',
      phone: '+21 794 3956',
      email: 'info@capefertility.co.za',
      date: '04/10/2021',
      status: false,
    },
    {
      id: '6',
      name: 'Cape Fertility Clinic',
      phone: '+21 794 3956',
      email: 'info@capefertility.co.za',
      date: '04/10/2021',
      status: true,
    },
  ];

  const [practices, setPractices] = useState<Practice[]>(
    allPractices.slice(0, 3)
  );

  const handleStatusChange = (practiceId: string) => {
    setPractices((prevPractices) =>
      prevPractices.map((practice) =>
        practice.id === practiceId
          ? { ...practice, status: !practice.status }
          : practice
      )
    );
  };

  const handleDelete = (practiceId: string) => {
    setPractices((prevPractices) =>
      prevPractices.filter((practice) => practice.id !== practiceId)
    );
  };

  const handleEdit = (practice: Practice) => {
    setEditingPractice(practice);
    setIsEditModalOpen(true);
  };

  const handleEditSave = (updatedPractice: Practice) => {
    setPractices((prevPractices) =>
      prevPractices.map((practice) =>
        practice.id === updatedPractice.id ? updatedPractice : practice
      )
    );
    setIsEditModalOpen(false);
  };

  const handleSeeAll = () => {
    setShowAll(!showAll);
    setPractices(showAll ? allPractices.slice(0, 3) : allPractices);
  };

  return (
    <div
      id="pra"
      className="w-full px-4 
      xs:w-[400px] xs:px-0
      sm:w-[540px]
      md:w-[720px]
      lg:w-[940px]
      xl:w-[1080px] 
      mx-auto 
      bg-white rounded-lg shadow-sm">
      <div className="p-4 md:p-6">
        <h2 className="text-lg font-bold text-[#414141]">Newest Practices</h2>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="h-[72px]">
              <TableHead className="pl-4 md:pl-6 min-w-[200px]">
                Practice Name
              </TableHead>
              <TableHead className="hidden sm:table-cell min-w-[120px]">
                Phone
              </TableHead>
              <TableHead className="hidden md:table-cell min-w-[200px]">
                Email
              </TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right pr-4 md:pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {practices.map((practice) => (
                <TableRowMotion
                  key={practice.id}
                  initial={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  }}
                  className="h-[72px]">
                  <TableCell className="pl-4 md:pl-6">
                    {practice.name}
                    <div className="sm:hidden text-xs text-[#747474] mt-1">
                      {practice.phone}
                    </div>
                    <div className="md:hidden text-xs text-[#747474] mt-1">
                      {practice.email}
                    </div>
                    <div className="lg:hidden text-xs text-[#747474] mt-1">
                      {practice.date}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {practice.phone}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {practice.email}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {practice.date}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CustomSwitch
                        isChecked={practice.status}
                        placement="-"
                        size="M"
                        state="Default"
                        withLabel={false}
                        onChange={() => handleStatusChange(practice.id)}
                      />
                      <span className="text-[#212b36] text-sm">
                        {practice.status ? 'Active' : 'Disabled'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-4 md:pr-6">
                    <div className="flex items-center justify-end gap-2">
                      <div
                        className="w-[32px] h-[42px] relative cursor-pointer"
                        onClick={() => handleEdit(practice)}>
                        <Image
                          src="/edit.svg"
                          alt="Edit"
                          width={20}
                          height={20}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <div
                        className="w-[32px] h-[42px] relative cursor-pointer"
                        onClick={() => handleDelete(practice.id)}>
                        <Image
                          src="/iconbuttonsmallwhite.svg"
                          alt="Delete"
                          width={32}
                          height={42}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRowMotion>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      <div className="relative w-full [filter:drop-shadow(0px_1px_0px_rgba(145,_158,_171,_0.24)_inset)] flex flex-col items-end justify-center p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSeeAll}
          className="text-[#5F97A0] hover:text-[#5F97A0]/90 flex items-center gap-2">
          See All
          <ChevronRight className="h-4 w-4 text-[#5F97A0]" />
        </Button>
      </div>

      <ResponsiveModal open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <ResponsiveModalContent>
          {editingPractice && (
            <EditPracticeForm
              practice={editingPractice}
              onSave={handleEditSave}
              onCancel={() => setIsEditModalOpen(false)}
            />
          )}
        </ResponsiveModalContent>
      </ResponsiveModal>
    </div>
  );
}

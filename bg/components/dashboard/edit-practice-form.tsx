'use client';

import { useState } from 'react';
import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import {
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from '@/components/ui/responsive-modal';
import { Button } from '@/components/ui/button';

interface Practice {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  status: boolean;
}

interface EditPracticeFormProps {
  practice: Practice;
  onSave: (updatedPractice: Practice) => void;
  onCancel: () => void;
}

export function EditPracticeForm({
  practice,
  onSave,
  onCancel,
}: EditPracticeFormProps) {
  const [formData, setFormData] = useState<Practice>(practice);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
  });

  const validateForm = (): boolean => {
    const newErrors = {
      name: !formData.name ? 'Practice name is required' : '',
      phone: !formData.phone ? 'Phone number is required' : '',
      email: !formData.email
        ? 'Email is required'
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? 'Invalid email format'
        : '',
      date: !formData.date ? 'Date is required' : '',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  return (
    <>
      <ResponsiveModalHeader className="mb-6">
        <ResponsiveModalTitle>Edit Practice Details</ResponsiveModalTitle>
      </ResponsiveModalHeader>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <FloatingLabelInput
            id="name"
            label="Practice Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            className="w-full"
          />

          <FloatingLabelInput
            id="phone"
            label="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            error={errors.phone}
            className="w-full"
          />

          <FloatingLabelInput
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={errors.email}
            className="w-full"
          />

          <FloatingLabelInput
            id="date"
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            error={errors.date}
            className="w-full"
          />
        </div>

        <ResponsiveModalFooter className="flex justify-end gap-3 pt-4 border-t">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#67ADB9] hover:bg-[#67ADB9]/90">
            Save changes
          </Button>
        </ResponsiveModalFooter>
      </form>
    </>
  );
}

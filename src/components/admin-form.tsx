'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: '',
    date: '',
    title: '',
    description: '',
    tags: '',
    type: 'feature' as 'major' | 'feature' | 'enhancement',
    videoUrl: '',
    imageUrl: '',
    additionalText: '',
    buttonUrl: '',
    buttonText: '',
    secondaryButtonUrl: '',
    secondaryButtonText: '',
    updateType: 'released' as 'released' | 'upcoming'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Prepare the data
      const updateData: any = {
        id: formData.id,
        date: formData.date,
        title: formData.title,
        description: formData.description,
        tags: formData.tags.split(',').map(tag => tag.trim()),
        type: formData.type,
      };

      // Add optional fields only if they have values
      if (formData.videoUrl) updateData.videoUrl = formData.videoUrl;
      if (formData.imageUrl) updateData.imageUrl = formData.imageUrl;
      if (formData.additionalText) updateData.additionalText = formData.additionalText;
      if (formData.buttonUrl) updateData.buttonUrl = formData.buttonUrl;
      if (formData.buttonText) updateData.buttonText = formData.buttonText;
      if (formData.secondaryButtonUrl) updateData.secondaryButtonUrl = formData.secondaryButtonUrl;
      if (formData.secondaryButtonText) updateData.secondaryButtonText = formData.secondaryButtonText;

      // Send to appropriate endpoint
      const endpoint = formData.updateType === 'released' ? '/api/updates' : '/api/upcoming';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        setMessage(`✅ Update successfully added to ${formData.updateType} page!`);
        // Reset form
        setFormData({
          id: '',
          date: '',
          title: '',
          description: '',
          tags: '',
          type: 'feature',
          videoUrl: '',
          imageUrl: '',
          additionalText: '',
          buttonUrl: '',
          buttonText: '',
          secondaryButtonUrl: '',
          secondaryButtonText: '',
          updateType: 'released'
        });
      } else {
        setMessage('❌ Failed to add update. Please try again.');
      }
    } catch (error) {
      setMessage('❌ Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="font-reckless text-5xl text-white mb-4">Add New Update</h1>
          <p className="text-gray-400">Fill in the form below to add a new product update</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-gray-400 hover:text-white border border-zinc-700 rounded-lg transition-colors"
        >
          Logout
        </button>
      </header>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.includes('✅') ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Update Type */}
        <div>
          <label className="block text-white mb-2 font-medium">Update Type *</label>
          <select
            name="updateType"
            value={formData.updateType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          >
            <option value="released">Released</option>
            <option value="upcoming">Coming Soon</option>
          </select>
        </div>

        {/* ID */}
        <div>
          <label className="block text-white mb-2 font-medium">ID *</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="e.g., 0002 or upcoming-002"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
          <p className="text-gray-500 text-sm mt-1">Unique identifier for this update</p>
        </div>

        {/* Date */}
        <div>
          <label className="block text-white mb-2 font-medium">Date *</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="e.g., 2025-08-26 or October 2025"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
          <p className="text-gray-500 text-sm mt-1">For released: YYYY-MM-DD. For upcoming: Month Year</p>
        </div>

        {/* Title */}
        <div>
          <label className="block text-white mb-2 font-medium">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Meet the Atlas Card, our new product"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-white mb-2 font-medium">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of the update"
            rows={4}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
          <p className="text-gray-500 text-sm mt-1">Supports markdown formatting. Use \n\n for new paragraphs</p>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-white mb-2 font-medium">Tags *</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g., Card, Product Update"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
          <p className="text-gray-500 text-sm mt-1">Comma-separated list of tags</p>
        </div>

        {/* Type */}
        <div>
          <label className="block text-white mb-2 font-medium">Type *</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          >
            <option value="major">Major</option>
            <option value="feature">Feature</option>
            <option value="enhancement">Enhancement</option>
          </select>
        </div>

        {/* Media Section */}
        <div className="border-t border-zinc-800 pt-6">
          <h3 className="text-white text-xl font-semibold mb-4">Media (Optional)</h3>
          
          {/* Video URL */}
          <div className="mb-4">
            <label className="block text-white mb-2 font-medium">Video URL</label>
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="e.g., https://www.youtube.com/watch?v=..."
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">YouTube URL or local .mov file path</p>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-white mb-2 font-medium">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="e.g., /introducing.png"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">Path to image in public folder</p>
          </div>
        </div>

        {/* Additional Text */}
        <div className="border-t border-zinc-800 pt-6">
          <label className="block text-white mb-2 font-medium">Additional Text (Optional)</label>
          <textarea
            name="additionalText"
            value={formData.additionalText}
            onChange={handleChange}
            placeholder="Any additional text or notes"
            rows={3}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-500 text-sm mt-1">Supports markdown formatting</p>
        </div>

        {/* Buttons Section */}
        <div className="border-t border-zinc-800 pt-6">
          <h3 className="text-white text-xl font-semibold mb-4">Buttons (Optional)</h3>
          
          {/* Primary Button */}
          <div className="mb-4">
            <label className="block text-white mb-2 font-medium">Primary Button URL</label>
            <input
              type="url"
              name="buttonUrl"
              value={formData.buttonUrl}
              onChange={handleChange}
              placeholder="e.g., https://www.heyatlas.com/card"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-white mb-2 font-medium">Primary Button Text</label>
            <input
              type="text"
              name="buttonText"
              value={formData.buttonText}
              onChange={handleChange}
              placeholder="e.g., Learn More"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Secondary Button */}
          <div className="mb-4">
            <label className="block text-white mb-2 font-medium">Secondary Button URL</label>
            <input
              type="url"
              name="secondaryButtonUrl"
              value={formData.secondaryButtonUrl}
              onChange={handleChange}
              placeholder="e.g., https://www.youtube.com/watch?v=..."
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2 font-medium">Secondary Button Text</label>
            <input
              type="text"
              name="secondaryButtonText"
              value={formData.secondaryButtonText}
              onChange={handleChange}
              placeholder="e.g., Watch the Keynote"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="border-t border-zinc-800 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 text-white font-medium rounded-2xl transition-colors duration-200"
          >
            {isSubmitting ? 'Adding Update...' : 'Add Update'}
          </button>
        </div>
      </form>
    </>
  );
}


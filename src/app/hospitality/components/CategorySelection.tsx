// components/CategorySelection.tsx

import { useState, ChangeEvent } from 'react';
import { FillMail } from './marketingAgency';
import { BiSolidCategory } from "react-icons/bi";
interface CategorySelectionProps { }

const CategorySelection: React.FC<CategorySelectionProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories: string[] = ['Hotel', 'Resort', 'Restaurant', 'Villa', 'Guest House', 'Hostel'];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filteredCategories =
    searchTerm.length >= 2
      ? categories.filter((category) =>
        category.toLowerCase().includes(searchTerm)
      )
      : [];

  return (
    <div className="border border-gray-400 rounded-lg px-5 py-3">
      <div className="flex items-center gap-3 mb-3">
        <BiSolidCategory size={25} color='#110D3C' />
        <input
          type="text"
          className="outline-none text-black text-2xl font-medium w-full"
          placeholder="Search category..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchTerm.length >= 2 && (
        <div className="flex flex-wrap gap-3">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <label key={category} className=" text-black flex items-center gap-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className=""
                  required
                />
                {category}
              </label>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategorySelection;

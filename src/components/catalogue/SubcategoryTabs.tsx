import { Category } from '@/lib/types/category';
import { cn } from '@/lib/utils';

interface SubcategoryTabsProps {
  category: Category;
  selectedSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
}

const SubcategoryTabs = ({ category, selectedSubcategory, onSubcategoryChange }: SubcategoryTabsProps) => {
  return (
    <div className="py-4">
      <div className="flex space-x-2 overflow-x-auto">
        {category.subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            onClick={() => onSubcategoryChange(subcategory.slug)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
              selectedSubcategory === subcategory.slug
                ? "bg-[#B69D74] text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            )}
          >
            {subcategory.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryTabs;
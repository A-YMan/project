import { Category } from '@/lib/types/category';
import { cn } from '@/lib/utils';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

const CategoryNav = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryNavProps) => {
  const selectedCategoryData = categories.find(cat => cat.slug === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold">Catégories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                selectedCategory === category.slug
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategoryData && (
        <div className="space-y-4">
          <h3 className="font-semibold">Sous-catégories</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategoryData.subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => onSubcategoryChange(subcategory.slug)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-colors",
                  selectedSubcategory === subcategory.slug
                    ? "bg-[#B69D74] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                )}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
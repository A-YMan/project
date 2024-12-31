import { useState } from 'react';
import { categories } from '@/lib/data/categories';
import { catalogueBlanes } from '@/lib/data/catalogue-blanes';
import CategoryTabs from '@/components/catalogue/CategoryTabs';
import SubcategoryTabs from '@/components/catalogue/SubcategoryTabs';
import BlaneGrid from '@/components/catalogue/BlaneGrid';

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].slug);
  const [selectedSubcategory, setSelectedSubcategory] = useState(categories[0].subcategories[0].slug);

  const currentCategory = categories.find(cat => cat.slug === selectedCategory)!;
  
  const filteredBlanes = catalogueBlanes.filter(blane => 
    blane.category === selectedCategory && blane.subcategory === selectedSubcategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catalogue des Blanes</h1>
      
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          const newCat = categories.find(cat => cat.slug === category)!;
          setSelectedSubcategory(newCat.subcategories[0].slug);
        }}
      />
      
      <SubcategoryTabs
        category={currentCategory}
        selectedSubcategory={selectedSubcategory}
        onSubcategoryChange={setSelectedSubcategory}
      />

      <BlaneGrid blanes={filteredBlanes} />
    </div>
  );
};

export default Catalogue;
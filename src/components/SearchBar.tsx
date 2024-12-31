import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchBar = () => {
  return (
    <div className="bg-[#197874] py-4">
      <div className="container mx-auto px-4">
        {/* Responsive layout for search bar */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Category selector */}
          <Select defaultValue="categories">
            <SelectTrigger className="w-full md:w-[200px] bg-white">
              <SelectValue placeholder="Catégories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="categories">Catégories</SelectItem>
              <SelectItem value="restaurants">Restaurants</SelectItem>
              <SelectItem value="beaute">Beauté</SelectItem>
              <SelectItem value="loisirs">Loisirs</SelectItem>
            </SelectContent>
          </Select>

          {/* Search input */}
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Recherche..."
              className="w-full pl-10 bg-white"
            />
          </div>

          {/* City selector */}
          <Select defaultValue="paris">
            <SelectTrigger className="w-full md:w-[200px] bg-white">
              <MapPin className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Ville" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paris">Paris</SelectItem>
              <SelectItem value="lyon">Lyon</SelectItem>
              <SelectItem value="marseille">Marseille</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

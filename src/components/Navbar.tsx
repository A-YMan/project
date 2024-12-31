import Header from './Header';
import SearchBar from './SearchBar';
import MainNav from './MainNav';

const Navbar = () => {
  return (
    <div className="w-full">
      <Header />
      <SearchBar />
      <MainNav />
    </div>
  );
};

export default Navbar;
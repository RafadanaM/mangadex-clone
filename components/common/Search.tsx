import SearchIcon from "../../public/search.svg";
interface ISearch {
  className?: string;
}

const Search = ({ className }: ISearch) => {
  return (
    <div className={`h-10 w-full ${className ?? ""}`}>
      <form className="w-full h-full bg-secondary relative rounded">
        <SearchIcon className="absolute left-2.5 top-2 text-icon" />
        <input
          placeholder="Search"
          className="w-full h-10 bg-transparent px-12 py-2 placeholder:text-primary leading-10 focus:outline-none "
        />
      </form>
    </div>
  );
};

export default Search;

import { useGlobalContext } from '../contexts/context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentSearchTerm = e.target.elements.search.value;
    if (!currentSearchTerm) return;
    setSearchTerm(currentSearchTerm);
  };

  return (
    <section>
      <h1 className='title'>Search Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='guitar'
          className='form-input search-input'
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

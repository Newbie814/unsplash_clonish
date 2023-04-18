import { useGlobalContext } from '../contexts/context';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    if (!searchTerm) return;
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

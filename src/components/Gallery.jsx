import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../contexts/context';

const Gallery = () => {
  const { getImages, searchTerm } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: getImages,
  });

  if (isLoading)
    return (
      <section className='image-container'>
        <h4>Loading</h4>
      </section>
    );

  if (isError)
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );

  if (data.data.results.length < 1)
    return (
      <section className='image-container'>
        <h4>No results found.</h4>
      </section>
    );

  return (
    <section className='image-container'>
      {data.data.results.map((image) => {
        const { id, urls, alt_description } = image;
        const url = urls?.regular;
        return <img key={id} src={url} alt={alt_description} className='img' />;
      })}
    </section>
  );
};
export default Gallery;

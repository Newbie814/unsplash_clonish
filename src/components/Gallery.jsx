import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../contexts/context';

const Gallery = () => {
  const { getImages } = useGlobalContext();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: getImages,
  });

  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error...</h1>;

  return (
    <section className='gallery'>
      <h1>Gallery</h1>
      {data.data.results.map((image) => {
        const { id, urls, alt_description } = image;
        return (
          <article key={id} className='image'>
            <img src={urls.regular} alt={alt_description} />
          </article>
        );
      })}
    </section>
  );
};
export default Gallery;

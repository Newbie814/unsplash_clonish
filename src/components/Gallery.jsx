import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../contexts/context';
import axios from 'axios';

const url =
  'https://api.unsplash.com/search/photos?client_id=FF2DB1EgnIQtHGcajvAknkrTTbu5jvzriVAWFDNCMBs&query=office';

const Gallery = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);

      return result;
    },
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

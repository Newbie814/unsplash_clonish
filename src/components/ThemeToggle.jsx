import { useGlobalContext } from '../contexts/context';
import { BsFillSunsetFill, BsMoonStarsFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle'>
        {isDarkMode ? (
          <BsFillSunsetFill className='toggle-icon' />
        ) : (
          <BsMoonStarsFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;

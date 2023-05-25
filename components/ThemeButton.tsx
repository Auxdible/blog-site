
import ThemeContext from '@/context/ThemeContext';
import { useContext } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
export default function ThemeButton() {
    const { dark, toggleDark } = useContext(ThemeContext);
    return (
        <span onClick={() => toggleDark()} className={"border mx-auto text-xl hover:text-2xl p-2 transition-all duration-200 rounded-lg dark:border-gray-100 border-gray-800"}>
            {dark ? 
            <BsFillMoonStarsFill />
            :
            <BsFillSunFill />}
        </span>
    )
}
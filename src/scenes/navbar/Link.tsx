import { SelectedPage } from '@/shared/types';
import AncorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AncorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } cursor-pointer transition duration-500 hover:text-primary-300 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AncorLink>
  );
};

export default Link;

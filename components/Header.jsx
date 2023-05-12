import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="block absolute w-full top-0 z-index-2">
      <header className=" py-5 container flex justify-between items-center">
        <nav className="nav">
          <ul className="flex gap-5 items-center">
            <li>
              <Link
                className="text-xl uppercase  font-normal text-[#DACD57]"
                href={'/'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl uppercase  font-normal " href={'/about'}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Image alt='logo' src={'/logo.png'} width={300} height={38} />
        </div>
        <div className="nav">
          <ul className="flex gap-5 items-center">
            <li>
              <Link scroll={false} className="text-xl uppercase  font-normal " href="/#contact">
                CONTACT
              </Link>
            </li>
            <li className="">
              <button className="text-xl uppercase border-2 border-[#DACD57] rounded-2xl  px-5 py-2  font-normal ">
                <Link  href={'/#contact'}>ENQUIRE</Link>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

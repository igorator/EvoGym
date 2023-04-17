import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Our gym is a great place to work out and get fit! With
            top-of-the-line equipment and knowledgeable trainers, you can
            achieve your fitness goals in no time. Come check us out today and
            start your fitness journey!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 cursor-pointer">Get fit at our gym</p>
          <p className="my-5 cursor-pointer">
            Reach your fitness goals with us
          </p>
          <p>Start your fitness journey with our gym!</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 cursor-pointer">
            Start your journey to a healthier you.
          </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

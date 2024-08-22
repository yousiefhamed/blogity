const Footer = () => {
  return (
    <footer className="w-full bg-purple-800 text-white py-4">
      <div className="w-full mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Blogity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLinks = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-4 text-white">{title}</h1>
      {Links.map((link) => (
        <li className="last:mb-6 text-slate-300" key={link.name}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;

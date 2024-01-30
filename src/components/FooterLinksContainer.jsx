import FooterLinks from "./FooterLinks";
import { Product, Company, connect } from "../constants";

const FooterLinksContainer = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 text-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <img className="mb-6" src="/assets/logo.svg" alt="website logo" />

      <FooterLinks Links={Product} title="Product" />
      <FooterLinks Links={Company} title="Company" />
      <FooterLinks Links={connect} title="connect" />
    </div>
  );
};

export default FooterLinksContainer;

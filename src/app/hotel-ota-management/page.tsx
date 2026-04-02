import Banner2 from "./component/Banner2";
import { newPagedata } from "./newPageData";
import {
  ChooseUs,
  ContactCard,
  CountiesWeWorked,
  OtaAdd,
  Revenue,
  RevenueManagementServices,
} from "./component";
import OurClients from "./component/OurClients";

const page = () => {
  return (
    <main className="overflow-x-clip mt-22 border-t border-main-border">
      <Banner2 {...newPagedata.bannerData} />
      <Revenue {...newPagedata.revenue} />
      <RevenueManagementServices {...newPagedata.revenueManagementServices} />
      <ChooseUs {...newPagedata.chooseUs} />
      <ContactCard {...newPagedata.contactCard} />
      <CountiesWeWorked {...newPagedata.countriesWeWorkedWith} />
      <OurClients {...newPagedata.ourClients} />
      <OtaAdd {...newPagedata.otaAdd} />
    </main>
  );
};

export default page;

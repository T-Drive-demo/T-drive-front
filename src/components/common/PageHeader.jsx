import {
  ListIcons,
  InfoOutlinedIcons,
  AppsRoundedIcons,
} from "components/common/SvgIcons";
import { DataHeader } from "styles/common/pageHeader.style";

const PageHeader = ({ pageTitle }) => {
  return (
    <DataHeader>
      <div className="headerLeft">
        <p>{pageTitle}</p>
      </div>
      <div className="headerRight">
        {pageTitle === "My Drive" ? <ListIcons /> : <AppsRoundedIcons />}
        <InfoOutlinedIcons />
      </div>
    </DataHeader>
  );
};

export default PageHeader;

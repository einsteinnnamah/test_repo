import InputField from "components/InputFields";
import { FormProvider, useForm } from "react-hook-form";
import { ReactComponent as SearchIcon } from "../../assets/drawables/search.svg";
import "./style.scss";
const SearchComponent = ({ handleChange }) => {
  const methods = useForm();
  return (
    <div className="search_cover">
      <FormProvider {...methods}>
        <form>
          {" "}
          <InputField
            type="text"
            name="search"
            setvalue={handleChange}
            placeholder="Search currencies"
            id="search"
            required={false}
            iconPosition={"left"}
            iconPlaceholder={<SearchIcon />}
            errMsg="invalid  input"
          />{" "}
        </form>
      </FormProvider>
    </div>
  );
};

export default SearchComponent;

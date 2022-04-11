import InputErrorMsg from "./InputErrorMsg";
import "./style.scss";
import { Controller, useFormContext } from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
const ContrySelectFlag = ({
  id,
  name,
  errMsg,
  className,
  label,
  required = true,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [selected, setSelected] = useState("");
  return (
    <div className={`form-group ${className}`}>
      {label && <label htmlFor={id || name}>{label}</label>}

      <Controller
        control={control}
        name={name}
        rules={{ required: required ? errMsg : false }}
        render={({ field: { onChange, value, ref } }) => (
          <div className={`input-icon-wrap`}>
            <ReactFlagsSelect
              selected={selected}
              searchable
              onSelect={(code) => {
                setSelected(code);
                onChange(code);
              }}
              placeholder="Pick Language"
            />
          </div>
        )}
      />
      {errors[name] && <InputErrorMsg errMsg={errors[name].message} />}
    </div>
  );
};

export default ContrySelectFlag;

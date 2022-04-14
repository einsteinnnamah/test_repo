import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormLabel } from "@mui/material";
import InputErrorMsg from "./InputErrorMsg";
import "./style.scss";
export default function SelectField({
  name,
  errMsg,
  className,
  required = false,
  selectOption = [],
  label,
  isLoading,
  isDisabled,
  handleCustomChange,
  placeholder,
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl
      sx={{ m: "10px 0" }}
      className={`form-group select-group ${className}`}
    >
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        rules={{ required: required ? "This field is required" : false }}
        render={({ field: { onChange, value = "", ref } }) => (
          <Select
            className="select-mui"
            ref={ref}
            value={value || ""}
            onChange={(e) => {
              onChange(e.target.value);
              console.log(e.target.value);
              handleCustomChange && handleCustomChange(e.target.value);
            }}
            disabled={isLoading || isDisabled}
            displayEmpty
            error={errors[name]}
          >
            {placeholder && (
              <MenuItem className="menu-item placeholder" value={""}>
                {placeholder}
              </MenuItem>
            )}
            {selectOption.map((option, i) => {
              return (
                <MenuItem
                  key={`option-${i}`}
                  className="menu-item"
                  value={typeof option === "string" ? option : option.value}
                >
                  {typeof option === "string" ? option : option.label}
                </MenuItem>
              );
            })}
            {selectOption.length === 0 && (
              <MenuItem value={null} disabled className="center">
                No Options
              </MenuItem>
            )}
          </Select>
        )}
      />
      {errMsg && errors[name] && (
        <InputErrorMsg errMsg={errors[name].message || errMsg} />
      )}
    </FormControl>
  );
}

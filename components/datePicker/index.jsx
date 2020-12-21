import Picker from "rc-picker";
import { useState } from "react";
import moment from "moment";
import momentGenerateConfig from "./moment";
import enUS from "./enUS";

export default function Date() {
  const defaultValue = moment().subtract(5, "days").endOf("day");
  const [value, setValue] = useState(defaultValue);

  return (
    <Picker
      locale={enUS}
      value={value}
      onChange={(a) => setValue(a)}
      disabledDate={(date) => {
        return date && date > moment().subtract(1, "days").endOf("day");
      }}
      generateConfig={momentGenerateConfig}
    />
  );
}

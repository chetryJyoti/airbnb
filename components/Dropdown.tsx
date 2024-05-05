import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface CountryData {
  label: string;
  value: string;
}

interface Props {
  countryCode: CountryData[];
  onCountrySelected: (selectedValue: string) => void;
}

const DropdownComponent = ({ countryCode, onCountrySelected }: Props) => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Dropdown
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countryCode}
        maxHeight={height}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select region" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          onCountrySelected(item.value);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 20,
    marginBottom: 28,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

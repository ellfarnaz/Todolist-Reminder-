import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/styles";
import useColorScheme from "../../hooks/useColorScheme";

interface DateTimePickerProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const CustomDateTimePicker: React.FC<DateTimePickerProps> = ({
  date,
  onDateChange,
}) => {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(date);
  const colorScheme = useColorScheme();

  const showDatePicker = () => {
    setMode("date");
    setIsDateTimePickerVisible(true);
  };

  const showTimePicker = () => {
    setMode("time");
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || tempDate;
    if (mode === "date") {
      const newDate = new Date(tempDate);
      newDate.setFullYear(currentDate.getFullYear());
      newDate.setMonth(currentDate.getMonth());
      newDate.setDate(currentDate.getDate());
      setTempDate(newDate);
    } else if (mode === "time") {
      const newDate = new Date(tempDate);
      newDate.setHours(currentDate.getHours());
      newDate.setMinutes(currentDate.getMinutes());
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
      setTempDate(newDate);
    }
  };

  const handleDonePress = () => {
    onDateChange(tempDate);
    hideDateTimePicker();
  };

  const handleCancelPress = () => {
    setTempDate(date);
    hideDateTimePicker();
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <View>
      <View
        style={[
          styles.dateTimeButtonsContainer,
          colorScheme === "dark"
            ? styles.dateTimeButtonsContainerDark
            : styles.dateTimeButtonsContainerLight,
        ]}>
        <TouchableOpacity
          style={[
            styles.dateTimeButton,
            colorScheme === "dark"
              ? styles.dateTimeButtonDark
              : styles.dateTimeButtonLight,
          ]}
          onPress={showDatePicker}>
          <Text
            style={[
              styles.dateTimeButtonText,
              colorScheme === "dark"
                ? styles.dateTimeButtonTextDark
                : styles.dateTimeButtonTextLight,
            ]}>
            Set Date
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dateTimeButton,
            colorScheme === "dark"
              ? styles.dateTimeButtonDark
              : styles.dateTimeButtonLight,
          ]}
          onPress={showTimePicker}>
          <Text
            style={[
              styles.dateTimeButtonText,
              colorScheme === "dark"
                ? styles.dateTimeButtonTextDark
                : styles.dateTimeButtonTextLight,
            ]}>
            Set Time
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.selectedDateTime,
          colorScheme === "dark"
            ? styles.selectedDateTimeDark
            : styles.selectedDateTimeLight,
        ]}>
        Selected: {formatDate(date)}
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDateTimePickerVisible}
        onRequestClose={hideDateTimePicker}>
        <View
          style={[
            styles.dateTimePickerContainer,
            colorScheme === "dark"
              ? styles.dateTimePickerContainerDark
              : styles.dateTimePickerContainerLight,
          ]}>
          <View
            style={[
              styles.dateTimePickerContent,
              colorScheme === "dark"
                ? styles.dateTimePickerContentDark
                : styles.dateTimePickerContentLight,
            ]}>
            <DateTimePicker
              testID="dateTimePicker"
              value={tempDate}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={handleDateChange}
            />
            <View
              style={[
                styles.dateTimePickerButtonsContainer,
                colorScheme === "dark"
                  ? styles.dateTimePickerButtonsContainerDark
                  : styles.dateTimePickerButtonsContainerLight,
              ]}>
              <TouchableOpacity
                style={[
                  styles.dateTimePickerButton,
                  colorScheme === "dark"
                    ? styles.dateTimePickerButtonDark
                    : styles.dateTimePickerButtonLight,
                ]}
                onPress={handleCancelPress}>
                <Text
                  style={[
                    styles.dateTimePickerButtonText,
                    colorScheme === "dark"
                      ? styles.dateTimePickerButtonTextDark
                      : styles.dateTimePickerButtonTextLight,
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.dateTimePickerButton,
                  colorScheme === "dark"
                    ? styles.dateTimePickerButtonDark
                    : styles.dateTimePickerButtonLight,
                ]}
                onPress={handleDonePress}>
                <Text
                  style={[
                    styles.dateTimePickerButtonText,
                    colorScheme === "dark"
                      ? styles.dateTimePickerButtonTextDark
                      : styles.dateTimePickerButtonTextLight,
                  ]}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDateTimePicker;

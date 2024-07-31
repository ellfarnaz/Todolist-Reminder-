import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  containerLight: {
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  titleDark: {
    color: "#fff",
  },
  titleLight: {
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  inputContainerDark: {
    backgroundColor: "#1c1c1e",
  },
  inputContainerLight: {
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  inputDark: {
    backgroundColor: "#1c1c1e",
    borderColor: "#333",
    color: "#fff",
  },
  inputLight: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  addButtonDark: {
    backgroundColor: "#0077b6",
  },
  addButtonLight: {
    backgroundColor: "#007AFF",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  addButtonTextDark: {
    color: "#fff",
  },
  addButtonTextLight: {
    color: "#fff",
  },
  dateTimeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dateTimeButtonsContainerDark: {
    backgroundColor: "#1c1c1e",
  },
  dateTimeButtonsContainerLight: {
    backgroundColor: "#fff",
  },
  dateTimeButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  dateTimeButtonDark: {
    backgroundColor: "#0077b6",
  },
  dateTimeButtonLight: {
    backgroundColor: "#007AFF",
  },
  dateTimeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  dateTimeButtonTextDark: {
    color: "#fff",
  },
  dateTimeButtonTextLight: {
    color: "#fff",
  },
  selectedDateTime: {
    marginBottom: 10,
    fontSize: 16,
  },
  selectedDateTimeDark: {
    color: "#fff",
  },
  selectedDateTimeLight: {
    color: "#333",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskItemDark: {
    backgroundColor: "#1c1c1e",
    shadowColor: "#000",
  },
  taskItemLight: {
    backgroundColor: "#fff",
    shadowColor: "#000",
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 5,
  },
  taskTextDark: {
    color: "#fff",
  },
  taskTextLight: {
    color: "#333",
  },
  taskDate: {
    fontSize: 12,
  },
  taskDateDark: {
    color: "#ccc",
  },
  taskDateLight: {
    color: "#666",
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
  },
  editButtonDark: {
    backgroundColor: "#1c1c1e",
  },
  editButtonLight: {
    backgroundColor: "#fff",
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteButtonDark: {
    backgroundColor: "#1c1c1e",
  },
  deleteButtonLight: {
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredViewDark: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  centeredViewLight: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewDark: {
    backgroundColor: "#1c1c1e",
  },
  modalViewLight: {
    backgroundColor: "white",
  },
  modalInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 5,
  },
  modalInputDark: {
    backgroundColor: "#1c1c1e",
    borderColor: "#333",
    color: "#fff",
  },
  modalInputLight: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    color: "#333",
  },
  modalButton: {
    width: 200,
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  updateButtonDark: {
    backgroundColor: "#0077b6",
  },
  updateButtonLight: {
    backgroundColor: "#007AFF",
  },
  cancelButton: {
    backgroundColor: "#FF0000",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  cancelButtonDark: {
    backgroundColor: "#b22222",
  },
  cancelButtonLight: {
    backgroundColor: "#FF0000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleDark: {
    color: "#fff",
  },
  textStyleLight: {
    color: "#fff",
  },
  dateTimePickerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  dateTimePickerContainerDark: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  dateTimePickerContainerLight: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dateTimePickerContent: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  dateTimePickerContentDark: {
    backgroundColor: "#1c1c1e",
  },
  dateTimePickerContentLight: {
    backgroundColor: "white",
  },
  dateTimePickerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },
  dateTimePickerButtonsContainerDark: {
    backgroundColor: "#1c1c1e",
  },
  dateTimePickerButtonsContainerLight: {
    backgroundColor: "#fff",
  },
  dateTimePickerButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
  },
  dateTimePickerButtonDark: {
    backgroundColor: "#0077b6",
  },
  dateTimePickerButtonLight: {
    backgroundColor: "#007AFF",
  },
  dateTimePickerButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  dateTimePickerButtonTextDark: {
    color: "#fff",
  },
  dateTimePickerButtonTextLight: {
    color: "#fff",
  },
});

export default styles;

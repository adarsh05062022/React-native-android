import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function Navbar() {
 

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownButtonText, setDropdownButtonText] = useState("OPEN");
  dropdownLinks = ["Home", "Text Editor", "About"];

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
    if (dropdownButtonText === "OPEN") {
      setDropdownButtonText("CLOSE");
    } else {
      setDropdownButtonText("OPEN");
    }
  };

  const styles = StyleSheet.create({
    navbar: {
      height: 100,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight,
    },
    heading: {
      padding: 8,
      flex: 1,
    },

    title: {
      fontSize: 24,
      fontWeight: 500,
    },
    dropdown: {
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      paddingRight: 25,
      justifyContent: "center",
    },
    dropdownButton: {
      backgroundColor: "red",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 18,
    },
    dropdownButtonText: {
      fontSize: 18,
      color: "#fff",
    },
    modalContainer: {
      justifyContent: "center",
    },
    drodownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
    },
    dropdownItemText: {
      fontSize: 16,
    },
  });

  return (
    <View>
      <View style={styles.navbar}>
        <View style={styles.heading}>
          <Text style={styles.title}>Word Twist</Text>
        </View>
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => toogleDropdown() }
          >
            <Text style={styles.dropdownButtonText}>{dropdownButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isOpen ? (
        <View>
          <View style={styles.modalContainer}>
            {dropdownLinks.map((value, index) => (
              <TouchableOpacity key={index} style={styles.drodownItem}>
                <Text style={styles.dropdownItemText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}

import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Cli
 
} from "react-native";



import Clipboard from '@react-native-clipboard/clipboard';

export default function Textform() {
  const [text, setText] = useState("");

  const toUppercase = ()=>{
    setText(text.toUpperCase())
  }
  const toLowercase = ()=>{
    setText(text.toLowerCase())
  }
  const copyToClipBoard =  ()=>{
    Clipboard.setString(tea)
  }
  const handleClearInput =  ()=>{
    setText("");
  }
  const handleExtraSpaces =  ()=>{
    setText(text.split(" ").filter(Boolean).join(" "));
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    scrollContainer:{
        width: '100%',
        maxHeight: '100%',
    },
    topTextContainer: {
      padding: 10,
    },
    topText: {
      fontSize: 18,
    },
    textArea: {
      padding: 8,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    textAreaInputField: {
      fontSize: 18,
      height: 170,
    },
    functionButtonContainer: {
      padding: 15,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonWrapper: {
      paddingHorizontal:2 ,
      paddingVertical:5
    },
    functionButton: {
      paddingHorizontal: 15,
      paddingVertical: 12,
      backgroundColor: "red",
      borderRadius: 10,
    },
    functionButtonText: {
      fontSize: 15,
      color: "#fff",
    },
    summaryContainer:{
       padding:10
    },
    summaryHeading:{
       fontSize:24,
       fontWeight:500
    },
    summary:{
      fontSize:18
    }
  });
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.topTextContainer}>
        <Text style={styles.topText}>Enter yout text to analyze</Text>
      </View>
      <View style={styles.textArea}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          <TextInput
            style={styles.textAreaInputField}
            onChangeText={(value) => setText(value)}
            multiline={true}
            placeholder="Enter your text here..."
            value={text}
          />
        </ScrollView>
      </View>
      <View style={styles.functionButtonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.functionButton}
          onPress={toUppercase}>
            <Text style={styles.functionButtonText}>TO UPPERCASE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.functionButton}
          onPress={toLowercase}
          >
            <Text style={styles.functionButtonText}>TO LOWERCASE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.functionButton}
          onPress={copyToClipBoard}
          >
            <Text style={styles.functionButtonText}>COPY TO CLIPBOARD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.functionButton}
          onPress={handleExtraSpaces}
          >
            <Text style={styles.functionButtonText}>REMOVE EXTRA SPACE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.functionButton}
          onPress={handleClearInput}
          >
            <Text style={styles.functionButtonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryHeading}>Text Summary :-</Text>
        <Text style={styles.summary}>{text.trim().split(/\s+/).filter(Boolean).length} Words {text.trim().length} Character</Text>
      </View>
        </ScrollView>
      
    </View>
  );
}

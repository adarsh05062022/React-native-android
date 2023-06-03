import React from "react";
import { View } from "react-native";
import Navbar from "./Navbar";
import Textform from "./Textform";


export default function Home(){

    return(
        <View>
            <Navbar/>
            <Textform/>
        </View>
    )
}
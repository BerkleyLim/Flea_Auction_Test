import { StyleSheet, Text, View } from "react-native";


// CSS 꾸미기
const styles = StyleSheet.create({
  headerStyle : {
    backgroundColor: "#28D6C5",
    border: 1,
    borderStyle: "solid",
    width:'100%',
    height:75
  },
  headerText : {
    fontStyle: "italic",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign:'center',
    fontSize:50,
    justifyContent:'center',
  },
})


const Header = () => {
  return(
    <View style={styles?.headerStyle}>
      <Text style={styles?.headerText}>Flea Auction</Text>
    </View>
  )
}

export default Header;
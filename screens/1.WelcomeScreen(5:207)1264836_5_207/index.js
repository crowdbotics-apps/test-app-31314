import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c1/cba6/530fd264863d7c35a47d9aae264f77da"
        }}
        style={styles.ImageBackground_5_285}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d918/53c9/2637c06b1b08d3fa632457fc74e3d40d"
        }}
        style={styles.ImageBackground_5_284}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed6/7da8/69cd1a002c0586e8200b30d4e0220ca2"
        }}
        style={styles.ImageBackground_5_279}
      />
      <View style={styles.View_5_219}>
        <Text style={styles.Text_5_219}>BLSH DELIVERY logo</Text>
      </View>
      <View style={styles.View_5_220}>
        <Text style={styles.Text_5_220}>You are a:</Text>
      </View>
      <View style={styles.View_5_221}>
        <Text style={styles.Text_5_221}>Or</Text>
      </View>
      <View style={styles.View_5_222} />
      <View style={styles.View_5_223} />
      <View style={styles.View_5_224} />
      <View style={styles.View_5_225} />
      <View style={styles.View_5_226}>
        <Text style={styles.Text_5_226}>Individual Shopper</Text>
      </View>
      <View style={styles.View_5_227}>
        <Text style={styles.Text_5_227}>Courier</Text>
      </View>
      <View style={styles.View_5_228}>
        <Text style={styles.Text_5_228}>Business</Text>
      </View>
      <View style={styles.View_5_229}>
        <Text style={styles.Text_5_229}>Enter as a guest</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b7e/9c9d/790725f08f930c565e95fd19389f6389"
        }}
        style={styles.ImageBackground_5_208}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_5_285: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("-6%")
  },
  ImageBackground_5_284: {
    width: wp("118%"),
    minWidth: wp("118%"),
    height: hp("112%"),
    minHeight: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    top: hp("4%")
  },
  ImageBackground_5_279: {
    width: wp("154%"),
    minWidth: wp("154%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-35%"),
    top: hp("39%")
  },
  View_5_219: {
    width: wp("31%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_5_219: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_220: {
    width: wp("18%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_5_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_221: {
    width: wp("5%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    justifyContent: "flex-start"
  },
  Text_5_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_222: {
    width: wp("68%"),
    height: hp("7%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_223: {
    width: wp("68%"),
    height: hp("7%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_224: {
    width: wp("68%"),
    height: hp("7%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_225: {
    width: wp("68%"),
    height: hp("7%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(35, 31, 32, 1)"
  },
  View_5_226: {
    width: wp("37%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_5_226: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_227: {
    width: wp("14%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    justifyContent: "flex-start"
  },
  Text_5_227: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_228: {
    width: wp("18%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_5_228: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_229: {
    width: wp("32%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_5_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_208: {
    width: wp("87%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

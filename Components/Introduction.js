import {
	StyleSheet,
	View,
	Text,
	Image,
	Platform,
	Linking,
	TouchableOpacity,
	useWindowDimensions,
} from "react-native";
import {
	FontAwesome,
	Foundation ,
	AntDesign,
} from "@expo/vector-icons";
import logo from "../Components/Image/LogoNewWhite.png";


 function Introduction() {
	const { width } = useWindowDimensions();
	const widthBreakpoint = 750;

	return (
		<View
			style={[
				{
					flexDirection:
						Platform.OS == "web"
							? width > widthBreakpoint
								? "row"
								: "column"
							: "column",
				},
				styles.container,
			]}
		>
			<View style={styles.logoWrap}>
				<Image source={logo} style={styles.socialImage} />
			</View>
			<View style={styles.textWrap}>
				<Text style={styles.pageText}> HIWOT BESHE</Text>
				<Text style={styles.timeText}>Front-end Developer</Text>
				<View style={styles.textWrap}>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("mailto: beshehiwot@gmail.com");
						}}
					>
						<Text style={styles.timeText}>
							<AntDesign name="mail" size={10} color="#2F78C2" />
							{` `} beshehiwot@gmail.com
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://www.linkedin.com/in/hiwot-beshe");
						}}
					>
						<Text style={styles.timeText}>
							<Foundation name="social-linkedin" size={16} color="#2F78C2" />
							{` `} hiwot-beshe
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://github.com/Hiwot-Beshe");
						}}
					>
						<Text style={styles.timeText}>
							<FontAwesome name="github" size={14} color="#2F78C2" />
							{` `} Hiwot-Beshe
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		marginLeft: "8%",
		marginRight: "8%",
		backgroundColor: "#C99663",
	},
	logoWrap: {
		margin: 5,
	},
	textWrap: {
		margin: "5%",
	},
	pageText: {
		fontSize: 30,
		fontStyle: "normal",
		color: "#000000",
		fontWeight: "700",
	},
	socialImage: {
		height: 200,
		width: 200,
		marginRight: "2%",
	},
	timeText: {
		color: "#DFDFE8",
		fontSize: 14,
		fontWeight: "400",
		padding: 1,
	},
});
export default Introduction;
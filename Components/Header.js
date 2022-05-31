import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	Platform,
	StatusBar,
} from "react-native";
import logo from "../Components/Image/LogoNewWhite.png";
function Header({ setPage }) {
	return (
		<View style={styles.container}>
			<View style={styles.textLogo}>
				<TouchableOpacity onPress={() => setPage("Home")}>
					<Image name="Home" source={logo} style={styles.logo} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity>
				<View style={styles.textWrap}>
					<Text
						name="about"
						onPress={() => setPage("About")}
						style={styles.text}
					>
						About
					</Text>
					<Text name="Work" onPress={() => setPage("Work")} style={styles.text}>
						Work
					</Text>
					<Text
						name="Resume"
						onPress={() => setPage("Resume")}
						style={styles.text}
					>
						Resume
					</Text>
					<Text
						name="Contact"
						onPress={() => setPage("Contact")}
						style={styles.text}
					>
						Contact
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		padding: 5,
		marginTop: StatusBar.currentHeight,
	},
	textLogo: {
		flexDirection: "row",
		justifyContent: Platform.OS == "web" ? "flex-start" : null,
		marginLeft: Platform.OS == "web" ? "2%" : "1%",
		marginRight: Platform.OS == "web" ? "25%" : "5%",
		color: "#FFF",
	},
	textWrap: {
		flexDirection: "row",
		justifyContent: Platform.OS == "web" ? "space-between" : "space-evenly",
		color: "#2F78C2",
	},
	text: {
		fontSize: 20,
		marginRight: " 7%",
		color: "#FFF",
		fontWeight: "400",
	},
	logo: {
		resizeMode: "cover",
		width: Platform.OS == "web" ? 40 : 40,
		height: Platform.OS == "web" ? 40 : 30,
	},
});

export default Header;

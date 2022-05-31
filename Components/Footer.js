
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
function Footer() {

	return (
		<View style={styles.container}>
			<TouchableHighlight>
				<View style={styles.textWrap}>
					<FontAwesome
						name="copyright"
						size={24}
						color="black"
						style={styles.text}
					/>
					<Text style={styles.text}>2022</Text>
					<Text style={styles.text}>Hiwot Beshe</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		backgroundColor: " #E5E5E5",
	},
	textWrap: {
		backgroundColor: " #E5E5E5",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
		margin: 5,
		color: "#2F78C2",
	},
	text: {
		fontSize: 20,
		margin: 2,
		color: "#2F78C2",
		fontWeight:'400',
	},
});

export default Footer;

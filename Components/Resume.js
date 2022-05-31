import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import Introduction from "./Introduction";
import Education from "./Education";
import Experiences from "./Experiences";

export default function Resume() {

	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	return (
		<View >
			<Introduction />
			<Education />
			<Experiences/>
			
		</View>
	);
}
const styles = StyleSheet.create({
	cent: {
		textAlign: "center",
		backgroundColor: "#1a1a1a",
	},
	
});

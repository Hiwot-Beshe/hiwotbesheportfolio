import { StyleSheet,Text, Linking,View, useWindowDimensions, Platform, TouchableOpacity, Pressable } from "react-native";
import {  Image,Button, Icon } from "react-native-elements";
import Haunted from "../Components/Image/image/huanted.png";
import Decider from "../Components/Image/image/decidr-1.png";
import movie from "../Components/Image/image/trivia-and-chill.png";

export default function Work() {

	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 700;

	return (
		<View style={styles.cardWrap}>
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
				<Image source={Haunted} resizeMode="cover" style={styles.Image} />
				<View style={styles.textWrap}>
					<Text style={styles.pageText}>THE HAUNTED HOUSE GAME</Text>
					<Text>Role: Front-end development (group project)</Text>
					<Text style={styles.detailText}>
						The haunted house is an interactive game using React. During
						trick-or-treating, the players are trapped inside a haunted house.
						In order to escape from the haunted house, you must explore every
						room and do the challenges to find the silver key.
					</Text>
					<Button
						onPress={() => {
							Linking.openURL("http://luceroweb.github.io/haunted-house-game/");
						}}
						style={styles.btn}
						title="VIEW NOW"
					/>
				</View>
			</View>
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
				<Image source={movie} resizeMode="cover" style={styles.movieImage} />
				<View style={styles.textWrap}>
					<Text style={styles.pageText}>TRIVIA-and-CHILL</Text>
					<Text>Role: Front-end development and Lead (group project)</Text>
					<Text style={styles.detailText}>
						Trivia and chill is an interactive game built using React Native.
						Movie Database API is used to create a collaborative game in which
						the player is required to guess the correct answer from a list of
						possible answers based on information about the movie.Your guess
						will be confirmed once you click on the answer. An incorrect guess
						will result in the badge being cleared and the game reset.
					</Text>
					<Button
						onPress={() => {
							Linking.openURL("https://luceroweb.github.io/trivia-and-chill");
						}}
						style={styles.btn}
						title="VIEW NOW"
					/>
				</View>
			</View>
			
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
				<Image source={Decider} resizeMode="cover" style={styles.Image} />
				<View style={styles.textWrap}>
					<Text style={styles.pageText}>DECIDR</Text>
					<Text>Role: Front-end development (individual project)</Text>
					<Text style={styles.detailText}>
						The Decider application was developed using the React framework. The
						purpose of an application such as this one is to assist users in
						making selections from an arbitrary list of options. Users are free
						to add or remove options from the list as needed. After the user has
						completed their selection, a random option will be selected.
					</Text>
					<Button
						onPress={() => {
							Linking.openURL("http://Hiwot-Beshe.github.io/decidr/");
						}}
						style={styles.btn}
						title="VIEW NOW"
					/>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	cardWrap: {
		flex:1,
		marginLeft: Platform.OS == "web" ? "5%" : null,
		marginRight: Platform.OS == "web" ? "5%" : null,
	},
	container: {
		alignContent: "center",
	
	},
	Image: {
		width: 340,
		height: 301,
		borderRadius: 10,
		margin: "4%",
	},
	movieImage: {
		width: 340,
		height: 310,
		borderRadius: 10,
		margin: "4%",
	},
	pageText: {
		fontSize: 25,
		fontStyle: "normal",
		color: "#C99663",
		fontWeight: "700",
	},
	textWrap: {
		margin: "1%",
	},
	detailText: {
		flexShrink: 5,
		width: Platform.OS == "web" ? "20%" : "100%",
		flexWrap: "wrap",
		fontSize: 14,
		fontWeight: "400",
	},
	btn: {
		width: 200,
		height: 30,
		borderRadius: 10,
		margin: "3%",
		marginRight: 10,
		backgroundColor: "#C99663",
	},
});

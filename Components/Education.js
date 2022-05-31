import {
	StyleSheet,
	View,
	useWindowDimensions,
    ScrollView,
    Text,
    Platform,
} from "react-native";

function Education() {
	
	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	return (
        <ScrollView>
            <View style={[{ flexDirection: Platform.OS == "web" ? (width > widthBreakpoint ? "row" : "column") : "column" }, styles.container]}>
					<View>
						<Text style={styles.title}>Education</Text>
						<Text style={styles.expOneText}>Addis Ababa University</Text>
						<Text style={styles.expOneTex}>
							{""}Addis Ababa, Ethiopia.2004-2009,
						</Text>
						<Text style={styles.expOneTexCourse}>
							{""}Construction Technology and Management
                    </Text>
                    <Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>
								Completed courses in Civil Engineering, Architectural Design,
								and Construction Management.
							</Text>
                    </Text>
                    <Text style={styles.expOneText}>College of Southern Nevada</Text>
						<Text style={styles.expOneTex}>Las Vegas, Nevada.2015-2018,</Text>
						<Text style={styles.expOneTexCourse}>
							Computer and Information Technology with Software emphasizes.
						</Text>
						<Text style={styles.expOneText}>Geekwise Academy</Text>
						<Text style={styles.expOneTex}>Jan 2021-Apr 2021</Text>
						<Text style={styles.expOneTexCourse}>
							Online Completed classes in Javascript / React.
						</Text>
					</View>
					<View>
                    <Text style={styles.title}>Skill</Text>
                    <Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>JavaScript</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>HTML5/CSS3</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>Bootstrap, jQuery</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>React/ReactNative</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>Node JS/NPM</Text>
                    </Text>
                    <Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>MySQL /Rest API</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>Git, Visual Studio</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>Scrum, and Agile</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>
								G-Suite, Microsoft office suite
							</Text>
						</Text>
						<Text style={styles.bullet}>
							{"\u2022"}
							<Text style={styles.bulletText}>Presentation, Spreadsheet</Text>
						</Text>
					</View>
				</View>
			
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#DFDFE8",
		alignItems: "center",
		alignSelf: "center",
		margin: "4%",
	},
	title: {
		color: "#C99663",
		fontWeight: "700",
		fontSize: 40,
		padding: 5,
		margin: "2%",
	},

	expOneText: {
		color: "#C99663",
		fontWeight: "700",
		fontSize: 25,
		padding: 5,
	},
	expOneTex: {
		color: "#1a1a1a",
		fontWeight: "600",
		fontSize: 13,
		padding: 5,
		margin: 5,
	},
	expOneTexCourse: {
		color: "#1a1a1a",
		fontWeight: "400",
		fontSize: 15,
		padding: 5,
		margin: 5,
	},
	item: {
		padding: 10,
		fontSize: 15,
		color: "#1a1a1a",
	},
	bullet: {
		color: "#C99663",
		fontWeight: "400",
		alignItems: "center",
		fontSize: 30,
		margin: 2,
		paddingHorizontal: 5,
	},
	bulletText: {
		color: "#1a1a1a",
		fontWeight: "400",
		width: "80%",
		margin: 2,
		marginLeft: 5,
		fontSize: 15,
		alignItems: "center",
		textAlign: "center",
		paddingLeft: 5,
	},
});
export default Education;

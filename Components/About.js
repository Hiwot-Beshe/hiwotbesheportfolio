import {
	StyleSheet,
	View,
	Text,
	Image,
	Platform,
	useWindowDimensions,
} from "react-native";
import logo from "../Components/Image/Logo5.png";

export default function About() {
	const { width } = useWindowDimensions();
	const widthBreakpoint = 750;

	return (
		<View style={styles.container}>
			<View
				style={[
					{
						"flexDirection":
							Platform.OS == "web"
								? (width > widthBreakpoint
									? "row"
									: "column")
								: "column"
					},
					styles.container,
				]}
			>
				<View style={styles.logoWrap}>
					<Image source={logo} style={styles.socialImage} />
				</View>
				<View style={styles.textWrap}>
					<View>
						<Text style={styles.timeText}>Hello again!</Text>
						<Text style={styles.pageText}>I am HIWOT BESHE</Text>
						<Text style={styles.timeText}>Front-end Developer</Text>
					</View>
					<View style={[
					{
						"width":
							Platform.OS == "web"
								? (width > widthBreakpoint
									? "50%"
									: "100%")
								: null
					},
				styles.textI,
				]}>
						<Text >
							My biggest assets are first and foremost my commitment to
							providing a professional service to all my colleagues and clients.
							A second quality is my ability to establish and maintain a close
							working relationship with every client, which helps me gain a deep
							understanding of their needs. As a web developer, in general, I
							have a genuine passion for spotting trends and developing best
							practices.
						</Text>
						<Text  >
						<Text style={styles.timeText}
						>
							A skilled front-end web developer
						</Text>
						: is adept at using new methodologies and technical developments to
						drive improvements throughout the entire development lifecycle. I
						have extensive industry experience with web-based environments as
						well as exceptional analytical and problem-solving skills.
						</Text>
						<Text>
						<Text style={styles.timeText}>
							My attention to detail and passion
						</Text>
						: for organization make me uniquely qualified To successfully
						complete a project. I devote my time, effort, and resources to
						accomplishing tasks on time. In my family, we value honesty,
						integrity, diligence, loyalty, teamwork, hard work, and commitment.
					</Text>
						
					</View>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: "1%",
		// justifyContent: "space-evenly",
	},
	logoWrap: {
		margin: 5,
		
	},
	textWrap: {
		margin: "1%",
		width: "100%",
		
	},
	textI: {
		alignItems: "center",
		margin:"5%",
		fontWeight: "400",
		fontSize: 25,
	},
	pageText: {
		fontSize: 30,
		fontStyle: "normal",
		color: "#ffffff",
		fontWeight: "700",
	},
	socialImage: {
		height: 200,
		width: 400,
		marginRight: "2%",
	},
	timeText: {
		color: "#C99663",
		fontSize: 20,
		fontWeight: "500",
	},
});


import {
	StyleSheet,
	View,
	Text,
	Image,
	Platform,
	TouchableOpacity,
	Linking,
	useWindowDimensions,
} from "react-native";
import profile from "../Components/Image/profile.png"
import love from "../Components/Image/😍.png";
import emoji from "../Components/Image/😭.png";
import {
	FontAwesome,
AntDesign
	
} from "@expo/vector-icons";

export default function Home() {
	const { width} = useWindowDimensions();
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
							: "column-reverse",
				},
				styles.container,
			]}
		>
			<View style={styles.textWrap}>
				<Text style={styles.pageText}>
					<Text style={styles.helloText}>Hello!</Text>
					<Text>
						I am<Text style={styles.nameText}> HIWI.</Text>{" "}
					</Text>
				</Text>
				<Text style={styles.nameText}>Front-end Developer</Text>
				<Text>{`
				`}</Text>
				<Text style={styles.describeText}>
					{`“Cultivating relationships to gain a deeper understanding for client
and user needs.”`}
				</Text>
				<Text>{`
				`}</Text>
				<Text style={styles.baseText}>--Based in Oakland, California</Text>
				<Text>{`
				`}</Text>
				<View style={styles.frontIconEmail}>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("mailto: beshehiwot@gmail.com");
						}}
					>
						<AntDesign name="mail" size={24} color="#2F78C2" />
					
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://www.linkedin.com/in/hiwot-beshe");
						}}
					>
						<FontAwesome name="linkedin-square" size={24} color="#2F78C2" />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://github.com/Hiwot-Beshe");
						}}
					>
						<FontAwesome name="github" size={24} color="#2F78C2" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.profileImageWrap}>
				<Image source={profile} style={styles.profileImage} />
				<View style={styles.socialWrap}>
					<View style={styles.icon}>
						<View style={styles.frontIcon}>
							<FontAwesome name="heart" size={20} color="#999999" />
							<FontAwesome name="comment" size={20} color="#999999" />
							<FontAwesome name="send" size={14} color="#999999" />
						</View>
						<View style={styles.bookmark}>
							<FontAwesome name="bookmark-o" size={16} color="black" />
						</View>
					</View>
					<Text style={styles.likes}>100 Likes</Text>
					<Text>Front-end Developer</Text>
					<View style={styles.commentWrap}>
						<Image source={profile} style={styles.socialImage} />
						<Text style={styles.commentText}>Add comment ...</Text>
						<Image source={love} style={styles.emojiImage} />
						<Image source={emoji} style={styles.emojiImage} />
					</View>
					<Text style={styles.timeText}>10 minutes ago</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		margin: "1%",
	},
	textWrap: {
		margin: 5,
	},
	profileImageWrap: {
		backgroundColor: "#DFDFE8",
	},
	profileImage: {
		width: 340,
		height: 301,
		borderRadius: 10,
		margin: "4%",
	},
	baseText: {
		fontSize: 20,
		fontStyle: "italic",
		color: "#C99663",
		fontWeight: "400",
	},
	describeText: {
		fontSize: 20,
		fontStyle: "normal",
		color: "#000000",
		fontWeight: "400",
	},
	helloText: {
		fontSize: 40,
		fontStyle: "normal",
		color: "#C99663",
		paddingRight: 10,
		fontWeight: "600",
	},
	nameText: {
		fontSize: 40,
		fontStyle: "normal",
		paddingRight: 10,
		fontWeight: "bold",
	},
	pageText: {
		fontSize: 20,
		fontStyle: "normal",
		color: "#000000",
		fontWeight: "400",
	},
	icon: {
		flexDirection: "row",
		alignItems: "baseline",
		margin: 5,
	},
	frontIcon: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginRight: 260,
		gap: 5,
	},
	bookmark: {
		justifyContent: "flex-end",
	},
	likes: {
		fontSize: 14,
		fontStyle: "normal",
		paddingRight: 10,
		fontWeight: "bold",
	},
	socialWrap: {
		margin: 10,
	},

	socialImage: {
		height: 20,
		width: 30,
		borderRadius: 1000,
		marginRight: "2%",
	},
	frontIconEmail: {
		flexDirection: "row",
		margin: 10,
		gap: 10,
	},
	commentWrap: {
		flexDirection: "row",
		marginRight: "5%",
	},
	commentText: {
		borderColor: "#999999",
		color: "#999999",
		borderWidth: Platform.OS == "web" ? 1 : 0.5,
		height: 15,
		width: 200,
		fontSize: 12,
		marginRight: "2%",
	},
	emojiImage: {
		height: 15,
		width: 10,
		marginRight: "5%",
	},
	timeText: {
		color: "#999999",
		fontSize: 12,
	},
});

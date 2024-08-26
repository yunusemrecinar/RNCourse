import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return <View style={styles.card}>{children}</View>
} 

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // android shadow
        shadowColor: 'black', // ios shadow
        shadowOffset: { width: 0, height: 2 }, // ios shadow
        shadowRadius: 6, // ios shadow
        shadowOpacity: 0.25 // ios shadow
    },
});
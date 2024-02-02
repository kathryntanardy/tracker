import { View, Text, StyleSheet } from 'react-native'

export default function WelcomeHeader(){
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Checker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FB7DAB',
        flex: 0.15,
    },  
    text: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center', 
        marginVertical: 20,
    }
})
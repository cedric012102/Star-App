import { StyleSheet } from 'react-native';

const styles = ({
    container: {
        marginTop: 300,
        marginHorizontal: 12,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
    },
    link: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 15,
    },
    headerContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 35,
    },
    bottomImage: {
        top: 50,
        bottom: 0,
        width: '100%',
        height: 250,
    },
     heartIcon: {
         marginLeft: 15,
     },
});

export default styles;
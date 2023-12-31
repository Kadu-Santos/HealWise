export const styles = {
    title: {
        color: '#FFFFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 5,
    },

    section: {
        width: '83%',
        height: '100%',
        alignItems: 'center',
    },

    sectionTitle: {
        backgroundColor: '#008FFF',
        paddingLeft: 50,
        width: '100%',
        height: 50,
        flex: 0,
        borderColor: '#008FFF',
    },

    body: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'row', 
        height: '100%'
    },

    ///////////////////////////////////////
    button: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 8,
      elevation: 2,
      marginTop: 30,
      width: 250,
    },
    
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
    },

    inputLabel: {
      borderRadius: 5,
      fontSize: 17,
      width: 300,
      height: 40,
      margin: 10,
      fontWeight: '600',
      borderColor: 'black',
      paddingTop: 5,
      paddingLeft: 10,
      color: 'black',
    },

    sectionInput:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },

    sectionText:{
      width: 100,
      fontWeight: '600',
      color: 'black',
      marginLeft: 5, 
      textAlign: 'right'
    },

    sectionTextRadio:{
      width: 100,
      fontWeight: '600',
      color: 'black',
      marginLeft: 5, 
      textAlign: 'left'
    },

    groupData: {
      borderColor: 'black',
      borderRadius: 5,
      margin: 5,
      marginBotton: 0,
      padding: 10,
      width: 500,
      height: 500,
    },

    butt: {
      alignItems: 'center',
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      width: 150,
    },
    buttText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },

    require: {
      color: "red",
      fontSize: 25,
      fontWeight: 'bold',
    },
} as const;
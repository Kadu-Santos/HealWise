export const styles = {
    container: {
      backgroundColor: '#E1E4EB',
      paddingHorizontal: 20,
      width: '17%',
      height: '100%',
      borderRightWidth: 0.5,
      borderColor: '#8F9494' 
    },

    logoContainer: {
      alignItems: 'center',
      marginBottom: 50,
      marginTop: 30,
    },

    logo: {
      width: 130,
      height: 130,
    },

    logoText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#000000',
    },
    
    item: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: 'black',
    },
    
  section:{
        color: '#008FFF',
        paddingBottom: 2,
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5,
    },

  itemText: {
      fontSize: 14,
      color: '#000000',
      marginLeft: 20,
      padding: 7,
  },

  touch: {
    padding: 2, 
    borderRadius: 5,
  }
} as const;
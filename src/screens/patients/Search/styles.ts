export const styles = {
    title: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 5,
    },

    section: {
        alignItems: 'center',
        width: '83%',
    },

    sectionTitle: {
        backgroundColor: '#008FFF',
        alignItems: 'center',
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

    logoError:{
        width: 500,
        height: 500,
        marginTop: '10%',
    },

    sectionHeader: {
        alignItems: 'center',
        flexDirection: 'row', 
        marginTop: 5,
        width: '98%',
        height: 45,
        borderColor: '#000',
    },

    textBox: {
        borderLeftWidth: 1,
        borderColor: '#8F9494',
        alignItems: 'center',
        //paddingLeft: 25
    },

    textHeader:{
        color: '#000000',
        fontSize: 16,
    },

    line: {
        borderBottomWidth: 2,
        width: '98.4%',
        borderColor: '#8F9494',
        borderRadius: 10,
    },

    patientItemBox: {
        width: '98%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 13,
        borderColor: '#8F9494',
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
    },

    ItemBox: {
        alignItems: 'center',
    },

    textItem: {
        color: '#000000',
        fontSize: 15,
    },

    button: {
        width: 20,
        height: 20,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        alignItems: 'center',
        paddingTop: 2,
        margin: 2
    },
      image: {
        resizeMode: 'contain', // Para ajustar a imagem ao tamanho do botão
      },

} as const;
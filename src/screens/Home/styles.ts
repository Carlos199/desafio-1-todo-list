import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0D0D0D'
   
  },
  logo: {
    alignSelf:'center',
    width: 110,
    height: 32,
    marginTop: 70,
     marginBottom: 71
  },
  task:{
    flex: 1,
   paddingTop: 55,
    backgroundColor:  '#454545',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoTitle: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    lineHeight: 17,
    color: '#4EA8DE'
  },
  emptyTitle:{
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    lineHeight: 17,
    color: '#8284FA'
  },
  form: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    marginTop: '40%',
    paddingHorizontal: 24,
    zIndex: 1
    
  },
  input: {
    flex:1,
    height: 54,
    borderRadius: 5,
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    backgroundColor: '#262626',
    zIndex: 1,
  },
  button :{
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
});
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  line:{
    width: '100%',
    height: 1.5,
    backgroundColor: '#333333'
  },
  clipboard:{
    marginTop: 48,
    width: 56,
    height: 56,
    marginBottom: 16
  },
  title:{
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#808080',
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#808080'
  }
});
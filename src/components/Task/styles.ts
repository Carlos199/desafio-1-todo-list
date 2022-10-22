import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 12,
    marginBottom: 8
  },
  description: {
    flex: 1,
    fontFamily:'Inter_400Regular',
    fontSize: 14,
    marginLeft: 8,
    color: '#F2F2F2',
  },
  button :{
    width: 32,
    height: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  check:{
    width: 14,
    height: 14,
  },
  trash:{
    width: 12,
    height: 14,
    resizeMode:'contain'
  }
  
});
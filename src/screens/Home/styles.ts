import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D'
  },
  logo: {
    alignSelf:'center',
    width: 110,
    height: 32,
    marginTop: 70,
    marginBottom: 30
  },
  task:{
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
  }
});
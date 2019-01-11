import { StyleSheet } from 'react-native';

export const Colors = [
  '#fcfff6', //Background Color (62%)
  '#F4FAD2', //Light Green (20%)
  '#D4EE5E', //Vivid Green (8%)
  '#E1EDB9', //Cloudy Green (5%)
  '#FF4242' //Red Point Color (5%)
];

export const Styles = StyleSheet.create({
  'container--ccc': {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  'container--rcc': {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  },
  'bg-0': {
    backgroundColor: Colors[0]
  },
  'bg-1': {
    backgroundColor: Colors[1]
  },
  'bg-2': {
    backgroundColor: Colors[2]
  },
  'bg-3': {
    backgroundColor: Colors[3]
  },
  'bg-4': {
    backgroundColor: Colors[4]
  },
  'color-black': {
    color: '#444'
  },
  'color-white': {
    color: '#fff'
  },
  'color-green': {
    color: Colors[2]
  },
  'color-red': {
    color: Colors[4]
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 60
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 48
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 38
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 30
  },
  h5: {
    fontWeight: 'bold',
    fontSize: 24
  },
  h6: {
    fontWeight: 'bold',
    fontSize: 18
  },
  'ti--default': {
    fontSize: 24,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    padding: 10,
    margin: 10
  }
});

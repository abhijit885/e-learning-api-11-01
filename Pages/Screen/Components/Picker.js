// import React from 'react';
// import {View,Picker} from 'react-native' ;

//  const PickerClass  = ({ navigation }) => {
//     const [selectLabel, setSelectLabel] = React.useState('')

//     // constructor() {
//     //     super();
//     //    this.state={selectLabel:''};
//     // }

//         Show=(value)=>
//         {
//             // alert(value);
//             setSelectLabel({selectLabel:value});
//         }

//         return(
//             <View style={{borderRadius:5,borderColor:"#131313",borderWidth:.5,color:"#131313",marginVertical:10,marginHorizontal:10}}>
//                 <Picker 
//                     selectedValue={selectLabel}
//                     onValueChange={Show.bind()}
//                 >
//                     {/* <Picker.Item label="react" value="1000" color=""></Picker.Item> */}
//                     <Picker.Item label="java" value="2000"></Picker.Item>
//                     <Picker.Item label="node" value="5000"></Picker.Item>
//                     <Picker.Item label="mongo db" value="6000"></Picker.Item>

//                 </Picker>
//             </View>
//         );
// };
// export default PickerClass;


//CLASS


import React,{Component} from 'react';
import {View,Picker} from 'react-native' ;

export default class PickerClass extends Component 
{
    constructor() {
        super();
       this.state={selectLabel:''};
    }

        Show=(value)=>
        {
            // alert(value);
            this.setState({selectLabel:value});
        }

    render()
    {
        return(
            <View style={{borderRadius:5,borderColor:"#131313",borderWidth:.5,color:"#131313",marginVertical:10,marginHorizontal:10}}>
                <Picker 
                    selectedValue={this.state.selectLabel}
                    onValueChange={this.Show.bind()}
                >
                    <Picker.Item label="react" value="1000" color=""></Picker.Item>
                    <Picker.Item label="java" value="2000"></Picker.Item>
                    <Picker.Item label="node" value="5000"></Picker.Item>
                    <Picker.Item label="mongo db" value="6000"></Picker.Item>

                </Picker>
            </View>
        );

    }
}


//FUNCTION

// import React from 'react';
// import { View, Picker } from 'react-native';

// const PickerClass = ({ navigation }) => {
//     const [selectLabel, setSelectLabel] = React.useState('')
    


//         Show = (value) => {
//             // alert(value);
//             setSelectLabel({ selectLabel: value });
//         }


//         return (
//             <View style={{ borderRadius: 5, borderColor: "#131313", borderWidth: .5, color: "#131313", marginVertical: 10, marginHorizontal: 10 }}>
//                 <Picker
//                     selectedValue={selectLabel}
//                     onValueChange={Show.bind()}
//                 >
//                     <Picker.Item label="react" value="1000" color=""></Picker.Item>
//                     <Picker.Item label="java" value="2000"></Picker.Item>
//                     <Picker.Item label="node" value="5000"></Picker.Item>
//                     <Picker.Item label="mongo db" value="6000"></Picker.Item>

//                 </Picker>
//             </View>
//         );

//     };

//     export default PickerClass;




//          NPM-------------react-native-country-picker-modal
// import React, { useState } from 'react'
// import { View, Text, StyleSheet, PixelRatio, Switch } from 'react-native'
// import CountryPicker from 'react-native-country-picker-modal'
// import { CountryCode, Country } from './src/types'

// const styles = StyleSheet.create({
//   // ...
// })

// export default function App() {
//   const [countryCode, setCountryCode] = useState<CountryCode>('FR')
//   const [country, setCountry] = useState<Country>(null)
//   const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
//     false,
//   )
//   const [withFlag, setWithFlag] = useState<boolean>(true)
//   const [withEmoji, setWithEmoji] = useState<boolean>(true)
//   const [withFilter, setWithFilter] = useState<boolean>(true)
//   const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
//   const [withCallingCode, setWithCallingCode] = useState<boolean>(false)
//   const onSelect = (country: Country) => {
//     setCountryCode(country.cca2)
//     setCountry(country)
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome to Country Picker !</Text>
//       <Option
//         title='With country name on button'
//         value={withCountryNameButton}
//         onValueChange={setWithCountryNameButton}
//       />
//       <Option title='With flag' value={withFlag} onValueChange={setWithFlag} />
//       <Option
//         title='With emoji'
//         value={withEmoji}
//         onValueChange={setWithEmoji}
//       />
//       <Option
//         title='With filter'
//         value={withFilter}
//         onValueChange={setWithFilter}
//       />
//       <Option
//         title='With calling code'
//         value={withCallingCode}
//         onValueChange={setWithCallingCode}
//       />
//       <Option
//         title='With alpha filter code'
//         value={withAlphaFilter}
//         onValueChange={setWithAlphaFilter}
//       />
//       <CountryPicker
//         {...{
//           countryCode,
//           withFilter,
//           withFlag,
//           withCountryNameButton,
//           withAlphaFilter,
//           withCallingCode,
//           withEmoji,
//           onSelect,
//         }}
//         visible
//       />
//       <Text style={styles.instructions}>Press on the flag to open modal</Text>
//       {country !== null && (
//         <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
//       )}
//     </View>
//   )
// }
import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/RootStackNavigator';

type Props = {};
type rootStackNavigationType=NativeStackNavigationProp<RootStackParamList,"SignIn">;


function SignIn({}: Props) {
  const navigation = useNavigation<rootStackNavigationType>();
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.5, 0.5]}
        colors={['#f3ca20', '#000000']}
        style={styles.linearGradient}>
        <StatusBar backgroundColor="#f3ca20" />

        <Image
          style={styles.tinyLogo}
          source={require('../../public/images/Logo.jpg')}
        />
        <View style={styles.container}>
          {/* Form inputs View */}
          <Text style={styles.text}>Email</Text>
          <View style={styles.formInputs}>
            <Icon
              style={{marginLeft: 5}}
              name="mail"
              size={24}
              color="#000000"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              autoCapitalize="none"
              placeholderTextColor="#666666"
            />
          </View>
          <Text style={styles.text}>Password</Text>
          <View style={styles.formInputs}>
            <Icon
              style={{marginLeft: 5}}
              name="lock-closed"
              size={24}
              color="#000000"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              autoCapitalize="none"
              placeholderTextColor="#666666"
            />
            <TouchableOpacity>
              {/* or eye-off */}
              <Icon
                style={{marginRight: 5}}
                name="eye"
                size={24}
                color="#6b7b8c"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginTop: '3%',
              marginLeft: '5%',
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
              }}>
              Cannot access your account?
            </Text>
          </TouchableOpacity>
          <View style={styles.actions}>
            {/* to pass a param u do like this navigation.navigate('SignUp',{}) */}
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={{
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.5, 0.5]}
                colors={['#f3ca20', '#000000']}
                style={{
                  borderWidth: 0.8,
                  borderRadius: 15,
                  paddingVertical: 8,
                  width: 150,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={{fontSize: 14, color: '#000000'}}>
                 OR
            </Text>
            <TouchableOpacity
              style={{
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.5, 0.5]}
                colors={['#000000', '#f3ca20']}
                style={{
                  borderWidth: 0.8,
                  borderRadius: 15,
                  paddingVertical: 8,
                  width: 150,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Sign up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  tinyLogo: {
    marginTop: '2%',
    width: 230,
    height: 180,
    alignSelf: 'center',
  },
  container: {
    //to get always half the height of the screen no mater is the size of the screen
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#fff',
    //margin left and right
    marginHorizontal: '5%',
    borderRadius: 15,
    opacity: 0.7,
    justifyContent: 'center',
    marginTop: '5%',
  },
  text: {
    marginTop: '5%',
    marginLeft: '5%',
    color: '#3b4d61',
    fontSize: 14,
  },
  formInputs: {
    flexDirection: 'row',
    marginTop: 5,
    borderWidth: 0.8,
    borderColor: '#05375a',
    alignItems: 'center',
    borderRadius: 13,
    width: '90%',
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    color: '#000000',
  },
  actions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;

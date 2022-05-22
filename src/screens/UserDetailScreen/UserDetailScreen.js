import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ScreenBar from '../../components/ScreenBar/ScreenBar';
import * as GlobalStyles from '../../globalStyles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useWindowDimensions} from 'react-native';
import {TabView,TabBar, TabBarItem, SceneMap} from 'react-native-tab-view';
import AboutMe from '../../components/UserDetails/AboutMe/AboutMe';
import BlockMembers from '../../components/UserDetails/BlockMembers/BlockMember';
import Visitors from '../../components/UserDetails/Visitors/Visitors';

const FirstRoute = () => <AboutMe />;

const SecondRoute = () => <Visitors/>;

const ThirdRoute = () => <BlockMembers />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});
const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: GlobalStyles.Colors.baseColor1 }}
      style={{ backgroundColor: GlobalStyles.Colors.generalWhite, color: GlobalStyles.Colors.baseColor1 }}
      labelStyle={{ color: GlobalStyles.Colors.baseColor1, fontWeight:'bold', fontSize: GlobalStyles.normalize(10) }}
      contentContainerStyle={{  height: GlobalStyles.normalize(50), paddingHorizontal:10 }}
      
    />
  );

const Height = Dimensions.get('window').height;
const UserDetailScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'About me'},
    {key: 'second', title: 'Visitors'},
    {key: 'third', title: 'Block Members'},
  ]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={styles.userDetailContainer}>
        <ImageBackground
          source={require('../../assets/images/girl.jpeg')}
          style={styles.userProfilePhoto}
           resizeMode='cover'
          >
          <SafeAreaView style={styles.pageSafeArea}>
            <ScreenBar />
            <View
              style={styles.nameSection}>
              <Text
                style={styles.userName}>
                Melody Iyanu
              </Text>
              <View
                style={styles.userContactSection}>
                <View
                  style={styles.contactContainer}>
                  <Icon
                    name={'bookmark-o'}
                    size={GlobalStyles.normalize(20)}
                    color={GlobalStyles.Colors.generalWhite}
                    style={styles.userContactIcon}
                  />
                  <Text
                    style={styles.userProfession}>
                    Product Designer
                  </Text>
                </View>
                <Text
                  style={styles.demacator}>
                  |
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Icon
                    name={'phone'}
                    size={GlobalStyles.normalize(20)}
                    color={GlobalStyles.Colors.generalWhite}
                    style={styles.userContactIcon}
                  />
                  <Text style={{color: GlobalStyles.Colors.generalWhite}}>
                    08104989226
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.tabView}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          tabBarPosition={'top'}
          swipeEnabled={true}
        />
      </View>
    </View>
  );
};

export default UserDetailScreen;

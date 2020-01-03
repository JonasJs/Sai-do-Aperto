import React from 'react';
import styled from 'styled-components/native';

const TabBarArea = styled.SafeAreaView`
  height: 65px;
  flex-direction: row;
  background: #5d39db;
  align-items: center;
`;
const TabBarItem = styled.TouchableHighlight`
  flex: 1;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
`;

const CustomTabBar = ({
  items,
  activeTintColor,
  inactiveTintColor,
  navigation,
}) => {
  return (
    <TabBarArea>
      {items.map(item => (
        <TabBarItem
          key={item.route}
          onPress={() => navigation.navigate(item.route)}
          style={{
            backgroundColor: activeTintColor
              ? inactiveTintColor
              : activeTintColor,
          }}>
          <Text>{item.title} </Text>
        </TabBarItem>
      ))}
    </TabBarArea>
  );
};

export default CustomTabBar;

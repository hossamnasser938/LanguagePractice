import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native';

let navigator;

export const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  const navigateAction = CommonActions.navigate({
    name: routeName,
    params,
  });

  navigator.dispatch(navigateAction);
};

export const reset = (routeName, params) => {
  const navigateAction = StackActions.replace(routeName, params);

  navigator.dispatch(navigateAction);
};

export const push = (routeName, params) => {
  const pushAction = StackActions.push(routeName, params);

  navigator.dispatch(pushAction);
};

export const goBack = () => {
  const goBackAction = CommonActions.goBack();

  navigator.dispatch(goBackAction);
};

// export other navigation functions that you need

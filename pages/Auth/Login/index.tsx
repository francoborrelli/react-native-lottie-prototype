import React, { FC } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, CheckBox, Layout, LayoutElement } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';

import { AppRoute } from '../../../navigation/app-routes';
import { FormInput } from '../../../components/formInput';
import { SignInScreenProps } from '../../../navigation/auth.navigator';

import { SignInData, SignInSchema } from '../models/login.model';

export const SignInScreen = (props: SignInScreenProps): LayoutElement => {
  const [shouldRemember, setShouldRemember] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const onFormSubmit = (values: SignInData): void => {
    navigateHome();
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignUp = (): void => {
    props.navigation.navigate(AppRoute.SIGN_UP);
  };

  const navigateResetPassword = (): void => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const RenderForm: FC = (props: FormikProps<SignInData>) => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <FormInput
        id='password'
        style={styles.formControl}
        placeholder='Contraseña'
        // onIconPress={onPasswordIconPress}
        secureTextEntry={!passwordVisible}
      />
      <View style={styles.resetPasswordContainer}>
        <View></View>
        <Button appearance='ghost' status='basic' onPress={navigateResetPassword}>
          Olvidé mi contraseña
        </Button>
      </View>
      <Button style={styles.submitButton} onPress={props.handleSubmit}>
        Ingresar
      </Button>
    </React.Fragment>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <ImageBackground
        style={styles.appBar}
        source={require('../../../assets/image-background.jpeg')}
      />
      <Layout style={[styles.formContainer, { justifyContent: 'space-between' }]}>
        <Layout>
          <View>
            <Formik
              initialValues={SignInData.empty()}
              validationSchema={SignInSchema}
              onSubmit={onFormSubmit}
            >
              {RenderForm}
            </Formik>
          </View>
        </Layout>
        <Button
          style={styles.noAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignUp}
        >
          No tengo una cuenta
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  resetPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    width: '100%',
    alignSelf: 'center',
  },
});

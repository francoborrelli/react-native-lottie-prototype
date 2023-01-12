import React, { FC } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Formik, FormikProps } from 'formik';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';

import { AppRoute } from '../../../navigation/app-routes';
import { FormInput } from '../../../components/formInput';
import { SignUpData, SignUpSchema } from '../models/signup.model';
import { SignUpScreenProps } from '../../../navigation/auth.navigator';

export const SignUpScreen = (props: SignUpScreenProps): LayoutElement => {
  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: SignUpData): void => {
    navigateHome();
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const RenderForm: FC = (props: FormikProps<SignUpData>) => (
    <>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <FormInput id='password' style={styles.formControl} placeholder='Password' />
      <FormInput id='username' style={styles.formControl} placeholder='Username' />
      <Button style={styles.submitButton} onPress={props.handleSubmit}>
        CONFIRMAR
      </Button>
    </>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../../assets/image-background.jpeg')}
      ></ImageBackground>
      <Layout style={styles.formContainer}>
        <View>
          <Formik
            initialValues={SignUpData.empty()}
            validationSchema={SignUpSchema}
            onSubmit={onFormSubmit}
          >
            {RenderForm}
          </Formik>
        </View>
        <Button
          status='basic'
          appearance='ghost'
          onPress={navigateSignIn}
          style={styles.haveAccountButton}
        >
          ¿Ya tenés cuenta?
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingTop: 25,
    marginTop: -20,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: 'space-between',
  },
  formControl: {
    borderRadius: 15,
    marginVertical: 10,
  },
  submitButton: {
    borderRadius: 15,
    marginVertical: 24,
  },
  haveAccountButton: {
    width: '100%',
    borderRadius: 15,
    alignSelf: 'center',
  },
});

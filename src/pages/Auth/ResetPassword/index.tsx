import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';

import { Formik, FormikProps } from 'formik';
import { AppRoute } from '../../../navigation/app-routes';
import { FormInput } from '../../../components/formInput';
import { ResetPasswordScreenProps } from '../../../navigation/auth.navigator';

import { ResetPasswordData, ResetPasswordSchema } from '../models/resetPassword.model';
import AnimatedLottieView from 'lottie-react-native';

export const ResetPasswordScreen = (props: ResetPasswordScreenProps): LayoutElement => {
  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const RenderForm: FC<FormikProps<ResetPasswordData>> = (props) => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Button style={styles.button} onPress={props.handleSubmit}>
        Confirmar
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {/* <AnimatedLottieView
        style={{
          width: '100%',
          // height: 400,
        }}
        autoPlay
        resizeMode='cover'
        source={require('../../../assets/animations/flowerpot.jsonr')}
      ></AnimatedLottieView> */}
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../../../assets/image-background.jpeg')}
      ></ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}
        >
          {RenderForm}
        </Formik>
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
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    borderRadius: 15,
    marginVertical: 24,
  },
});
